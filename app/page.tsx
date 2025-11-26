'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, LineChart, PenTool, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as any },
};

const smallFade = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.4, ease: [0.25, 0.8, 0.25, 1] as any },
};

export default function HomePage() {
  return (
    <div className='relative z-10'>
      {/* Hero */}
      <section className='px-0 pb-20 pt-24 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl'>
          <motion.div
            {...fadeInUp}
            className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/40 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur'>
            <span className='h-1.5 w-1.5 rounded-full bg-emerald-400' />
            Boutique web studio for founder led brands
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.05 }}
            className='mt-8 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center'>
            <div>
              <h1 className='text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl'>
                Quietly excellent business websites
                <span className='block text-slate-300'>without agency complexity.</span>
              </h1>

              <p className='mt-6 max-w-xl text-balance text-sm leading-relaxed text-slate-300/90 sm:text-base'>
                I design and build high converting, brand aligned websites for service based
                businesses that want a calm, premium experience instead of a crowded DIY site or an
                overpriced agency project.
              </p>

              <div className='mt-8 flex flex-wrap items-center gap-4'>
                <Button
                  asChild
                  size='lg'
                  className='group h-11 rounded-full bg-emerald-400 px-6 text-sm font-medium text-slate-900 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-300'>
                  <Link href='/start'>
                    Start with a $150 deposit
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5' />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='h-11 rounded-full border-slate-600/70 bg-slate-900/50 px-5 text-sm text-slate-100 hover:bg-slate-900'>
                  <Link href='#packages'>See packages and pricing</Link>
                </Button>
              </div>

              <div className='mt-6 flex flex-wrap gap-4 text-xs text-slate-400'>
                <div className='flex items-center gap-2'>
                  <ShieldCheck className='h-4 w-4 text-emerald-400' />
                  <span>Structured process and clear timelines</span>
                </div>
                <div className='flex items-center gap-2'>
                  <LineChart className='h-4 w-4 text-emerald-400' />
                  <span>Built for leads, bookings, and growth</span>
                </div>
              </div>
            </div>

            <div className='lg:justify-self-end'>
              <motion.div
                {...smallFade}
                transition={{ ...smallFade.transition, delay: 0.1 }}
                className='relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.75)] backdrop-blur'>
                <div className='absolute inset-x-10 top-0 h-20 bg-gradient-to-b from-emerald-500/20 to-transparent blur-2xl' />

                <header className='relative flex items-center justify-between gap-3'>
                  <div>
                    <p className='text-xs uppercase tracking-[0.22em] text-emerald-300/80'>
                      Client Journey
                    </p>
                    <h2 className='mt-1 text-sm font-medium text-slate-100'>
                      From unsure to confident in one guided build
                    </h2>
                  </div>
                  <span className='inline-flex items-center gap-1 rounded-full bg-slate-800/80 px-3 py-1 text-[10px] font-medium text-slate-200'>
                    Production calendar
                    <span className='h-1.5 w-1.5 rounded-full bg-emerald-400' />
                  </span>
                </header>

                <div className='relative mt-5 space-y-3 text-xs'>
                  {[
                    {
                      label: 'Step 1',
                      title: 'Discovery and intake',
                      body: 'You tell me about your business, audience, and goals. I turn that into a clear plan.',
                    },
                    {
                      label: 'Step 2',
                      title: 'Architecture and design',
                      body: 'We lock in the sitemap, wireframes, and visual direction so the build stays focused.',
                    },
                    {
                      label: 'Step 3',
                      title: 'Build, refine, launch',
                      body: 'You get check ins, a guided review, and a calm launch instead of a scramble.',
                    },
                  ].map((step, idx) => (
                    <div
                      key={step.title}
                      className='group relative flex gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-3 transition-colors hover:border-emerald-400/60'>
                      <div className='mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold text-emerald-300 ring-1 ring-slate-700/80 group-hover:ring-emerald-400/70'>
                        {idx + 1}
                      </div>
                      <div className='space-y-0.5'>
                        <p className='text-[11px] uppercase tracking-[0.26em] text-slate-400'>
                          {step.label}
                        </p>
                        <p className='text-xs font-medium text-slate-100'>{step.title}</p>
                        <p className='text-[11px] leading-relaxed text-slate-400'>{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <footer className='relative mt-4 flex items-center justify-between border-t border-slate-800/80 pt-4 text-[11px] text-slate-400'>
                  <span>Average build: 5 to 10 business days</span>
                  <span className='inline-flex items-center gap-1 rounded-full bg-slate-800/80 px-2.5 py-1 text-[10px] text-emerald-200'>
                    <Calendar className='h-3 w-3' />
                    Limited monthly slots
                  </span>
                </footer>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conversion paths */}
      <section
        id='paths'
        className='border-y border-slate-800/70 bg-slate-950/70 px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl space-y-8'>
          <motion.div {...fadeInUp} className='max-w-2xl space-y-3'>
            <p className='text-xs font-medium uppercase tracking-[0.3em] text-emerald-300'>
              Start here
            </p>
            <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
              Three clear ways to work together
            </h2>
            <p className='text-sm text-slate-300'>
              Choose the path that matches your situation. Each one ends with a single decision: pay
              a small deposit and get a clear plan.
            </p>
          </motion.div>

          <motion.div
            {...smallFade}
            transition={{ ...smallFade.transition, delay: 0.05 }}
            className='grid gap-5 md:grid-cols-3'>
            <CardPath
              label='Website build'
              title='I need a new site or a rebuild'
              icon={<PenTool className='h-4 w-4' />}
              bullets={[
                'Pick an Essentials, Growth, or Full Brand package',
                'Place a $150 project initiation deposit',
                'Complete a guided intake',
                'Book your kickoff call',
              ]}
              cta='Start with a $150 deposit'
            />

            <CardPath
              label='Custom project'
              title='I have a specific idea or app'
              icon={<Calendar className='h-4 w-4' />}
              bullets={[
                'Describe the idea and constraints',
                'Receive a tailored plan and price range',
                'Approve the scope',
                'Lock it in with a $150 scoping deposit',
              ]}
              cta='Begin custom scoping'
            />

            <CardPath
              label='Ongoing support'
              title='I want a trusted partner each month'
              icon={<LineChart className='h-4 w-4' />}
              bullets={[
                'Choose a maintenance or improvement tier',
                'Set up subscription billing',
                'Receive onboarding checklist',
                'Send your first request',
              ]}
              cta='Set up a care plan'
            />
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section id='packages' className='px-4 py-20 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl'>
          <motion.div {...fadeInUp} className='max-w-2xl space-y-3'>
            <p className='text-xs font-medium uppercase tracking-[0.3em] text-emerald-300'>
              Packages
            </p>
            <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
              Simple tiers, handcrafted execution
            </h2>
            <p className='text-sm text-slate-300'>
              Every project uses the same disciplined design system and production workflow. The
              only difference is scope and depth.
            </p>
          </motion.div>

          <motion.div
            {...smallFade}
            transition={{ ...smallFade.transition, delay: 0.05 }}
            className='mt-10 grid gap-5 md:grid-cols-3'>
            <TierCard
              name='Essentials'
              summary='A focused one page site that puts your offer, proof, and contact in one clear place.'
              ideal='Perfect when you need a credible, conversion ready home base quickly.'
              details={[
                'Single scrolling page',
                'Light copy editing for clarity',
                'Mobile first layout',
                'Contact or booking integration',
              ]}
              timeline='About 5 days'
            />

            <TierCard
              name='Growth'
              summary='A multi page build with custom visuals and a light CMS so your site can grow with you.'
              ideal='Ideal for studios, practices, and small teams ready to level up their presence.'
              details={[
                'Thoughtful sitemap and content strategy',
                'Custom visual treatments and interactions',
                'CMS for repeatable content',
                'Blog or resources section optional',
              ]}
              timeline='Around 10 days'
              highlighted
            />

            <TierCard
              name='Full Brand Build'
              summary='A fully custom, cinematic experience with deeper strategy, motion, and systems.'
              ideal='Best when your site is central to sales, launches, or positioning.'
              details={[
                'Brand aligned art direction',
                'Advanced motion and micro interactions',
                'Richer content systems and templates',
                'Launch support and documentation',
              ]}
              timeline='About 3 weeks'
            />
          </motion.div>

          <motion.div
            {...smallFade}
            transition={{ ...smallFade.transition, delay: 0.1 }}
            className='mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400'>
            <p>
              Most projects land between $2,000 and $8,000 depending on scope and integrations.
              Maintenance plans are available for ongoing support.
            </p>
            <Button
              asChild
              size='sm'
              className='rounded-full bg-slate-100 px-4 text-[11px] font-medium text-slate-900 hover:bg-white'>
              <Link href='/start'>Get a tailored range before you commit</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why this studio */}
      <section
        id='why'
        className='border-t border-slate-800/70 bg-slate-950/80 px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center'>
          <motion.div {...fadeInUp} className='space-y-4'>
            <p className='text-xs font-medium uppercase tracking-[0.3em] text-emerald-300'>
              Why founders book
            </p>
            <h2 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
              Calm, opinionated, and built for long term reputation
            </h2>
            <p className='text-sm text-slate-300'>
              The studio is intentionally small so your project never gets lost in a big agency
              pipeline. You get a clear partner who cares about the details as much as you do:
              structure, typography, page speed, and how the experience feels on a real phone in a
              real hand.
            </p>
            <div className='grid gap-4 text-sm text-slate-300 sm:grid-cols-2'>
              <div className='space-y-1.5'>
                <h3 className='flex items-center gap-2 text-sm font-medium text-slate-100'>
                  <span className='inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-[11px] text-emerald-300'>
                    1
                  </span>
                  Premium yet efficient
                </h3>
                <p className='text-xs leading-relaxed text-slate-400'>
                  Templates, component libraries, and internal systems keep timelines short while
                  the surface stays custom and considered.
                </p>
              </div>
              <div className='space-y-1.5'>
                <h3 className='flex items-center gap-2 text-sm font-medium text-slate-100'>
                  <span className='inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-[11px] text-emerald-300'>
                    2
                  </span>
                  Built on strategy
                </h3>
                <p className='text-xs leading-relaxed text-slate-400'>
                  Every layout reflects your offer, audience, and business model so the site is more
                  than just a new coat of paint.
                </p>
              </div>
              <div className='space-y-1.5'>
                <h3 className='flex items-center gap-2 text-sm font-medium text-slate-100'>
                  <span className='inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-[11px] text-emerald-300'>
                    3
                  </span>
                  Clear from first click
                </h3>
                <p className='text-xs leading-relaxed text-slate-400'>
                  The site itself models the experience your clients can expect: simple paths,
                  confident copy, and no mystery steps.
                </p>
              </div>
              <div className='space-y-1.5'>
                <h3 className='flex items-center gap-2 text-sm font-medium text-slate-100'>
                  <span className='inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-[11px] text-emerald-300'>
                    4
                  </span>
                  Designed for loyalty
                </h3>
                <p className='text-xs leading-relaxed text-slate-400'>
                  A launch is the beginning, not the end. Care plans, tune ups, and data informed
                  tweaks keep the site improving.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...smallFade}
            transition={{ ...smallFade.transition, delay: 0.05 }}
            className='lg:justify-self-end'>
            <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.9)] backdrop-blur'>
              <p className='text-xs font-medium uppercase tracking-[0.3em] text-emerald-300'>
                Next step
              </p>
              <h3 className='mt-3 text-sm font-semibold text-slate-100'>
                Ready for a site that actually reflects your business?
              </h3>
              <p className='mt-2 text-xs leading-relaxed text-slate-400'>
                Place a small deposit to reserve a spot on the calendar. You will receive a
                confirmation, a structured intake, and a clear kickoff call that turns your ideas
                into a plan.
              </p>
              <div className='mt-4 flex flex-col gap-2 text-xs text-slate-300'>
                <div className='flex items-center gap-2'>
                  <span className='h-1.5 w-1.5 rounded-full bg-emerald-400' />
                  <span>$150 applied to your project total</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className='h-1.5 w-1.5 rounded-full bg-emerald-400' />
                  <span>No obligation proposal after intake if the fit is not right</span>
                </div>
              </div>
              <Button
                asChild
                size='sm'
                className='mt-5 inline-flex w-full items-center justify-center rounded-full bg-emerald-400 text-xs font-medium text-slate-900 hover:bg-emerald-300'>
                <Link href='/start'>
                  Start with a $150 deposit
                  <ArrowRight className='ml-1.5 h-3.5 w-3.5' />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

type CardPathProps = {
  label: string;
  title: string;
  icon: React.ReactNode;
  bullets: string[];
  cta: string;
};

function CardPath({ label, title, icon, bullets, cta }: CardPathProps) {
  return (
    <div className='group flex h-full flex-col rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-sm shadow-black/40 transition hover:border-emerald-400/70 hover:shadow-[0_20px_55px_rgba(0,0,0,0.85)]'>
      <div className='flex items-center justify-between gap-3'>
        <p className='text-[11px] font-medium uppercase tracking-[0.26em] text-slate-400'>
          {label}
        </p>
        <span className='inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300'>
          {icon}
        </span>
      </div>
      <h3 className='mt-3 text-sm font-medium text-slate-100'>{title}</h3>
      <ul className='mt-3 flex-1 space-y-1.5 text-[11px] leading-relaxed text-slate-400'>
        {bullets.map((item) => (
          <li key={item} className='flex gap-2'>
            <span className='mt-[6px] h-1 w-1 flex-none rounded-full bg-emerald-300' />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Button
        asChild
        size='sm'
        className='mt-4 inline-flex items-center justify-between rounded-full bg-slate-900 text-[11px] font-medium text-slate-100 transition-colors group-hover:bg-slate-800 group-hover:text-slate-900'>
        <Link href='/start'>
          <span>{cta}</span>
          <ArrowRight className='ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5' />
        </Link>
      </Button>
    </div>
  );
}

type TierCardProps = {
  name: string;
  summary: string;
  ideal: string;
  details: string[];
  timeline: string;
  highlighted?: boolean;
};

function TierCard({ name, summary, ideal, details, timeline, highlighted }: TierCardProps) {
  return (
    <div
      className={[
        'flex h-full flex-col rounded-3xl border bg-slate-900/60 p-5 text-sm shadow-sm shadow-black/40 transition',
        highlighted
          ? 'border-emerald-400/80 bg-slate-900/80 shadow-[0_24px_65px_rgba(0,0,0,0.9)]'
          : 'border-slate-800/80 hover:border-emerald-400/60 hover:shadow-[0_20px_55px_rgba(0,0,0,0.85)]',
      ].join(' ')}>
      <div className='flex items-center justify-between gap-3'>
        <h3 className='text-sm font-semibold text-slate-100'>{name}</h3>
        {highlighted && (
          <span className='inline-flex items-center rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-medium text-emerald-200'>
            Most booked
          </span>
        )}
      </div>
      <p className='mt-3 text-xs leading-relaxed text-slate-300'>{summary}</p>
      <p className='mt-2 text-[11px] leading-relaxed text-slate-400'>{ideal}</p>
      <ul className='mt-4 space-y-1.5 text-[11px] leading-relaxed text-slate-400'>
        {details.map((item) => (
          <li key={item} className='flex gap-2'>
            <span className='mt-[6px] h-1 w-1 flex-none rounded-full bg-emerald-300' />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className='mt-4 flex items-center justify-between text-[11px] text-slate-400'>
        <span>Typical timeline: {timeline}</span>
      </div>
    </div>
  );
}
