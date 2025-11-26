import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import { Toaster } from 'sonner';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    default: 'Blake Marcus Studio',
    template: '%s · Blake Marcus Studio',
  },
  description:
    'A boutique web studio building high-conversion, brand-aligned sites for founders who want a premium experience without agency complexity.',
  metadataBase: new URL('https://blakemarcus.com'),
  openGraph: {
    title: 'Blake Marcus Studio',
    description:
      'A boutique web studio building high-conversion, brand-aligned sites for founders.',
    url: 'https://blakemarcus.com',
    siteName: 'Blake Marcus Studio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blake Marcus Studio',
    description:
      'A boutique web studio building high-conversion, brand-aligned sites for founders.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full'>
      <body className='relative h-full bg-slate-950 text-slate-100 antialiased'>
        {/* Background */}
        <div aria-hidden='true' className='pointer-events-none fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_#020617)]' />
          <div className="absolute inset-0 opacity-[0.35] mix-blend-soft-light [background-image:url('/noise.png')] [background-size:200px_200px]" />
        </div>

        <div className='relative z-10 flex min-h-screen flex-col'>
          <header className='border-b border-slate-800/80 bg-slate-950/80 backdrop-blur'>
            <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
              <Link href='/' className='flex items-center gap-2'>
                <span className='h-2 w-2 rounded-full bg-emerald-400' />
                <span className='text-xs font-medium uppercase tracking-[0.2em] text-slate-400'>
                  Blake Marcus Studio
                </span>
              </Link>

              <nav className='flex items-center gap-3 text-xs sm:gap-4 sm:text-sm text-slate-400'>
                <Link
                  href='/work'
                  className='hidden sm:inline hover:text-slate-100 transition-colors'>
                  Work
                </Link>
                <Link
                  href='/services'
                  className='hidden sm:inline hover:text-slate-100 transition-colors'>
                  Services
                </Link>
                <Link
                  href='/process'
                  className='hidden sm:inline hover:text-slate-100 transition-colors'>
                  Process
                </Link>
                <Link
                  href='/studio'
                  className='hidden sm:inline hover:text-slate-100 transition-colors'>
                  Studio
                </Link>
                <Link
                  href='/support'
                  className='hidden sm:inline hover:text-slate-100 transition-colors'>
                  Support
                </Link>

                <Link
                  href='/start'
                  className='rounded-full border border-emerald-500/60 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-100 transition-colors'>
                  Start a project
                </Link>
              </nav>
            </div>
          </header>

          <main className='flex-1'>{children}</main>

          <footer className='border-t border-slate-900 bg-slate-950/90'>
            <div className='mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8'>
              <p>© {new Date().getFullYear()} Blake Marcus Studio</p>

              <div className='flex items-center gap-4'>
                <Link href='/legal' className='hover:text-slate-300 transition-colors'>
                  Legal
                </Link>
                <p className='text-slate-500'>
                  Quietly excellent web experiences for founder led brands.
                </p>
              </div>
            </div>
          </footer>
        </div>

        <Toaster position='top-center' richColors closeButton duration={4000} />
      </body>
    </html>
  );
}
