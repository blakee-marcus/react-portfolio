import React from 'react';

function ProjectCard({ project }) {
  return (
    <article className='bg-white border-8 border-black font-mono shadow-lg hover:shadow-xl transition-shadow duration-300'>
      {/* Project image link */}
      <div className='border-b-8 border-black'>
        <a
          href={project.url}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`Visit live site for ${project.title}`}>
          <img
            src={project.img}
            alt={`Screenshot of ${project.title} website or app`}
            className='w-full h-56 object-cover'
          />
        </a>
      </div>

      {/* Content block */}
      <div className='p-6'>
        {/* Project title link */}
        <a
          href={project.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-2xl font-extrabold uppercase text-black hover:bg-black hover:text-white hover:underline transition-all'>
          {project.title}
        </a>

        {/* Project description */}
        <p className='mt-3 text-sm text-black leading-relaxed'>{project.description}</p>

        {/* View code link */}
        {project.repo && (
          <div className='mt-4'>
            <a
              href={project.repo}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm underline text-black hover:text-gray-800'>
              View Code Repository
            </a>
          </div>
        )}

        {/* Tech stack */}
        {project.tech?.length > 0 && (
          <div className='mt-6'>
            <h3 className='text-xs font-bold uppercase mb-2 tracking-wider text-black'>
              Tools Used
            </h3>
            <div className='flex flex-wrap gap-2 text-xs uppercase tracking-wide'>
              {project.tech.map((tech) => (
                <span key={tech} className='px-2 py-1 border-2 border-black bg-gray-100'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
