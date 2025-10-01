import Script from 'next/script';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/utils/projects';
import realProjects from '@/utils/realProjects';

// --- Static generation hints (fast TTFB, stable HTML for bots) ---
export const dynamic = 'force-static';
export const revalidate = 3600 * 24; // 24h

const siteUrl = 'https://www.blakemarcus.com';
const pageUrl = `${siteUrl}/portfolio`;

export const metadata = {
  title: 'Web Developer Portfolio | Blake Marcus – Business Websites & Web Apps',
  description:
    'Browse freelance web development projects by Blake Marcus. Includes client work, business websites, landing pages, and custom full-stack apps built with React and Flask.',
  keywords:
    'web developer portfolio, freelance web developer, business website portfolio, React projects, full-stack development, Long Beach web design, custom web apps, Blake Marcus projects',
  authors: [{ name: 'Blake Marcus' }],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Blake Marcus | Freelance Web Developer Portfolio',
    description:
      'Explore the work of Blake Marcus — web developer specializing in responsive websites and custom applications for small businesses.',
    url: pageUrl,
    images: [
      {
        url: `${siteUrl}/api/og?title=Web+Developer+Portfolio`,
        width: 1200,
        height: 630,
        alt: 'Blake Marcus — Web Developer Portfolio',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blake Marcus | Freelance Web Developer Portfolio',
    description:
      'Responsive websites and custom apps for small businesses — selected work and case studies.',
    images: [`${siteUrl}/api/og?title=Web+Developer+Portfolio`],
  },
};

function slugify(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export default function Portfolio() {
  // --- JSON-LD: Breadcrumbs + ItemLists (clients & experiments) ---
  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: pageUrl },
    ],
  };

  const toItemList = (arr, section) => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Portfolio — ${section}`,
    itemListElement: arr.map((p, i) => {
      const name = p?.title || p?.name || `Project ${i + 1}`;
      const href = p?.url || p?.href || `${pageUrl}#${slugify(name)}`;
      // Model each item as a generic CreativeWork (safe, flexible)
      return {
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name,
          url: href.startsWith('http') ? href : `${siteUrl}${href}`,
        },
      };
    }),
  });

  const clientsItemListJsonLd = toItemList(realProjects, 'Client Work');
  const experimentsItemListJsonLd = toItemList(projects, 'Bootcamp & Experiments');

  return (
    <main className='min-h-screen bg-secondary text-primary font-base px-6 sm:px-12 py-16 border-4 border-primary shadow-brutal'>
      {/* JSON-LD blocks for rich results */}
      <Script
        id='breadcrumbs-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <Script
        id='clients-itemlist-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clientsItemListJsonLd) }}
      />
      <Script
        id='experiments-itemlist-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experimentsItemListJsonLd) }}
      />

      <div className='max-w-7xl mx-auto px-6 sm:px-12'>
        <header className='mb-20'>
          <h1 className='text-[clamp(2.25rem,6vw,3.5rem)] font-headings uppercase border-b-4 border-primary pb-6 mb-8 tracking-wider leading-tight flex items-center gap-3 text-center sm:text-left justify-center sm:justify-start flex-wrap'>
            {/* Decorative icon kept as plain SVG for minimal noise to crawlers */}
            <svg
              width='32'
              height='32'
              aria-hidden='true'
              className='shrink-0'
              viewBox='0 0 24 24'
              fill='none'>
              <path d='M3 7h18M3 12h18M3 17h18' stroke='currentColor' strokeWidth='2' />
            </svg>
            <span>Web Development Portfolio</span>
          </h1>

          <p className='text-lg sm:text-xl max-w-3xl border-l-4 border-primary pl-4'>
            Real-world projects and experimental builds that show what I can create for your
            business. Whether you need a bold landing page, a custom workflow tool, or a scalable
            web app — I’ll help you launch it with confidence.
          </p>
        </header>

        {/* Real client projects */}
        <section aria-labelledby='real-projects'>
          <h2
            id='real-projects'
            className='text-2xl sm:text-4xl font-headings uppercase tracking-[0.03em] border-l-4 border-primary pl-4 mb-8 inline-flex items-center gap-2'>
            <svg width='22' height='22' aria-hidden='true' viewBox='0 0 24 24' fill='none'>
              <path
                d='M10 2h4l1 3h5v4l-3 1v4l3 1v4h-5l-1 3h-4l-1-3H4v-4l3-1v-4L4 9V5h5l1-3Z'
                stroke='currentColor'
                strokeWidth='2'
              />
            </svg>
            Real Projects for Real Clients
          </h2>

          {/* Use UL/LI for clear list semantics (helps screen readers & crawlers) */}
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {realProjects.map((project) => {
              const name = project?.title || project?.name;
              const anchorId = slugify(name || '');
              return (
                <li key={name || anchorId} id={anchorId}>
                  <article
                    itemScope
                    itemType='https://schema.org/CreativeWork'
                    className='contents'>
                    {/* If ProjectCard renders title, it will satisfy itemProp="name" at least via accessible text */}
                    <ProjectCard project={project} />
                    {/* Optional: if you can edit ProjectCard, add itemProp="name" to its title element and ensure images have descriptive alt text */}
                  </article>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Bootcamp & experiments */}
        <section aria-labelledby='bootcamp-projects' className='mt-24'>
          <h2
            id='bootcamp-projects'
            className='text-2xl sm:text-4xl font-headings uppercase tracking-[0.03em] border-l-4 border-primary pl-4 mb-8 inline-flex items-center gap-2'>
            <svg width='22' height='22' aria-hidden='true' viewBox='0 0 24 24' fill='none'>
              <path d='M4 20h16M12 4v12m0-12l5 5m-5-5L7 9' stroke='currentColor' strokeWidth='2' />
            </svg>
            Bootcamp Builds & Experiments
          </h2>

          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project) => {
              const name = project?.title || project?.name;
              const anchorId = slugify(name || '');
              return (
                <li key={name || anchorId} id={anchorId}>
                  <article
                    itemScope
                    itemType='https://schema.org/CreativeWork'
                    className='contents'>
                    <ProjectCard project={project} />
                  </article>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Contextual internal links (crawl depth & topical authority) */}
        <nav className='mt-20' aria-label='Next steps'>
          <ul className='flex flex-wrap gap-4'>
            <li>
              <a className='underline' href='/services'>
                Explore services →
              </a>
            </li>
            <li>
              <a className='underline' href='/hire'>
                See pricing →
              </a>
            </li>
            <li>
              <a className='underline' href='/contact'>
                Start a project →
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
