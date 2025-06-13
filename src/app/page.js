'use client';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowRightCircle, Briefcase, FolderOpen, ExternalLink } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Custom Websites for Small Businesses | Blake Marcus – Freelance Web Developer</title>
        <meta
          name='description'
          content='Need a modern website that loads fast and drives results? Blake Marcus builds responsive, mobile-friendly websites for small businesses, startups, and service providers in Long Beach and beyond.'
        />
        <meta name='keywords' content='freelance web developer, web design Long Beach, SEO sites' />
        <meta name='author' content='Blake Marcus' />
        <link rel='canonical' href='https://www.blakemarcus.com/' />
        <meta property='og:title' content='Blake Marcus – Freelance Web Developer' />
        <meta
          property='og:description'
          content='Blake Marcus builds high-performance websites for small businesses. See past work or get a quote for a mobile-friendly, SEO-optimized site built to grow with your brand.'
        />
        <meta property='og:url' content='https://www.blakemarcus.com/' />
        <meta
          property='og:image'
          content='https://www.blakemarcus.com/api/og?title=Blake+Marcus+Web+Developer'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </Head>

      <main className='min-h-screen bg-secondary text-primary font-base px-6 sm:px-12 py-16 border-4 border-primary shadow-brutal'>
        <motion.section
          className='max-w-6xl mx-auto flex flex-col gap-[var(--component-gap)]'
          initial='initial'
          animate='animate'
          variants={fadeInUp}>
          <h1 className='text-[2.75rem] sm:text-6xl md:text-7xl font-headings uppercase leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-wide)] border-b-4 border-primary pb-4'>
            Freelance Web Developer
            <br />
            for Small Business Websites
          </h1>

          <h2 className='text-2xl sm:text-3xl font-headings uppercase tracking-[0.04em] border-l-4 border-primary pl-4 inline-flex items-center gap-2'>
            
            Custom Websites Built to Perform
          </h2>

          <p className='text-lg sm:text-xl uppercase tracking-wide'>
            Fast. Mobile-Friendly. Easy to Manage.
            <br />
            Designed to grow with your business.
          </p>

          <p className='text-base sm:text-lg uppercase border-l-4 border-primary pl-4'>
            Currently building a marketplace at{' '}
            <a
              href='https://www.gobasile.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-highlight transition-colors inline-flex items-center gap-1'>
              GoBasile <ExternalLink size={16} />
            </a>{' '}
            — and open to new freelance clients.
          </p>

          <div className='flex flex-col sm:flex-row flex-wrap gap-4 text-base sm:text-lg uppercase pt-2'>
            {[
              {
                href: '/portfolio',
                label: 'See My Work',
                icon: <FolderOpen className='inline-block ml-2' size={20} />,
              },
              {
                href: '/hire',
                label: 'Get a Quote',
                icon: <Briefcase className='inline-block ml-2' size={20} />,
              },
            ].map(({ href, label, icon }) => (
              <Link
                key={label}
                href={href}
                className='bg-accent text-white border-4 border-primary shadow-brutal px-4 py-3 font-extrabold hover:bg-highlight hover:text-black transition-colors flex items-center justify-center gap-2'>
                {label} {icon}
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section
          className='mt-24 max-w-3xl mx-auto text-base sm:text-lg font-medium tracking-wide leading-relaxed border-t-4 border-primary pt-6'
          initial='initial'
          animate='animate'
          variants={fadeInUp}>
          <p>
            Based in Long Beach, CA, I specialize in crafting bold, responsive websites for small
            businesses, local entrepreneurs, and startups. Whether you need a landing page or a full
            redesign, I’ll help you launch something loud, scalable, and designed to convert.
          </p>
        </motion.section>
      </main>
    </>
  );
}
