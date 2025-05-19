import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  const leftItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
  ];
  const rightItems = [
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
  ];
  const specialItem = { to: '/hire', label: 'Start a Project' };

  return (
    <nav className='bg-white text-black border-b-8 border-black font-mono'>
      <ul className='flex flex-col sm:flex-row justify-center items-center text-lg uppercase tracking-wider'>
        {/* Left nav items */}
        {leftItems.map(({ to, label }) => (
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

        {/* Special middle item */}
        <li className='px-8 py-6 border-t sm:border-t-0 sm:border-l-4 sm:border-r-4 border-black first:sm:border-l-0 first:sm:border-r-0'>
          <Link
            to={specialItem.to}
            className='font-bold bg-[#d88a59] text-black px-6 py-3 rounded-none border-4 border-black hover:bg-black hover:text-white transition-colors inline-block'>
            {specialItem.label}
          </Link>
        </li>

        {/* Right nav items */}
        {rightItems.map(({ to, label }) => (
          <li
            key={label}
            className='px-8 py-6 border-t sm:border-t-0 sm:border-r-4 border-black first:sm:border-r-0 hover:bg-black hover:text-white transition-colors'>
            <NavLink
              to={to}
              className={({ isActive }) => `font-bold ${isActive ? 'bg-black text-white' : ''}`}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
