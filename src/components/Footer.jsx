// components/Footer.jsx (server component)

import Link from 'next/link';
import { Mail, Linkedin, Github, Code2 } from 'lucide-react';

export default function Footer() {
  const contactLinks = [
    {
      href: 'mailto:marcusb733@gmail.com',
      label: 'Email',
      Icon: Mail,
      aria: 'Email Blake Marcus',
      itemProp: 'email',
    },
    {
      href: 'https://linkedin.com/in/blake-marcus',
      label: 'LinkedIn',
      Icon: Linkedin,
      external: true,
      relExtra: 'me',
      sameAs: true,
    },
    {
      href: 'https://github.com/blakee-marcus',
      label: 'GitHub',
      Icon: Github,
      external: true,
      relExtra: 'me',
      sameAs: true,
    },
  ];

  const stack = ['React', 'Flask', 'PostgreSQL', 'Tailwind CSS'];

  return (
    <footer
      className='bg-secondary text-primary border-t-4 border-primary font-base py-16 px-6'
      role='contentinfo'
      itemScope
      itemType='https://schema.org/Organization'>
      {/* Org structured data via microdata */}
      <meta itemProp='name' content='Blake Marcus' />
      <link itemProp='url' href='https://www.blakemarcus.com' />

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
          &copy; {new Date().getFullYear()} <span itemProp='name'>Blake Marcus</span>. All Rights
          Reserved.
        </p>

        {/* Tech Stack (kept for UX; also helps topical relevance) */}
        <div className='text-center'>
          <h3 className='text-xs sm:text-sm font-bold uppercase tracking-widest inline-flex items-center gap-1 mb-2'>
            <Code2 size={14} aria-hidden='true' />
            Tech Stack
          </h3>
          <ul className='flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold uppercase tracking-widest border-t-4 border-primary pt-4'>
            {stack.map((tech) => (
              <li
                key={tech}
                className='bg-primary text-secondary px-3 py-1 border-2 border-primary shadow-brutal'>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Location / Service area */}
        <p className='text-xs sm:text-sm text-center uppercase tracking-wider font-medium border-l-4 border-primary pl-3'>
          <span itemProp='areaServed'>United States</span> — Based in{' '}
          <span itemProp='address' itemScope itemType='https://schema.org/PostalAddress'>
            <span itemProp='addressLocality'>Long Beach</span>,{' '}
            <span itemProp='addressRegion'>CA</span>
          </span>
        </p>

        {/* Contact & Social */}
        <div className='flex flex-wrap justify-center gap-4 mt-4 text-xs sm:text-sm uppercase font-bold'>
          {contactLinks.map(({ href, label, Icon, external, aria, relExtra, itemProp, sameAs }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? `noopener noreferrer${relExtra ? ` ${relExtra}` : ''}` : relExtra}
              className='inline-flex items-center gap-2 bg-accent text-white border-4 border-primary shadow-brutal px-4 py-2 hover:bg-primary hover:text-secondary transition-colors'
              aria-label={aria || label}
              {...(itemProp ? { itemProp } : {})}
              {...(sameAs ? { itemProp: 'sameAs' } : {})}>
              <Icon size={16} aria-hidden='true' />
              {label}
            </a>
          ))}
        </div>

        {/* Helpful footer nav (boosts crawl paths) */}
        <nav aria-label='Footer navigation' className='mt-6'>
          <ul className='flex flex-wrap justify-center gap-4 text-xs sm:text-sm uppercase font-bold'>
            <li>
              <Link className='underline hover:no-underline' href='/services'>
                Services
              </Link>
            </li>
            <li>
              <Link className='underline hover:no-underline' href='/portfolio'>
                Portfolio
              </Link>
            </li>
            <li>
              <Link className='underline hover:no-underline' href='/hire'>
                Pricing
              </Link>
            </li>
            <li>
              <Link className='underline hover:no-underline' href='/contact'>
                Contact
              </Link>
            </li>
            <li>
              <Link className='underline hover:no-underline' href='/about'>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
