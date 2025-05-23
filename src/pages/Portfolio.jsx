import React from 'react';
import { Helmet } from 'react-helmet-async';

import ProjectCard from '../components/ProjectCard';
import projects from '../utils/projects';
import realProjects from '../utils/realProjects';

function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Web Development Portfolio | Blake Marcus</title>
        <meta
          name='description'
          content='See websites and web applications built by Blake Marcus — including business tools, landing pages, and custom solutions for real clients.'
        />
        <meta
          name='keywords'
          content='freelance web developer portfolio, small business websites, custom web apps, React developer, Long Beach, web design work'
        />
        <meta name='author' content='Blake Marcus' />
      </Helmet>

      <section className='min-h-screen bg-white text-black font-mono border-t-8 border-black py-16'>
        <div className='max-w-7xl mx-auto px-8'>
          {/* Intro for clients */}
          <header className='mb-20'>
            <h1 className='text-5xl font-extrabold uppercase border-b-4 border-black pb-6 mb-8'>
              My Work
            </h1>
            <p className='text-xl max-w-3xl'>
              Below are real projects and bootcamp builds that show what I can create for your
              business. Whether you need a modern landing page, a tool to streamline your workflow,
              or a custom full-stack app — I can help you launch it with confidence.
            </p>
          </header>

          {/* Real-World Projects */}
          <h2 className='text-4xl font-bold uppercase tracking-wider border-b-2 border-black pb-4 mb-12'>
            Real Projects for Real Clients
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-24'>
            {realProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {/* Bootcamp Projects */}
          <h2 className='text-4xl font-bold uppercase tracking-wider border-b-2 border-black pb-4 mb-12'>
            Bootcamp Builds & Experiments
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
