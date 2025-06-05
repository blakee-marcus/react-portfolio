'use client';
import Head from 'next/head';
import Link from 'next/link';

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
          content='hire web developer, freelance web design pricing, landing page cost, business website packages, full-stack development, web app developer, React developer Long Beach'
        />
        <link rel='canonical' href='https://www.blakemarcus.com/hire' />
        <meta
          property='og:title'
          content='Hire Blake Marcus | Web Development Packages & Pricing'
        />
        <meta
          property='og:description'
          content='Looking to launch or redesign a website? Hire Blake Marcus — a freelance web developer offering affordable packages for small businesses and startups.'
        />
        <meta property='og:url' content='https://www.blakemarcus.com/hire' />
        <meta
          property='og:image'
          content='https://www.blakemarcus.com/api/og?title=Hire+Blake+Marcus'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        {/* Structured Data: Product Offers */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Web Development Packages',
              brand: 'Blake Marcus',
              url: 'https://www.blakemarcus.com/hire',
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Starter Landing Page',
                  priceCurrency: 'USD',
                  price: '500',
                  url: 'https://www.blakemarcus.com/contact?tier=starter',
                  availability: 'https://schema.org/InStock',
                },
                {
                  '@type': 'Offer',
                  name: 'Professional Website',
                  priceCurrency: 'USD',
                  price: '1500',
                  url: 'https://www.blakemarcus.com/contact?tier=professional',
                  availability: 'https://schema.org/InStock',
                },
                {
                  '@type': 'Offer',
                  name: 'Premium Web App',
                  priceCurrency: 'USD',
                  price: '3000',
                  url: 'https://www.blakemarcus.com/contact?tier=premium',
                  availability: 'https://schema.org/InStock',
                },
              ],
            }),
          }}
        />
        {/* Structured Data: FAQ */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How long does it take to launch a site?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Landing pages are typically delivered in 1–2 weeks. Multi-page sites and full-stack apps take longer depending on scope.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you offer hosting or domain setup?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'I can assist with setup and connect your site to platforms like Vercel, Netlify, or traditional hosts like GoDaddy.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I request changes later?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes — returning clients receive a discounted hourly rate for ongoing edits and support.',
                  },
                },
              ],
            }),
          }}
        />
        {/* Structured Data: Service */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Freelance Web Development',
              provider: {
                '@type': 'Person',
                name: 'Blake Marcus',
                url: 'https://www.blakemarcus.com',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Long Beach',
                  addressRegion: 'CA',
                  addressCountry: 'US',
                },
              },
              areaServed: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Long Beach',
                  addressRegion: 'CA',
                  addressCountry: 'US',
                },
              },
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '500',
                highPrice: '3000',
                priceCurrency: 'USD',
              },
            }),
          }}
        />
      </Head>

      <main className='min-h-screen bg-white text-black font-mono px-6 py-16 border-black'>
        <section className='max-w-3xl mx-auto text-center mb-16'>
          <h1 className='text-4xl md:text-6xl uppercase font-extrabold border-b-8 border-black pb-6 mb-10 tracking-tight leading-tight'>
            Hire a Web Developer – Website Packages & Pricing
          </h1>

          <p className='text-xl md:text-2xl uppercase border-l-8 border-black pl-6 mb-12'>
            Clear pricing. Fast delivery. Scalable solutions.
          </p>
        </section>

        <section className='max-w-5xl mx-auto grid gap-8 md:grid-cols-3'>
          <h2 className='sr-only'>Web Design and Development Pricing Tiers</h2>
          {tiers.map(({ title, price, description, aftercare, link }) => (
            <div
              key={title}
              className='border-4 border-black p-8 flex flex-col justify-between transition-transform hover:scale-[1.02]'
              aria-labelledby={`${title.toLowerCase()}-tier`}>
              <div>
                <h3
                  id={`${title.toLowerCase()}-tier`}
                  className='text-3xl font-extrabold uppercase mb-4'>
                  {title}
                </h3>
                <p className='mb-6'>{description}</p>
                <p className='text-2xl font-bold mb-4'>{price}</p>
                <p className='border-t-4 border-black pt-4 font-semibold text-sm'>{aftercare}</p>
              </div>

              <Link
                href={link}
                aria-label={`Start with the ${title} tier`}
                className='mt-8 block bg-black text-white uppercase font-bold text-center py-3 hover:bg-gray-900 transition-colors'>
                Start with {title}
              </Link>
            </div>
          ))}
        </section>

        <section className='max-w-3xl mx-auto mt-20'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-4 text-left'>
            <div>
              <h3 className='font-semibold'>How long does it take to launch a site?</h3>
              <p>
                Landing pages are typically delivered in 1–2 weeks. Multi-page sites and full-stack
                apps take longer depending on scope.
              </p>
            </div>
            <div>
              <h3 className='font-semibold'>Do you offer hosting or domain setup?</h3>
              <p>
                I can assist with setup and connect your site to platforms like Vercel, Netlify, or
                traditional hosts like GoDaddy.
              </p>
            </div>
            <div>
              <h3 className='font-semibold'>Can I request changes later?</h3>
              <p>
                Yes — returning clients receive a discounted hourly rate for ongoing edits and
                support.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
