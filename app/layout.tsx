import Link from 'next/link';
import React from 'react';
import { SiteChipMark } from '@/components/site/icon-suite';
import { SiteHeader } from '@/components/site/site-header';
import { StructuredData } from '@/components/site/structured-data';
import { rootMetadata, siteSchema } from '@/lib/seo';
import './globals.css';

export const metadata = rootMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en-US' className='h-full'>
      <body className='min-h-screen bg-[var(--bg)] text-[var(--ink)] antialiased'>
        <StructuredData data={siteSchema} />
        <div className='relative z-10 flex min-h-screen flex-col'>
          <SiteHeader />

          <main className='flex-1'>{children}</main>

          <footer className='px-4 pb-8 pt-16 sm:px-6 sm:pt-20 lg:px-8'>
            <div className='chrome-panel mx-auto grid max-w-6xl gap-10 rounded-[2.2rem] border border-[var(--card-border)] bg-[color:var(--card-bg)] px-6 py-8 shadow-[var(--shadow-md)] sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:items-end'>
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
                  <Link
                    href='/work'
                    className='transition-colors duration-200 hover:text-[var(--ink)]'>
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
