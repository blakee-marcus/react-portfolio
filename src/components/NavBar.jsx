import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/clients', label: 'Clients' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className='bg-white text-black border-b-8 border-black font-mono'>
      <ul className='flex flex-col sm:flex-row justify-center text-lg uppercase tracking-wider'>
        {navItems.map(({ to, label }) => (
          <li
            key={label}
            className='px-8 py-6 border-t sm:border-t-0 sm:border-l-4 border-black first:sm:border-l-0 hover:bg-black hover:text-white transition-colors'>
            <NavLink
              to={to}
              className={({ isActive }) => `font-bold ${isActive ? 'bg-black text-white' : ''}`}>
              {label}
            </NavLink>
          </li>
        ))}

        <li className='px-8 py-6 border-t sm:border-t-0 sm:border-l-4 border-black first:sm:border-l-0 flex items-center'>
          <Link
            to='/contact'
            className='font-bold bg-[#d88a59] text-white px-4 py-2 rounded hover:bg-[#bf7744] transition-colors'>
            Get a Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
