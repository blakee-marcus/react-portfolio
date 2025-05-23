import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <Helmet>
        <title>Blake Marcus – Custom Websites That Work for Your Business</title>
        <meta
          name='description'
          content='Blake Marcus builds fast, modern websites that look bold and work seamlessly. Get a site that’s built to grow with your business.'
        />
        <meta
          name='keywords'
          content='small business websites, custom web design, responsive websites, ecommerce sites, freelance developer, Long Beach'
        />
        <meta name='author' content='Blake Marcus' />
      </Helmet>
      <main className='min-h-screen bg-white text-black font-mono flex items-center justify-center border-black px-6 pb-4'>
        <section className='max-w-5xl w-full'>
          <h1 className='text-5xl md:text-7xl font-extrabold uppercase border-b-8 border-black pb-6 mb-10 leading-tight tracking-tight'>
            Custom Websites
            <br />
            Built to Perform
          </h1>

          <p className='text-2xl md:text-3xl uppercase mb-6'>
            Fast. Mobile-Friendly. Easy to Manage.
            <br />
            Designed to help you grow your business.
          </p>

          <p className='text-lg md:text-xl uppercase mb-12 border-l-8 border-black pl-6'>
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

          <div className='flex flex-col md:flex-row gap-6 text-lg uppercase'>
            <Link
              to='/portfolio'
              className='border-4 border-black px-8 py-4 text-center font-bold hover:bg-black hover:text-white transition-colors'>
              See My Work
            </Link>
            <Link
              to='/hire'
              className='border-4 border-black px-8 py-4 text-center font-bold hover:bg-black hover:text-white transition-colors'>
              Get a Quote
            </Link>
            <Link
              to='/landing-pages'
              className='border-4 border-black px-8 py-4 text-center font-bold hover:bg-black hover:text-white transition-colors'>
              Need a Site for Your Business?
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
