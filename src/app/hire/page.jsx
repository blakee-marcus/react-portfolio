'use client';
import Head from 'next/head';
import Link from 'next/link';
import { Wrench, Sparkles, Rocket, HelpCircle } from 'lucide-react';

export default function Hire() {
  const tiers = [
    {
      title: 'Starter',
      price: '$500',
      description: 'A bold, mobile-first landing page to introduce your business or idea.',
      aftercare: 'Optional support available at a discounted hourly rate.',
      link: '/contact?tier=starter',
    },
    {
      title: 'Professional',
      price: '$1500',
      description: 'A polished, multi-page website with contact forms and SEO basics.',
      aftercare: 'Need edits or additions later? Get a lower hourly rate as a returning client.',
      link: '/contact?tier=professional',
    },
    {
      title: 'Premium',
      price: '$3000+',
      description: 'Custom-built web app with full backend, dashboard, and tailored features.',
      aftercare: 'Discounted hourly support for long-term growth and enhancements.',
      link: '/contact?tier=premium',
    },
  ];

  return (
    <>
      <Head>
        <title>Hire a Freelance Web Developer | Pricing Tiers by Blake Marcus</title>
        <meta
          name='description'
          content='Transparent pricing to hire freelance web developer Blake Marcus. Choose from landing pages, multi-page websites, or full-stack web apps tailored to your business.'
        />
        <meta
          name='keywords'
          content='hire web developer, freelance web design pricing, business website packages, full-stack development'
        />
        <link rel='canonical' href='https://www.blakemarcus.com/hire' />
        <meta
          property='og:title'
          content='Hire Blake Marcus | Web Development Packages & Pricing'
        />
        <meta
          property='og:description'
          content='Hire Blake Marcus — a freelance web developer offering affordable packages for small businesses and startups.'
        />
        <meta property='og:url' content='https://www.blakemarcus.com/hire' />
        <meta
          property='og:image'
          content='https://www.blakemarcus.com/api/og?title=Hire+Blake+Marcus'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </Head>

      <main className='min-h-screen bg-secondary text-primary font-base px-6 sm:px-12 py-16 border-4 border-primary shadow-brutal'>
        <section className='max-w-4xl mx-auto text-center mb-20'>
          <h1 className='text-[2.75rem] sm:text-6xl font-headings uppercase border-b-4 border-primary pb-6 mb-10 tracking-[var(--letter-spacing-wide)] leading-[var(--line-height-tight)] inline-flex items-center justify-center gap-3'>
            <Wrench size={36} />
            Hire a Web Developer
          </h1>
          <p className='text-xl sm:text-2xl uppercase border-l-4 border-primary pl-6 mb-6'>
            Clear Pricing. Fast Delivery. Scalable Solutions.
          </p>
        </section>

        <section className='max-w-6xl mx-auto grid gap-[var(--component-gap)] md:grid-cols-3'>
          <h2 className='sr-only'>Web Development Tiers</h2>
          {tiers.map(({ title, price, description, aftercare, link }) => (
            <div
              key={title}
              className='border-4 border-primary p-[var(--component-padding)] flex flex-col justify-between transition-transform hover:scale-[1.02] bg-secondary shadow-brutal'
              aria-labelledby={`${title.toLowerCase()}-tier`}>
              <div>
                <h3
                  id={`${title.toLowerCase()}-tier`}
                  className='text-2xl font-headings uppercase mb-4 tracking-[0.04em] inline-flex items-center gap-2'>
                  <Sparkles size={18} />
                  {title}
                </h3>
                <p className='mb-4'>{description}</p>
                <p className='text-2xl font-bold mb-4 text-accent'>{price}</p>
                <p className='text-sm font-medium border-t-4 border-primary pt-4'>{aftercare}</p>
              </div>
              <Link
                href={link}
                className='mt-6 block border-4 border-primary text-center uppercase font-bold py-3 bg-accent text-white hover:bg-primary hover:text-secondary transition-colors duration-200 shadow-brutal inline-flex items-center justify-center gap-2'>
                <Rocket size={18} />
                Start with {title}
              </Link>
            </div>
          ))}
        </section>

        <section className='max-w-4xl mx-auto mt-24'>
          <h2 className='text-3xl sm:text-4xl font-headings uppercase border-b-4 border-primary pb-3 mb-8 inline-flex items-center gap-2'>
            <HelpCircle size={28} />
            Frequently Asked Questions
          </h2>
          <div className='space-y-6 text-base sm:text-lg leading-relaxed'>
            <div>
              <h3 className='font-semibold text-primary'>
                How long does it take to launch a site?
              </h3>
              <p className='border-l-4 border-primary pl-4'>
                Landing pages usually launch in 1–2 weeks. More complex sites take longer depending
                on scope and features.
              </p>
            </div>
            <div>
              <h3 className='font-semibold text-primary'>Do you offer hosting or domain setup?</h3>
              <p className='border-l-4 border-primary pl-4'>
                Yes. I’ll help connect your domain and deploy to Vercel, Netlify, or other
                platforms.
              </p>
            </div>
            <div>
              <h3 className='font-semibold text-primary'>Can I request changes later?</h3>
              <p className='border-l-4 border-primary pl-4'>
                Absolutely. Returning clients get discounted hourly support for future tweaks and
                improvements.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
