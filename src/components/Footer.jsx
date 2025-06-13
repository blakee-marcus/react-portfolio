'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Github, Code2 } from 'lucide-react';

function Footer() {
  const contactLinks = [
    {
      href: 'mailto:marcusb733@gmail.com',
      label: 'Email',
      icon: <Mail size={16} />,
      aria: 'Email Blake Marcus',
    },
    {
      href: 'https://linkedin.com/in/blake-marcus',
      label: 'LinkedIn',
      icon: <Linkedin size={16} />,
      external: true,
      rel: 'me',
    },
    {
      href: 'https://github.com/blakee-marcus',
      label: 'GitHub',
      icon: <Github size={16} />,
      external: true,
      rel: 'me',
    },
  ];

  return (
    <footer
      className='bg-secondary text-primary border-t-4 border-primary font-base py-16 px-6'
      role='contentinfo'>
      <div className='max-w-6xl mx-auto flex flex-col items-center gap-10'>
        {/* CTA */}
        <p className='text-center text-lg sm:text-xl font-extrabold uppercase tracking-widest border-l-4 border-primary pl-4 max-w-2xl leading-snug'>
          Ready to launch your new site? <br className='sm:hidden' />
          <Link
            href='/hire'
            className='bg-highlight text-primary border-4 border-primary shadow-brutal px-2 py-1 mt-2 inline-block hover:bg-primary hover:text-secondary transition-colors duration-200'>
            Hire freelance developer Blake Marcus
          </Link>
          .
        </p>

        {/* Copyright */}
        <p className='text-sm sm:text-base font-bold uppercase tracking-wider border-b-4 border-primary pb-3 w-full text-center'>
          &copy; 2025 Blake Marcus. All Rights Reserved.
        </p>

        {/* Tech Stack */}
        <div className='text-center'>
          <h3 className='text-xs sm:text-sm font-bold uppercase tracking-widest inline-flex items-center gap-1 mb-2'>
            <Code2 size={14} />
            Tech Stack
          </h3>
          <ul className='flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold uppercase tracking-widest border-t-4 border-primary pt-4'>
            {['React', 'Flask', 'PostgreSQL', 'Tailwind CSS'].map((tech) => (
              <li
                key={tech}
                className='bg-primary text-secondary px-3 py-1 border-2 border-primary shadow-brutal'>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <p className='text-xs sm:text-sm text-center uppercase tracking-wider font-medium border-l-4 border-primary pl-3'>
          Serving Long Beach, CA & Remote Clients Across the U.S.
        </p>

        {/* Contact Links */}
        <div className='flex flex-wrap justify-center gap-4 mt-4 text-xs sm:text-sm uppercase font-bold'>
          {contactLinks.map(({ href, label, icon, external, aria, rel }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? `noopener noreferrer${rel ? ` ${rel}` : ''}` : rel}
              className='inline-flex items-center gap-2 bg-accent text-white border-4 border-primary shadow-brutal px-4 py-2 hover:bg-primary hover:text-secondary transition-colors'
              aria-label={aria || label}>
              {icon}
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
