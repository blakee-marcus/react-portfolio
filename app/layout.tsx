import Link from 'next/link';
import React from 'react';
import { SiteChipMark, SiteIcon } from '@/components/site/icon-suite';
import { StructuredData } from '@/components/site/structured-data';
import { rootMetadata, siteSchema } from '@/lib/seo';
import './globals.css';

export const metadata = rootMetadata;

const navLinks = [
  { href: '/services', label: 'Packages' },
  { href: '/process', label: 'Process' },
  { href: '/work', label: 'Proof' },
  { href: '/studio', label: 'Studio' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en-US' className='h-full'>
      <body className='min-h-screen bg-[var(--bg)] text-[var(--ink)] antialiased'>
        <StructuredData data={siteSchema} />
        <div className='relative z-10 flex min-h-screen flex-col'>
          <header className='sticky top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8'>
            <div className='chrome-panel mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-[1.75rem] border border-[var(--card-border)] bg-[color:rgba(255,255,255,0.9)] px-3 py-3 shadow-[var(--shadow-sm)] sm:gap-6 sm:rounded-full sm:px-5'>
              <Link href='/' className='flex items-center gap-3'>
                <span className='inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(231,238,234,0.9))] text-sm font-semibold text-[var(--ink)] shadow-[var(--shadow-sm)]'>
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

              <nav className='relative flex items-center gap-2 text-sm text-[var(--ink-muted)] sm:gap-5'>
                <details className='group relative sm:hidden'>
                  <summary className='menu-summary action-surface inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.76)] px-3 py-2.5 text-[14px] font-semibold text-[var(--ink)] shadow-[var(--shadow-sm)]'>
                    <SiteIcon icon='menu' className='h-4 w-4' />
                    Menu
                  </summary>

                  <div className='chrome-panel absolute right-0 top-[calc(100%+0.75rem)] w-[min(18rem,calc(100vw-2rem))] rounded-[1.5rem] border border-[var(--card-border)] bg-[rgba(255,255,255,0.94)] p-2 shadow-[var(--shadow-md)]'>
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className='block rounded-[1.1rem] px-4 py-3 text-[15px] font-medium text-[var(--ink-muted)] transition-colors duration-150 hover:bg-[var(--panel-strong)] hover:text-[var(--ink)]'>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </details>

                <div className='hidden items-center gap-3 sm:flex sm:gap-5'>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className='rounded-full px-3 py-2 transition-colors duration-150 hover:bg-[var(--panel-strong)] hover:text-[var(--ink)]'>
                      {link.label}
                    </Link>
                  ))}
                </div>

                <Link
                  href='/start'
                  className='action-surface header-cta inline-flex min-w-[5.25rem] items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-[15px] font-semibold tracking-[0.02em]'>
                  Start
                </Link>
              </nav>
            </div>
          </header>

          <main className='flex-1 pt-4'>{children}</main>

          <footer className='px-4 pb-6 pt-4 sm:px-6 lg:px-8'>
            <div className='chrome-panel mx-auto grid max-w-6xl gap-8 rounded-[2.2rem] border border-[var(--card-border)] bg-[color:var(--card-bg)] px-6 py-8 shadow-[var(--shadow-md)] sm:px-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:items-end'>
              <div className='space-y-4'>
                <p className='inline-flex items-center gap-3 rounded-full border border-[var(--line-soft)] bg-[rgba(255,255,255,0.78)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-strong)]'>
                  <SiteChipMark icon='spark' tone='accent' />
                  Blake Marcus Studio
                </p>
                <p className='max-w-xl text-sm leading-7 text-[var(--ink-muted)]'>
                  Premium, brand-aligned websites for founder-led service businesses that want a
                  clearer presence, stronger positioning, and a process that does not drag.
                </p>
              </div>

              <div className='space-y-4 text-sm text-[var(--ink-muted)]'>
                <div className='flex flex-wrap gap-x-5 gap-y-2'>
                  <Link
                    href='/services'
                    className='transition-colors duration-200 hover:text-[var(--ink)]'>
                    Packages
                  </Link>
                  <Link
                    href='/process'
                    className='transition-colors duration-200 hover:text-[var(--ink)]'>
                    Process
                  </Link>
                  <Link href='/work' className='transition-colors duration-200 hover:text-[var(--ink)]'>
                    Proof
                  </Link>
                  <Link
                    href='/studio'
                    className='transition-colors duration-200 hover:text-[var(--ink)]'>
                    Studio
                  </Link>
                  <Link
                    href='/legal'
                    className='transition-colors duration-200 hover:text-[var(--ink)]'>
                    Legal
                  </Link>
                </div>
                <p className='text-xs leading-6 text-[var(--muted)]'>
                  Las Vegas based. Working with founder-led service businesses across Nevada and
                  nationwide.
                </p>
                <p className='text-xs text-[var(--muted)]'>
                  © {new Date().getFullYear()} Blake Marcus Studio
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
