import type { Metadata } from 'next';
import { SiteIconBadge, SiteListMark } from '@/components/site/icon-suite';
import {
  depositAmountLabel,
  formatDepositAmount,
  getIntakeFormUrl,
  getKickoffBookingUrl,
  getStudioSupportMailtoHref,
} from '@/lib/deposit';
import { requirePaidDepositAccess } from '@/lib/deposit/server';
import { PrimaryLink, SecondaryLink, SectionIntro } from '@/components/site/marketing';
import { buildNoIndexMetadata } from '@/lib/seo';
import { getPackageBySlug, packageOffers } from '@/lib/site-content';

export const metadata: Metadata = buildNoIndexMetadata({
  title: 'Confirmation',
  description: 'Confirmation of the project deposit and the next onboarding steps.',
  path: '/start/confirmation',
});
export const dynamic = 'force-dynamic';

const confirmationIcons = ['intake', 'kickoff', 'onboarding'] as const;

export default async function ConfirmationPage() {
  const deposit = await requirePaidDepositAccess();
  const selectedPackage = getPackageBySlug(deposit.packageSlug) ?? packageOffers[1];
  const receiptAmount = formatDepositAmount(deposit.amountCents);
  const receiptEmail = deposit.email;
  const intakeFormUrl = getIntakeFormUrl();
  const kickoffBookingUrl = getKickoffBookingUrl();
  const supportHref = getStudioSupportMailtoHref('Paid deposit support') ?? '/support';

  return (
    <section className='px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-5xl space-y-8'>
        <div className='rounded-[1.6rem] border border-[var(--line-strong)] bg-[var(--accent-soft)] px-5 py-4 text-sm leading-6 text-[var(--ink-muted)]'>
          <p className='font-semibold text-[var(--ink)]'>Payment confirmed for {receiptAmount}.</p>
          <p className='mt-1'>
            {receiptEmail
              ? `Stripe sent a receipt to ${receiptEmail}.`
              : `Your ${depositAmountLabel} deposit is recorded and the project can move into intake.`}
          </p>
        </div>

        <SectionIntro
          as='h1'
          eyebrow='Confirmation'
          title='Your deposit is in. Your project is officially underway.'
          copy={`Stripe confirmed your ${receiptAmount} deposit for the ${selectedPackage.name} package. Use the intake form and kickoff scheduler below so the project starts with the right goals, pages, and priorities.`}
        />

        <div className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)]'>
          <div className='rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-6 shadow-[var(--shadow-md)]'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>
              What happens next
            </p>
            <ul className='mt-5 space-y-4'>
              {[
                'Open the external intake form so your goals, pages, and references are all in one place.',
                'Use the kickoff scheduler to choose the call time that works best.',
                'Receive a clear onboarding summary before production begins.',
              ].map((item, index) => (
                <li key={item} className='flex gap-3 text-sm leading-6 text-[var(--ink-muted)]'>
                  <SiteListMark icon={confirmationIcons[index]} tone='accent' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6'>
            <SiteIconBadge icon='intake' tone='primary' />
            <p className='mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>
              Next step
            </p>
            <h2 className='mt-4 text-3xl leading-tight text-[var(--ink)]'>Complete intake</h2>
            <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>
              Start with the intake form. After that, use the kickoff scheduler so the working plan
              can be confirmed without extra back-and-forth.
            </p>

            <div className='mt-6 flex flex-wrap gap-3'>
              <PrimaryLink href={intakeFormUrl ?? supportHref}>Open Intake Form</PrimaryLink>
              <SecondaryLink href={kickoffBookingUrl ?? '/start/kickoff'}>
                Book Kickoff
              </SecondaryLink>
            </div>

            <p className='mt-4 text-xs leading-6 text-[var(--muted)]'>
              If either link does not open, use the support page and include the receipt email from
              your Stripe payment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
