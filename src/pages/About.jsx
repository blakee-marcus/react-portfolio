import React from 'react';
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
      <Helmet>
        <title>About Blake Marcus – Freelance Web Developer in Long Beach</title>
        <meta
          name='description'
          content='Blake Marcus is a freelance web developer specializing in custom websites, landing pages, and web applications. Based in Long Beach, CA and serving businesses locally and remotely.'
        />
        <meta
          name='keywords'
          content='web developer Long Beach, freelance website designer, custom websites, small business web development, React developer, Tailwind CSS, full stack'
        />
        <meta name='author' content='Blake Marcus' />
      </Helmet>
      <main className='min-h-screen bg-black text-white font-mono'>
        <header className='w-full bg-black p-6 text-center text-4xl font-extrabold uppercase tracking-tight'>
          About Blake Marcus
        </header>

        <section className='max-w-screen-lg mx-auto px-8 py-16'>
          <h2 className='text-5xl font-extrabold uppercase text-white border-b-2 border-white pb-6 mb-12 tracking-widest'>
            Helping Businesses Build Better Websites
          </h2>

          <p className='text-lg mb-8'>
            I’m Blake Marcus — a freelance web developer based in <strong>Long Beach, CA</strong>. I
            help small businesses, startups, and creative teams launch bold, high-performance
            websites using tools like <strong>React</strong>, <strong>Tailwind CSS</strong>, and
            modern back-end frameworks.
          </p>

          <p className='text-lg mb-8'>
            My work focuses on delivering <strong>fast-loading</strong>,{' '}
            <strong>mobile-first</strong>, and <strong>easy-to-manage</strong> websites that reflect
            your brand and grow with your business.
          </p>

          <p className='text-lg mb-12'>
            I'm currently part of the team at <strong>GoBasile</strong>, where I’m building a custom
            marketplace platform for tech repair shops across the country.
          </p>

          <h3 className='text-3xl font-extrabold uppercase tracking-wide mb-6'>What I Build</h3>
          <ul className='text-xl mb-12 space-y-4 list-disc list-inside'>
            <li>Custom landing pages and small business websites</li>
            <li>Multi-page marketing sites with contact forms and SEO basics</li>
            <li>Web apps with dashboards, user accounts, and backend logic</li>
          </ul>

          <h3 className='text-3xl font-extrabold uppercase tracking-wide mb-6'>Technical Skills</h3>
          <ul className='text-xl mb-12 space-y-2'>
            <li>
              <strong>Front-End:</strong> React, Tailwind CSS, JavaScript
            </li>
            <li>
              <strong>Back-End:</strong> Node.js, Flask, GraphQL, Express
            </li>
            <li>
              <strong>Databases:</strong> PostgreSQL, MongoDB
            </li>
            <li>
              <strong>Tools:</strong> Git, GitHub, Heroku, Vercel, AWS
            </li>
          </ul>

          <h3 className='text-3xl font-extrabold uppercase tracking-wide mb-6'>
            Featured Projects
          </h3>
          <ul className='text-xl mb-12 space-y-6'>
            <li>
              <strong>Customer Central CRM:</strong> A full-featured CRM system for managing client
              data and communication. Built with React, GraphQL, and MongoDB.
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
              <strong>Tesla Check-In Tool:</strong> A custom-built guest check-in system that
              improved delivery speed by 75%. Used in a high-volume environment.
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
              <strong>Deep Thoughts:</strong> A lightweight social app for sharing posts and
              reactions. Built with React, Node.js, and MongoDB.
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

          <h3 className='text-3xl font-extrabold uppercase tracking-wide mb-6'>
            Professional Experience
          </h3>
          <div className='mb-8'>
            <h4 className='text-2xl font-semibold'>Teaching Assistant – edX (2022–Present)</h4>
            <p className='text-lg'>
              Supporting students through full-stack development courses by simplifying tough
              concepts and guiding hands-on coding projects.
            </p>
          </div>
          <div className='mb-12'>
            <h4 className='text-2xl font-semibold'>Tesla Advisor (2023–2024)</h4>
            <p className='text-lg'>
              Designed and deployed a custom check-in solution for vehicle deliveries, enhancing
              throughput and improving customer satisfaction.
            </p>
          </div>

          <h3 className='text-3xl font-extrabold uppercase tracking-wide mb-6'>
            Let’s Build Something
          </h3>
          <p className='text-lg mb-4'>
            Want to work together?{' '}
            <a href='mailto:marcusb733@gmail.com' className='text-neon hover:text-white'>
              Email me
            </a>{' '}
            or find me on{' '}
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
            You can also check out more of my code on{' '}
            <a
              href='https://github.com/blakee-marcus'
              target='_blank'
              rel='noopener noreferrer'
              className='text-neon hover:text-white'>
              GitHub
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
}

export default About;
