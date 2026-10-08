import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { IBM_Plex_Sans, Newsreader } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { SiteHeader } from '@/components/site/site-header';
import { StructuredData } from '@/components/site/structured-data';
import { rootMetadata, siteSchema } from '@/lib/seo';
import './globals.css';

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata = rootMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en-US' className={`h-full ${newsreader.variable} ${ibmPlexSans.variable}`}>
      <body className='min-h-screen bg-[var(--bg)] text-[var(--ink)] antialiased'>
        <StructuredData data={siteSchema} />
        <a
          href='#main-content'
          className='skip-link'>
          Skip to main content
        </a>
        <div className='relative z-10 flex min-h-screen flex-col'>
          <SiteHeader />
          <main id='main-content' tabIndex={-1} className='flex-1'>
            {children}
          </main>
          <footer className='border-t border-[var(--line)] px-5 py-10 sm:px-8 lg:px-12'>
            <div className='mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[var(--ink-muted)] sm:flex-row sm:items-end sm:justify-between'>
              <div>
                <p className='font-semibold uppercase tracking-[0.16em] text-[var(--ink)]'>Blake Marcus Studio</p>
                <p className='mt-2'>Based in Honolulu, Hawaii. Working with clients nationwide.</p>
              </div>
              <nav aria-label='Footer navigation' className='flex flex-wrap items-center gap-2 sm:gap-5'>
                <Link href='/#packages' className='inline-flex min-h-11 items-center px-2 hover:text-[var(--ink)]'>Packages</Link>
                <Link href='/#process' className='inline-flex min-h-11 items-center px-2 hover:text-[var(--ink)]'>Process</Link>
                <Link href='/legal' className='inline-flex min-h-11 items-center px-2 hover:text-[var(--ink)]'>Legal</Link>
                <span className='px-2'>© {new Date().getFullYear()}</span>
              </nav>
            </div>
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
