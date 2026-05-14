import type { Metadata } from 'next';
import { SiteIconBadge } from '@/components/site/icon-suite';
import { requirePaidDepositAccess } from '@/lib/deposit/server';
import { PrimaryLink, SectionIntro } from '@/components/site/marketing';
import { getPackageBySlug, packageOffers } from '@/lib/site-content';
import { buildNoIndexMetadata } from '@/lib/seo';
import { getProjectIntakeByDepositId } from '@/lib/onboarding/intake';

export const metadata: Metadata = buildNoIndexMetadata({
  title: 'Intake',
  description: 'Project intake details for goals, content, brand direction, and logistics.',
  path: '/start/intake',
});
export const dynamic = 'force-dynamic';

type IntakeSearchParams = Promise<{
  intake?: string | string[];
}>;

const intakeIcons = ['business', 'pages', 'brand', 'logistics'] as const;

const fieldGroups = [
  {
    title: 'Business',
    description: 'What you offer, who you serve, and why people choose you.',
    fields: [
      {
        name: 'businessSummary',
        label: 'What does your business do in plain language?',
        placeholder: 'Example: We help busy homeowners keep their pools clean and ready to use year-round.',
        required: true,
      },
      {
        name: 'idealClient',
        label: 'Who is your ideal client/customer?',
        placeholder: 'Describe the people or businesses you most want to attract.',
        required: true,
      },
      {
        name: 'primaryOffer',
        label: 'What service or offer should the website emphasize most?',
        placeholder: 'List the main service/package and anything you want visitors to understand about it.',
        required: true,
      },
    ],
  },
  {
    title: 'Website goals',
    description: 'What the site needs to help people understand, trust, and do.',
    fields: [
      {
        name: 'primaryGoal',
        label: 'What should the website help accomplish?',
        placeholder: 'Example: More qualified consultation requests, clearer service explanations, better trust before booking.',
        required: true,
      },
      {
        name: 'primaryAction',
        label: 'What is the main action visitors should take?',
        placeholder: 'Book a call, submit a form, call the business, pay a deposit, visit a location, etc.',
        required: true,
      },
      {
        name: 'neededPages',
        label: 'What pages or sections do you think the site needs?',
        placeholder: 'Home, services, about, proof/testimonials, FAQ, contact, booking, legal, etc.',
        required: true,
      },
    ],
  },
  {
    title: 'Content + brand',
    description: 'What exists now and what direction should shape the site.',
    fields: [
      {
        name: 'currentWebsite',
        label: 'Current website, social links, or helpful profiles',
        placeholder: 'Paste any links Blake should review.',
      },
      {
        name: 'copyStatus',
        label: 'What is the status of your copy/content?',
        placeholder: 'Mostly final, rough notes, old website copy, need help from scratch, etc.',
        required: true,
      },
      {
        name: 'brandDirection',
        label: 'Brand direction, inspiration, and styles to avoid',
        placeholder: 'Share words, references, colors, sites you like/dislike, or anything that should guide the feel.',
      },
      {
        name: 'proofAssets',
        label: 'Proof, testimonials, reviews, or client wins',
        placeholder: 'Paste testimonials, review links, outcomes, screenshots, or describe proof you can provide.',
      },
    ],
  },
  {
    title: 'Logistics',
    description: 'Timing, integrations, ongoing support, and anything that could affect scope.',
    fields: [
      {
        name: 'integrations',
        label: 'Needed integrations or technical requirements',
        placeholder: 'Booking, CRM, forms, email marketing, payments, analytics, maps, domain/DNS, etc.',
      },
      {
        name: 'timeline',
        label: 'Timeline, deadlines, or availability constraints',
        placeholder: 'Target launch date, dates you are unavailable, events/campaigns driving timing.',
        required: true,
      },
      {
        name: 'carePlanInterest',
        label: 'Are you interested in ongoing care after launch?',
        placeholder: 'Yes, maybe, not right now — and what support would be useful.',
      },
      {
        name: 'additionalNotes',
        label: 'Anything else Blake should know before kickoff?',
        placeholder: 'Add context, concerns, constraints, or questions here.',
      },
    ],
  },
] as const;

const textareaClasses =
  'min-h-32 w-full rounded-[1.1rem] border border-[var(--input-border)] bg-white px-4 py-3 text-[15px] leading-7 text-[var(--ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition-colors placeholder:text-[var(--muted)] focus:border-[var(--input-border-focus)] focus:outline-none';

function getIntakeStatusMessage(value?: string) {
  if (value === 'validation') {
    return {
      title: 'A few required answers are missing.',
      body: 'Review the required fields and submit intake again.',
    };
  }

  if (value === 'error') {
    return {
      title: 'Intake could not be saved.',
      body: 'Please try again. If it keeps happening, contact Blake so the project does not get stuck.',
    };
  }

  return null;
}

export default async function IntakePage({ searchParams }: { searchParams: IntakeSearchParams }) {
  const deposit = await requirePaidDepositAccess();
  const selectedPackage = getPackageBySlug(deposit.packageSlug) ?? packageOffers[1];
  const params = await searchParams;
  const intakeParam = Array.isArray(params.intake) ? params.intake[0] : params.intake;
  const statusMessage = getIntakeStatusMessage(intakeParam);
  const existingIntake = await getProjectIntakeByDepositId(deposit.id).catch(() => null);
  const savedResponses = (existingIntake?.responses ?? {}) as Record<string, string>;

  return (
    <section className='px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-6xl space-y-8'>
        {statusMessage ? (
          <div className='rounded-[1.6rem] border border-[var(--line-strong)] bg-[var(--accent-soft)] px-5 py-4 text-sm leading-6 text-[var(--ink-muted)]'>
            <p className='font-semibold text-[var(--ink)]'>{statusMessage.title}</p>
            <p className='mt-1'>{statusMessage.body}</p>
          </div>
        ) : null}

        <SectionIntro
          as='h1'
          eyebrow='Intake'
          title='Share the details that will shape the project.'
          copy={`This intake helps turn your ${selectedPackage.name} package into a clear plan. Rough answers are okay — the goal is to get the right context in one place before kickoff.`}
        />

        <div className='grid gap-6 lg:grid-cols-4'>
          {[
            [
              'Business',
              'What you offer, who you serve, and what the website needs to help people do.',
            ],
            [
              'Pages',
              'Which pages matter most, what each one needs to communicate, and where stronger structure is needed.',
            ],
            [
              'Brand',
              'Your visual direction, tone, existing assets, and any website references worth reviewing.',
            ],
            [
              'Logistics',
              'Your target timing, needed integrations, and anything that could affect scope or pacing.',
            ],
          ].map(([title, body], index) => (
            <article
              key={title}
              className='rounded-[1.7rem] border border-[var(--line)] bg-[color:var(--panel)/0.82] p-5 shadow-[var(--shadow-md)]'>
              <SiteIconBadge
                icon={intakeIcons[index]}
                tone={index === 2 ? 'accent' : 'primary'}
                size='sm'
              />
              <h2 className='mt-4 text-2xl leading-tight text-[var(--ink)]'>{title}</h2>
              <p className='mt-3 text-sm leading-6 text-[var(--ink-muted)]'>{body}</p>
            </article>
          ))}
        </div>

        {existingIntake ? (
          <div className='rounded-[1.6rem] border border-[var(--line)] bg-[var(--panel)] px-5 py-4 text-sm leading-6 text-[var(--ink-muted)]'>
            <p className='font-semibold text-[var(--ink)]'>Intake has already been submitted.</p>
            <p className='mt-1'>You can update the answers below and resubmit if something changed before kickoff.</p>
          </div>
        ) : null}

        <form action='/start/intake/submit' method='POST' className='space-y-6'>
          {fieldGroups.map((group, groupIndex) => (
            <section
              key={group.title}
              className='rounded-[2rem] border border-[var(--line)] bg-[color:var(--panel)/0.84] p-6 shadow-[var(--shadow-md)] sm:p-7'>
              <div className='flex flex-wrap items-start justify-between gap-4'>
                <div>
                  <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]'>
                    0{groupIndex + 1}
                  </p>
                  <h2 className='mt-3 text-3xl leading-tight text-[var(--ink)]'>{group.title}</h2>
                  <p className='mt-3 max-w-2xl text-sm leading-7 text-[var(--ink-muted)]'>
                    {group.description}
                  </p>
                </div>
                <SiteIconBadge icon={intakeIcons[groupIndex]} tone={groupIndex === 2 ? 'accent' : 'primary'} />
              </div>

              <div className='mt-6 grid gap-5'>
                {group.fields.map((field) => (
                  <label key={field.name} className='grid gap-2 text-sm leading-6 text-[var(--ink-muted)]'>
                    <span className='font-medium text-[var(--ink)]'>
                      {field.label}
                      {'required' in field && field.required ? <span className='text-[var(--accent)]'> *</span> : null}
                    </span>
                    <textarea
                      name={field.name}
                      required={'required' in field ? field.required : false}
                      defaultValue={savedResponses[field.name] ?? ''}
                      className={textareaClasses}
                      placeholder={field.placeholder}
                    />
                  </label>
                ))}
              </div>
            </section>
          ))}

          <div className='rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-6'>
            <p className='text-sm leading-7 text-[var(--ink-muted)]'>
              Submit intake first, then book kickoff. Blake will use these answers to shape the working plan and flag anything missing before production begins.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <button
                type='submit'
                className='action-surface primary-cta inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-semibold tracking-[0.01em] shadow-[var(--shadow-sm)]'>
                Submit Intake
              </button>
              <PrimaryLink href='/start/kickoff'>Continue To Kickoff</PrimaryLink>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
