'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useReducedMotion, motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, FolderOpen, Mail, Briefcase } from 'lucide-react';
const NavBar = () => {
  const pathname = usePathname();
  const shouldReduce = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

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

  const allItems = [
    { to: '/', label: 'Home', icon: <Home size={18} /> },
    { to: '/about', label: 'About', icon: <User size={18} /> },
    { to: '/portfolio', label: 'Portfolio', icon: <FolderOpen size={18} /> },
    { to: '/contact', label: 'Contact', icon: <Mail size={18} /> },
    { to: '/hire', label: 'Hire Me', icon: <Briefcase size={18} /> },
  ];

  return (
    <nav
      className='bg-secondary text-primary font-base border-b-4'
      role='navigation'
      aria-label='Primary site navigation'>
      <div className='sm:hidden flex justify-between items-center px-4 py-3 border-b border-primary'>
        <span className='font-bold text-lg'>Blake Marcus</span>
        <button
          onClick={toggleMenu}
          className='text-primary focus:outline-none'
          aria-label='Toggle menu'>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {(isOpen || typeof window === 'undefined') && (
          <ul className='sm:hidden flex flex-col items-center border-t border-primary'>
            {allItems.map(({ to, label, icon }, i) => (
              <motion.li
                key={label}
                custom={i}
                initial='hidden'
                animate='show'
                exit='hidden'
                variants={variants}
                className='px-4 py-3 min-w-[10rem]'>
                <Link
                  href={to}
                  aria-current={isActive(to) ? 'page' : undefined}
                  title={seoLabels[label]}
                  onClick={() => setIsOpen(false)}
                  className={`block text-center w-full border-4 border-primary shadow-brutal p-2 
    ${
      label === 'Hire Me'
        ? 'bg-highlight text-black hover:bg-primary hover:text-secondary'
        : isActive(to)
        ? 'bg-primary text-secondary'
        : 'bg-accent text-white hover:bg-primary hover:text-secondary'
    } transition-colors`}>
                  <span className='sr-only'>{seoLabels[label]}</span>
                  <span
                    aria-hidden='true'
                    className='inline-flex items-center justify-center gap-2'>
                    {icon}
                    {label}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        )}
      </AnimatePresence>

      {/* Always show on desktop */}
      <ul className='hidden sm:flex sm:justify-center overflow-x-auto whitespace-nowrap'>
        {allItems.map(({ to, label, icon }, i) => (
          <li key={label} className='px-4 py-3 sm:px-6 sm:py-5 min-w-[10rem]'>
            <Link
              href={to}
              aria-current={isActive(to) ? 'page' : undefined}
              title={seoLabels[label]}
              className={`block text-center w-full border-4 border-primary shadow-brutal p-2 
          ${
            label === 'Hire Me'
              ? 'bg-highlight text-black hover:bg-primary hover:text-secondary'
              : isActive(to)
              ? 'bg-primary text-secondary'
              : 'bg-accent text-white hover:bg-primary hover:text-secondary'
          } transition-colors`}>
              <span className='sr-only'>{seoLabels[label]}</span>
              <span aria-hidden='true' className='inline-flex items-center justify-center gap-2'>
                {icon}
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
