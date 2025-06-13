'use client';
import Head from 'next/head';
import { User, Settings, Code2, FolderOpen, GraduationCap, Handshake } from 'lucide-react';

export default function About() {
  return (
    <>
      <Head>
        <title>Long Beach Web Developer | Custom Business Websites by Blake Marcus</title>
        <meta
          name='description'
          content='Looking to redesign your business website? Blake Marcus is a freelance web developer based in Long Beach, CA who builds fast, custom websites for small businesses using React, Tailwind CSS, and modern frameworks.'
        />
        <meta
          name='keywords'
          content='web developer Long Beach, website redesign for small business, freelance web developer, hire web developer near me, custom business websites, React developer, Tailwind CSS, local web designer, full stack developer Long Beach'
        />
        <meta name='author' content='Blake Marcus' />
        <link rel='canonical' href='https://www.blakemarcus.com/about' />
        <meta property='og:title' content='Freelance Web Developer in Long Beach – Blake Marcus' />
        <meta
          property='og:description'
          content='Need a new website for your business? Hire Blake Marcus, a freelance web developer in Long Beach, CA, specializing in custom websites, landing pages, and SEO-focused redesigns.'
        />
        <meta property='og:url' content='https://www.blakemarcus.com/about' />
        <meta
          property='og:image'
          content='https://www.blakemarcus.com/api/og?title=About+Blake+Marcus'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </Head>

      <main className='min-h-screen bg-secondary text-primary font-base px-6 sm:px-12 py-16 border-4 border-primary shadow-brutal'>
        <header className='w-full px-4 py-10 text-center border-b-4 border-primary'>
          <h1 className='text-[2.5rem] sm:text-6xl font-headings uppercase tracking-[var(--letter-spacing-wide)] flex flex-col sm:flex-row gap-3 items-center justify-center sm:justify-start text-center sm:text-left'>
            <User size={32} />
            About Blake Marcus
          </h1>
        </header>

        <section className='max-w-6xl mx-auto px-6 sm:px-12 py-16 space-y-[var(--component-gap)]'>
          <div>
            <h2 className='text-3xl sm:text-5xl font-headings uppercase border-l-4 border-primary pl-4 tracking-tight inline-flex items-center gap-2'>
              <Settings size={28} />
              Custom Website Development for Local Businesses
            </h2>

            <p className='mt-4 text-lg leading-relaxed border-l-4 border-primary pl-4'>
              I’m Blake Marcus — a <strong>freelance web developer</strong> in Long Beach, CA
              helping small businesses <strong>rebuild their websites</strong> to boost trust,
              speed, and SEO.
            </p>
            <p className='text-lg leading-relaxed border-l-4 border-primary pl-4'>
              Whether you need a <strong>modern redesign</strong>, <strong>landing page</strong>, or
              fully custom app, I’ll help you ship something{' '}
              <strong>fast, clean, and easy to manage</strong>.
            </p>
            <p className='text-lg leading-relaxed border-l-4 border-primary pl-4'>
              I work at <strong>GoBasile</strong>, building a device marketplace — and I partner
              with small business owners like you to ship professional websites that{' '}
              <em>stand out</em>.
            </p>
          </div>

          <div>
            <h3 className='text-2xl sm:text-3xl font-headings uppercase border-b-4 border-primary pb-2'>
              Services I Offer
            </h3>
            <ul className='list-disc list-inside text-lg space-y-3 pt-4'>
              <li>Website redesigns with bold, mobile-first layouts</li>
              <li>Custom landing pages optimized for conversions</li>
              <li>SEO-ready sites with forms, reviews, and integrations</li>
              <li>Web apps with dashboards, logins, and backend logic</li>
            </ul>
          </div>

          <div>
            <h3 className='text-2xl sm:text-3xl font-headings uppercase border-b-4 border-primary pb-2'>
              <Code2 />
              Tech Stack
            </h3>
            <ul className='text-lg space-y-1 pt-4'>
              <li>
                <strong>Front-End:</strong> React, Tailwind CSS, JavaScript
              </li>
              <li>
                <strong>Back-End:</strong> Flask, Node.js, Express, GraphQL
              </li>
              <li>
                <strong>Databases:</strong> PostgreSQL, MongoDB
              </li>
              <li>
                <strong>Tools:</strong> Git, GitHub, Vercel, Heroku, AWS
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-2xl sm:text-3xl font-headings uppercase border-b-4 border-primary pb-2 inline-flex items-center gap-2'>
              <FolderOpen />
              <span>Sample Projects</span>
            </h3>
            <ul className='text-lg space-y-6 pt-4'>
              {[
                {
                  name: 'Tesla Check-In Tool',
                  desc: 'Internal kiosk app to streamline vehicle delivery workflows and improve customer handoffs.',
                  link: 'https://github.com/blakee-marcus/Check-In-Tool',
                },
                {
                  name: 'Every After Bakery',
                  desc: 'Full-stack eCommerce platform with login, cart, checkout, admin features, and Stripe payments.',
                  link: 'https://github.com/Azurene/ever-after-bakery',
                },
                {
                  name: 'Tech Blog',
                  desc: 'A CMS-style blog where users can sign up, write posts, and comment. Built with Express and MySQL.',
                  link: 'https://github.com/blakee-marcus/tech-blog',
                },
              ].map(({ name, desc, link }) => (
                <li key={name}>
                  <strong>{name}:</strong> {desc}
                  <br />
                  <a
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-accent underline hover:bg-accent hover:text-secondary transition-colors'>
                    View Project
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-2xl sm:text-3xl font-headings uppercase border-b-4 border-primary pb-2'>
              <GraduationCap />
              Experience & Teaching
            </h3>
            <div className='pt-4 space-y-6'>
              <div>
                <h4 className='text-xl sm:text-2xl font-bold uppercase tracking-wide'>
                  Teaching Assistant – edX (2022–Present)
                </h4>
                <p className='text-lg'>
                  I help students master full-stack development — from React and APIs to responsive
                  design.
                </p>
              </div>
              <div>
                <h4 className='text-xl sm:text-2xl font-bold uppercase tracking-wide'>
                  Tesla Advisor (2023–2024)
                </h4>
                <p className='text-lg'>
                  Built a kiosk tool to improve delivery workflows. Bridged tech with real-world
                  ops.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-2xl sm:text-3xl font-headings uppercase border-b-4 border-primary pb-2'>
              <Handshake />
              Let’s Work Together
            </h3>
            <p className='text-lg mt-4 border-l-4 border-primary pl-4'>
              Ready to <strong>rebuild your website</strong>?{' '}
              <a
                href='mailto:marcusb733@gmail.com'
                className='text-highlight underline hover:bg-highlight hover:text-primary transition-colors'>
                Email me
              </a>{' '}
              or connect on{' '}
              <a
                href='https://www.linkedin.com/in/blake-marcus/'
                className='text-highlight underline hover:bg-highlight hover:text-primary transition-colors'
                target='_blank'
                rel='noopener noreferrer'>
                LinkedIn
              </a>
              .
            </p>
            <p className='text-lg mt-2 border-l-4 border-primary pl-4'>
              You can also find more work on{' '}
              <a
                href='https://github.com/blakee-marcus'
                className='text-accent underline hover:bg-accent hover:text-secondary transition-colors'
                target='_blank'
                rel='noopener noreferrer'>
                GitHub
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
