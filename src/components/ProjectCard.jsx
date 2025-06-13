'use client';
import Image from 'next/image';
import { ExternalLink, Github, Wrench } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <article
      itemScope
      itemType='https://schema.org/CreativeWork'
      className='bg-secondary border-4 border-primary font-base text-primary transition-transform hover:scale-[1.01] duration-200 shadow-brutal'>
      {/* Project Image */}
      <div className='border-b-4 border-primary'>
        <a
          href={project.url}
          target='_blank'
          rel='noopener noreferrer'
          itemProp='url'
          aria-label={`Visit live site for ${project.title}`}>
          <meta itemProp='mainEntityOfPage' content={project.url} />
          <Image
            src={project.img}
            alt={`Screenshot of ${project.title} website or app`}
            width={800}
            height={400}
            className='w-full h-56 object-cover'
            itemProp='image'
          />
        </a>
      </div>

      {/* Content */}
      <div className='p-[var(--component-padding)] space-y-4'>
        {/* Title */}
        <a
          href={project.url}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 text-xl font-headings uppercase tracking-wide hover:bg-primary hover:text-secondary hover:underline transition-colors'
          itemProp='headline'>
          {project.title}
          <ExternalLink size={16} aria-hidden='true' />
        </a>

        {/* Description */}
        <p className='text-sm leading-snug border-l-4 border-primary pl-4' itemProp='description'>
          {project.description}
        </p>

        {/* Repository */}
        {project.repo && (
          <div>
            <a
              href={project.repo}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1 text-sm font-bold uppercase underline hover:text-accent transition-colors'
              itemProp='codeRepository'>
              <Github size={16} />
              View Code Repository
            </a>
          </div>
        )}

        {/* Tech Stack */}
        {project.tech?.length > 0 && (
          <div>
            <h3 className='text-xs font-extrabold uppercase tracking-wide mb-2 inline-flex items-center gap-1'>
              <Wrench size={12} />
              Tools Used
            </h3>

            <div className='flex flex-wrap gap-2'>
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className='px-2 py-1 border-2 border-primary bg-highlight text-primary text-xs uppercase font-bold shadow-brutal'
                  itemProp='softwareRequirements'>
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
