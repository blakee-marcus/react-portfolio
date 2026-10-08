import dynamic from 'next/dynamic';
import Link from 'next/link';

import { StructuredData } from '@/components/site/structured-data';
import { everyPackageIncludes, packageOffers } from '@/lib/site-content';
import { buildMetadata, buildWebPageSchema } from '@/lib/seo';

const PackageChoiceLink = dynamic(
  () => import('@/components/site/package-choice-link').then((module) => module.PackageChoiceLink),
  {
    loading: () => (
      <a
        href='#project-form'
        className='inline-flex min-h-12 w-full items-center justify-between border-t border-[var(--line-strong)] py-4 text-sm font-semibold text-[var(--ink)]'>
        Choose package
        <span aria-hidden='true'>↗</span>
      </a>
    ),
  },
);

const pageTitle = 'Honolulu Web Design for Founder-Led Service Businesses';

const pageDescription =
  'Blake Marcus Studio builds clear, premium websites for founder-led service businesses in Honolulu and nationwide. View packages and the guided process.';

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/',
  keywords: [
    'Honolulu web design',
    'Honolulu web designer',
    'service business web design',
    'founder-led service business websites',
  ],
});

const outcomes = [
  {
    number: '01',
    title: 'Clearer offer',
    body: 'People understand what you do and who it is for without connecting the dots themselves.',
  },
  {
    number: '02',
    title: 'Stronger trust',
    body: 'The website looks as credible and considered as the business behind it.',
  },
  {
    number: '03',
    title: 'Cleaner next step',
    body: 'Visitors know whether to inquire, book, or buy, and exactly how to do it.',
  },
];

const process = [
  {
    number: '01',
    title: 'Reserve and share the context',
    body: 'Choose a package and place the credited $150 deposit. It reserves time in the production schedule and unlocks the detailed intake.',
  },
  {
    number: '02',
    title: 'Confirm the scope',
    body: 'We confirm the deliverables, timeline, project price, and remaining payment schedule before production begins.',
  },
  {
    number: '03',
    title: 'Build and launch',
    body: 'The project moves through focused checkpoints, clear feedback, launch QA, and a practical handoff.',
  },
];

const eyebrowClasses = 'text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)] pb-3';

const inputClasses =
  'min-h-12 w-full border border-[var(--line-strong)] bg-white px-4 py-3 text-[15px] text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted)] focus-visible:border-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]';

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={buildWebPageSchema({
          title: pageTitle,
          description: pageDescription,
        })}
      />

      {/* HERO */}
      <section
        aria-labelledby='hero-heading'
        className='border-b border-[var(--line)] px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-28'>
        <div className='mx-auto max-w-7xl'>
          <div className='max-w-[72rem]'>
            <div className='flex items-center gap-4'>
              <span aria-hidden='true' className='h-px w-8 shrink-0 bg-[var(--primary)]' />
              <p className={`${eyebrowClasses} pb-3`}>
                Honolulu web design for founder-led service businesses
              </p>
            </div>

            <h1
              id='hero-heading'
              className='mt-7 max-w-[68rem] text-balance text-[clamp(3rem,6.2vw,6.25rem)] font-medium leading-[1.04] tracking-[-0.045em] text-[var(--ink)]'>
              Websites that make your business easier to trust and easier to hire.
            </h1>

            <p className='mt-8 max-w-[42rem] text-lg leading-8 text-[var(--ink-muted)] sm:text-xl sm:leading-9'>
              Clear, conversion-focused websites for founder-led service businesses in Honolulu and
              nationwide. Built without the drag of a traditional agency process.
            </p>

            <div className='mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6'>
              <Link
                href='#project-form'
                className='action-surface primary-cta inline-flex min-h-14 items-center justify-center gap-8 px-7 py-4 text-[15px] font-semibold focus-visible:outline-2 focus-visible:outline-offset-4'>
                Start with a $150 deposit
                <span aria-hidden='true'>↗</span>
              </Link>

              <Link
                href='#packages'
                className='inline-flex min-h-14 items-center justify-center gap-3 px-3 py-4 text-[15px] font-semibold text-[var(--ink)] underline decoration-[var(--line-strong)] underline-offset-4 transition-colors hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] motion-reduce:transition-none'>
                Compare packages
                <span aria-hidden='true'>↘</span>
              </Link>
            </div>

            <p className='mt-4 max-w-[42rem] text-sm leading-6 text-[var(--ink-muted)]'>
              Projects start at $2,000. Your $150 deposit is credited toward the project total.
            </p>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className='px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end lg:gap-20'>
            <div>
              <p className={`${eyebrowClasses} pb-3`}>The problem</p>

              <h2 className='mt-5 max-w-xl text-balance text-[clamp(2.75rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.035em] text-[var(--ink)]'>
                Good business.
                <span className='block'>Weak website.</span>
              </h2>
            </div>

            <p className='max-w-xl text-lg leading-8 text-[var(--ink-muted)] lg:pb-1'>
              If your work is strong but your website feels pieced together, buries the offer, or
              leaves visitors unsure what to do next, that is the problem I fix.
            </p>
          </div>

          <div className='mt-14 border-t border-[var(--line-strong)] sm:mt-16'>
            {outcomes.map((outcome) => (
              <article
                key={outcome.number}
                className='grid gap-4 border-b border-[var(--line)] py-8 sm:py-10 md:grid-cols-[4rem_minmax(0,0.8fr)_minmax(0,1fr)] md:items-start md:gap-8'>
                <p className='pt-1 font-mono text-sm text-[var(--primary)]'>{outcome.number}</p>

                <h3 className='text-3xl font-medium leading-tight tracking-[-0.025em] text-[var(--ink)]'>
                  {outcome.title}
                </h3>

                <p className='max-w-xl text-base leading-8 text-[var(--ink-muted)]'>
                  {outcome.body}
                </p>
              </article>
            ))}
          </div>

          <p className='mt-8 max-w-3xl text-sm leading-7 text-[var(--ink-muted)]'>
            Best for founder-led service businesses that value clear communication, focused
            feedback, and a defined scope. Not built for unlimited revisions, enterprise
            procurement, or the cheapest possible website.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section
        id='packages'
        aria-labelledby='packages-heading'
        className='scroll-mt-24 border-y border-[var(--line)] bg-[#f7f7f5] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28'>
        <div className='mx-auto max-w-7xl'>
          <div className='max-w-4xl'>
            <p className={`${eyebrowClasses} pb-3`}>Packages</p>

            <h2
              id='packages-heading'
              className='mt-5 max-w-3xl text-balance text-[clamp(2.75rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.035em] text-[var(--ink)]'>
              Choose the build that fits your business now.
            </h2>

            <p className='mt-6 max-w-2xl text-lg leading-8 text-[var(--ink-muted)]'>
              Three defined packages. Clear starting prices. Final scope is confirmed after intake
              and before production begins.
            </p>
          </div>

          <div className='mt-12 grid gap-4 lg:grid-cols-3 lg:items-stretch'>
            {packageOffers.map((offer) => {
              const featured = offer.featured;

              return (
                <article
                  key={offer.slug}
                  className={`flex min-h-[28rem] flex-col border p-7 sm:p-8 ${
                    featured
                      ? 'border-[var(--ink)] bg-[var(--ink)] text-white'
                      : 'border-[var(--line-strong)] bg-white text-[var(--ink)]'
                  }`}>
                  <div className='flex min-h-7 flex-wrap items-center justify-between gap-3'>
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.2em] pb-3 ${
                        featured ? 'text-[#b8d0bd]' : 'text-[var(--primary)]'
                      }`}>
                      {offer.eyebrow}
                    </p>

                    {featured && (
                      <span className='border border-white/40 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white'>
                        Recommended
                      </span>
                    )}
                  </div>

                  <h3 className='mt-10 text-[clamp(2rem,2.6vw,2.75rem)] font-medium leading-tight tracking-[-0.035em]'>
                    {offer.name}
                  </h3>

                  <p className='mt-5 font-mono text-lg font-semibold'>{offer.startingPrice}</p>

                  <p
                    className={`mt-1 font-mono text-xs ${
                      featured ? 'text-white/65' : 'text-[var(--ink-muted)]'
                    }`}>
                    {offer.timeline}
                  </p>

                  <p
                    className={`mt-8 text-base leading-8 ${
                      featured ? 'text-white/80' : 'text-[var(--ink-muted)]'
                    }`}>
                    {offer.summary}
                  </p>

                  <div className='mt-auto pt-12'>
                    <PackageChoiceLink
                      packageSlug={offer.slug}
                      className={`inline-flex min-h-14 w-full items-center justify-between gap-4 border-t py-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none ${
                        featured
                          ? 'border-white/30 text-white hover:text-[#b8d0bd] focus-visible:outline-white'
                          : 'border-[var(--line-strong)] text-[var(--ink)] hover:text-[var(--primary)] focus-visible:outline-[var(--primary)]'
                      }`}>
                      Choose {offer.name}
                      <span aria-hidden='true'>↗</span>
                    </PackageChoiceLink>
                  </div>
                </article>
              );
            })}
          </div>

          <p className='mt-8 max-w-4xl text-sm leading-7 text-[var(--ink-muted)]'>
            Every package includes {everyPackageIncludes.join(', ').toLowerCase()}.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id='process'
        aria-labelledby='process-heading'
        className='scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20'>
            <div>
              <p className={`${eyebrowClasses} pb-3`}>The process</p>

              <h2
                id='process-heading'
                className='mt-5 max-w-xl text-balance text-[clamp(2.75rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.035em] text-[var(--ink)]'>
                Guided, without the agency drag.
              </h2>

              <p className='mt-7 max-w-lg text-lg leading-8 text-[var(--ink-muted)]'>
                You work directly with Blake from structure and messaging through design,
                development, and launch. Nothing is handed through layers of account managers.
              </p>
            </div>

            <ol className='border-t border-[var(--line-strong)]'>
              {process.map((step) => (
                <li
                  key={step.number}
                  className='grid gap-4 border-b border-[var(--line)] py-8 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6 sm:py-9'>
                  <span className='font-mono text-2xl leading-none text-[var(--primary)]'>
                    {step.number}
                  </span>

                  <div>
                    <h3 className='text-2xl font-medium leading-tight tracking-[-0.025em] text-[var(--ink)] sm:text-3xl'>
                      {step.title}
                    </h3>

                    <p className='mt-4 max-w-xl text-base leading-8 text-[var(--ink-muted)]'>
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PROJECT INTAKE */}
      <section
        id='project-form'
        aria-labelledby='project-form-heading'
        className='scroll-mt-20 bg-[var(--ink)] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-20'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#b8d0bd]'>
              Start your project
            </p>

            <h2
              id='project-form-heading'
              className='mt-5 max-w-xl text-balance text-[clamp(2.75rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.035em] text-white'>
              Reserve your project slot.
            </h2>

            <p className='mt-7 max-w-lg text-lg leading-8 text-white/75'>
              Choose a package and enter your details. You&apos;ll continue to Stripe for the
              credited $150 deposit, then complete the detailed project intake.
            </p>

            <dl className='mt-10 grid gap-7 border-t border-white/25 pt-8 text-sm leading-7 text-white/75'>
              <div>
                <dt className='font-semibold text-white'>
                  Is the deposit part of the project price?
                </dt>
                <dd className='mt-1'>
                  Yes. The full $150 is credited toward the final project total.
                </dd>
              </div>

              <div>
                <dt className='font-semibold text-white'>When is the final scope confirmed?</dt>
                <dd className='mt-1'>After intake and before production begins.</dd>
              </div>

              <div>
                <dt className='font-semibold text-white'>Do you work outside Honolulu?</dt>
                <dd className='mt-1'>
                  Yes. Blake Marcus Studio is based in Honolulu and works with founder-led service
                  businesses in Hawaii and nationwide.
                </dd>
              </div>
            </dl>
          </div>

          <form
            action='/api/checkout/deposit'
            method='POST'
            aria-labelledby='project-form-heading'
            className='bg-[#f7f7f5] p-6 text-[var(--ink)] sm:p-9 lg:p-10'>
            <div className='grid gap-5 sm:grid-cols-2'>
              <label className='grid gap-2 text-sm font-medium'>
                Your name
                <input
                  className={inputClasses}
                  type='text'
                  name='fullName'
                  autoComplete='name'
                  required
                />
              </label>

              <label className='grid gap-2 text-sm font-medium'>
                Work email
                <input
                  className={inputClasses}
                  type='email'
                  name='email'
                  autoComplete='email'
                  required
                />
              </label>

              <label className='grid gap-2 text-sm font-medium sm:col-span-2'>
                Business name
                <input
                  className={inputClasses}
                  type='text'
                  name='businessName'
                  autoComplete='organization'
                  required
                />
              </label>
            </div>

            <fieldset className='mt-8'>
              <legend className='text-sm font-semibold'>Choose a package</legend>

              <div className='mt-3 grid border border-[var(--line-strong)]'>
                {packageOffers.map((offer) => (
                  <label
                    key={offer.slug}
                    className='flex cursor-pointer flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] px-4 py-4 last:border-b-0 has-[:checked]:bg-[var(--primary-soft)]'>
                    <span className='flex items-center gap-3'>
                      <input
                        id={`package-${offer.slug}`}
                        type='radio'
                        name='package'
                        value={offer.slug}
                        required
                        className='h-4 w-4 shrink-0 accent-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]'
                      />

                      <span className='text-sm font-semibold'>{offer.name}</span>
                    </span>

                    <span className='text-xs text-[var(--ink-muted)]'>{offer.startingPrice}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className='mt-6 flex cursor-pointer items-start gap-3 border border-[var(--line-strong)] bg-white p-4 text-sm leading-6 text-[var(--ink-muted)]'>
              <input
                type='checkbox'
                name='acknowledgePolicy'
                value='on'
                required
                className='mt-1 h-4 w-4 shrink-0 accent-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]'
              />

              <span>
                I understand the $150 deposit reserves a project slot, is credited toward the total,
                and does not approve the final scope or remaining balance.
              </span>
            </label>

            <button
              type='submit'
              className='action-surface primary-cta mt-6 inline-flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-[15px] font-semibold focus-visible:outline-2 focus-visible:outline-offset-2'>
              Continue to the $150 deposit
              <span aria-hidden='true'>↗</span>
            </button>

            <p className='mt-4 text-xs leading-6 text-[var(--muted)]'>
              You will continue to secure Stripe Checkout. Scope and the remaining balance are
              confirmed before production begins.
            </p>

            <p className='mt-4 text-xs leading-6 text-[var(--muted)]'>
              Need Blake to confirm the fit first?{' '}
              <a
                href='mailto:hello@blakemarcus.com?subject=Project%20fit%20check'
                className='font-semibold text-[var(--ink)] underline decoration-[var(--line-strong)] underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]'>
                Email project details
              </a>
              .
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
