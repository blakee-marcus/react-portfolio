import type { Metadata } from 'next';
import { CtaBand, PrimaryLink, SectionIntro } from '@/components/site/marketing';
import { fitNotes, studioPrinciples } from '@/lib/site-content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Las Vegas Web Design Studio',
  description:
    'Blake Marcus Studio is a Las Vegas, Nevada web design studio building calm, premium websites for founder-led service businesses.',
  path: '/studio',
  keywords: [
    'Las Vegas web design studio',
    'Las Vegas freelance web designer',
    'Nevada web design studio',
  ],
});

export default function StudioPage() {
  return (
    <>
      <section className='px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,24rem)] lg:items-start'>
          <SectionIntro
            as='h1'
            eyebrow='Studio'
            title='A Las Vegas studio for service businesses that want a stronger website and a clearer process.'
            copy='Blake Marcus Studio is built for founders who want something more thoughtful than a generic freelancer experience, without the drag and complexity of a traditional agency. Based in Las Vegas, the studio focuses on work that feels premium, calm, and straightforward from start to finish.'
          />

          <div className='rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-6 shadow-[var(--shadow-md)]'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>
              What that means for you
            </p>
            <p className='mt-4 text-sm leading-7 text-[var(--ink-muted)]'>
              You work directly with one partner who understands the strategy, the design, and the
              build. That keeps communication cleaner, decisions faster, and the final result more
              cohesive.
            </p>
          </div>
        </div>
      </section>

      <section className='px-4 pb-20 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-6 lg:grid-cols-3'>
          {studioPrinciples.map((principle) => (
            <article
              key={principle.title}
              className='rounded-[1.9rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-6 shadow-[var(--shadow-md)]'>
              <h2 className='text-3xl leading-[1.02] text-[var(--ink)]'>{principle.title}</h2>
              <p className='mt-4 text-sm leading-6 text-[var(--ink-muted)]'>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='border-y border-[var(--line)] bg-[color:var(--panel)/0.55] px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start'>
          <SectionIntro
            eyebrow='Fit'
            title='A strong fit for the right kind of client.'
            copy='The goal is not to be the right studio for everyone. It is to be the right fit for businesses that value clarity, trust, and a guided process.'
          />

          <div className='space-y-4'>
            {fitNotes.map((note) => (
              <div
                key={note}
                className='rounded-[1.6rem] border border-[var(--line)] bg-[var(--panel)] px-5 py-5 text-sm leading-6 text-[var(--ink-muted)]'>
                {note}
              </div>
            ))}
            <PrimaryLink href='/start'>Start A Project</PrimaryLink>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow='Next step'
        title='Once the studio feels like the right fit, the next step should be simple.'
        copy='Choose the package that fits your business and move into a guided process designed to keep things clear from the start.'
        href='/services'
        ctaLabel='See Packages'
      />
    </>
  );
}
