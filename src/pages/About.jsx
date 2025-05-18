import React from 'react';
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
      <Helmet>
        <title>About Blake Marcus – Full-Stack Developer & Marketplace Builder</title>
        <meta
          name='description'
          content='Learn about Blake Marcus, a full-stack developer specializing in React, Tailwind CSS, Node.js, and GraphQL. Currently building a tech repair marketplace platform at GoBasile.'
        />
        <meta
          name='keywords'
          content='Full-stack developer, React developer, Node.js, GraphQL, Tailwind CSS, GoBasile, marketplace platform, tech repair, CRM apps'
        />
        <meta name='author' content='Blake Marcus' />
      </Helmet>
      <main className='min-h-screen bg-black text-white font-mono'>
        <header className='w-full bg-black p-6 text-center text-4xl font-extrabold uppercase tracking-tight'>
          About Me
        </header>

        <section className='max-w-screen-lg mx-auto px-8 py-16'>
          <h2 className='text-5xl font-extrabold uppercase text-white border-b-2 border-white pb-6 mb-12 tracking-widest'>
            Hi, I'm Blake Marcus
          </h2>

          <p className='text-lg mb-8'>
            I’m a <span className='font-bold'>full-stack developer</span> focused on building
            modern, scalable web applications. My strength lies in the
            <span className='font-bold'> front end</span> using technologies like{' '}
            <span className='font-bold'>React</span> and{' '}
            <span className='font-bold'>Tailwind CSS</span>, and I have solid backend experience
            with <span className='font-bold'>Node.js</span>,{' '}
            <span className='font-bold'>Express</span>, and{' '}
            <span className='font-bold'>GraphQL</span>.
          </p>

          <p className='text-lg mb-8'>
            I currently work at <span className='font-bold'>GoBasile</span>, where I’m helping build
            a <span className='font-bold'>marketplace platform</span> for tech repair shops.
          </p>

          <p className='text-lg mb-12'>
            I earned a certificate from the{' '}
            <span className='font-bold'>UCLA Full Stack Development Bootcamp</span>, where I gained
            hands-on experience building <span className='font-bold'>CRM tools</span>,{' '}
            <span className='font-bold'>queue managers</span>, and{' '}
            <span className='font-bold'>social media apps</span>. My background as a teaching
            assistant sharpens my ability to explain complex topics simply and effectively.
          </p>

          <h3 className='text-3xl font-extrabold uppercase tracking-wide mb-6'>Technical Skills</h3>
          <ul className='text-xl mb-12 space-y-2'>
            <li>
              <strong>Front-End:</strong> React, Tailwind CSS, JavaScript, HTML, CSS
            </li>
            <li>
              <strong>Back-End:</strong> Node.js, Express, GraphQL, Flask
            </li>
            <li>
              <strong>Databases:</strong> MongoDB, PostgreSQL, MySQL
            </li>
            <li>
              <strong>Version Control:</strong> Git, GitHub
            </li>
            <li>
              <strong>Deployment:</strong> Heroku, AWS
            </li>
          </ul>

          <h3 className='text-3xl font-extrabold uppercase tracking-wide mb-6'>Key Projects</h3>
          <ul className='text-xl mb-12 space-y-6'>
            <li>
              <strong>Customer Central CRM:</strong> A full-featured CRM to manage customer data and
              communication history. Built with <span className='font-bold'>React</span>,{' '}
              <span className='font-bold'>GraphQL</span>, and{' '}
              <span className='font-bold'>MongoDB</span>. <br />
              <a
                href='https://github.com/blakee-marcus/customer-central'
                className='text-neon hover:text-white'
                target='_blank'
                rel='noopener noreferrer'>
                View Repo
              </a>
            </li>

            <li>
              <strong>Check-In Tool (Tesla):</strong> A custom-built guest check-in system that
              improved delivery throughput by 75%. Built with{' '}
              <span className='font-bold'>React</span>, <span className='font-bold'>GraphQL</span>,
              and <span className='font-bold'>MongoDB</span>. <br />
              <a
                href='https://github.com/blakee-marcus/Check-In-Tool'
                className='text-neon hover:text-white'
                target='_blank'
                rel='noopener noreferrer'>
                View Repo
              </a>
            </li>

            <li>
              <strong>Deep Thoughts:</strong> A social media platform for sharing and reacting to
              posts. Built with <span className='font-bold'>React</span>,{' '}
              <span className='font-bold'>Node.js</span>, <span className='font-bold'>MongoDB</span>
              , and <span className='font-bold'>GraphQL</span>. <br />
              <a
                href='https://github.com/blakee-marcus/deep-thoughts'
                className='text-neon hover:text-white'
                target='_blank'
                rel='noopener noreferrer'>
                View Repo
              </a>
            </li>
          </ul>

          <h3 className='text-3xl font-extrabold uppercase tracking-wide mb-6'>
            Professional Experience
          </h3>

          <div className='mb-8'>
            <h4 className='text-2xl font-semibold'>Teaching Assistant, edX (Oct 2022 – Present)</h4>
            <p className='text-lg'>
              I support students in full stack courses by helping them debug code, understand
              concepts, and grow their skills in real time.
            </p>
          </div>

          <div className='mb-12'>
            <h4 className='text-2xl font-semibold'>Tesla Advisor (Mar 2023 – Apr 2024)</h4>
            <p className='text-lg'>
              Designed and built a check-in system to streamline customer delivery processes. The
              tool significantly improved queue efficiency using{' '}
              <span className='font-bold'>React</span> and{' '}
              <span className='font-bold'>MongoDB</span>.
            </p>
          </div>

          <h3 className='text-3xl font-extrabold uppercase tracking-wide mb-6'>Let's Connect</h3>
          <p className='text-lg mb-4'>
            View more of my work on{' '}
            <a
              href='https://github.com/blakee-marcus'
              target='_blank'
              rel='noopener noreferrer'
              className='text-neon hover:text-white'>
              GitHub
            </a>{' '}
            or connect with me on{' '}
            <a
              href='https://www.linkedin.com/in/blake-marcus/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-neon hover:text-white'>
              LinkedIn
            </a>
            .
          </p>
          <p className='text-lg'>
            You can also reach out directly via email:{' '}
            <a href='mailto:marcusb733@gmail.com' className='text-neon hover:text-white'>
              marcusb733@gmail.com
            </a>
          </p>
        </section>
      </main>
    </>
  );
}

export default About;
