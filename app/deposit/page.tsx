import Link from 'next/link';
import type { Metadata } from 'next';
import { PrimaryLink, SectionIntro } from '@/components/site/marketing';
import { getPackageBySlug, packageOffers } from '@/lib/site-content';
import { buildNoIndexMetadata } from '@/lib/seo';

export const metadata: Metadata = buildNoIndexMetadata({
  title: 'Deposit',
  description:
    'Reserve your project with the $150 deposit and move into intake, kickoff, and onboarding.',
  path: '/deposit',
});

type DepositSearchParams = Promise<{
  package?: string | string[];
}>;

export default async function DepositPage({ searchParams }: { searchParams: DepositSearchParams }) {
  const params = await searchParams;
  const packageParam = Array.isArray(params.package) ? params.package[0] : params.package;
  const selectedPackage = getPackageBySlug(packageParam) ?? packageOffers[1];
  const checkoutHref = `/api/checkout/deposit?package=${selectedPackage.slug}`;

  return (
    <>
      <section className='px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,24rem)] lg:items-start'>
          <div className='space-y-8'>
            <SectionIntro
              as='h1'
              eyebrow='Deposit'
              title='Reserve your project with the $150 deposit.'
              copy='This is the step that turns interest into an active project. Your deposit secures your spot, applies to your total fee, and moves you into intake and kickoff.'
            />

            <div className='rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-6 shadow-[var(--shadow-md)]'>
              <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>
                Selected package
              </p>
              <h2 className='mt-4 text-3xl leading-tight text-[var(--ink)]'>
                {selectedPackage.name}
              </h2>
              <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>
                {selectedPackage.summary}
              </p>

              <div className='mt-6 grid gap-4 sm:grid-cols-2'>
                <div className='rounded-[1.4rem] border border-[var(--line)] bg-[var(--panel)] px-5 py-4'>
                  <p className='text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]'>
                    Starting investment
                  </p>
                  <p className='mt-2 text-sm font-medium text-[var(--ink)]'>
                    {selectedPackage.startingPrice}
                  </p>
                </div>

                <div className='rounded-[1.4rem] border border-[var(--line)] bg-[var(--panel)] px-5 py-4'>
                  <p className='text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]'>
                    Estimated timeline
                  </p>
                  <p className='mt-2 text-sm font-medium text-[var(--ink)]'>
                    {selectedPackage.timeline}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className='rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.86] p-6 shadow-[var(--shadow-md)]'>
            <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>
              Deposit summary
            </p>
            <h2 className='mt-4 text-4xl leading-none text-[var(--ink)]'>$150</h2>
            <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>
              Applied in full to your project total. This is not an extra fee. It is the first paid
              step of the project.
            </p>

            <ul className='mt-6 space-y-4'>
              {[
                'Reserves your place in the production schedule',
                'Unlocks the intake form and kickoff scheduling',
                'Moves the project into a confirmed onboarding flow',
              ].map((item) => (
                <li key={item} className='flex gap-3 text-sm leading-6 text-[var(--ink-muted)]'>
                  <span className='mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent-strong)]' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className='mt-8'>
              <PrimaryLink href={checkoutHref} className='w-full'>
                Pay The $150 Deposit
              </PrimaryLink>
            </div>

            <p className='mt-4 text-xs leading-6 text-[var(--muted)]'>
              After payment, you will receive confirmation, intake, kickoff scheduling, and your
              onboarding steps.
            </p>

            <Link
              href='/start'
              className='mt-4 inline-flex text-sm font-medium text-[var(--ink)] underline decoration-[var(--line-strong)] underline-offset-4'>
              Back to package selection
            </Link>
          </aside>
        </div>
      </section>

      <section className='border-y border-[var(--line)] bg-[color:var(--panel)/0.55] px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start'>
          <SectionIntro
            eyebrow='What happens next'
            title='Once payment is complete, the project moves forward right away.'
            copy='You should know exactly what happens after checkout. The next steps are designed to feel organized, clear, and easy to follow.'
          />

          <div className='grid gap-4 sm:grid-cols-2'>
            {[
              [
                '01',
                'Confirmation',
                'You receive a receipt and a welcome note confirming that your project is officially underway.',
              ],
              [
                '02',
                'Intake',
                'You share your goals, references, content, and priorities through one guided form.',
              ],
              [
                '03',
                'Kickoff',
                'You book your kickoff call to confirm scope, timeline, and the remaining project fee.',
              ],
              [
                '04',
                'Onboarding',
                'You get a clear handoff into the project with communication expectations, milestones, and next steps.',
              ],
            ].map(([number, title, body]) => (
              <article
                key={title}
                className='rounded-[1.6rem] border border-[var(--line)] bg-[var(--panel)] p-5'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]'>
                  Step {number}
                </p>
                <h2 className='mt-3 text-2xl leading-tight text-[var(--ink)]'>{title}</h2>
                <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-8 shadow-[var(--shadow-md)] sm:p-10'>
          <SectionIntro
            eyebrow='Why this step exists'
            title='The deposit works because the process around it is clear.'
            copy='A good-fit client should understand what the deposit does, what it unlocks, and what happens next. That clarity makes the decision feel straightforward, not risky.'
          />
        </div>
      </section>
    </>
  );
}
