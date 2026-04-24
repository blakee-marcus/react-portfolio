import type { Metadata } from 'next';
import { processIconsByNumber, SiteIconBadge, SiteListMark } from '@/components/site/icon-suite';
import { PrimaryLink, SectionIntro } from '@/components/site/marketing';
import { PackageCard } from '@/components/site/package-card';
import { packageOffers, processSteps } from '@/lib/site-content';
import { buildNoIndexMetadata } from '@/lib/seo';

export const metadata: Metadata = buildNoIndexMetadata({
  title: 'Start Your Website Project',
  description:
    'Choose your website package, place the $150 project deposit, and move into a guided intake and kickoff process.',
  path: '/start',
});

const depositDetailIcons = ['deposit', 'trust', 'onboarding'] as const;

export default function StartPage() {
  return (
    <>
      <section className='px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,24rem)] lg:items-start'>
          <SectionIntro
            as='h1'
            eyebrow='Start'
            title='Choose your package and reserve your project with the $150 deposit.'
            copy='This page is here to help you make one clear decision. Pick the package that fits, place the deposit, and move straight into intake and kickoff.'
          />

          <div className='rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-6 shadow-[var(--shadow-md)]'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>
              Your project deposit
            </p>
            <ul className='mt-5 space-y-4'>
              {[
                'The $150 deposit reserves your place in the production schedule.',
                'It is credited toward your total project cost, not added as a separate fee.',
                'After payment, you will receive the intake steps, kickoff details, and next actions.',
              ].map((item, index) => (
                <li key={item} className='flex gap-3 text-sm leading-6 text-[var(--ink-muted)]'>
                  <SiteListMark icon={depositDetailIcons[index]} tone='accent' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className='mt-6 rounded-[1.4rem] border border-[var(--line)] bg-[var(--panel)] px-5 py-4 text-sm leading-6 text-[var(--ink-muted)]'>
              Not sure where to begin? Choose{' '}
              <span className='font-medium text-[var(--ink)]'>Growth</span>. It is the best fit for
              most service businesses that need a complete, polished website without
              overcomplicating the process.
            </div>
          </div>
        </div>
      </section>

      <section className='px-4 pb-24 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl items-stretch gap-8 md:gap-10 lg:grid-cols-3'>
          {packageOffers.map((offer) => (
            <PackageCard
              key={offer.slug}
              offer={offer}
              href={`/deposit?package=${offer.slug}`}
              ctaLabel={offer.depositLabel}
            />
          ))}
        </div>
      </section>

      <section className='border-y border-[var(--line)] bg-[color:var(--panel)/0.55] px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start'>
          <SectionIntro
            eyebrow='After your deposit'
            title='The process stays guided from here.'
            copy='Once your deposit is placed, you will not be left guessing. You will receive a clear intake, a structured kickoff, and a simple path from first decision to finished website.'
          />

          <div className='grid gap-6 sm:grid-cols-2'>
            {processSteps.slice(1).map((step) => (
              <article
                key={step.number}
                className='flex min-h-[17rem] flex-col rounded-[1.8rem] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[var(--shadow-sm)] sm:p-7'>
                <div className='flex items-start justify-between gap-5'>
                  <SiteIconBadge
                    icon={processIconsByNumber[step.number]}
                    tone='primary'
                    size='sm'
                  />
                  <p className='text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]'>
                    Step {step.number}
                  </p>
                </div>

                <div className='mt-6 space-y-4'>
                  <h2 className='text-2xl leading-tight text-[var(--ink)]'>{step.title}</h2>
                  <p className='text-sm leading-7 text-[var(--ink-muted)]'>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-8 shadow-[var(--shadow-md)] sm:p-10'>
          <SectionIntro
            as='h1'
            eyebrow='Start your project'
            title='Choose your website package and reserve your place in the build schedule.'
            copy='This is the first step toward a clearer, stronger website for your business. Select the package that fits where you are now, place the $150 project deposit, and move into a guided intake process.'
          />
          <div className='mt-8'>
            <PrimaryLink href='/services'>Review the Packages</PrimaryLink>
          </div>
        </div>
      </section>
    </>
  );
}
