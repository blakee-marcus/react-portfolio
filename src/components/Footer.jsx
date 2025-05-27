import React from 'react';

function Footer() {
  return (
    <footer
      className='bg-white text-black border-t-8 border-black font-mono py-12 px-6'
      role='contentinfo'>
      <div className='max-w-screen-xl mx-auto flex flex-col items-center space-y-6'>
        {/* CTA */}
        <p className='text-base text-center uppercase font-bold tracking-wider max-w-xl'>
          Ready to launch your new website?{' '}
          <a href='/hire' className='underline hover:text-[#d88a59]'>
            Hire freelance web developer Blake Marcus
          </a>
          .
        </p>

        {/* Copyright */}
        <p className='text-lg uppercase font-extrabold border-l-8 border-black pl-6 tracking-wide w-full max-w-xl'>
          <small>&copy; 2025 Blake Marcus. All Rights Reserved.</small>
        </p>

        {/* Tech stack - SEO friendly */}
        <ul className='text-xs uppercase font-bold tracking-widest border-t-4 border-black pt-2 w-full max-w-xl text-center flex flex-wrap justify-center gap-2'>
          <li>React</li>
          <li>Flask</li>
          <li>PostgreSQL</li>
          <li>Tailwind CSS</li>
        </ul>

        {/* Location - Local SEO */}
        <p className='text-xs tracking-wide text-center'>
          Serving Long Beach, CA and remote clients across the U.S.
        </p>

        {/* Contact Links */}
        <div className='flex space-x-8 mt-4 uppercase font-bold text-sm'>
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
              /*  */
              className='border-b-4 border-black pb-1 hover:text-[#d88a59] transition-colors'
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
