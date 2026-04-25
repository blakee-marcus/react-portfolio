import type Stripe from 'stripe';
import { getPackageBySlug } from '@/lib/site-content';
import {
  depositAmountInCents,
  depositAutomaticTaxEnabled,
  depositCurrency,
  getDepositPriceId,
  isDepositCheckoutConfigured,
} from '@/lib/deposit';
import {
  createDepositAccessToken,
  createDepositPublicId,
  createDepositRecordId,
  hashDepositAccessToken,
  pickDuplicateDepositAction,
  reconcileDepositStatusTransition,
  type StripeDepositEventType,
  type ValidatedDepositCheckoutInput,
} from '@/lib/deposit/domain';
import {
  createDepositRecord,
  getDepositByCheckoutSessionId,
  getDepositByPublicId,
  isDatabaseConfigured,
  listDepositsByEmailAndPackage,
  updateDepositRecord,
  type StoredDeposit,
} from '@/lib/deposit/repository';
import { sendPaidDepositEmails } from '@/lib/email/deposit';
import { getStripeClient } from '@/lib/stripe';

export type CreateDepositCheckoutResult =
  | { kind: 'checkout'; url: string }
  | { kind: 'access'; url: string }
  | { kind: 'unavailable' }
  | { kind: 'error' };

type ReusableCheckoutTarget =
  | { kind: 'checkout'; url: string }
  | { kind: 'access'; url: string };

export type FinalizeDepositResult =
  | { kind: 'paid'; deposit: StoredDeposit }
  | { kind: 'processing'; deposit: StoredDeposit }
  | { kind: 'failed'; deposit: StoredDeposit }
  | { kind: 'expired'; deposit: StoredDeposit }
  | { kind: 'pending'; deposit: StoredDeposit }
  | { kind: 'unverified' };

type PaidDepositEmailSender = (deposit: StoredDeposit) => Promise<boolean | void>;

const stripeCheckoutSessionIdPlaceholder = '{CHECKOUT_SESSION_ID}';
const encodedStripeCheckoutSessionIdPlaceholder = encodeURIComponent(
  stripeCheckoutSessionIdPlaceholder,
);

function buildAccessUrl(
  origin: string,
  publicId: string,
  token: string,
  sessionId?: string,
) {
  const url = new URL(`/start/access/${publicId}`, origin);
  url.searchParams.set('token', token);

  if (sessionId) {
    url.searchParams.set('session_id', sessionId);
  }

  return url.toString();
}

export function buildCheckoutSuccessUrl(origin: string, publicId: string, token: string) {
  const url = buildAccessUrl(origin, publicId, token, stripeCheckoutSessionIdPlaceholder);

  return url.replace(
    `session_id=${encodedStripeCheckoutSessionIdPlaceholder}`,
    `session_id=${stripeCheckoutSessionIdPlaceholder}`,
  );
}

function getSessionPaymentIntentId(paymentIntent: Stripe.Checkout.Session['payment_intent']) {
  if (!paymentIntent) {
    return null;
  }

  return typeof paymentIntent === 'string' ? paymentIntent : paymentIntent.id;
}

function getSessionCustomerId(customer: Stripe.Checkout.Session['customer']) {
  if (!customer) {
    return null;
  }

  return typeof customer === 'string' ? customer : customer.id;
}

export async function notifyPaidDepositEmailTransition(
  previousDeposit: StoredDeposit,
  updatedDeposit: StoredDeposit,
  sendEmails: PaidDepositEmailSender = sendPaidDepositEmails,
) {
  if (previousDeposit.status === 'paid' || updatedDeposit.status !== 'paid') {
    return false;
  }

  try {
    const sent = await sendEmails(updatedDeposit);
    return sent !== false;
  } catch (error) {
    console.error('Failed to send paid deposit emails.', error);
    return false;
  }
}

async function findReusableHostedCheckoutUrl(
  stripe: Stripe,
  deposit: StoredDeposit,
  accessToken: string,
  origin: string,
): Promise<ReusableCheckoutTarget | null> {
  if (!deposit.stripeCheckoutSessionId) {
    return null;
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(deposit.stripeCheckoutSessionId);

    if ((session.metadata?.publicId ?? session.client_reference_id) !== deposit.publicId) {
      return null;
    }

    if (session.payment_status === 'paid') {
      return {
        kind: 'access',
        url: buildAccessUrl(origin, deposit.publicId, accessToken, session.id),
      };
    }

    if (session.status === 'open' && session.url) {
      return {
        kind: 'checkout',
        url: session.url,
      };
    }
  } catch (error) {
    console.error('Failed to inspect an existing deposit checkout session.', error);
  }

  return null;
}

export async function createDepositCheckout(
  input: ValidatedDepositCheckoutInput,
  origin: string,
): Promise<CreateDepositCheckoutResult> {
  const stripe = getStripeClient();
  const selectedPackage = getPackageBySlug(input.packageSlug);
  const priceId = getDepositPriceId(input.packageSlug);

  if (
    !stripe ||
    !selectedPackage ||
    !priceId ||
    !isDatabaseConfigured() ||
    !isDepositCheckoutConfigured(input.packageSlug)
  ) {
    return { kind: 'unavailable' };
  }

  const existingDeposits = await listDepositsByEmailAndPackage(
    input.emailNormalized,
    input.packageSlug,
  );
  const duplicateAction = pickDuplicateDepositAction(
    existingDeposits.map((deposit) => ({
      id: deposit.id,
      publicId: deposit.publicId,
      status: deposit.status,
      stripeCheckoutSessionId: deposit.stripeCheckoutSessionId,
    })),
  );
  const accessToken = createDepositAccessToken();
  const accessTokenHash = hashDepositAccessToken(accessToken);
  const policyAcknowledgedAt = new Date();

  let workingDeposit: StoredDeposit;

  if (duplicateAction.kind === 'resume_paid') {
    const resumedDeposit = await updateDepositRecord(duplicateAction.deposit.id, {
      accessTokenHash,
      fullName: input.fullName,
      businessName: input.businessName,
      policyAcknowledgedAt,
    });

    if (!resumedDeposit) {
      return { kind: 'error' };
    }

    return {
      kind: 'access',
      url: buildAccessUrl(origin, resumedDeposit.publicId, accessToken),
    };
  }

  if (duplicateAction.kind === 'reuse_pending') {
    const updatedDeposit = await updateDepositRecord(duplicateAction.deposit.id, {
      status: 'pending',
      fullName: input.fullName,
      email: input.email,
      emailNormalized: input.emailNormalized,
      businessName: input.businessName,
      priceId,
      accessTokenHash,
      policyAcknowledgedAt,
      failedAt: null,
      expiredAt: null,
    });

    if (!updatedDeposit) {
      return { kind: 'error' };
    }

    workingDeposit = updatedDeposit;
  } else {
    workingDeposit = await createDepositRecord({
      id: createDepositRecordId(),
      publicId: createDepositPublicId(),
      status: 'pending',
      packageSlug: selectedPackage.slug,
      packageName: selectedPackage.name,
      priceId,
      fullName: input.fullName,
      email: input.email,
      emailNormalized: input.emailNormalized,
      businessName: input.businessName,
      amountCents: depositAmountInCents,
      currency: depositCurrency,
      accessTokenHash,
      policyAcknowledgedAt,
    });
  }

  const reusableCheckoutUrl = await findReusableHostedCheckoutUrl(
    stripe,
    workingDeposit,
    accessToken,
    origin,
  );

  if (reusableCheckoutUrl) {
    return reusableCheckoutUrl;
  }

  const successUrl = buildCheckoutSuccessUrl(origin, workingDeposit.publicId, accessToken);
  const cancelUrl = new URL('/deposit', origin);
  cancelUrl.searchParams.set('package', selectedPackage.slug);
  cancelUrl.searchParams.set('checkout', 'cancelled');

  try {
    const metadata = {
      checkoutType: 'project-deposit',
      publicId: workingDeposit.publicId,
      packageSlug: selectedPackage.slug,
      packageName: selectedPackage.name,
    };
    const session = await stripe.checkout.sessions.create(
      {
        mode: 'payment',
        locale: 'auto',
        customer_email: input.email,
        customer_creation: 'always',
        payment_method_types: ['card'],
        automatic_tax: {
          enabled: depositAutomaticTaxEnabled,
        },
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        success_url: successUrl,
        cancel_url: cancelUrl.toString(),
        client_reference_id: workingDeposit.publicId,
        metadata,
        payment_intent_data: {
          description: `${selectedPackage.name} website project deposit`,
          metadata,
        },
      },
      {
        idempotencyKey: workingDeposit.publicId,
      },
    );

    if (!session.url) {
      return { kind: 'error' };
    }

    await updateDepositRecord(workingDeposit.id, {
      stripeCheckoutSessionId: session.id,
      lastCheckoutUrl: session.url,
    });

    return {
      kind: 'checkout',
      url: session.url,
    };
  } catch (error) {
    console.error('Failed to create the deposit checkout session.', error);
    return { kind: 'error' };
  }
}

export async function finalizeDepositFromCheckoutSession(
  sessionId: string,
  options?: {
    eventType?: StripeDepositEventType;
  },
): Promise<FinalizeDepositResult> {
  const stripe = getStripeClient();

  if (!stripe || !isDatabaseConfigured()) {
    return { kind: 'unverified' };
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['payment_intent'],
    });
    const publicId = session.metadata?.publicId ?? session.client_reference_id;
    const existingDeposit =
      (publicId ? await getDepositByPublicId(publicId) : null) ??
      (await getDepositByCheckoutSessionId(session.id));

    if (!existingDeposit) {
      return { kind: 'unverified' };
    }

    if (existingDeposit.status === 'paid') {
      return {
        kind: 'paid',
        deposit: existingDeposit,
      };
    }

    const nextStatus = reconcileDepositStatusTransition(
      existingDeposit.status,
      session,
      options?.eventType,
    );
    const paymentIntentId = getSessionPaymentIntentId(session.payment_intent);
    const customerId = getSessionCustomerId(session.customer);
    const updatedDeposit = await updateDepositRecord(existingDeposit.id, {
      status: nextStatus,
      stripeCheckoutSessionId: session.id,
      stripePaymentIntentId: paymentIntentId,
      stripeCustomerId: customerId,
      lastCheckoutUrl: session.url ?? existingDeposit.lastCheckoutUrl,
      paidAt: nextStatus === 'paid' ? existingDeposit.paidAt ?? new Date() : null,
      failedAt: nextStatus === 'failed' ? new Date() : null,
      expiredAt: nextStatus === 'expired' ? new Date() : null,
    });

    if (!updatedDeposit) {
      return { kind: 'unverified' };
    }

    await notifyPaidDepositEmailTransition(existingDeposit, updatedDeposit);

    return {
      kind: nextStatus,
      deposit: updatedDeposit,
    };
  } catch (error) {
    console.error('Failed to finalize the deposit checkout session.', error);
    return { kind: 'unverified' };
  }
}
