import React from 'react';

function Footer() {
  return (
    <footer className='bg-white text-black border-t-8 border-black font-mono py-8 px-4'>
      <div className='max-w-screen-xl mx-auto flex flex-col items-center space-y-2'>
        <p className='text-lg md:text-base uppercase font-bold border-l-8 border-black pl-4'>
          <small>&copy; 2025 Blake Marcus. All Rights Reserved.</small>
        </p>
        <p className='text-sm uppercase tracking-wider'>React / Flask / PostgreSQL / Tailwind</p>

        <div className='flex space-x-4 mt-4'>
          <a
            href='mailto:marcusb733@gmail.com'
            className='underline hover:text-[#d88a59]'
            aria-label='Email'>
            Email
          </a>
          <a
            href='https://linkedin.com/in/blake-marcus'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-[#d88a59]'
            aria-label='LinkedIn'>
            LinkedIn
          </a>
          <a
            href='https://github.com/blakee-marcus'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-[#d88a59]'
            aria-label='GitHub'>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
