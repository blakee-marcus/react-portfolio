import React from 'react';

function ProjectCard({ project }) {
  return (
    <article className='bg-transparent border-8 border-black font-mono'>
      <div className='border-b-8 border-black'>
        <a href={project.url} target='_blank' rel='noopener noreferrer'>
          <img
            src={project.img}
            alt={`Screenshot of ${project.title} app, showcasing the home page.`}
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

        <div className='mt-4'>
          <a
            href={project.repo}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm underline text-black hover:bg-transparent hover:text-black transition-colors'>
            View Repo
          </a>
        </div>

        <div className='mt-4 flex flex-wrap gap-3 text-sm'>
          {project.tech.map((tech, i) => (
            <span key={tech} className='px-3 py-1 border-4 border-black uppercase'>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
