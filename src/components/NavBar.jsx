'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useReducedMotion, motion } from 'framer-motion';

const NavBar = () => {
  const pathname = usePathname();
  const shouldReduce = useReducedMotion();

  const seoLabels = {
    Home: 'Home – Blake Marcus',
    About: 'About Blake Marcus',
    Portfolio: 'Portfolio – Projects',
    Contact: 'Contact Blake Marcus',
    'Hire Me': 'Hire a Web Developer',
  };

  const variants = {
    hidden: { opacity: 0, y: 10 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: shouldReduce ? {} : { delay: i * 0.05, duration: 0.2 },
    }),
  };

  const isActive = (path) => pathname === path;

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
    <nav
      className='bg-white text-black border-b-8 border-black font-mono'
      role='navigation'
      aria-label='Primary site navigation'>
      <ul className='flex flex-col sm:flex-row justify-center items-center text-lg uppercase tracking-wider'>
        {/* Left nav items */}
        {leftItems.map(({ to, label }, i) => (
          <motion.li
            key={label}
            custom={i}
            initial='hidden'
            animate='show'
            variants={variants}
            className={`px-8 py-6 border-black border-t sm:border-t-0 sm:border-r-4 transition-colors font-bold ${
              isActive(to) ? 'bg-black text-white' : 'text-black'
            }`}>
            <Link
              href={to}
              className={`tracking-wider text-lg `}
              aria-current={isActive(to) ? 'page' : undefined}
              title={seoLabels[label]}>
              <span className='sr-only'>{seoLabels[label]}</span>
              <span aria-hidden='true'>{label}</span>
            </Link>
          </motion.li>
        ))}

        {/* Special middle item */}
        <motion.li
          custom={leftItems.length}
          initial='hidden'
          animate='show'
          variants={variants}
          className='px-8 py-6 border-black border-t sm:border-t-0'>
          <Link
            href={specialItem.to}
            className='font-bold bg-white text-black px-6 py-3 rounded-none border-4 border-black hover:bg-black hover:text-white transition-colors inline-block'
            title={seoLabels[specialItem.label]}>
            <span className='sr-only'>{seoLabels[specialItem.label]}</span>
            <span aria-hidden='true'>{specialItem.label}</span>
          </Link>
        </motion.li>

        {/* Right nav items */}
        {rightItems.map(({ to, label }, i) => (
          <motion.li
            key={label}
            custom={i + leftItems.length + 1}
            initial='hidden'
            animate='show'
            variants={variants}
            className={`px-8 py-6 border-black border-t sm:border-t-0 sm:border-r-4 transition-colors font-bold ${
              i === 0 ? 'sm:border-l-4' : ''
            } ${isActive(to) ? 'bg-black text-white' : 'text-black'}`}>
            <Link
              href={to}
              className={`tracking-wider text-lg `}
              aria-current={isActive(to) ? 'page' : undefined}
              title={seoLabels[label]}>
              <span className='sr-only'>{seoLabels[label]}</span>
              <span aria-hidden='true'>{label}</span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
