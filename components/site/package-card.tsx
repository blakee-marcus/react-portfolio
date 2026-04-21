import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PackageOffer } from '@/lib/site-content';

export function PackageCard({
  offer,
  href,
  ctaLabel,
  compact = false,
}: {
  offer: PackageOffer;
  href?: string;
  ctaLabel?: string;
  compact?: boolean;
}) {
  const actionClasses =
    'action-surface inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.84)] px-4 py-2.5 text-[15px] font-semibold tracking-[0.01em] text-[var(--button-secondary-text)]';

  return (
    <article
      className={cn(
        'chrome-panel relative flex h-full flex-col overflow-hidden rounded-[2.2rem] border p-6 shadow-[var(--shadow-md)]',
        offer.featured
          ? 'border-[var(--card-border-strong)] bg-[linear-gradient(160deg,rgba(255,255,255,0.98)_0%,rgba(231,238,234,0.92)_100%)]'
          : 'border-[var(--card-border)] bg-[linear-gradient(160deg,rgba(255,255,255,0.96)_0%,rgba(248,250,251,0.92)_100%)]',
      )}>
      <div
        aria-hidden='true'
        className={cn(
          'absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent to-transparent',
          offer.featured
            ? 'via-[rgba(80,103,90,0.4)]'
            : 'via-[rgba(138,106,82,0.32)]',
        )}
      />

      <div className='flex items-start justify-between gap-4'>
        <div className='space-y-3'>
          <p className='text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-strong)]'>
            {offer.eyebrow}
          </p>

          <div className='space-y-2'>
            <h3 className='text-3xl leading-none text-[var(--ink)]'>{offer.name}</h3>
            <p className='text-sm font-medium text-[var(--accent)]'>{offer.startingPrice}</p>
          </div>
        </div>

        {offer.featured ? (
          <span className='rounded-full border border-[var(--line)] bg-[var(--primary-soft)] px-3 py-1 text-[11px] font-medium text-[var(--badge-primary-text)]'>
            Recommended
          </span>
        ) : null}
      </div>

      <p className='mt-5 text-base leading-7 text-[var(--ink-muted)]'>{offer.summary}</p>

      <div className='mt-5 rounded-[1.4rem] border border-[var(--line-soft)] bg-[rgba(255,255,255,0.74)] px-4 py-4'>
        <p className='text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-strong)]'>
          Best for
        </p>
        <p className='mt-2 text-sm leading-6 text-[var(--ink-muted)]'>{offer.idealFor}</p>
      </div>

      <ul className='mt-6 space-y-3 pl-0 text-sm text-[var(--ink-muted)]'>
        {offer.includes.slice(0, compact ? 3 : offer.includes.length).map((item) => (
          <li key={item} className='flex gap-3'>
            <span className='mt-2 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]'>
              <span className='h-1.5 w-1.5 rounded-full bg-current' />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className='mt-auto pt-6'>
        <div className='flex items-center justify-between gap-4 border-t border-[var(--line-soft)] pt-5'>
          <p className='text-sm text-[var(--muted-strong)]'>{offer.timeline}</p>

          {href && ctaLabel ? (
            <Link
              href={href}
              className={`${actionClasses} hover:bg-[var(--panel-strong)]`}>
              {ctaLabel}
              <ArrowRight className='h-4 w-4' />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
