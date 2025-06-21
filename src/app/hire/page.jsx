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
        <title>Hire a Freelance Web Developer | Business Website Packages – Blake Marcus</title>
        <meta
          name='description'
          content='Explore transparent pricing to hire Blake Marcus — a freelance web developer building landing pages, business websites, and full-stack apps tailored for small businesses.'
        />
        <meta
          name='keywords'
          content='hire freelance web developer, small business website pricing, landing page developer, full-stack web development, custom websites Long Beach, web development packages'
        />
        <link rel='canonical' href='https://www.blakemarcus.com/hire' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Hire Blake Marcus | Freelance Web Developer Packages' />
        <meta
          property='og:description'
          content='Choose from custom landing pages, websites, and full-stack applications. Hire a developer focused on fast delivery, clean design, and scalable results.'
        />
        <meta property='og:url' content='https://www.blakemarcus.com/hire' />
        <meta
          property='og:image'
          content='https://www.blakemarcus.com/api/og?title=Hire+Blake+Marcus'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Hire Blake Marcus | Freelance Web Developer Packages' />
        <meta
          name='twitter:description'
          content='Transparent pricing to hire Blake Marcus for custom websites, landing pages, and web apps. Designed for small businesses and startups.'
        />
        <meta
          name='twitter:image'
          content='https://www.blakemarcus.com/api/og?title=Hire+Blake+Marcus'
        />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How long does it take to launch a site?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Landing pages usually launch in 1–2 weeks. More complex sites take longer depending on scope and features.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer hosting or domain setup?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. I’ll help connect your domain and deploy to Vercel, Netlify, or other platforms.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I request changes later?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. Returning clients get discounted hourly support for future tweaks and improvements.',
                },
              },
            ],
          })}
        </script>
      </Head>

      <main className='min-h-screen bg-secondary text-primary font-base px-6 sm:px-12 py-16 border-4 border-primary shadow-brutal'>
        <section className='max-w-4xl mx-auto text-center mb-20'>
          <h1 className='text-[clamp(2.5rem,8vw,4.5rem)] font-headings uppercase border-b-4 border-primary pb-6 mb-10 tracking-[var(--letter-spacing-wide)] leading-[var(--line-height-tight)] flex flex-col sm:flex-row items-start sm:items-center gap-3 text-left sm:text-center'>
            <Wrench size={40} className='shrink-0' />
            <span>Hire a Web Developer</span>
          </h1>

          <p className='text-base mt-4 max-w-3xl mx-auto text-center'>
            Not sure what you need?{' '}
            <Link href='/contact' className='underline text-accent'>
              Reach out here
            </Link>{' '}
            or{' '}
            <Link href='/portfolio' className='underline text-accent'>
              see recent projects
            </Link>{' '}
            first.
          </p>
        </section>

        <section className='w-full flex justify-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[var(--component-gap)] w-full max-w-6xl px-4'>
            <h2 className='sr-only'>Web Development Tiers</h2>
            {tiers.map(({ title, price, description, aftercare, link }) => (
              <div
                key={title}
                className='border-4 border-primary p-[var(--component-padding)] flex flex-col justify-between transition-transform hover:scale-[1.02] bg-secondary shadow-brutal'>
                <div>
                  <h3
                    id={`${title.toLowerCase()}-tier`}
                    className='text-xl sm:text-2xl font-headings uppercase mb-4 tracking-[0.04em] flex items-start gap-2'>
                    <Sparkles size={18} className='shrink-0 mt-1' />
                    <span className='min-w-0'>{title}</span>
                  </h3>

                  <p className='mb-4'>{description}</p>
                  <p className='text-2xl font-bold mb-4 text-accent'>{price}</p>
                  <p className='text-sm font-medium border-t-4 border-primary pt-4'>{aftercare}</p>
                </div>
                <Link
                  href={link}
                  className='mt-6 w-full text-sm sm:text-base border-4 border-primary text-center uppercase font-headings py-4 px-4 bg-accent text-white hover:bg-primary hover:text-secondary transition-colors duration-200 shadow-[var(--shadow-brutal)] flex items-center justify-center gap-2 hover:translate-x-[2px] hover:translate-y-[2px] transition-transform'>
                  <Rocket size={20} className='shrink-0' />
                  <span className='text-ellipsis overflow-hidden whitespace-normal text-center'>
                    Start with {title}
                  </span>
                </Link>
              </div>
            ))}
          </div>
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
