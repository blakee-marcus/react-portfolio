import React from 'react';
import { Helmet } from 'react-helmet-async';

import ProjectCard from '../components/ProjectCard';
import projects from '../utils/projects';
import realProjects from '../utils/realProjects';

function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio | Blake Marcus</title>
        <meta
          name='description'
          content='Explore bootcamp and real-world projects built by Blake Marcus showcasing skills in full-stack development, React, Tailwind, Flask, and PostgreSQL.'
        />
        <meta
          name='keywords'
          content='portfolio, projects, full-stack developer, React, Tailwind CSS, Flask, PostgreSQL, bootcamp projects, real-world projects'
        />
        <meta name='author' content='Blake Marcus' />
      </Helmet>

      <section className='min-h-screen bg-white text-black font-mono border-t-8 border-black py-16'>
        <div className='max-w-7xl mx-auto px-8'>
          {/* Real-World Projects */}
          <h2 className='text-5xl font-extrabold uppercase tracking-wider border-b-4 border-black pb-6 mb-16'>
            Real-World Projects
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
            {realProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {/* Bootcamp Projects */}
          <h2 className='text-5xl font-extrabold uppercase tracking-wider border-b-4 border-black pb-6 mb-16'>
            Bootcamp Projects
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-24'>
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
