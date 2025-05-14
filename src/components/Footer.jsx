import React from 'react';

function Footer() {
  return (
    <footer className='bg-white text-black border-t-8 border-black font-mono py-8 px-4 pt-4'>
      <div className='max-w-screen-xl mx-auto flex flex-col items-start md:items-center'>
        <p className='text-lg md:text-base uppercase font-bold border-l-8 border-black pl-4'>
          &copy; 2025 Blake Marcus. All Rights Reserved.
        </p>
        <p className='text-sm uppercase mt-2 tracking-wider'>
          React / Flask / PostgreSQL / Tailwind
        </p>
      </div>
    </footer>
  );
}

export default Footer;
