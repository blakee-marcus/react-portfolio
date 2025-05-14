import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='bg-white text-black border-b-8 border-black font-mono'>
      <ul className='flex justify-center text-lg uppercase tracking-wider'>
        {[
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About' },
          { to: '/projects', label: 'Projects' },
          { to: '/contact', label: 'Contact' },
        ].map(({ to, label }, i) => (
          <li
            key={label}
            className={`px-8 py-6 border-l-4 border-black first:border-l-0 hover:bg-black hover:text-white transition-colors`}>
            <Link to={to} className='font-bold'>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
