import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import type Stripe from 'stripe';
import { getPackageBySlug, type PackageKey } from '@/lib/site-content';

export type DepositStatus = 'pending' | 'processing' | 'paid' | 'failed' | 'expired';

export type DepositCheckoutFieldErrors = Partial<
  Record<'package' | 'fullName' | 'email' | 'businessName' | 'acknowledgePolicy', string>
>;

export type DepositCheckoutFields = {
  packageSlug: string | null | undefined;
  fullName: string | null | undefined;
  email: string | null | undefined;
  businessName: string | null | undefined;
  acknowledgePolicy: string | null | undefined;
};

export type ValidatedDepositCheckoutInput = {
  packageSlug: PackageKey;
  fullName: string;
  email: string;
  emailNormalized: string;
  businessName: string;
  acknowledgePolicy: true;
};

export type DuplicateDepositCandidate = {
  id: string;
  publicId: string;
  status: DepositStatus;
  stripeCheckoutSessionId?: string | null;
};

export type DepositReuseAction =
  | { kind: 'resume_paid'; deposit: DuplicateDepositCandidate }
  | { kind: 'reuse_pending'; deposit: DuplicateDepositCandidate }
  | { kind: 'create_new' };

export type StripeDepositEventType =
  | 'checkout.session.completed'
  | 'checkout.session.async_payment_succeeded'
  | 'checkout.session.async_payment_failed'
  | 'checkout.session.expired';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmailAddress(value: string) {
  return value.trim().toLowerCase();
}

export function validateDepositCheckoutFields(
  fields: DepositCheckoutFields,
):
  | { success: true; data: ValidatedDepositCheckoutInput }
  | { success: false; errors: DepositCheckoutFieldErrors } {
  const errors: DepositCheckoutFieldErrors = {};
  const packageSlug = typeof fields.packageSlug === 'string' ? fields.packageSlug.trim() : '';
  const fullName = typeof fields.fullName === 'string' ? fields.fullName.trim() : '';
  const email = typeof fields.email === 'string' ? fields.email.trim() : '';
  const businessName =
    typeof fields.businessName === 'string' ? fields.businessName.trim() : '';
  const acknowledgePolicy =
    fields.acknowledgePolicy === 'on' ||
    fields.acknowledgePolicy === 'true' ||
    fields.acknowledgePolicy === 'yes';

  if (!getPackageBySlug(packageSlug)) {
    errors.package = 'Choose a valid package before continuing.';
  }

  if (!fullName) {
    errors.fullName = 'Enter your name.';
  }

  if (!email) {
    errors.email = 'Enter your email address.';
  } else if (!emailPattern.test(email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!businessName) {
    errors.businessName = 'Enter your business name.';
  }

  if (!acknowledgePolicy) {
    errors.acknowledgePolicy = 'You need to acknowledge the deposit policy.';
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      packageSlug: packageSlug as PackageKey,
      fullName,
      email,
      emailNormalized: normalizeEmailAddress(email),
      businessName,
      acknowledgePolicy: true,
    },
  };
}

export function buildCheckoutInputFromFormData(formData: FormData) {
  return validateDepositCheckoutFields({
    packageSlug: formData.get('package')?.toString(),
    fullName: formData.get('fullName')?.toString(),
    email: formData.get('email')?.toString(),
    businessName: formData.get('businessName')?.toString(),
    acknowledgePolicy: formData.get('acknowledgePolicy')?.toString(),
  });
}

export function createDepositRecordId() {
  return crypto.randomUUID();
}

export function createDepositPublicId() {
  return `dep_${randomBytes(9).toString('hex')}`;
}

export function createDepositAccessToken() {
  return randomBytes(24).toString('hex');
}

export function hashDepositAccessToken(token: string) {
  return createHash('sha256').update(token).digest('hex');
}

export function verifyDepositAccessToken(token: string, expectedHash: string) {
  const providedHash = hashDepositAccessToken(token);
  return timingSafeEqual(Buffer.from(providedHash, 'hex'), Buffer.from(expectedHash, 'hex'));
}

export function buildDepositAccessCookieValue(publicId: string, token: string) {
  return `${publicId}.${token}`;
}

export function parseDepositAccessCookieValue(value?: string | null) {
  if (!value) {
    return null;
  }

  const separatorIndex = value.indexOf('.');

  if (separatorIndex <= 0 || separatorIndex === value.length - 1) {
    return null;
  }

  return {
    publicId: value.slice(0, separatorIndex),
    token: value.slice(separatorIndex + 1),
  };
}

export function pickDuplicateDepositAction(candidates: DuplicateDepositCandidate[]): DepositReuseAction {
  const latestPaid = candidates.find((candidate) => candidate.status === 'paid');

  if (latestPaid) {
    return { kind: 'resume_paid', deposit: latestPaid };
  }

  const latestPending = candidates.find(
    (candidate) => candidate.status === 'pending' || candidate.status === 'processing',
  );

  if (latestPending) {
    return { kind: 'reuse_pending', deposit: latestPending };
  }

  return { kind: 'create_new' };
}

export function resolveDepositStatusFromCheckoutSession(
  session: Pick<Stripe.Checkout.Session, 'payment_status' | 'status'>,
  eventType?: StripeDepositEventType,
): DepositStatus {
  if (eventType === 'checkout.session.async_payment_failed') {
    return 'failed';
  }

  if (eventType === 'checkout.session.expired' || session.status === 'expired') {
    return 'expired';
  }

  if (session.payment_status === 'paid') {
    return 'paid';
  }

  if (
    eventType === 'checkout.session.completed' ||
    eventType === 'checkout.session.async_payment_succeeded' ||
    session.status === 'complete'
  ) {
    return 'processing';
  }

  return 'pending';
}

export function reconcileDepositStatusTransition(
  currentStatus: DepositStatus,
  session: Pick<Stripe.Checkout.Session, 'payment_status' | 'status'>,
  eventType?: StripeDepositEventType,
) {
  if (currentStatus === 'paid') {
    return 'paid' as const;
  }

  return resolveDepositStatusFromCheckoutSession(session, eventType);
}
