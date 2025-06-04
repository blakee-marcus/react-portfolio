'use client';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <title>Custom Websites for Small Businesses | Blake Marcus – Freelance Web Developer</title>
        <meta
          name='description'
          content='Need a modern website that loads fast and drives results? Blake Marcus builds responsive, mobile-friendly websites for small businesses, startups, and service providers in Long Beach and beyond.'
        />
        <meta
          name='keywords'
          content='freelance web developer, custom business websites, web design Long Beach, responsive web development, landing pages for small business, React developer, SEO-friendly sites'
        />
        <meta name='author' content='Blake Marcus' />
        <link rel='canonical' href='https://blakemarcus.com/' />
        <meta
          property='og:title'
          content='Blake Marcus – Freelance Web Developer for Small Businesses'
        />
        <meta
          property='og:description'
          content='Blake Marcus builds high-performance websites for small businesses. See past work or get a quote for a mobile-friendly, SEO-optimized site built to grow with your brand.'
        />
        <meta property='og:url' content='https://blakemarcus.com/' />
      </Head>

      <main className='min-h-screen bg-white text-black font-mono px-4 md:px-6 pb-12 pt-16 border-black'>
        <section className='max-w-5xl mx-auto space-y-8'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase border-b-8 border-black pb-4 leading-tight tracking-tight'>
            Freelance Web Developer for Small Business Websites
          </h1>

          <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold uppercase tracking-wide'>
            Custom Websites Built to Perform
          </h2>

          <p className='text-base sm:text-lg md:text-xl uppercase leading-snug'>
            Fast. Mobile-Friendly. Easy to Manage.
            <br className='hidden sm:block' />
            Designed to help you grow your business.
          </p>

          <p className='text-sm sm:text-base md:text-lg uppercase border-l-4 border-black pl-4'>
            I’m currently building a repair marketplace at{' '}
            <a
              href='https://www.gobasile.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'>
              GoBasile
            </a>{' '}
            — and taking on new freelance clients.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 text-base sm:text-lg uppercase pt-4'>
            <Link
              href='/portfolio'
              className='border-4 border-black px-6 py-3 text-center font-bold hover:bg-black hover:text-white transition-colors'>
              See My Work
            </Link>
            <Link
              href='/hire'
              className='border-4 border-black px-6 py-3 text-center font-bold hover:bg-black hover:text-white transition-colors'>
              Get a Quote
            </Link>
            <Link
              href='/landing-pages'
              className='border-4 border-black px-6 py-3 text-center font-bold hover:bg-black hover:text-white transition-colors'>
              Need a Site for Your Business?
            </Link>
          </div>
        </section>

        <section className='mt-16 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed px-1 sm:px-0 font-semibold tracking-wide'>
          <p>
            Based in Long Beach, CA, I specialize in building fast, responsive websites for small
            businesses, local entrepreneurs, and startups. Whether you&rsquo;re launching a new
            brand, need a landing page, or want to redesign an outdated site, I can help you create
            something bold, scalable, and effective. Let&rsquo;s build a site that works for you.
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;
