import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Hire() {
  const tiers = [
    {
      title: 'Starter',
      price: '$500',
      description: 'Landing page. Mobile-first. Fast delivery.',
      subscription: '$50/mo for hosting & updates',
      link: '/contact?tier=starter',
    },
    {
      title: 'Professional',
      price: '$1500',
      description: 'Multi-page site. Contact forms. SEO-ready.',
      subscription: '$100/mo for updates & support',
      link: '/contact?tier=professional',
    },
    {
      title: 'Premium',
      price: '$3000+',
      description: 'Full-stack custom app. Backend & dashboard.',
      subscription: '$200/mo for managed care & scaling',
      link: '/contact?tier=premium',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Hire Blake Marcus - Start Your Project</title>
        <meta
          name='description'
          content='Start your project with Blake Marcus by choosing a web development service tier that fits your needs.'
        />
      </Helmet>

      <main className='min-h-screen bg-white text-black font-mono px-6 py-16 border-b-8 border-black'>
        <section className='max-w-3xl mx-auto text-center mb-16'>
          <h1 className='text-4xl md:text-6xl uppercase font-extrabold border-b-8 border-black pb-6 mb-10 tracking-tight leading-tight'>
            Start Your Project
          </h1>

          <p className='text-xl md:text-2xl uppercase border-l-8 border-black pl-6 mb-12'>
            Choose a service tier and let's build something great.
          </p>
        </section>

        <section className='max-w-5xl mx-auto grid gap-8 md:grid-cols-3'>
          {tiers.map(({ title, price, description, subscription, link }) => (
            <div
              key={title}
              className='border-4 border-black p-8 flex flex-col justify-between transition-transform hover:scale-[1.02]'>
              <div>
                <h2 className='text-3xl font-extrabold uppercase mb-4'>{title}</h2>
                <p className='uppercase mb-6'>{description}</p>
                <p className='text-2xl font-bold mb-4'>{price}</p>
                <p className='border-t-4 border-black pt-4 uppercase font-semibold'>
                  {subscription}
                </p>
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
