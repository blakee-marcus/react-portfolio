import type { Metadata } from 'next';
import { SiteIconBadge, SiteListMark } from '@/components/site/icon-suite';
import { CtaBand, PrimaryLink, SecondaryLink, SectionIntro } from '@/components/site/marketing';
import { PackageCard } from '@/components/site/package-card';
import { carePlan, everyPackageIncludes, packageOffers } from '@/lib/site-content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Website Packages for Founder-Led Service Businesses',
  description:
    'Compare Blake Marcus Studio website packages for founder-led service businesses, then start with a $150 project deposit when the fit is clear.',
  path: '/services',
  keywords: [
    'Las Vegas web design packages',
    'website package pricing Las Vegas',
    'service business website packages',
    'founder-led service business web design',
  ],
});

const depositSteps = [
  {
    icon: 'deposit',
    title: 'Reserves the project slot',
    body: 'The $150 deposit secures time in the production schedule and is applied to the total project fee.',
  },
  {
    icon: 'intake',
    title: 'Unlocks intake',
    body: 'After payment, the project moves into intake so goals, pages, content, and priorities can be gathered in one place.',
  },
  {
    icon: 'scope',
    title: 'Confirms the final scope',
    body: 'Before production begins, the remaining balance, timeline, and exact deliverables are confirmed around the selected package.',
  },
] as const;

const comparisonNotes = [
  'Essentials keeps the project focused when one strong page is enough.',
  'Growth is the best fit for most service businesses because it gives the offer, proof, process, and trust pages room to work.',
  'Full Brand Build is for businesses that need a deeper visual system and a more elevated launch experience.',
] as const;

export default function ServicesPage() {
  const featuredPackage = packageOffers.find((offer) => offer.featured) ?? packageOffers[1];

  return (
    <>
      <section className='px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,24rem)] lg:items-start'>
          <div className='space-y-8'>
            <SectionIntro
              as='h1'
              eyebrow='Packages'
              title='Choose the website package that fits the business now.'
              copy='The offer is intentionally simple: three website packages, clear starting prices, and a guided $150 deposit step once the fit is clear. This page helps you compare before you commit.'
            />

            <div className='flex flex-wrap gap-4'>
              <PrimaryLink href='/start'>Start with a $150 deposit</PrimaryLink>
              <SecondaryLink href='/process'>See the process</SecondaryLink>
            </div>
          </div>

          <aside className='rounded-[2rem] border border-[var(--card-border-strong)] bg-[linear-gradient(155deg,rgba(255,255,255,0.96)_0%,rgba(231,238,234,0.9)_100%)] p-6 shadow-[var(--shadow-md)]'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-strong)]'>
              Best fit for most clients
            </p>
            <div className='mt-5 flex items-start gap-4'>
              <SiteIconBadge icon='growth' tone='primary' />
              <div>
                <h2 className='text-4xl leading-none text-[var(--ink)]'>
                  {featuredPackage.name}
                </h2>
                <p className='mt-2 text-sm font-medium text-[var(--accent)]'>
                  {featuredPackage.startingPrice}
                </p>
              </div>
            </div>
            <p className='mt-5 text-sm leading-7 text-[var(--ink-muted)]'>
              Growth gives established service businesses the room to explain the offer, build
              trust, answer objections, and guide visitors toward inquiry without creating a large
              agency-style build.
            </p>
          </aside>
        </div>
      </section>

      <section className='border-y border-[var(--line)] bg-[rgba(255,255,255,0.34)] px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl space-y-10'>
          <div className='grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-end'>
            <SectionIntro
              eyebrow='Compare'
              title='Three packages, one guided starting point.'
              copy='Each package is built around a different level of business need. The goal is not to oversell the largest build. The goal is to make the right next step obvious.'
            />

            <div className='rounded-[2rem] border border-[var(--card-border)] bg-[color:var(--card-bg)] p-6 shadow-[var(--shadow-sm)]'>
              <p className='text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-strong)]'>
                Every package includes
              </p>
              <ul className='mt-5 space-y-4'>
                {everyPackageIncludes.map((item) => (
                  <li key={item} className='flex gap-3 text-sm leading-6 text-[var(--ink-muted)]'>
                    <SiteListMark icon='care' tone='accent' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='grid gap-6 lg:grid-cols-3'>
            {packageOffers.map((offer) => (
              <PackageCard
                key={offer.slug}
                offer={offer}
                href='/start'
                ctaLabel='Start with deposit'
                showScopeBoundaries
              />
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start'>
          <SectionIntro
            eyebrow='Recommendation'
            title='Start with Growth unless the project clearly needs to be smaller or deeper.'
            copy='Growth is the best-fit recommendation for most service businesses because it creates a complete customer path without overcomplicating the project.'
          />

          <div className='grid gap-4'>
            {comparisonNotes.map((note, index) => (
              <article
                key={note}
                className='rounded-[1.7rem] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[var(--shadow-sm)]'>
                <div className='flex items-start gap-4'>
                  <SiteIconBadge
                    icon={index === 1 ? 'growth' : index === 2 ? 'full-brand' : 'essentials'}
                    tone={index === 1 ? 'primary' : 'accent'}
                    size='sm'
                  />
                  <div>
                    <p className='text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--muted-strong)]'>
                      0{index + 1}
                    </p>
                    <p className='mt-2 text-sm leading-7 text-[var(--ink-muted)]'>{note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='border-y border-[var(--line)] bg-[color:var(--panel)/0.55] px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start'>
          <SectionIntro
            eyebrow='Deposit'
            title='The $150 deposit starts the project without skipping the scope conversation.'
            copy='The deposit is a low-friction commitment. It reserves the project slot, unlocks intake, and creates momentum, but it does not pretend the full project is scoped before kickoff.'
          />

          <div className='grid gap-5'>
            {depositSteps.map((step) => (
              <article
                key={step.title}
                className='rounded-[1.8rem] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[var(--shadow-sm)]'>
                <div className='flex items-start gap-4'>
                  <SiteIconBadge icon={step.icon} tone='primary' size='sm' />
                  <div>
                    <h2 className='text-2xl leading-tight text-[var(--ink)]'>{step.title}</h2>
                    <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>{step.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id='care' className='scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start'>
          <SectionIntro
            eyebrow='Care plan'
            title='Post-launch support keeps the website protected and improving.'
            copy={carePlan.summary}
          />

          <div className='rounded-[2rem] border border-[var(--card-border)] bg-[color:var(--card-bg)] p-6 shadow-[var(--shadow-md)] sm:p-7'>
            <div className='flex items-start gap-4'>
              <SiteIconBadge icon='care' tone='accent' />
              <div>
                <h2 className='text-3xl leading-tight text-[var(--ink)]'>{carePlan.title}</h2>
                <p className='mt-3 text-sm leading-7 text-[var(--ink-muted)]'>
                  Support is positioned after launch so the main website decision stays simple.
                  Businesses that want ongoing help can add care once the project has a real site to
                  protect and improve.
                </p>
              </div>
            </div>

            <ul className='mt-6 grid gap-4 sm:grid-cols-2'>
              {carePlan.details.map((item) => (
                <li
                  key={item}
                  className='flex gap-3 rounded-[1.4rem] border border-[var(--line-soft)] bg-[rgba(255,255,255,0.74)] px-4 py-4 text-sm leading-6 text-[var(--ink-muted)]'>
                  <SiteListMark icon='care' tone='accent' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow='Start'
        title='Once the package feels clear, the next step is the deposit.'
        copy='Choose your package on the start page, place the $150 deposit, and move into a guided intake and kickoff flow before production begins.'
        href='/start'
        ctaLabel='Start with a $150 deposit'
      />
    </>
  );
}
