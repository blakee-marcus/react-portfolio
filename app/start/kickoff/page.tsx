import type { Metadata } from 'next';
import { SiteIconBadge, SiteListMark } from '@/components/site/icon-suite';
import { getKickoffBookingUrl } from '@/lib/deposit';
import { requirePaidDepositAccess } from '@/lib/deposit/server';
import { PrimaryLink, SecondaryLink, SectionIntro } from '@/components/site/marketing';
import { getPackageBySlug, packageOffers } from '@/lib/site-content';
import { buildNoIndexMetadata } from '@/lib/seo';

export const metadata: Metadata = buildNoIndexMetadata({
  title: 'Kickoff',
  description: 'Kickoff planning for scope, priorities, timeline, and project readiness.',
  path: '/start/kickoff',
});
export const dynamic = 'force-dynamic';

type KickoffSearchParams = Promise<{
  intake?: string | string[];
}>;

const kickoffIcons = ['scope', 'momentum', 'pages', 'launch'] as const;

export default async function KickoffPage({ searchParams }: { searchParams: KickoffSearchParams }) {
  const deposit = await requirePaidDepositAccess();
  const selectedPackage = getPackageBySlug(deposit.packageSlug) ?? packageOffers[1];
  const kickoffBookingUrl = getKickoffBookingUrl();
  const params = await searchParams;
  const intakeParam = Array.isArray(params.intake) ? params.intake[0] : params.intake;
  const intakeSubmitted = intakeParam === 'submitted';

  return (
    <section className='px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-5xl space-y-8'>
        {intakeSubmitted ? (
          <div className='rounded-[1.6rem] border border-[var(--line-strong)] bg-[var(--accent-soft)] px-5 py-4 text-sm leading-6 text-[var(--ink-muted)]'>
            <p className='font-semibold text-[var(--ink)]'>Intake submitted.</p>
            <p className='mt-1'>Next, book kickoff so Blake can turn those answers into the working project plan.</p>
          </div>
        ) : null}

        <SectionIntro
          as='h1'
          eyebrow='Kickoff'
          title='Kickoff is where the project gets clear, aligned, and ready to build.'
          copy={`This is where your ${selectedPackage.name} package turns into a final working plan. We use kickoff to confirm scope, priorities, timeline, and the remaining balance before production begins.`}
        />

        <div className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)]'>
          <div className='rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-6 shadow-[var(--shadow-md)]'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>
              What we cover
            </p>
            <ul className='mt-5 space-y-4'>
              {[
                'Final scope and the most important page priorities',
                'Timeline, pacing, and review checkpoints',
                'Any remaining content, assets, or open questions',
                'The remaining project fee and launch expectations',
              ].map((item, index) => (
                <li key={item} className='flex gap-3 text-sm leading-6 text-[var(--ink-muted)]'>
                  <SiteListMark icon={kickoffIcons[index]} tone='accent' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6'>
            <SiteIconBadge icon='kickoff' tone='primary' />
            <p className='mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>
              Next step
            </p>
            <h2 className='mt-4 text-3xl leading-tight text-[var(--ink)]'>Book kickoff</h2>
            <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>
              Choose a time for the call so we can confirm the final details and move the project
              into production with confidence.
            </p>

            <div className='mt-6 flex flex-wrap gap-3'>
              <PrimaryLink href={kickoffBookingUrl ?? '/support'}>Book Kickoff</PrimaryLink>
              <SecondaryLink href='/start/onboarding'>Continue To Onboarding</SecondaryLink>
            </div>

            {!kickoffBookingUrl ? (
              <p className='mt-4 text-xs leading-6 text-[var(--muted)]'>
                The scheduler is not configured yet. Use support for now and Blake will coordinate the kickoff manually.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
