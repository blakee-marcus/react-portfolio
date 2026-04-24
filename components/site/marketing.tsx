import Link from 'next/link';
import type { ReactNode } from 'react';
import { SiteChipMark, SiteIcon } from '@/components/site/icon-suite';
import { cn } from '@/lib/utils';

const eyebrowClasses =
  'inline-flex items-center gap-3 rounded-full border border-[var(--line-soft)] bg-[color:var(--card-bg)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-strong)] shadow-[var(--shadow-sm)]';

const actionClasses =
  'action-surface inline-flex items-center justify-center rounded-full shadow-[var(--shadow-sm)]';

export function SectionIntro({
  eyebrow,
  title,
  copy,
  as = 'h2',
  className,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  as?: 'h1' | 'h2';
  className?: string;
}) {
  const Heading = as;

  return (
    <div className={cn('max-w-3xl space-y-5', className)}>
      <p className={eyebrowClasses}>
        <SiteChipMark icon='spark' tone='primary' />
        {eyebrow}
      </p>
      <Heading className='text-balance text-4xl leading-[0.92] text-[var(--ink)] sm:text-5xl md:text-6xl'>
        {title}
      </Heading>
      <p className='max-w-2xl text-base leading-8 text-[var(--ink-muted)] sm:text-lg'>{copy}</p>
    </div>
  );
}

export function PrimaryLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        `${actionClasses} primary-cta gap-2 whitespace-nowrap px-6 py-3.5 text-[15px] font-semibold tracking-[0.01em]`,
        className
      )}>
      {children}
      <SiteIcon icon='arrow-right' className='h-4 w-4' />
    </Link>
  );
}

export function SecondaryLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        `${actionClasses} secondary-cta whitespace-nowrap px-5 py-3.5 text-[15px] font-semibold tracking-[0.01em]`,
        className
      )}>
      {children}
    </Link>
  );
}

export function CtaBand({
  eyebrow,
  title,
  copy,
  href,
  ctaLabel,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  href: string;
  ctaLabel: string;
}) {
  return (
    <section className='px-4 py-20 sm:px-6 lg:px-8'>
      <div className='chrome-panel relative mx-auto max-w-6xl overflow-hidden rounded-[2.4rem] border border-[var(--card-border-strong)] bg-[linear-gradient(145deg,rgba(255,255,255,0.96)_0%,rgba(241,244,246,0.92)_52%,rgba(231,238,234,0.86)_100%)] p-8 shadow-[var(--shadow-lg)] sm:p-10'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute -right-20 top-0 h-48 w-48 rounded-full bg-[rgba(80,103,90,0.14)] blur-3xl'
        />
        <div className='relative grid gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(18rem,22rem)] lg:items-end'>
          <div className='space-y-5'>
            <p className={eyebrowClasses}>
              <SiteChipMark icon='spark' tone='accent' />
              {eyebrow}
            </p>
            <h2 className='max-w-3xl text-balance text-4xl leading-[0.92] text-[var(--ink)] sm:text-5xl'>
              {title}
            </h2>
            <p className='max-w-2xl text-base leading-8 text-[var(--ink-muted)] sm:text-lg'>{copy}</p>
            <PrimaryLink href={href}>{ctaLabel}</PrimaryLink>
          </div>

          <div className='chrome-panel rounded-[1.9rem] border border-white/70 bg-[rgba(255,255,255,0.82)] p-6 shadow-[var(--shadow-sm)]'>
            <p className='text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-strong)]'>
              What happens next
            </p>
            <ol className='mt-5 space-y-4'>
              {['Choose the package that fits', 'Place the $150 deposit', 'Move into intake and kickoff'].map(
                (step, index) => (
                  <li key={step} className='flex items-start gap-4'>
                    <span className='inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-[var(--line)] bg-[var(--primary-soft)] text-sm font-medium text-[var(--ink)]'>
                      {index + 1}
                    </span>
                    <p className='pt-1 text-sm leading-6 text-[var(--ink-muted)]'>{step}</p>
                  </li>
                )
              )}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
