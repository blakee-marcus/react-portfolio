import type { Metadata } from 'next';
import { SectionIntro } from '@/components/site/marketing';
import { buildNoIndexMetadata } from '@/lib/seo';

export const metadata: Metadata = buildNoIndexMetadata({
  title: 'Legal',
  description: 'Legal and policy information for Blake Marcus Studio.',
  path: '/legal',
});

const sections = [
  {
    title: 'Project terms',
    body: 'Final scope, timelines, deliverables, and payment terms are confirmed in the service agreement before production begins.',
  },
  {
    title: 'Deposits',
    body: 'The $150 project initiation deposit is credited toward the total project fee and secures time on the production calendar.',
  },
  {
    title: 'Privacy',
    body: 'Information shared through project intake, enquiry, or onboarding is used only to review fit, deliver services, and manage the project.',
  },
  {
    title: 'Support',
    body: 'Post-launch care plans and maintenance support are scoped separately after launch unless included in a custom agreement.',
  },
];

export default function LegalPage() {
  return (
    <section className='px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-5xl space-y-10'>
        <SectionIntro
          as='h1'
          eyebrow='Legal'
          title='Clear policies support a calmer client experience.'
          copy='This page gives visitors a simple overview. Full agreements and project terms are shared during onboarding before the build begins.'
        />

        <div className='grid gap-5'>
          {sections.map((section) => (
            <article
              key={section.title}
              className='rounded-[1.8rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-6 shadow-[var(--shadow-md)]'>
              <h2 className='text-3xl leading-tight text-[var(--ink)]'>{section.title}</h2>
              <p className='mt-4 text-sm leading-6 text-[var(--ink-muted)]'>{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
