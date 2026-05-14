import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getStudioEmailFrom } from '@/lib/email/config';
import { getResendClient } from '@/lib/email/resend';
import { getStudioSupportEmail } from '@/lib/deposit';
import { getPaidDepositAccess } from '@/lib/deposit/server';
import {
  formatIntakeResponsesForEmail,
  upsertProjectIntake,
  validateIntakeFormData,
} from '@/lib/onboarding/intake';

export const runtime = 'nodejs';
export const maxDuration = 15;

async function notifyStudioOfIntake({
  deposit,
  responsesText,
}: {
  deposit: Awaited<ReturnType<typeof getPaidDepositAccess>>;
  responsesText: string;
}) {
  const resend = getResendClient();
  const studioRecipient = getStudioSupportEmail();

  if (!resend || !studioRecipient || !deposit) {
    return false;
  }

  const response = await resend.emails.send(
    {
      from: getStudioEmailFrom(),
      to: studioRecipient,
      replyTo: deposit.email,
      subject: `New intake submitted: ${deposit.businessName}`,
      text: [
        `New project intake submitted.`,
        ``,
        `Client: ${deposit.fullName}`,
        `Email: ${deposit.email}`,
        `Business: ${deposit.businessName}`,
        `Package: ${deposit.packageName}`,
        `Deposit: ${deposit.publicId}`,
        ``,
        `Responses`,
        `=========`,
        responsesText,
      ].join('\n'),
      tags: [
        { name: 'type', value: 'project_intake' },
        { name: 'deposit', value: deposit.publicId },
      ],
    },
    {
      idempotencyKey: `project-intake-${deposit.publicId}`,
    },
  );

  if (response.error) {
    throw new Error(response.error.message);
  }

  return true;
}

function redirectTo(request: NextRequest, path: string, status: string) {
  const url = new URL(path, request.url);
  url.searchParams.set('intake', status);
  return NextResponse.redirect(url, { status: 303 });
}

export async function POST(request: NextRequest) {
  const deposit = await getPaidDepositAccess();

  if (!deposit) {
    return NextResponse.redirect(new URL('/deposit?checkout=restricted', request.url), {
      status: 303,
    });
  }

  const formData = await request.formData();
  const result = validateIntakeFormData(formData);

  if (!result.success) {
    return redirectTo(request, '/start/intake', 'validation');
  }

  try {
    await upsertProjectIntake(deposit, result.responses);

    try {
      await notifyStudioOfIntake({
        deposit,
        responsesText: formatIntakeResponsesForEmail(result.responses),
      });
    } catch (error) {
      console.error('Failed to send project intake notification email.', error);
    }

    return redirectTo(request, '/start/kickoff', 'submitted');
  } catch (error) {
    console.error('Failed to save project intake.', error);
    return redirectTo(request, '/start/intake', 'error');
  }
}
