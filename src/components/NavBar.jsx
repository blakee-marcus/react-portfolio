import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useReducedMotion, motion } from 'framer-motion';

function NavBar() {
  const shouldReduce = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 10 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: shouldReduce ? {} : { delay: i * 0.05, duration: 0.2 },
    }),
  };

  const leftItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
  ];
  const rightItems = [
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
  ];
  const specialItem = { to: '/hire', label: 'Hire Me' };

  return (
    <nav className='bg-white text-black border-b-8 border-black font-mono'>
      <ul className='flex flex-col sm:flex-row justify-center items-center text-lg uppercase tracking-wider'>
        {/* Left nav items */}
        {leftItems.map(({ to, label }, i) => (
          <NavLink key={label} to={to}>
            {({ isActive }) => (
              <motion.li
                custom={i}
                initial='hidden'
                animate='show'
                variants={variants}
                className={`px-8 py-6 border-black border-t sm:border-t-0 sm:border-r-4 transition-colors font-bold uppercase tracking-wider text-lg ${
                  isActive ? 'bg-black text-white' : 'text-black'
                }`}>
                {label}
              </motion.li>
            )}
          </NavLink>
        ))}

        {/* Special middle item */}
        <motion.li
          custom={leftItems.length}
          initial='hidden'
          animate='show'
          variants={variants}
          className='px-8 py-6 border-black border-t sm:border-t-0 hover:bg-black hover:text-white transition-colors'>
          <Link
            to={specialItem.to}
            className='font-bold bg-[#d88a59] text-black px-6 py-3 rounded-none border-4 border-black hover:bg-black hover:text-white transition-colors inline-block'>
            {specialItem.label}
          </Link>
        </motion.li>

        {/* Right nav items */}
        {rightItems.map(({ to, label }, i) => (
          <NavLink key={label} to={to}>
            {({ isActive }) => (
              <motion.li
                custom={i}
                initial='hidden'
                animate='show'
                variants={variants}
                className={`px-8 py-6 border-black border-t sm:border-t-0 sm:border-r-4 transition-colors font-bold uppercase tracking-wider text-lg ${
                  isActive ? 'bg-black text-white' : 'text-black'
                } ${i === 0 ? 'sm:border-l-4' : ''}`}>
                {label}
              </motion.li>
            )}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
