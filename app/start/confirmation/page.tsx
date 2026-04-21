import type { Metadata } from 'next';
import { PrimaryLink, SecondaryLink, SectionIntro } from '@/components/site/marketing';
import { getPackageBySlug, packageOffers } from '@/lib/site-content';
import { buildNoIndexMetadata } from '@/lib/seo';

export const metadata: Metadata = buildNoIndexMetadata({
  title: 'Confirmation',
  description: 'Confirmation of the project deposit and the next onboarding steps.',
  path: '/start/confirmation',
});

type FlowSearchParams = Promise<{
  package?: string | string[];
  mode?: string | string[];
}>;

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: FlowSearchParams;
}) {
  const params = await searchParams;
  const packageParam = Array.isArray(params.package) ? params.package[0] : params.package;
  const mode = Array.isArray(params.mode) ? params.mode[0] : params.mode;
  const selectedPackage = getPackageBySlug(packageParam) ?? packageOffers[1];
  const suffix = `?package=${selectedPackage.slug}${mode === 'demo' ? '&mode=demo' : ''}`;

  return (
    <section className='px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-5xl space-y-8'>
        {mode === 'demo' ? (
          <div className='rounded-[1.6rem] border border-[var(--line-strong)] bg-[var(--accent-soft)] px-5 py-4 text-sm leading-6 text-[var(--ink-muted)]'>
            Demo mode: this flow is ready to connect to a live checkout, intake form, and kickoff
            scheduler.
          </div>
        ) : null}

        <SectionIntro
          as='h1'
          eyebrow='Confirmation'
          title='Your deposit is in. Your project is officially underway.'
          copy={`You are moving forward with the ${selectedPackage.name} package. The next step is to complete intake so the project starts with the right goals, pages, and priorities.`}
        />

        <div className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)]'>
          <div className='rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-6 shadow-[var(--shadow-md)]'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>
              What happens next
            </p>
            <ul className='mt-5 space-y-4'>
              {[
                'Complete the intake form so your goals, pages, and references are all in one place.',
                'Book your kickoff after intake is submitted.',
                'Receive a clear onboarding summary before production begins.',
              ].map((item) => (
                <li key={item} className='flex gap-3 text-sm leading-6 text-[var(--ink-muted)]'>
                  <span className='mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent-strong)]' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>
              Next step
            </p>
            <h2 className='mt-4 text-3xl leading-tight text-[var(--ink)]'>Complete intake</h2>
            <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>
              The intake makes kickoff faster, keeps the build focused, and prevents the project
              from starting with missing information.
            </p>

            <div className='mt-6 flex flex-wrap gap-3'>
              <PrimaryLink href={`/start/intake${suffix}`}>Go To Intake</PrimaryLink>
              <SecondaryLink href='/services'>Review Packages</SecondaryLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
