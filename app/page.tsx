import { CtaBand, PrimaryLink, SecondaryLink, SectionIntro } from '@/components/site/marketing';
import { PackageCard } from '@/components/site/package-card';
import {
  audienceGroups,
  everyPackageIncludes,
  faqs,
  packageOffers,
  processSteps,
  proofStories,
  studioPrinciples,
} from '@/lib/site-content';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Las Vegas Web Design for Founder-Led Service Businesses',
  description:
    'Blake Marcus Studio builds calm, premium websites for founder-led service businesses in Las Vegas, Nevada and nationwide.',
  path: '/',
  keywords: [
    'Las Vegas web design studio',
    'Las Vegas website designer',
    'Nevada website designer',
    'founder-led service business web design',
  ],
});

const heroSignals = [
  'Las Vegas based, serving founder-led service businesses in Nevada and nationwide.',
  'Most projects land between $2,000 and $8,000.',
  'Three fixed packages instead of a vague proposal cycle.',
];

const buyingSteps = [
  'Choose the package that matches the business now.',
  'Place the deposit to reserve your production slot.',
  'Move into intake, kickoff, and a structured build.',
];

export default function HomePage() {
  const featuredPackage = packageOffers.find((offer) => offer.featured) ?? packageOffers[1];

  return (
    <>
      <section className='px-4 pb-12 pt-6 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(20rem,26rem)]'>
          <div className='overflow-hidden rounded-[2.8rem] border border-[var(--card-border-strong)] bg-[linear-gradient(150deg,rgba(255,255,255,0.98)_0%,rgba(248,250,251,0.94)_45%,rgba(231,238,234,0.9)_100%)] p-8 shadow-[var(--shadow-lg)] sm:p-10 lg:p-12'>
            <div className='space-y-8'>
              <div className='flex flex-wrap gap-3'>
                <p className='fade-up inline-flex items-center gap-3 rounded-full border border-[var(--line-soft)] bg-[rgba(255,255,255,0.8)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-strong)] shadow-[var(--shadow-sm)] [--delay:40ms]'>
                  <span className='inline-flex h-2 w-2 rounded-full bg-[var(--primary)]' />
                  For founder-led service businesses
                </p>
                <p className='fade-up inline-flex items-center rounded-full border border-[var(--line-soft)] bg-[rgba(255,255,255,0.7)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-strong)] shadow-[var(--shadow-sm)] [--delay:120ms]'>
                  Calm positioning. Clear next steps.
                </p>
              </div>

              <div className='space-y-6'>
                <h1 className='fade-up max-w-4xl text-balance text-5xl leading-[0.88] text-[var(--ink)] sm:text-6xl lg:text-7xl [--delay:160ms]'>
                  Websites that make service businesses feel established before the first call ever
                  happens.
                </h1>
                <p className='fade-up max-w-2xl text-lg leading-8 text-[var(--ink-muted)] [--delay:220ms]'>
                  Blake Marcus Studio builds editorial, trust-heavy websites for Las Vegas service
                  businesses and founders who need a sharper first impression, clearer positioning,
                  and a site that helps qualified inquiries feel easier to earn.
                </p>
              </div>

              <div className='fade-up flex flex-wrap items-center gap-4 [--delay:280ms]'>
                <PrimaryLink href='/start'>Choose Your Package</PrimaryLink>
                <SecondaryLink href='/process'>See How It Works</SecondaryLink>
              </div>

              <div className='grid gap-3 sm:grid-cols-3'>
                {heroSignals.map((item, index) => (
                  <div
                    key={item}
                    className='fade-up rounded-[1.7rem] border border-[var(--line-soft)] bg-[rgba(255,255,255,0.72)] px-5 py-5 text-sm leading-6 text-[var(--ink-muted)] shadow-[var(--shadow-sm)]'
                    style={{ ['--delay' as string]: `${340 + index * 70}ms` }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className='grid gap-5'>
            <div className='chrome-panel rounded-[2.2rem] border border-[var(--card-border)] bg-[color:var(--card-bg)] p-6 shadow-[var(--shadow-md)]'>
              <p className='inline-flex items-center gap-3 rounded-full border border-[var(--line-soft)] bg-[rgba(255,255,255,0.8)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-strong)]'>
                <span className='inline-flex h-2 w-2 rounded-full bg-[var(--accent)]' />
                Studio snapshot
              </p>

              <div className='mt-6 grid gap-4'>
                {[
                  ['Typical investment', '$2K to $8K'],
                  ['Typical timeline', '1 to 4 weeks'],
                  ['Best-fit package', 'Growth'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className='rounded-[1.5rem] border border-[var(--line-soft)] bg-[rgba(255,255,255,0.7)] px-5 py-4'>
                    <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-strong)]'>
                      {label}
                    </p>
                    <p className='mt-2 text-xl text-[var(--ink)]'>{value}</p>
                  </div>
                ))}
              </div>

              <div className='mt-6 rounded-[1.7rem] border border-[var(--line)] bg-[var(--panel-strong)] p-5'>
                <p className='text-sm leading-7 text-[var(--ink-muted)]'>
                  Best for businesses that already do strong work, but need the website to feel more
                  composed, premium, and easy to trust.
                </p>
              </div>
            </div>

            <div className='rounded-[2.2rem] border border-[var(--card-border-strong)] bg-[linear-gradient(155deg,rgba(255,255,255,0.96)_0%,rgba(231,238,234,0.94)_100%)] p-6 shadow-[var(--shadow-md)]'>
              <p className='text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-strong)]'>
                Best fit for most clients
              </p>
              <h2 className='mt-4 text-4xl leading-none text-[var(--ink)]'>{featuredPackage.name}</h2>
              <p className='mt-2 text-sm font-medium text-[var(--accent)]'>
                {featuredPackage.startingPrice}
              </p>
              <p className='mt-4 text-sm leading-7 text-[var(--ink-muted)]'>
                {featuredPackage.summary}
              </p>

              <ul className='mt-5 space-y-3'>
                {featuredPackage.includes.slice(0, 3).map((item) => (
                  <li key={item} className='flex gap-3 text-sm leading-6 text-[var(--ink-muted)]'>
                    <span className='mt-2 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]'>
                      <span className='h-1.5 w-1.5 rounded-full bg-current' />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className='mt-6 flex flex-wrap gap-3'>
                <PrimaryLink href={`/deposit?package=${featuredPackage.slug}`} className='w-full justify-between sm:w-auto'>
                  Reserve Growth
                </PrimaryLink>
                <SecondaryLink href='/services' className='w-full sm:w-auto'>
                  Compare Packages
                </SecondaryLink>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className='px-4 pb-20 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]'>
          <div className='chrome-panel rounded-[2.4rem] border border-[var(--card-border)] bg-[color:var(--card-bg)] p-8 shadow-[var(--shadow-md)] sm:p-10'>
            <SectionIntro
              eyebrow='Who it is for'
              title='Built for businesses that already do credible work and need the website to catch up.'
              copy='This studio works best when the business is solid but the digital first impression still feels pieced together, undersells the offer, or makes people work too hard to understand the value.'
            />

            <div className='mt-8 rounded-[1.8rem] border border-[var(--line)] bg-[var(--panel-strong)] p-6'>
              <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-strong)]'>
                The standard
              </p>
              <p className='mt-3 text-sm leading-7 text-[var(--ink-muted)]'>
                Calm design, stronger hierarchy, and messaging that feels considered instead of
                improvised. The result should make the business feel more established, not louder.
              </p>
            </div>
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
            {audienceGroups.map((group, index) => (
              <div
                key={group}
                className='rounded-[1.8rem] border border-[var(--line-soft)] bg-[rgba(255,255,255,0.78)] px-5 py-5 text-sm leading-6 text-[var(--ink-muted)] shadow-[var(--shadow-sm)] sm:min-h-[8.75rem]'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-strong)]'>
                  0{index + 1}
                </p>
                <p className='mt-3 max-w-[16rem]'>{group}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='border-y border-[var(--line)] bg-[rgba(255,255,255,0.34)] px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl space-y-10'>
          <div className='grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)] lg:items-end'>
            <SectionIntro
              eyebrow='Packages'
              title='Three ways to work together, with one very clear starting point for most businesses.'
              copy='The offer is intentionally structured. You should be able to understand the scope, investment, and next step without a long sales call or a custom quote cycle.'
            />

            <div className='rounded-[2rem] border border-[var(--card-border)] bg-[color:var(--card-bg)] p-6 shadow-[var(--shadow-sm)]'>
              <p className='text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-strong)]'>
                Buying flow
              </p>
              <ol className='mt-5 space-y-4'>
                {buyingSteps.map((step, index) => (
                  <li key={step} className='flex items-start gap-4'>
                    <span className='inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-[var(--line)] bg-[var(--primary-soft)] text-sm font-medium text-[var(--ink)]'>
                      {index + 1}
                    </span>
                    <p className='pt-1 text-sm leading-6 text-[var(--ink-muted)]'>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className='grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(18rem,22rem)]'>
            <div className='grid gap-6 lg:grid-cols-3'>
              {packageOffers.map((offer) => (
                <PackageCard key={offer.slug} offer={offer} compact />
              ))}
            </div>

            <aside className='rounded-[2.2rem] border border-[var(--card-border)] bg-[color:var(--card-bg)] p-6 shadow-[var(--shadow-md)]'>
              <p className='text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-strong)]'>
                Every package includes
              </p>
              <ul className='mt-5 space-y-4'>
                {everyPackageIncludes.map((item) => (
                  <li key={item} className='flex gap-3 text-sm leading-6 text-[var(--ink-muted)]'>
                    <span className='mt-2 h-2 w-2 flex-none rounded-full bg-[var(--accent)]' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className='mt-6'>
                <PrimaryLink href='/services'>See Packages</PrimaryLink>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className='px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end'>
            <SectionIntro
              eyebrow='Process'
              title='A project flow that keeps momentum high without making the client chase clarity.'
              copy='The structure is simple on purpose: deposit, intake, kickoff, build, launch. Each step exists to remove guesswork and move the work forward cleanly.'
            />

            <div className='rounded-[2rem] border border-[var(--card-border)] bg-[color:var(--card-bg)] p-6 shadow-[var(--shadow-sm)]'>
              <p className='text-sm leading-7 text-[var(--ink-muted)]'>
                The process is built to feel calm, but not passive. Every checkpoint should make the
                next decision easier.
              </p>
            </div>
          </div>

          <div className='mt-10 grid gap-5 lg:grid-cols-5'>
            {processSteps.map((step) => (
              <article
                key={step.number}
                className='rounded-[2rem] border border-[var(--line-soft)] bg-[rgba(255,255,255,0.8)] p-5 shadow-[var(--shadow-sm)]'>
                <span className='inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-sm font-medium text-[var(--primary)]'>
                  {step.number}
                </span>
                <h3 className='mt-5 text-2xl leading-tight text-[var(--ink)]'>{step.title}</h3>
                <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>{step.body}</p>
              </article>
            ))}
          </div>

          <div className='mt-8'>
            <PrimaryLink href='/process'>See The Process</PrimaryLink>
          </div>
        </div>
      </section>

      <section className='border-y border-[var(--line)] bg-[rgba(255,255,255,0.36)] px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl space-y-12'>
          <SectionIntro
            eyebrow='Proof'
            title='The work is built to make a business feel easier to trust, easier to understand, and easier to choose.'
            copy='A strong site should create clarity before it creates volume. These proof stories show the kind of shift the studio is built to produce.'
          />

          <div className='grid gap-6 lg:grid-cols-3'>
            {proofStories.map((story, index) => (
              <article
                key={story.title}
                className='rounded-[2.1rem] border border-[var(--card-border)] bg-[color:var(--card-bg)] p-6 shadow-[var(--shadow-md)]'>
                <p className='text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-strong)]'>
                  {story.label}
                </p>
                <h3 className='mt-4 text-3xl leading-[0.96] text-[var(--ink)]'>
                  {story.title}
                </h3>
                <p className='mt-4 text-sm leading-7 text-[var(--ink-muted)]'>{story.summary}</p>

                <ul className='mt-5 space-y-3'>
                  {story.bullets.map((bullet) => (
                    <li key={bullet} className='flex gap-3 text-sm leading-6 text-[var(--ink-muted)]'>
                      <span
                        className={`mt-2 h-2 w-2 flex-none rounded-full ${
                          index === 1 ? 'bg-[var(--primary)]' : 'bg-[var(--accent)]'
                        }`}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div>
            <PrimaryLink href='/work'>See Proof</PrimaryLink>
          </div>
        </div>
      </section>

      <section className='px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start'>
          <div className='space-y-6'>
            <SectionIntro
              eyebrow='Studio'
              title='One partner, one point of view, and a process designed to stay cohesive from strategy through launch.'
              copy='You work directly with the person shaping the message, the structure, and the build. That keeps communication tighter and the final result more resolved.'
            />

            <div className='grid gap-4'>
              {studioPrinciples.map((principle) => (
                <article
                  key={principle.title}
                  className='rounded-[1.8rem] border border-[var(--card-border)] bg-[color:var(--card-bg)] p-5 shadow-[var(--shadow-sm)]'>
                  <h3 className='text-2xl text-[var(--ink)]'>{principle.title}</h3>
                  <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>{principle.body}</p>
                </article>
              ))}
            </div>

            <PrimaryLink href='/studio'>Meet The Studio</PrimaryLink>
          </div>

          <div className='rounded-[2.4rem] border border-[var(--card-border)] bg-[color:var(--card-bg)] p-8 shadow-[var(--shadow-md)] sm:p-10'>
            <SectionIntro
              eyebrow='FAQ'
              title='The common questions are answered before the project starts.'
              copy='The aim here is to remove hesitation, not create more of it. A good-fit client should know exactly how this works.'
              className='max-w-none'
            />

            <div className='mt-8 grid gap-4'>
              {faqs.slice(0, 4).map((faq) => (
                <article
                  key={faq.question}
                  className='rounded-[1.6rem] border border-[var(--line-soft)] bg-[rgba(255,255,255,0.74)] p-5'>
                  <h3 className='text-2xl leading-tight text-[var(--ink)]'>{faq.question}</h3>
                  <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow='Start'
        title='If the business is ready for a stronger online presence, the next step should feel obvious.'
        copy='Choose the package that fits, place the $150 deposit, and move into a guided project flow that keeps the work clear from the first step.'
        href='/start'
        ctaLabel='Start With The Deposit'
      />
    </>
  );
}
