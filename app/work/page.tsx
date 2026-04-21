import type { Metadata } from 'next';
import { CtaBand, PrimaryLink, SectionIntro } from '@/components/site/marketing';
import { proofStories } from '@/lib/site-content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Las Vegas Web Design Proof',
  description:
    'See how Blake Marcus Studio sharpens positioning, trust, and conversion for founder-led service business websites in Las Vegas and beyond.',
  path: '/work',
  keywords: [
    'Las Vegas website portfolio',
    'Las Vegas web design examples',
    'service business website case studies',
  ],
});

export default function WorkPage() {
  return (
    <>
      <section className='px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24'>
        <div className='mx-auto max-w-6xl space-y-8'>
          <SectionIntro
            as='h1'
            eyebrow='Proof'
            title='Work built to make a business easier to trust and easier to choose.'
            copy='The goal is not to show endless portfolio pieces. It is to show the kind of clarity, structure, and polish that helps a service business make a stronger first impression online.'
          />

          <div className='rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-6 text-sm leading-7 text-[var(--ink-muted)] shadow-[var(--shadow-md)]'>
            Good proof should show more than visual taste. It should show how the work sharpens the
            message, builds trust faster, and gives the business a clearer path to inquiry or
            booking.
          </div>
        </div>
      </section>

      <section className='px-4 pb-20 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-6 lg:grid-cols-3'>
          {proofStories.map((story) => (
            <article
              key={story.title}
              className='rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.84] p-6 shadow-[var(--shadow-md)]'>
              <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>
                {story.label}
              </p>
              <h2 className='mt-4 text-3xl leading-[1.02] text-[var(--ink)]'>{story.title}</h2>
              <p className='mt-4 text-sm leading-6 text-[var(--ink-muted)]'>{story.summary}</p>
              <ul className='mt-5 space-y-3'>
                {story.bullets.map((bullet) => (
                  <li key={bullet} className='flex gap-3 text-sm leading-6 text-[var(--ink-muted)]'>
                    <span className='mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent-strong)]' />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className='border-y border-[var(--line)] bg-[color:var(--panel)/0.55] px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-start'>
          <SectionIntro
            eyebrow='What this shows'
            title='Proof should help the client picture a better version of their own site.'
            copy='A few strong examples do more than a crowded portfolio. They show what improves, what becomes clearer, and what kind of result the business can expect.'
          />

          <div className='rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6'>
            <p className='text-sm leading-7 text-[var(--ink-muted)]'>
              This page can later expand into real case studies, client examples, or screenshots.
              The structure already supports that without turning the site into a portfolio maze.
            </p>
            <div className='mt-6'>
              <PrimaryLink href='/start'>Start A Project</PrimaryLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow='Next step'
        title='Once the standard feels right, the next move should be obvious.'
        copy='See the packages, choose the best fit, and move into a clear process designed to get the project started without extra friction.'
        href='/services'
        ctaLabel='See Packages'
      />
    </>
  );
}
