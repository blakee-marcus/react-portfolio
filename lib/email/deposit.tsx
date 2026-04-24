import type { CreateEmailOptions } from 'resend';
import DepositConfirmationEmail from '@/emails/deposit-confirmation';
import NewPaidDepositEmail from '@/emails/new-paid-deposit';
import {
  formatDepositAmount,
  getIntakeFormUrl,
  getKickoffBookingUrl,
  getStudioSupportEmail,
} from '@/lib/deposit';
import { getStudioEmailFrom, getStudioEmailReplyTo } from '@/lib/email/config';
import { getResendClient } from '@/lib/email/resend';
import type { StoredDeposit } from '@/lib/deposit/repository';

type SendResult = {
  label: string;
  idempotencyKey: string;
  message: CreateEmailOptions;
};

function getEmailFailureMessage(error: unknown) {
  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }

  return String(error);
}

async function sendEmailBatch(messages: SendResult[]) {
  const resend = getResendClient();

  if (!resend) {
    console.info('Skipping paid deposit emails because RESEND_API_KEY is not configured.');
    return false;
  }

  const results = await Promise.allSettled(
    messages.map(async ({ message, idempotencyKey }) => {
      const response = await resend.emails.send(message, {
        idempotencyKey,
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      return response.data;
    }),
  );

  const failures = results
    .map((result, index) => {
      if (result.status === 'fulfilled') {
        return null;
      }

      return `${messages[index].label}: ${getEmailFailureMessage(result.reason)}`;
    })
    .filter(Boolean);

  if (failures.length > 0) {
    throw new Error(failures.join('; '));
  }

  return true;
}

export async function sendPaidDepositEmails(deposit: StoredDeposit) {
  const intakeFormUrl = getIntakeFormUrl();
  const kickoffBookingUrl = getKickoffBookingUrl();
  const studioRecipient = getStudioSupportEmail();
  const from = getStudioEmailFrom();
  const replyTo = getStudioEmailReplyTo();

  if (!intakeFormUrl || !kickoffBookingUrl || !studioRecipient) {
    console.info('Skipping paid deposit emails because handoff email settings are incomplete.');
    return false;
  }

  const amountLabel = formatDepositAmount(deposit.amountCents);

  return sendEmailBatch([
    {
      label: 'client confirmation',
      idempotencyKey: `deposit-client-${deposit.publicId}`,
      message: {
        from,
        to: deposit.email,
        replyTo,
        subject: 'Your Blake Marcus Studio deposit is confirmed',
        react: (
          <DepositConfirmationEmail
            fullName={deposit.fullName}
            packageName={deposit.packageName}
            amountLabel={amountLabel}
            intakeFormUrl={intakeFormUrl}
            kickoffBookingUrl={kickoffBookingUrl}
            supportEmail={replyTo}
          />
        ),
        tags: [
          { name: 'type', value: 'deposit_confirmation' },
          { name: 'deposit', value: deposit.publicId },
        ],
      },
    },
    {
      label: 'studio notification',
      idempotencyKey: `deposit-studio-${deposit.publicId}`,
      message: {
        from,
        to: studioRecipient,
        replyTo: deposit.email,
        subject: `New paid deposit: ${deposit.packageName}`,
        react: (
          <NewPaidDepositEmail
            fullName={deposit.fullName}
            clientEmail={deposit.email}
            businessName={deposit.businessName}
            packageName={deposit.packageName}
            amountLabel={amountLabel}
            publicId={deposit.publicId}
            checkoutSessionId={deposit.stripeCheckoutSessionId}
          />
        ),
        tags: [
          { name: 'type', value: 'studio_deposit_notice' },
          { name: 'deposit', value: deposit.publicId },
        ],
      },
    },
  ]);
}
