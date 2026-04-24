'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SiteIcon } from '@/components/site/icon-suite';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/services', label: 'Packages' },
  { href: '/process', label: 'Process' },
  { href: '/work', label: 'Proof' },
  { href: '/studio', label: 'Studio' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenuPathname, setOpenMenuPathname] = useState<string | null>(null);
  const menuOpen = openMenuPathname === pathname;

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpenMenuPathname(null);
    }

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className='sticky top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8'>
      <div className='chrome-panel mx-auto max-w-6xl rounded-[1.75rem] border border-[var(--card-border)] bg-[color:rgba(255,255,255,0.94)] px-3 py-3 shadow-[var(--shadow-sm)] backdrop-blur-xl sm:rounded-full sm:px-5'>
        <div className='flex items-center justify-between gap-3'>
          <Link
            href='/'
            aria-label='Go to Blake Marcus Studio home'
            className='flex min-w-0 flex-1 items-center gap-3'>
            <span className='inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--line)] bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(231,238,234,0.9))] text-sm font-semibold text-[var(--ink)] shadow-[var(--shadow-sm)]'>
              BM
            </span>

            <span className='min-w-0'>
              <span className='block truncate text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--ink)]'>
                Blake Marcus
              </span>
              <span className='hidden truncate text-[10px] uppercase tracking-[0.24em] text-[var(--muted)] min-[430px]:block'>
                Strategy • Design • Build
              </span>
            </span>
          </Link>

          <nav className='hidden items-center gap-5 text-sm text-[var(--ink-muted)] sm:flex'>
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-full px-3 py-2 transition-colors duration-150 hover:bg-[var(--panel-strong)] hover:text-[var(--ink)]',
                    active && 'bg-[var(--panel-strong)] text-[var(--ink)]',
                  )}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className='flex shrink-0 items-center gap-2'>
            <Link
              href='/start'
              className='action-surface header-cta inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full px-4 text-[14px] font-semibold tracking-[0.02em] sm:px-5 sm:text-[15px]'>
              Start
            </Link>

            <button
              type='button'
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls='mobile-site-nav'
              onClick={() =>
                setOpenMenuPathname((current) => (current === pathname ? null : pathname))
              }
              className='action-surface inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.76)] px-3 text-[14px] font-semibold text-[var(--ink)] shadow-[var(--shadow-sm)] sm:hidden'>
              <SiteIcon icon={menuOpen ? 'x' : 'menu'} className='h-4 w-4' />
              <span className='hidden min-[390px]:inline'>{menuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>

        <div
          id='mobile-site-nav'
          className={cn(
            'grid transition-[grid-template-rows,opacity,margin] duration-200 ease-out sm:hidden',
            menuOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0',
          )}>
          <div className='overflow-hidden'>
            <div className='rounded-[1.35rem] border border-[var(--line-soft)] bg-[rgba(255,255,255,0.72)] p-2'>
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex min-h-12 items-center justify-between rounded-[1rem] px-4 text-[15px] font-semibold text-[var(--ink-muted)] transition-colors duration-150',
                      'hover:bg-[var(--panel-strong)] hover:text-[var(--ink)]',
                      active && 'bg-[var(--panel-strong)] text-[var(--ink)]',
                    )}>
                    {link.label}
                    {active && (
                      <span className='text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]'>
                        Current
                      </span>
                    )}
                  </Link>
                );
              })}

              <Link
                href='/start'
                className='action-surface mt-2 flex min-h-12 items-center justify-center rounded-full px-4 text-[15px] font-semibold tracking-[0.02em]'>
                Start the project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
