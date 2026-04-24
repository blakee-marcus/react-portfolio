import type { Metadata } from 'next';
import { SiteIconBadge } from '@/components/site/icon-suite';
import { requirePaidDepositAccess } from '@/lib/deposit/server';
import { PrimaryLink, SectionIntro } from '@/components/site/marketing';
import { getPackageBySlug, packageOffers } from '@/lib/site-content';
import { buildNoIndexMetadata } from '@/lib/seo';

export const metadata: Metadata = buildNoIndexMetadata({
  title: 'Intake',
  description: 'Project intake details for goals, content, brand direction, and logistics.',
  path: '/start/intake',
});
export const dynamic = 'force-dynamic';

const intakeIcons = ['business', 'pages', 'brand', 'logistics'] as const;

export default async function IntakePage() {
  const deposit = await requirePaidDepositAccess();
  const selectedPackage = getPackageBySlug(deposit.packageSlug) ?? packageOffers[1];

  return (
    <section className='px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-6xl space-y-8'>
        <SectionIntro
          as='h1'
          eyebrow='Intake'
          title='Share the details that will shape the project.'
          copy={`This intake helps turn your ${selectedPackage.name} package into a clear plan. It gathers the business, content, and brand details needed to keep kickoff focused and the build moving smoothly.`}
        />

        <div className='grid gap-6 lg:grid-cols-4'>
          {[
            [
              'Business',
              'What you offer, who you serve, and what the website needs to help people do.',
            ],
            [
              'Pages',
              'Which pages matter most, what each one needs to communicate, and where stronger structure is needed.',
            ],
            [
              'Brand',
              'Your visual direction, tone, existing assets, and any website references worth reviewing.',
            ],
            [
              'Logistics',
              'Your target timing, needed integrations, and anything that could affect scope or pacing.',
            ],
          ].map(([title, body], index) => (
            <article
              key={title}
              className='rounded-[1.7rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-5 shadow-[var(--shadow-md)]'>
              <SiteIconBadge
                icon={intakeIcons[index]}
                tone={index === 2 ? 'accent' : 'primary'}
                size='sm'
              />
              <h2 className='mt-4 text-2xl leading-tight text-[var(--ink)]'>{title}</h2>
              <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>{body}</p>
            </article>
          ))}
        </div>

        <div className='rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6'>
          <p className='text-sm leading-7 text-[var(--ink-muted)]'>
            The goal is not to make this feel long. It is to get the right details in one place so
            kickoff is productive and the project starts with clarity.
          </p>
          <div className='mt-6'>
            <PrimaryLink href='/start/kickoff'>Continue To Kickoff</PrimaryLink>
          </div>
        </div>
      </div>
    </section>
  );
}
