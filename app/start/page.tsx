import type { Metadata } from 'next';
import { processIconsByNumber, SiteIconBadge, SiteListMark } from '@/components/site/icon-suite';
import { PrimaryLink, SectionIntro } from '@/components/site/marketing';
import { PackageCard } from '@/components/site/package-card';
import { packageOffers, processSteps } from '@/lib/site-content';
import { buildNoIndexMetadata } from '@/lib/seo';

export const metadata: Metadata = buildNoIndexMetadata({
  title: 'Start',
  description:
    'Choose your website package, place the $150 deposit, and move into intake and kickoff.',
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
              How the deposit works
            </p>
            <ul className='mt-5 space-y-4'>
              {[
                'The $150 deposit reserves your spot in the project schedule.',
                'It is applied to your total project cost, not added as an extra fee.',
                'Once it is paid, you move into intake, kickoff scheduling, and onboarding.',
              ].map((item, index) => (
                <li key={item} className='flex gap-3 text-sm leading-6 text-[var(--ink-muted)]'>
                  <SiteListMark icon={depositDetailIcons[index]} tone='accent' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className='mt-6 rounded-[1.4rem] border border-[var(--line)] bg-[var(--panel)] px-5 py-4 text-sm leading-6 text-[var(--ink-muted)]'>
              Not sure which package to choose? Start with{' '}
              <span className='font-medium text-[var(--ink)]'>Growth</span>. It is the best fit for
              most service businesses, and final scope gets confirmed before production begins.
            </div>
          </div>
        </div>
      </section>

      <section className='px-4 pb-20 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-6 lg:grid-cols-3'>
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
            eyebrow='What happens next'
            title='Once your deposit is in, the next steps are simple.'
            copy='You should not be left wondering what happens after payment. The process is designed to keep momentum high and make each next step easy to follow.'
          />

          <div className='grid gap-4 sm:grid-cols-2'>
            {processSteps.slice(1).map((step) => (
              <article
                key={step.number}
                className='rounded-[1.6rem] border border-[var(--line)] bg-[var(--panel)] p-5'>
                <div className='flex items-start justify-between gap-4'>
                  <SiteIconBadge icon={processIconsByNumber[step.number]} tone='primary' size='sm' />
                  <p className='text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]'>
                    Step {step.number}
                  </p>
                </div>
                <h2 className='mt-3 text-2xl leading-tight text-[var(--ink)]'>{step.title}</h2>
                <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-8 shadow-[var(--shadow-md)] sm:p-10'>
          <SectionIntro
            eyebrow='Decision'
            title='At this point, you only need to choose the package that fits and move forward.'
            copy='You have already seen who this is for, what is included, and how the process works. This page is here to help you make a confident choice and get the project started.'
          />
          <div className='mt-8'>
            <PrimaryLink href='/services'>Compare Packages Again</PrimaryLink>
          </div>
        </div>
      </section>
    </>
  );
}
