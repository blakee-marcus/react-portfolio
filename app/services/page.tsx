import type { Metadata } from 'next';
import { SiteIconBadge, SiteListMark } from '@/components/site/icon-suite';
import { CtaBand, SectionIntro } from '@/components/site/marketing';
import { PackageCard } from '@/components/site/package-card';
import { carePlan, everyPackageIncludes, packageOffers } from '@/lib/site-content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Las Vegas Web Design Packages',
  description:
    'Clear website packages for founder-led service businesses in Las Vegas, Nevada, plus optional post-launch support.',
  path: '/services',
  keywords: [
    'Las Vegas website packages',
    'Las Vegas small business web design',
    'Nevada service business websites',
  ],
});

const packageStandardIcons = ['scope', 'communication', 'business', 'launch'] as const;
const carePlanIcons = ['care', 'trust', 'momentum', 'onboarding'] as const;

export default function ServicesPage() {
  return (
    <>
      <section className='px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24'>
        <div className='mx-auto max-w-6xl space-y-8'>
          <SectionIntro
            as='h1'
            eyebrow='Packages'
            title='Three clear website packages. One easy way to move forward.'
            copy='The offer is intentionally simple. Choose the package that fits your business, place the deposit, and move into a guided process without a long custom proposal cycle.'
          />

          <div className='rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.78] p-6 text-sm leading-7 text-[var(--ink-muted)] shadow-[var(--shadow-md)]'>
            Most clients choose <span className='font-medium text-[var(--ink)]'>Growth</span>
            because it gives enough room for a stronger message, better structure, and a more
            complete web presence without adding unnecessary complexity.
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
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start'>
          <SectionIntro
            eyebrow='Every package includes'
            title='What changes is the scope, not the standard.'
            copy='No matter which package you choose, the work is handled with the same level of care, structure, and attention to detail.'
          />

          <div className='grid gap-4'>
            {everyPackageIncludes.map((item, index) => (
              <div
                key={item}
                className='rounded-[1.6rem] border border-[var(--line)] bg-[var(--panel)] px-5 py-5 text-sm leading-6 text-[var(--ink-muted)]'>
                <SiteIconBadge
                  icon={packageStandardIcons[index]}
                  tone={index === 1 ? 'accent' : 'primary'}
                  size='sm'
                />
                <p className='mt-4'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='care' className='px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start'>
          <SectionIntro eyebrow='After launch' title={carePlan.title} copy={carePlan.summary} />

          <div className='rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-6 shadow-[var(--shadow-md)]'>
            <ul className='space-y-4'>
              {carePlan.details.map((detail, index) => (
                <li key={detail} className='flex gap-3 text-sm leading-6 text-[var(--ink-muted)]'>
                  <SiteListMark icon={carePlanIcons[index]} tone='accent' />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className='mt-6 rounded-[1.4rem] border border-[var(--line)] bg-[var(--panel)] px-5 py-4 text-sm leading-6 text-[var(--ink-muted)]'>
              Ongoing support is offered after launch so the main buying decision stays simple.
              Start with the website first, then add support if it makes sense for the business.
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow='Start'
        title='Choose the package that fits now. The details get refined inside the process.'
        copy='You do not need to compare endless options to get started. Pick the best fit, place the deposit, and move into a clear next step.'
        href='/start'
        ctaLabel='Choose Your Package'
      />
    </>
  );
}
