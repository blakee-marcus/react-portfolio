'use client';
import Head from 'next/head';

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
        <link rel='canonical' href='https://blakemarcus.com/about' />
        <meta property='og:title' content='Freelance Web Developer in Long Beach – Blake Marcus' />
        <meta
          property='og:description'
          content='Need a new website for your business? Hire Blake Marcus, a freelance web developer in Long Beach, CA, specializing in custom websites, landing pages, and SEO-focused redesigns.'
        />
        <meta property='og:url' content='https://blakemarcus.com/about' />
      </Head>

      <main className='min-h-screen bg-black text-white font-mono'>
        <header className='w-full bg-black px-4 py-6 text-center text-3xl md:text-4xl font-extrabold uppercase tracking-tight'>
          <h1>About Blake Marcus</h1>
        </header>

        <section className='max-w-screen-lg mx-auto px-4 md:px-8 py-12 md:py-16'>
          <h2 className='text-3xl md:text-5xl font-extrabold uppercase text-white border-b-2 border-white pb-4 md:pb-6 mb-8 md:mb-12 tracking-widest'>
            Custom Website Development for Local Businesses
          </h2>

          <p className='text-base md:text-lg mb-6'>
            I’m Blake Marcus — a <strong>freelance web developer in Long Beach, CA</strong> focused
            on helping local businesses and entrepreneurs <strong>redo their websites</strong> to
            boost credibility, performance, and search visibility.
          </p>

          <p className='text-base md:text-lg mb-6'>
            Whether you need a <strong>modern redesign</strong>, a <strong>landing page</strong> to
            drive leads, or a custom web app to streamline operations, I’ll help you build a
            solution that’s <strong>fast-loading</strong>, <strong>SEO-friendly</strong>, and{' '}
            <strong>easy to maintain</strong>.
          </p>

          <p className='text-base md:text-lg mb-10'>
            I currently work at <strong>GoBasile</strong>, where I build a marketplace for tech
            repair shops — but I also partner with small business owners like you to launch
            professional websites that stand out.
          </p>

          <h3 className='text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-4 md:mb-6'>
            Services I Offer
          </h3>
          <ul className='text-base md:text-xl mb-10 space-y-3 md:space-y-4 list-disc list-inside'>
            <li>Redesigns for outdated business websites</li>
            <li>Custom landing pages optimized for conversions</li>
            <li>SEO-ready websites with contact forms and social proof</li>
            <li>Web apps with dashboards, accounts, and backend logic</li>
          </ul>

          <h3 className='text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-4 md:mb-6'>
            Tech Stack
          </h3>
          <ul className='text-base md:text-xl mb-10 space-y-2'>
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

          <h3 className='text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-4 md:mb-6'>
            Sample Projects
          </h3>
          <ul className='text-base md:text-xl mb-10 space-y-6'>
            <li>
              <strong>Customer Central CRM:</strong> A React + GraphQL app for managing client
              relationships, custom-built for a service-based team.
              <br />
              <a
                href='https://github.com/blakee-marcus/customer-central'
                className='text-neon hover:text-white'
                target='_blank'
                rel='noopener noreferrer'>
                View Project
              </a>
            </li>
            <li>
              <strong>Tesla Check-In Tool:</strong> A check-in kiosk tool that improved delivery
              speed by 75%. Developed while working at Tesla.
              <br />
              <a
                href='https://github.com/blakee-marcus/Check-In-Tool'
                className='text-neon hover:text-white'
                target='_blank'
                rel='noopener noreferrer'>
                View Project
              </a>
            </li>
            <li>
              <strong>Deep Thoughts:</strong> A lightweight social app built with React and Node.js.
              <br />
              <a
                href='https://github.com/blakee-marcus/deep-thoughts'
                className='text-neon hover:text-white'
                target='_blank'
                rel='noopener noreferrer'>
                View Project
              </a>
            </li>
          </ul>

          <h3 className='text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-4 md:mb-6'>
            Experience & Teaching
          </h3>
          <div className='mb-6'>
            <h4 className='text-xl md:text-2xl font-semibold'>
              Teaching Assistant – edX (2022–Present)
            </h4>
            <p className='text-base md:text-lg'>
              Helping students learn full-stack web development, including React, Node.js, and
              responsive design.
            </p>
          </div>
          <div className='mb-10'>
            <h4 className='text-xl md:text-2xl font-semibold'>Tesla Advisor (2023–2024)</h4>
            <p className='text-base md:text-lg'>
              Delivered a custom check-in tool to improve delivery workflow. Gained hands-on
              experience blending tech with real-world operations.
            </p>
          </div>

          <h3 className='text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-4 md:mb-6'>
            Let’s Work Together
          </h3>
          <p className='text-base md:text-lg mb-4'>
            Ready to <strong>rebuild your business website</strong>?{' '}
            <a href='mailto:marcusb733@gmail.com' className='text-neon hover:text-white'>
              Email me
            </a>{' '}
            or connect on{' '}
            <a
              href='https://www.linkedin.com/in/blake-marcus/'
              className='text-neon hover:text-white'
              target='_blank'
              rel='noopener noreferrer'>
              LinkedIn
            </a>
            .
          </p>
          <p className='text-base md:text-lg'>
            You can also check out more of my work on{' '}
            <a
              href='https://github.com/blakee-marcus'
              className='text-neon hover:text-white'
              target='_blank'
              rel='noopener noreferrer'>
              GitHub
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
}
