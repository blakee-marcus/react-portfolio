import React from 'react';

function Footer() {
  return (
    <footer className='bg-white text-black border-t-8 border-black font-mono py-8 px-6'>
      <div className='max-w-screen-xl mx-auto flex flex-col items-center space-y-4'>
        <p className='text-lg uppercase font-extrabold border-l-8 border-black pl-6 tracking-wide w-full max-w-xl'>
          <small>&copy; 2025 Blake Marcus. All Rights Reserved.</small>
        </p>

        <p className='text-xs uppercase font-bold tracking-widest border-t-4 border-black pt-2 w-full max-w-xl text-center'>
          React / Flask / PostgreSQL / Tailwind
        </p>

        <div className='flex space-x-8 mt-6 uppercase font-bold text-sm'>
          {[
            { href: 'mailto:marcusb733@gmail.com', label: 'Email' },
            { href: 'https://linkedin.com/in/blake-marcus', label: 'LinkedIn', external: true },
            { href: 'https://github.com/blakee-marcus', label: 'GitHub', external: true },
          ].map(({ href, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className='border-b-4 border-black pb-1 hover:text-[#d88a59] transition-colors'
              aria-label={label}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
