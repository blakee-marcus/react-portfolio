import Link from 'next/link';
import type { Metadata } from 'next';
import {
  packageIconsBySlug,
  SiteIconBadge,
  SiteListMark,
} from '@/components/site/icon-suite';
import { depositAmountLabel, isDepositSystemConfigured } from '@/lib/deposit';
import { SectionIntro } from '@/components/site/marketing';
import { buildNoIndexMetadata } from '@/lib/seo';
import { getPackageBySlug, packageOffers } from '@/lib/site-content';

export const metadata: Metadata = buildNoIndexMetadata({
  title: 'Deposit',
  description:
    'Reserve your project with the $150 deposit and move into intake, kickoff, and onboarding.',
  path: '/deposit',
});

const depositSummaryIcons = ['deposit', 'intake', 'onboarding'] as const;
const nextStepIcons = ['proof', 'intake', 'kickoff', 'onboarding'] as const;

type DepositSearchParams = Promise<{
  package?: string | string[];
  checkout?: string | string[];
}>;

const checkoutMessages = {
  cancelled: {
    title: 'Checkout was cancelled.',
    body: 'No charge was made. You can restart the deposit whenever you are ready.',
  },
  unavailable: {
    title: 'Checkout is not available right now.',
    body: 'The payment system is not fully configured for this environment yet.',
  },
  error: {
    title: 'Checkout could not be started.',
    body: 'Please try again. If it keeps failing, use the support page and we can handle the next step directly.',
  },
  invalid: {
    title: 'Choose a package before paying.',
    body: 'The selected package was not recognized, so the deposit flow reset to a valid option.',
  },
  validation: {
    title: 'Complete the required fields first.',
    body: 'Enter your contact details and acknowledge the deposit policy before continuing to Stripe Checkout.',
  },
  restricted: {
    title: 'That access link is no longer active.',
    body: 'Use the deposit form again to continue, or reopen the most recent confirmation link after payment.',
  },
  processing: {
    title: 'Payment is still processing.',
    body: 'Stripe has the checkout session, but the deposit is not marked as paid yet. Check your receipt email and reopen the confirmation link once payment finishes.',
  },
} as const;

export default async function DepositPage({ searchParams }: { searchParams: DepositSearchParams }) {
  const params = await searchParams;
  const packageParam = Array.isArray(params.package) ? params.package[0] : params.package;
  const checkoutParam = Array.isArray(params.checkout) ? params.checkout[0] : params.checkout;
  const selectedPackage = getPackageBySlug(packageParam) ?? packageOffers[1];
  const checkoutAvailable = isDepositSystemConfigured();
  const checkoutMessage =
    checkoutParam && checkoutParam in checkoutMessages
      ? checkoutMessages[checkoutParam as keyof typeof checkoutMessages]
      : !checkoutAvailable
        ? checkoutMessages.unavailable
        : null;
  const inputClasses =
    'min-h-12 w-full rounded-[1.1rem] border border-[var(--input-border)] bg-white px-4 py-3 text-[15px] text-[var(--ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition-colors placeholder:text-[var(--muted)] focus:border-[var(--input-border-focus)]';
  const labelClasses = 'grid gap-2 text-sm leading-6 text-[var(--ink-muted)]';

  return (
    <>
      <section className='px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,24rem)] lg:items-start'>
          <div className='space-y-8'>
            {checkoutMessage ? (
              <div className='rounded-[1.6rem] border border-[var(--line-strong)] bg-[var(--accent-soft)] px-5 py-4 text-sm leading-6 text-[var(--ink-muted)]'>
                <p className='font-semibold text-[var(--ink)]'>{checkoutMessage.title}</p>
                <p className='mt-1'>{checkoutMessage.body}</p>
              </div>
            ) : null}

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
              <div className='mt-4 flex items-start gap-4'>
                <SiteIconBadge icon={packageIconsBySlug[selectedPackage.slug]} tone='primary' />
                <h2 className='text-3xl leading-tight text-[var(--ink)]'>{selectedPackage.name}</h2>
              </div>
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
            <h2 className='mt-4 text-4xl leading-none text-[var(--ink)]'>{depositAmountLabel}</h2>
            <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>
              Applied in full to your project total. This is not an extra fee. It is the first paid
              step of the project.
            </p>

            <ul className='mt-6 space-y-4'>
              {[
                'Reserves your place in the production schedule',
                'Unlocks the intake form and kickoff scheduling',
                'Moves the project into a confirmed onboarding flow',
              ].map((item, index) => (
                <li key={item} className='flex gap-3 text-sm leading-6 text-[var(--ink-muted)]'>
                  <SiteListMark icon={depositSummaryIcons[index]} tone='accent' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className='mt-8'>
              <form action='/api/checkout/deposit' method='POST'>
                <input type='hidden' name='package' value={selectedPackage.slug} />

                <div className='grid gap-4'>
                  <label className={labelClasses}>
                    <span className='font-medium text-[var(--ink)]'>Your name</span>
                    <input
                      type='text'
                      name='fullName'
                      autoComplete='name'
                      required
                      className={inputClasses}
                      placeholder='Blake Marcus'
                    />
                  </label>

                  <label className={labelClasses}>
                    <span className='font-medium text-[var(--ink)]'>Email address</span>
                    <input
                      type='email'
                      name='email'
                      autoComplete='email'
                      required
                      className={inputClasses}
                      placeholder='you@business.com'
                    />
                  </label>

                  <label className={labelClasses}>
                    <span className='font-medium text-[var(--ink)]'>Business name</span>
                    <input
                      type='text'
                      name='businessName'
                      autoComplete='organization'
                      required
                      className={inputClasses}
                      placeholder='Studio Name'
                    />
                  </label>

                  <label className='flex items-start gap-3 rounded-[1.2rem] border border-[var(--line)] bg-[var(--panel)] px-4 py-4 text-sm leading-6 text-[var(--ink-muted)]'>
                    <input
                      type='checkbox'
                      name='acknowledgePolicy'
                      value='on'
                      required
                      className='mt-1 h-4 w-4 rounded border-[var(--input-border)] text-[var(--primary)]'
                    />
                    <span>
                      I understand this deposit reserves my project slot and is applied to the
                      total project fee.
                    </span>
                  </label>
                </div>

                <button
                  type='submit'
                  disabled={!checkoutAvailable}
                  className='action-surface primary-cta mt-5 inline-flex w-full cursor-pointer items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-semibold tracking-[0.01em] shadow-[var(--shadow-sm)] disabled:cursor-not-allowed disabled:opacity-60'>
                  Pay The {depositAmountLabel} Deposit
                </button>
              </form>
            </div>

            <p className='mt-4 text-xs leading-6 text-[var(--muted)]'>
              You will be redirected to secure Stripe Checkout after this step. Stripe sends the
              receipt, and the paid deposit unlocks your intake and kickoff flow.
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
            ].map(([number, title, body], index) => (
              <article
                key={title}
                className='rounded-[1.6rem] border border-[var(--line)] bg-[var(--panel)] p-5'>
                <div className='flex items-start justify-between gap-4'>
                  <SiteIconBadge icon={nextStepIcons[index]} tone='primary' size='sm' />
                  <p className='text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]'>
                    Step {number}
                  </p>
                </div>
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
