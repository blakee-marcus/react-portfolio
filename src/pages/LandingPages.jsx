import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function LandingPages() {
  return (
    <>
      <Helmet>
        <title>Landing Pages That Convert | Blake Marcus</title>
        <meta
          name='description'
          content='Fast, mobile-friendly landing pages tailored for barbers, gyms, artists, repair shops, and more. Get a custom landing page with SEO optimization and contact features.'
        />
        <meta
          name='keywords'
          content='Landing pages, barbers, gyms, repair shops, mobile-friendly, SEO optimized, contact form, Blake Marcus'
        />
        <meta name='author' content='Blake Marcus' />
      </Helmet>
      <main className='min-h-screen bg-white text-black font-mono flex items-center justify-center px-6 py-12'>
        <section className='max-w-3xl w-full'>
          <h1 className='text-4xl md:text-6xl font-extrabold uppercase border-b-8 border-black pb-4 mb-8'>
            Landing Pages That Convert
          </h1>

          <p className='text-xl md:text-2xl uppercase mb-6'>
            Perfect for barbers, gyms, artists, repair shops, and more.
          </p>

          <p className='text-lg md:text-xl mb-8'>
            I'll build you a fast, mobile-friendly landing page that helps customers find you,
            contact you, and book you — all in one place.
          </p>

          <ul className='list-disc pl-6 mb-8 text-lg space-y-2'>
            <li>Custom-tailored design for your business</li>
            <li>Mobile & SEO optimized</li>
            <li>Contact form, map, and social links included</li>
            <li>Delivered in 5–10 days</li>
          </ul>

          <Link
            to='/contact'
            className='border-4 border-black px-8 py-4 text-center font-bold hover:bg-black hover:text-white transition-colors block w-max'>
            Get a Free Quote
          </Link>
        </section>
      </main>
    </>
  );
}
export default LandingPages;
