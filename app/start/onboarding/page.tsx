import type { Metadata } from 'next';
import { PrimaryLink, SecondaryLink, SectionIntro } from '@/components/site/marketing';
import { getPackageBySlug, packageOffers } from '@/lib/site-content';
import { buildNoIndexMetadata } from '@/lib/seo';

export const metadata: Metadata = buildNoIndexMetadata({
  title: 'Onboarding',
  description: 'Onboarding details for the first week of the project and communication expectations.',
  path: '/start/onboarding',
});

type FlowSearchParams = Promise<{
  package?: string | string[];
}>;

export default async function OnboardingPage({ searchParams }: { searchParams: FlowSearchParams }) {
  const params = await searchParams;
  const packageParam = Array.isArray(params.package) ? params.package[0] : params.package;
  const selectedPackage = getPackageBySlug(packageParam) ?? packageOffers[1];

  return (
    <section className='px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-5xl space-y-8'>
        <SectionIntro
          as='h1'
          eyebrow='Onboarding'
          title='Everything is in place. The project is ready to begin.'
          copy={`With ${selectedPackage.name} confirmed and kickoff complete, onboarding sets the tone for a smooth first week. You will know what happens next, what is needed from you, and how the project will move forward.`}
        />

        <div className='grid gap-6 lg:grid-cols-3'>
          {[
            [
              'Week one',
              'We confirm the working plan, collect any remaining assets, and lock in the production schedule.',
            ],
            [
              'Communication',
              'You get clear expectations for feedback, review windows, and how progress updates will be shared.',
            ],
            [
              'Build phase',
              'The project moves into design and development with a defined sequence and a clear launch target.',
            ],
          ].map(([title, body]) => (
            <article
              key={title}
              className='rounded-[1.8rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-6 shadow-[var(--shadow-md)]'>
              <h2 className='text-3xl leading-tight text-[var(--ink)]'>{title}</h2>
              <p className='mt-4 text-sm leading-6 text-[var(--ink-muted)]'>{body}</p>
            </article>
          ))}
        </div>

        <div className='rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6'>
          <div className='flex flex-wrap gap-3'>
            <PrimaryLink href='/process'>See The Full Process</PrimaryLink>
            <SecondaryLink href='/services'>Review Packages</SecondaryLink>
          </div>
        </div>
      </div>
    </section>
  );
}
