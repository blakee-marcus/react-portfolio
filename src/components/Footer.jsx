'use client'
import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer
      className='bg-[#fefefe] text-black border-t-8 border-black font-mono py-12 px-6'
      role='contentinfo'>
      <div className='max-w-screen-xl mx-auto flex flex-col items-center space-y-6'>

        {/* CTA */}
        <p className='text-base text-center uppercase font-black tracking-wider max-w-xl leading-snug'>
          Ready to launch your new website?{' '}
          <Link
            href='/hire'
            className='underline decoration-4 underline-offset-4 hover:bg-black hover:text-white px-1 transition-colors'>
            Hire freelance web developer Blake Marcus
          </Link>
          .
        </p>

        {/* Copyright */}
        <p className='text-lg uppercase font-extrabold border-l-8 border-black pl-6 tracking-widest w-full max-w-xl'>
          <small>&copy; 2025 Blake Marcus. All Rights Reserved.</small>
        </p>

        {/* Tech stack - SEO friendly */}
        <ul className='text-xs uppercase font-extrabold tracking-widest border-t-4 border-black pt-4 w-full max-w-xl text-center flex flex-wrap justify-center gap-x-4 gap-y-2'>
          <li className='bg-black text-white px-2 py-1'>React</li>
          <li className='bg-black text-white px-2 py-1'>Flask</li>
          <li className='bg-black text-white px-2 py-1'>PostgreSQL</li>
          <li className='bg-black text-white px-2 py-1'>Tailwind CSS</li>
        </ul>

        {/* Location - Local SEO */}
        <p className='text-xs tracking-wider text-center font-medium uppercase'>
          Serving Long Beach, CA and remote clients across the U.S.
        </p>

        {/* Contact Links */}
        <div className='flex flex-wrap justify-center gap-6 mt-6 text-sm uppercase font-bold'>
          {[
            { href: 'mailto:marcusb733@gmail.com', label: 'Email', aria: 'Email Blake Marcus' },
            {
              href: 'https://linkedin.com/in/blake-marcus',
              label: 'LinkedIn',
              external: true,
              rel: 'me',
            },
            {
              href: 'https://github.com/blakee-marcus',
              label: 'GitHub',
              external: true,
              rel: 'me',
            },
          ].map(({ href, label, external, aria, rel }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? `noopener noreferrer${rel ? ` ${rel}` : ''}` : rel}
              className='border-2 border-black px-4 py-1 hover:bg-black hover:text-white transition-colors'
              aria-label={aria || label}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
