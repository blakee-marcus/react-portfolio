import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Hire() {
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
      <Helmet>
        <title>Hire Blake Marcus – Web Design & Development Packages</title>
        <meta
          name='description'
          content='Explore Blake Marcus’s web development service tiers. From fast landing pages to full-stack apps, get a custom solution for your business.'
        />
      </Helmet>

      <main className='min-h-screen bg-white text-black font-mono px-6 py-16 border-black'>
        <section className='max-w-3xl mx-auto text-center mb-16'>
          <h1 className='text-4xl md:text-6xl uppercase font-extrabold border-b-8 border-black pb-6 mb-10 tracking-tight leading-tight'>
            Pick Your Package
          </h1>

          <p className='text-xl md:text-2xl uppercase border-l-8 border-black pl-6 mb-12'>
            Clear pricing. Fast delivery. Scalable solutions.
          </p>
        </section>

        <section className='max-w-5xl mx-auto grid gap-8 md:grid-cols-3'>
          {tiers.map(({ title, price, description, aftercare, link }) => (
            <div
              key={title}
              className='border-4 border-black p-8 flex flex-col justify-between transition-transform hover:scale-[1.02]'>
              <div>
                <h2 className='text-3xl font-extrabold uppercase mb-4'>{title}</h2>
                <p className='mb-6'>{description}</p>
                <p className='text-2xl font-bold mb-4'>{price}</p>
                <p className='border-t-4 border-black pt-4 font-semibold text-sm'>{aftercare}</p>
              </div>

              <Link
                to={link}
                aria-label={`Start with the ${title} tier`}
                className='mt-8 block bg-black text-white uppercase font-bold text-center py-3 hover:bg-gray-900 transition-colors'>
                Start with {title}
              </Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Hire;
