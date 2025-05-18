import React from 'react';

function ProjectCard({ project }) {
  return (
    <article className='bg-white border-8 border-black font-mono shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <div className='border-b-8 border-black'>
        <a href={project.url} target='_blank' rel='noopener noreferrer'>
          <img
            src={project.img}
            alt={`Screenshot of ${project.title} app home page`}
            className='w-full h-56 object-cover'
          />
        </a>
      </div>

      <div className='p-6'>
        <a
          href={project.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-2xl font-extrabold uppercase text-black hover:bg-black hover:text-white hover:underline transition-all'>
          {project.title}
        </a>

        <p className='mt-2 text-sm text-gray-700'>{project.description}</p>

        <div className='mt-4'>
          <a
            href={project.repo}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm underline text-black hover:text-gray-800'>
            View Repository
          </a>
        </div>

        <div className='mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-wide'>
          {project.tech.map((tech) => (
            <span key={tech} className='px-2 py-1 border-2 border-black bg-gray-100'>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
