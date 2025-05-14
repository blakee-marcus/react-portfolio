import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../utils/projects';

function Projects() {
  return (
    <section className='min-h-screen bg-white text-black font-mono border-t-8 border-black py-16'>
      <div className='max-w-7xl mx-auto px-8'>
        <h2 className='text-5xl font-extrabold uppercase tracking-wider border-b-4 border-black pb-6 mb-16'>
          My Work
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
          {projects.map((project) => (
            <article
              key={project.id}
              className='border-8 border-black p-6 bg-transparent hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 ease-in-out transform'>
              <ProjectCard project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
