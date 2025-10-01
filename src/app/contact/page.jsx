import dynamicImport from 'next/dynamic';

export const dynamic = 'force-static';

const siteUrl = 'https://www.blakemarcus.com';
const pageUrl = `${siteUrl}/contact`;

export const metadata = {
  title: 'Contact a Freelance Web Developer | Blake Marcus – Long Beach, CA',
  description:
    'Contact Blake Marcus to build or redesign your small business website. Fast, SEO-friendly sites with modern stacks. Based in Long Beach, serving clients nationwide.',
  alternates: { canonical: pageUrl },
  keywords: [
    'contact web developer',
    'freelance web developer Long Beach',
    'small business website',
    'Next.js developer',
    'SEO website redesign',
  ],
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Contact Blake Marcus — Freelance Web Developer',
    description:
      'Tell me about your project. I build fast, mobile-first, SEO-ready websites for small businesses and startups.',
    images: [
      {
        url: `${siteUrl}/api/og?title=Contact+Blake+Marcus`,
        width: 1200,
        height: 630,
        alt: 'Contact Blake Marcus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Blake Marcus — Freelance Web Developer',
    description: 'Get a quote for a high-performance business website or web app.',
    images: [`${siteUrl}/api/og?title=Contact+Blake+Marcus`],
  },
};

// Load the client form safely (avoids SSR issues if it uses hooks)
const ContactForm = dynamicImport(() => import('@/components/ContactForm'), { ssr: true });

export default function ContactPage() {
  const contactPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Blake Marcus',
    url: pageUrl,
    mainEntity: {
      '@type': 'Person',
      name: 'Blake Marcus',
      jobTitle: 'Freelance Web Developer',
      url: siteUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Long Beach',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
    },
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Blake Marcus',
    url: siteUrl,
    sameAs: ['https://github.com/blakee-marcus', 'https://www.linkedin.com/in/blake-marcus/'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'marcusb733@gmail.com',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
    ],
  };

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: pageUrl },
    ],
  };

  return (
    <main className='min-h-screen bg-secondary text-primary font-base px-6 sm:px-12 py-16 border-4 border-primary shadow-brutal'>
      <script
        id='contactpage-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        id='organization-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        id='breadcrumbs-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <header className='max-w-4xl mx-auto text-center mb-12 border-b-4 border-primary pb-6'>
        <h1 className='text-[clamp(2.25rem,6vw,3.5rem)] font-headings uppercase tracking-[var(--letter-spacing-wide)]'>
          Contact Blake Marcus
        </h1>
        <p className='mt-4 text-base sm:text-lg'>
          Tell me about your project—timeline, goals, and budget—and I’ll reply with next steps.
        </p>
      </header>

      <section className='max-w-3xl mx-auto grid gap-8' aria-labelledby='contact-methods'>
        <h2 id='contact-methods' className='sr-only'>
          Contact methods
        </h2>

        <div aria-live='polite' aria-busy='false'>
          <ContactForm />
        </div>

        <aside className='border-t-4 border-primary pt-6 space-y-3 text-base sm:text-lg'>
          <p>
            Prefer email?{' '}
            <a
              href='mailto:marcusb733@gmail.com'
              className='underline text-accent hover:bg-accent hover:text-secondary transition-colors'>
              marcusb733@gmail.com
            </a>
          </p>
          <p>
            Connect on{' '}
            <a
              href='https://www.linkedin.com/in/blake-marcus/'
              target='_blank'
              rel='noopener noreferrer'
              className='underline text-accent hover:bg-accent hover:text-secondary transition-colors'>
              LinkedIn
            </a>
            .
          </p>
        </aside>

        <nav aria-label='Related pages' className='pt-2'>
          <ul className='flex flex-wrap gap-4 text-sm sm:text-base'>
            <li>
              <a className='underline' href='/hire'>
                See packages & pricing →
              </a>
            </li>
            <li>
              <a className='underline' href='/portfolio'>
                View portfolio →
              </a>
            </li>
            <li>
              <a className='underline' href='/services'>
                Explore services →
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
