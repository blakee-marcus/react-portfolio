import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  const {
    title = 'Untitled Project',
    url = '#',
    img = '/placeholder.jpg',
    description = '',
    repo,
    tech = [],
    date, // optional: e.g., "2025-06-01"
  } = project || {};

  const isInternal = url?.startsWith('/');

  const LinkEl = ({ children, ...props }) =>
    isInternal ? (
      <Link href={url} {...props}>
        {children}
      </Link>
    ) : (
      <a href={url} target='_blank' rel='noopener noreferrer' {...props}>
        {children}
      </a>
    );

  return (
    <article
      itemScope
      itemType='https://schema.org/CreativeWork'
      className='bg-secondary border-4 border-primary font-base text-primary duration-200 shadow-brutal hover:scale-[1.01]'>
      {/* Media */}
      <div className='border-b-4 border-primary'>
        <LinkEl
          itemProp='url'
          aria-label={`Visit live site for ${title}`}
          title={`Open ${title}${isInternal ? '' : ' (opens in a new tab)'}`}>
          <meta itemProp='mainEntityOfPage' content={url} />
          <Image
            src={img}
            alt={`Screenshot of ${title}`}
            width={800}
            height={450}
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            loading='lazy'
            decoding='async'
            className='w-full h-56 object-cover'
            itemProp='image'
          />
        </LinkEl>
      </div>

      {/* Content */}
      <div className='p-[var(--component-padding)] space-y-4'>
        {/* Title (use a real heading for semantics) */}
        <h3 className='text-xl font-headings uppercase tracking-wide'>
          <LinkEl
            className='inline-flex items-center gap-2 hover:underline hover:bg-primary hover:text-secondary transition-colors'
            itemProp='name'>
            {title}
            {/* decorative icon for external links only */}
            {!isInternal && (
              <svg
                width='16'
                height='16'
                viewBox='0 0 24 24'
                aria-hidden='true'
                className='inline-block'>
                <path
                  d='M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z'
                  fill='currentColor'
                />
              </svg>
            )}
          </LinkEl>
        </h3>

        {/* Optional date for freshness signals */}
        {date && (
          <p className='text-xs text-primary/70'>
            <time itemProp='dateCreated' dateTime={date}>
              {new Date(date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
              })}
            </time>
          </p>
        )}

        {/* Description */}
        {description && (
          <p className='text-sm leading-snug border-l-4 border-primary pl-4' itemProp='description'>
            {description}
          </p>
        )}

        {/* Repository */}
        {repo && (
          <div>
            <a
              href={repo}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1 text-sm font-bold uppercase underline hover:text-accent transition-colors'
              itemProp='codeRepository'>
              {/* icon purely decorative */}
              <svg
                width='16'
                height='16'
                viewBox='0 0 24 24'
                aria-hidden='true'
                className='inline-block'>
                <path
                  d='M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.34-1.79-1.34-1.79-1.09-.75.09-.73.09-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.77.42-1.31.76-1.62-2.67-.31-5.48-1.34-5.48-5.96 0-1.32.47-2.39 1.23-3.23-.12-.3-.54-1.54.12-3.2 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.9.12 3.2.77.84 1.23 1.91 1.23 3.23 0 4.63-2.81 5.64-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z'
                  fill='currentColor'
                />
              </svg>
              View Code Repository
            </a>
          </div>
        )}

        {/* Tech Stack */}
        {tech.length > 0 && (
          <div>
            <h4 className='text-xs font-extrabold uppercase tracking-wide mb-2'>Tools Used</h4>
            <ul className='flex flex-wrap gap-2' itemProp='softwareRequirements'>
              {tech.map((t) => (
                <li key={t}>
                  <span className='px-2 py-1 border-2 border-primary bg-highlight text-primary text-xs uppercase font-bold shadow-brutal'>
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
