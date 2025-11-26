'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, LayoutTemplate, Sparkles, LifeBuoy, ShieldCheck, Clock } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: [0.22, 0.61, 0.36, 1] },
};

type PathKey = 'website' | 'custom' | 'support';

const PATHS: {
  key: PathKey;
  label: string;
  title: string;
  icon: React.ReactNode;
  idealFor: string;
  summary: string;
  steps: string[];
  ctaLabel: string;
  href: string;
}[] = [
  {
    key: 'website',
    label: 'Path 1',
    title: 'Website build',
    icon: <LayoutTemplate className='h-4 w-4' />,
    idealFor: 'You need a high converting business site with a clear story.',
    summary:
      'Pick a package, place a small deposit, and move into a guided build with clear milestones.',
    steps: [
      'Select the website package that fits your stage.',
      'Place a $150 project initiation deposit to reserve your spot.',
      'Complete the intake form so I can review your brand and goals.',
      'Book your kickoff call to confirm scope and timeline.',
    ],
    ctaLabel: 'Start with a $150 deposit',
    href: '/start/deposit?path=website',
  },
  {
    key: 'custom',
    label: 'Path 2',
    title: 'Custom project',
    icon: <Sparkles className='h-4 w-4' />,
    idealFor: 'You have a specific idea or product and want a tailored plan.',
    summary:
      'Share the idea, receive a scoped proposal, then confirm with a focused scoping deposit.',
    steps: [
      'Describe your idea and what needs to exist online.',
      'Receive a tailored plan with options and pricing bands.',
      'Confirm the direction and place a $150 scoping deposit.',
      'Book your kickoff call to refine flows and success measures.',
    ],
    ctaLabel: 'Begin with a $150 scoping deposit',
    href: '/start/deposit?path=custom',
  },
  {
    key: 'support',
    label: 'Path 3',
    title: 'Ongoing support',
    icon: <LifeBuoy className='h-4 w-4' />,
    idealFor: 'You already have a site and want reliable, premium care.',
    summary:
      'Choose a care plan, set up billing, and get a clear onboarding checklist for the first month.',
    steps: [
      'Pick the maintenance tier that fits how often you update.',
      'Set up subscription billing for hands off ongoing care.',
      'Receive your onboarding checklist and submission link.',
      'Send your first task and get it into the queue.',
    ],
    ctaLabel: 'Subscribe and get onboarded',
    href: '/start/deposit?path=support',
  },
];

export default function StartPage() {
  return (
    <main className='min-h-screen bg-slate-950 text-slate-50'>
      <div className='mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-24 lg:flex-row lg:gap-16 lg:px-6 lg:pt-28'>
        {/* Left column: framing and reassurance */}
        <motion.section
          className='max-w-xl space-y-6 lg:sticky lg:top-28 lg:self-start'
          initial='initial'
          animate='animate'
          variants={fadeInUp}>
          <p className='text-[11px] font-medium uppercase tracking-[0.26em] text-emerald-300/80'>
            Start a project
          </p>
          <h1 className='text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl'>
            A clear way to begin working together.
          </h1>
          <p className='text-sm leading-relaxed text-slate-300'>
            Choose the path that matches where you are, place a small deposit, and move straight
            into a structured build instead of a vague proposal loop.
          </p>

          <div className='rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-4 text-xs text-emerald-100 shadow-sm shadow-emerald-900/40 sm:text-[13px]'>
            <div className='mb-2 flex items-center gap-2'>
              <ShieldCheck className='h-4 w-4' />
              <span className='font-medium uppercase tracking-[0.14em] text-emerald-200'>
                How the $150 deposit works
              </span>
            </div>
            <p className='text-emerald-100/90'>
              Your deposit reserves a spot on the production calendar and unlocks the detailed
              intake form and kickoff scheduling. It is credited toward your final project fee, not
              an extra charge.
            </p>
          </div>

          <div className='flex flex-wrap items-center gap-4 text-[11px] text-slate-400'>
            <div className='inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/90 px-3 py-1'>
              <Clock className='h-3.5 w-3.5' />
              <span>
                Typical timelines range from 5 days for essentials to 3 weeks for full builds.
              </span>
            </div>
            <p>Clear milestones, steady communication, and a defined end point.</p>
          </div>
        </motion.section>

        {/* Right column: three guided paths */}
        <section className='flex-1'>
          <div className='grid gap-4 md:grid-cols-1'>
            {PATHS.map((path, index) => (
              <motion.article
                key={path.key}
                className='group flex flex-col rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.75)] backdrop-blur-sm transition hover:border-emerald-400/80 hover:shadow-[0_24px_65px_rgba(0,0,0,0.88)]'
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 * (index + 1),
                  duration: 0.3,
                  ease: [0.22, 0.61, 0.36, 1],
                }}>
                <div className='flex items-center justify-between gap-3'>
                  <p className='text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400'>
                    {path.label}
                  </p>
                  <span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300'>
                    {path.icon}
                  </span>
                </div>

                <h2 className='mt-3 text-sm font-semibold text-slate-50 sm:text-base'>
                  {path.title}
                </h2>
                <p className='mt-1 text-[12px] leading-relaxed text-slate-300'>{path.idealFor}</p>
                <p className='mt-2 text-[12px] leading-relaxed text-slate-400'>{path.summary}</p>

                <ul className='mt-3 space-y-1.5 text-[11px] leading-relaxed text-slate-300'>
                  {path.steps.map((step) => (
                    <li key={step} className='flex gap-2'>
                      <span className='mt-[5px] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500 group-hover:bg-emerald-400' />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>

                <div className='mt-4 flex items-center justify-between gap-3'>
                  <Link
                    href={path.href}
                    className='inline-flex items-center gap-2 rounded-full border border-emerald-400/80 bg-emerald-500 px-4 py-2 text-[12px] font-medium text-slate-950 shadow-md shadow-emerald-900/50 transition hover:border-emerald-300 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'>
                    <span>{path.ctaLabel}</span>
                    <ArrowRight className='h-3.5 w-3.5' />
                  </Link>
                  <p className='hidden text-[11px] text-slate-400 sm:block'>
                    No obligation beyond the deposit until we confirm scope together.
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Under card reassurance strip */}
          <div className='mt-5 rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3 text-[11px] text-slate-400'>
            <p>
              Not sure which path is right for you yet? You can start with the custom project path,
              describe your situation in plain language, and I will recommend the simplest option
              that fits.
            </p>
          </div>
        </section>
      </div>

      {/* Process overview strip */}
      <section className='border-t border-slate-800/80 bg-slate-950/95'>
        <div className='mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-6'>
          <div className='max-w-md space-y-2'>
            <p className='text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500'>
              What happens after you click start
            </p>
            <p className='text-sm text-slate-200'>
              Every path flows into the same structured process: deposit, intake, kickoff, then
              build and launch with defined milestones.
            </p>
          </div>
          <ol className='grid flex-1 gap-4 text-[11px] text-slate-300 sm:grid-cols-4'>
            {[
              'Pay a $150 deposit that reserves your spot.',
              'Receive confirmation, intake form, and a short overview video.',
              'Book your kickoff call to align goals, scope, and pacing.',
              'Move through a clear build process with check-ins and a defined launch.',
            ].map((step, index) => (
              <li key={step} className='flex flex-col gap-1'>
                <span className='inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-[11px] font-medium text-slate-200'>
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
