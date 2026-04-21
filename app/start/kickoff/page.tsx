import type { Metadata } from 'next';
import { PrimaryLink, SectionIntro } from '@/components/site/marketing';
import { getPackageBySlug, packageOffers } from '@/lib/site-content';
import { buildNoIndexMetadata } from '@/lib/seo';

export const metadata: Metadata = buildNoIndexMetadata({
  title: 'Kickoff',
  description: 'Kickoff planning for scope, priorities, timeline, and project readiness.',
  path: '/start/kickoff',
});

type FlowSearchParams = Promise<{
  package?: string | string[];
  mode?: string | string[];
}>;

export default async function KickoffPage({ searchParams }: { searchParams: FlowSearchParams }) {
  const params = await searchParams;
  const packageParam = Array.isArray(params.package) ? params.package[0] : params.package;
  const mode = Array.isArray(params.mode) ? params.mode[0] : params.mode;
  const selectedPackage = getPackageBySlug(packageParam) ?? packageOffers[1];
  const suffix = `?package=${selectedPackage.slug}${mode === 'demo' ? '&mode=demo' : ''}`;

  return (
    <section className='px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-5xl space-y-8'>
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
            <h2 className='mt-4 text-3xl leading-tight text-[var(--ink)]'>Book kickoff</h2>
            <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>
              Choose a time for the call so we can confirm the final details and move the project
              into production with confidence.
            </p>

            <div className='mt-6'>
              <PrimaryLink href={`/start/onboarding${suffix}`}>Continue To Onboarding</PrimaryLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
