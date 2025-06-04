'use client';

import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 Page Not Found | Blake Marcus – Freelance Web Developer</title>
        <meta
          name='description'
          content="Sorry, this page doesn't exist. You can return to the homepage or explore Blake Marcus's web development portfolio."
        />
        <meta name='robots' content='noindex, follow' />
        <link rel='canonical' href='https://blakemarcus.com/404' />
      </Head>

      <div className='flex flex-col items-center justify-center min-h-screen bg-white px-6 border-t-8 border-l-8 border-black'>
        <h1 className='text-[10rem] font-extrabold uppercase leading-none tracking-tight border-b-8 border-r-8 border-black mb-8 p-4'>
          404
        </h1>
        <p className='text-xl sm:text-2xl font-bold uppercase mb-8 border-b-4 border-black pb-2 w-full max-w-md text-left'>
          Oops! That page doesn't exist or may have moved.
        </p>
        <p className='text-base sm:text-lg mb-12 max-w-md text-left'>
          You can return to the homepage or check out my portfolio of small business websites and
          web apps.
        </p>

        <Link
          href='/'
          className='border-8 border-black px-10 py-5 uppercase font-extrabold text-black hover:bg-black hover:text-white transition-all duration-300 max-w-max'>
          GO HOME
        </Link>
        <Link
          href='/portfolio'
          className='mt-4 border-4 border-black px-8 py-4 text-black font-extrabold uppercase hover:bg-black hover:text-white transition-all duration-300'>
          View My Work
        </Link>
      </div>
    </>
  );
}
