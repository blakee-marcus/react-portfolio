import type { Metadata } from 'next';
import { CtaBand, PrimaryLink, SectionIntro } from '@/components/site/marketing';
import { processSteps, processValues } from '@/lib/site-content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Las Vegas Website Design Process',
  description:
    'See the website process for Las Vegas service businesses: package selection, deposit, intake, kickoff, build, and launch.',
  path: '/process',
  keywords: [
    'Las Vegas website process',
    'Las Vegas web design workflow',
    'website design process Nevada',
  ],
});

export default function ProcessPage() {
  return (
    <>
      <section className='px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,24rem)] lg:items-start'>
          <SectionIntro
            as='h1'
            eyebrow='Process'
            title='A clear process from package selection to launch.'
            copy='The process is designed to keep things simple. You choose the package, place the deposit, move through intake and kickoff, and then the project moves into build and launch with a clear plan.'
          />

          <div className='rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-6 shadow-[var(--shadow-md)]'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>
              How it starts
            </p>
            <ol className='mt-5 space-y-4'>
              {[
                'Choose the package that fits your business',
                'Pay the $150 deposit',
                'Complete intake',
                'Book kickoff',
              ].map((item, index) => (
                <li key={item} className='flex gap-4'>
                  <span className='inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-medium text-[var(--ink)]'>
                    {index + 1}
                  </span>
                  <p className='text-sm leading-6 text-[var(--ink-muted)]'>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className='px-4 pb-20 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-6 lg:grid-cols-5'>
          {processSteps.map((step) => (
            <article
              key={step.number}
              className='rounded-[1.9rem] border border-[var(--line)] bg-[color:var(--panel)/0.8] p-6 shadow-[var(--shadow-md)]'>
              <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>
                Step {step.number}
              </p>
              <h2 className='mt-4 text-3xl leading-[1.02] text-[var(--ink)]'>{step.title}</h2>
              <p className='mt-4 text-sm leading-6 text-[var(--ink-muted)]'>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='border-y border-[var(--line)] bg-[color:var(--panel)/0.55] px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start'>
          <SectionIntro
            eyebrow='What to expect'
            title='A process that feels clear, steady, and easy to follow.'
            copy='Good process removes friction. You should know what is happening, what is needed from you, and what the next step is at every stage.'
          />

          <div className='space-y-4'>
            {processValues.map((value) => (
              <article
                key={value.title}
                className='rounded-[1.7rem] border border-[var(--line)] bg-[var(--panel)] p-5'>
                <h3 className='text-2xl text-[var(--ink)]'>{value.title}</h3>
                <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>{value.body}</p>
              </article>
            ))}

            <PrimaryLink href='/start'>Start With The Deposit</PrimaryLink>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow='Next step'
        title='The process should make it easier to move forward, not harder.'
        copy='Choose the package that fits, place the deposit, and move into a guided project flow built to keep things clear from the start.'
        href='/start'
        ctaLabel='Start A Project'
      />
    </>
  );
}
