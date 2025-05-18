import React from 'react';
import { Helmet } from 'react-helmet-async';

function Clients() {
  return (
    <>
      <Helmet>
        <title>Clients – Blake Marcus Full-Stack Developer</title>
        <meta
          name='description'
          content='Discover how Blake Marcus has helped GoBasile build a scalable tech repair marketplace with modern full-stack web development solutions.'
        />
        <meta
          name='keywords'
          content='GoBasile, full-stack developer, React, Flask, PostgreSQL, web development, tech repair marketplace'
        />
        <meta name='author' content='Blake Marcus' />
      </Helmet>
      <section className='min-h-screen bg-white text-black font-mono border-t-8 border-black py-16'>
        <div className='max-w-5xl mx-auto px-8'>
          <h2 className='text-5xl font-extrabold uppercase tracking-wider border-b-4 border-black pb-6 mb-12'>
            Clients
          </h2>
          <p className='text-lg mb-8'>
            I’ve had the privilege of working with GoBasile, a tech repair marketplace, helping
            build their platform from the ground up. My work includes:
          </p>
          <ul className='list-disc list-inside mb-12 text-lg space-y-2'>
            <li>Developing a responsive, user-friendly front end using React and Tailwind CSS</li>
            <li>Building robust backend services with Flask and PostgreSQL</li>
            <li>Implementing features to connect repair shops with customers efficiently</li>
            <li>Collaborating closely with the founding team to shape the product roadmap</li>
          </ul>

          <p className='italic text-gray-700'>
            I’m always excited to partner with new clients and help bring their web projects to
            life. If you’re interested in working together, please{' '}
            <a href='/contact' className='underline hover:text-black'>
              get in touch
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

export default Clients;
