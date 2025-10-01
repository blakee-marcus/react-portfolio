'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useReducedMotion, motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, FolderOpen, Mail, Briefcase } from 'lucide-react';

const NAV_ITEMS = [
  { to: '/', label: 'Home', Icon: Home },
  { to: '/about', label: 'About', Icon: User },
  { to: '/portfolio', label: 'Portfolio', Icon: FolderOpen },
  { to: '/contact', label: 'Contact', Icon: Mail },
  { to: '/hire', label: 'Hire Me', Icon: Briefcase },
];

const SEO_TITLES = {
  Home: 'Home – Blake Marcus',
  About: 'About Blake Marcus',
  Portfolio: 'Portfolio – Projects',
  Contact: 'Contact Blake Marcus',
  'Hire Me': 'Hire a Web Developer',
};

export default function NavBar() {
  const pathname = usePathname() || '/';
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  const isActive = (to) => {
    if (to === '/') return pathname === '/';
    return pathname === to || pathname.startsWith(`${to}/`);
  };

  const variants = {
    hidden: { opacity: 0, y: 10 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: reduced ? {} : { delay: i * 0.05, duration: 0.2 },
    }),
  };

  const navItemClass = (active, highlight) =>
    `block text-center w-full border-4 border-primary shadow-brutal p-2 transition-colors
     ${
       highlight
         ? 'bg-highlight text-black hover:bg-primary hover:text-secondary'
         : active
         ? 'bg-primary text-secondary'
         : 'bg-accent text-white hover:bg-primary hover:text-secondary'
     }`;

  const mobileMenuId = 'primary-nav-menu';

  return (
    <nav
      className='bg-secondary text-primary font-base border-b-4 border-primary'
      role='navigation'
      aria-label='Primary'>
      {/* Mobile header */}
      <div className='sm:hidden flex justify-between items-center px-4 py-3 border-b border-primary'>
        <Link href='/' rel='home' className='font-bold text-lg' onClick={close}>
          Blake Marcus
        </Link>
        <button
          onClick={toggle}
          className='text-primary focus:outline-none'
          aria-expanded={open ? 'true' : 'false'}
          aria-controls={mobileMenuId}
          aria-label='Toggle menu'>
          {open ? <X size={28} aria-hidden='true' /> : <Menu size={28} aria-hidden='true' />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {open && (
          <ul
            id={mobileMenuId}
            className='sm:hidden flex flex-col items-center border-t border-primary'>
            {NAV_ITEMS.map(({ to, label, Icon }, i) => {
              const active = isActive(to);
              const highlight = label === 'Hire Me';
              return (
                <motion.li
                  key={to}
                  custom={i}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  variants={variants}
                  className='px-4 py-3 min-w-[10rem]'>
                  <Link
                    href={to}
                    aria-current={active ? 'page' : undefined}
                    title={SEO_TITLES[label] || label}
                    onClick={close}
                    className={navItemClass(active, highlight)}>
                    <span className='sr-only'>{SEO_TITLES[label] || label}</span>
                    <span
                      aria-hidden='true'
                      className='inline-flex items-center justify-center gap-2'>
                      <Icon size={18} aria-hidden='true' />
                      {label}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        )}
      </AnimatePresence>

      {/* Desktop nav */}
      <ul className='hidden sm:flex sm:justify-center overflow-x-auto whitespace-nowrap'>
        {NAV_ITEMS.map(({ to, label, Icon }) => {
          const active = isActive(to);
          const highlight = label === 'Hire Me';
          return (
            <li key={to} className='px-4 py-3 sm:px-6 sm:py-5 min-w-[10rem]'>
              <Link
                href={to}
                aria-current={active ? 'page' : undefined}
                title={SEO_TITLES[label] || label}
                className={navItemClass(active, highlight)}>
                <span className='sr-only'>{SEO_TITLES[label] || label}</span>
                <span aria-hidden='true' className='inline-flex items-center justify-center gap-2'>
                  <Icon size={18} aria-hidden='true' />
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
