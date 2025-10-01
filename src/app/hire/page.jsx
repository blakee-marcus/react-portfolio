import Link from 'next/link';

// Fast, static HTML for crawlers
export const dynamic = 'force-static';
export const revalidate = 3600; // 1 hour

const siteUrl = 'https://www.blakemarcus.com';
const pageUrl = `${siteUrl}/hire`;

export const metadata = {
  title: 'Hire a Freelance Web Developer | Business Website Packages – Blake Marcus',
  description:
    'Transparent pricing to hire Blake Marcus — a freelance web developer building landing pages, small business websites, and full-stack apps in Long Beach and beyond.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Hire Blake Marcus | Freelance Web Developer Packages',
    description:
      'Choose from custom landing pages, websites, and full-stack applications. Fast delivery, clean design, scalable results.',
    images: [
      {
        url: `${siteUrl}/api/og?title=Hire+Blake+Marcus`,
        width: 1200,
        height: 630,
        alt: 'Hire Blake Marcus — Web Developer Packages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Blake Marcus | Freelance Web Developer Packages',
    description:
      'Transparent pricing for landing pages, business websites, and web apps tailored for small businesses.',
    images: [`${siteUrl}/api/og?title=Hire+Blake+Marcus`],
  },
  keywords: [
    'hire freelance web developer',
    'small business website pricing',
    'landing page developer',
    'full-stack web development',
    'custom websites Long Beach',
    'web development packages',
  ],
};

const tiers = [
  {
    title: 'Starter',
    price: '$500',
    priceNumber: 500,
    description: 'A bold, mobile-first landing page to introduce your business or idea.',
    aftercare: 'Optional support available at a discounted hourly rate.',
    link: '/contact?tier=starter',
  },
  {
    title: 'Professional',
    price: '$1500',
    priceNumber: 1500,
    description: 'A polished, multi-page website with contact forms and SEO basics.',
    aftercare: 'Need edits or additions later? Get a lower hourly rate as a returning client.',
    link: '/contact?tier=professional',
  },
  {
    title: 'Premium',
    price: '$3000+',
    priceMin: 3000, // use minPrice for “from” pricing
    description: 'Custom-built web app with full backend, dashboard, and tailored features.',
    aftercare: 'Discounted hourly support for long-term growth and enhancements.',
    link: '/contact?tier=premium',
  },
];

function jsonLd() {
  // FAQ
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to launch a site?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Landing pages usually launch in 1–2 weeks. More complex sites take longer depending on scope and features.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer hosting or domain setup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. I’ll help connect your domain and deploy to Vercel, Netlify, or other platforms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I request changes later?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Returning clients get discounted hourly support for future tweaks and improvements.',
        },
      },
    ],
  };

  // ItemList (services)
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: tiers.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: `${t.title} Website Package`,
        serviceType: 'Web development',
        provider: {
          '@type': 'Person',
          name: 'Blake Marcus',
          url: siteUrl,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Long Beach, CA',
            addressRegion: 'CA',
          },
        },
        areaServed: 'United States',
        description: t.description,
        offers:
          'priceMin' in t
            ? {
                '@type': 'Offer',
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  priceCurrency: 'USD',
                  minPrice: t.priceMin,
                },
                url: `${siteUrl}${t.link}`,
                availability: 'https://schema.org/InStock',
              }
            : {
                '@type': 'Offer',
                price: t.priceNumber,
                priceCurrency: 'USD',
                url: `${siteUrl}${t.link}`,
                availability: 'https://schema.org/InStock',
              },
      },
    })),
  };

  // OfferCatalog (clearer to Google that this is a pricing menu)
  const offerCatalogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Website Packages',
    url: pageUrl,
    itemListElement: tiers.map((t) => ({
      '@type': 'Offer',
      url: `${siteUrl}${t.link}`,
      itemOffered: {
        '@type': 'Service',
        name: `${t.title} Website Package`,
        serviceType: 'Web development',
        description: t.description,
      },
      ...(t.priceMin
        ? {
            priceSpecification: {
              '@type': 'PriceSpecification',
              priceCurrency: 'USD',
              minPrice: t.priceMin,
            },
          }
        : {
            price: t.priceNumber,
            priceCurrency: 'USD',
          }),
      availability: 'https://schema.org/InStock',
    })),
  };

  // Breadcrumbs
  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Hire', item: pageUrl },
    ],
  };

  // Return as a single string to inject once
  return JSON.stringify([faqJsonLd, itemListJsonLd, offerCatalogJsonLd, breadcrumbsJsonLd]);
}

export default function HirePage() {
  return (
    <main className='min-h-screen bg-secondary text-primary font-base px-6 sm:px-12 py-16 border-4 border-primary shadow-brutal'>
      {/* JSON-LD: inject once (lighter than multiple Script tags) */}
      <script
        id='hire-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: jsonLd() }}
      />

      <section className='max-w-4xl mx-auto text-center mb-20'>
        <h1 className='text-[clamp(2.5rem,8vw,4.5rem)] font-headings uppercase border-b-4 border-primary pb-6 mb-10 tracking-[var(--letter-spacing-wide)] leading-[var(--line-height-tight)]'>
          Hire a Web Developer
        </h1>

        <p className='text-base mt-4 max-w-3xl mx-auto'>
          Not sure what you need?{' '}
          <Link href='/contact' className='underline text-accent'>
            Reach out here
          </Link>{' '}
          or{' '}
          <Link href='/portfolio' className='underline text-accent'>
            see recent projects
          </Link>{' '}
          first.
        </p>
      </section>

      {/* Tiers as an accessible list for crawlers */}
      <section className='w-full flex justify-center' aria-labelledby='tiers-heading'>
        <h2 id='tiers-heading' className='sr-only'>
          Web Development Packages &amp; Pricing
        </h2>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[var(--component-gap)] w-full max-w-6xl px-4'>
          {tiers.map(({ title, price, description, aftercare, link, priceNumber, priceMin }) => {
            const aftercareId = `${title.toLowerCase().replace(/\s+/g, '-')}-aftercare`;
            return (
              <li key={title} className='h-full'>
                <article
                  className='h-full border-4 border-primary p-[var(--component-padding)] flex flex-col justify-between bg-secondary shadow-brutal'
                  itemScope
                  itemType='https://schema.org/Service'>
                  <div>
                    <h3
                      className='text-xl sm:text-2xl font-headings uppercase mb-4 tracking-[0.04em]'
                      itemProp='name'>
                      {title}
                    </h3>

                    <p className='mb-4' itemProp='description'>
                      {description}
                    </p>

                    {/* Machine-readable offer for parsers + human-friendly price */}
                    <div
                      itemProp='offers'
                      itemScope
                      itemType='https://schema.org/Offer'
                      className='mb-4'>
                      {typeof priceNumber === 'number' ? (
                        <>
                          <meta itemProp='priceCurrency' content='USD' />
                          <meta itemProp='price' content={String(priceNumber)} />
                        </>
                      ) : (
                        <>
                          {/* For “from” pricing use PriceSpecification */}
                          <div
                            itemProp='priceSpecification'
                            itemScope
                            itemType='https://schema.org/PriceSpecification'>
                            <meta itemProp='priceCurrency' content='USD' />
                            <meta itemProp='minPrice' content={String(priceMin)} />
                          </div>
                        </>
                      )}
                      <p className='text-2xl font-bold text-accent' aria-describedby={aftercareId}>
                        {price}
                        {priceMin ? <span className='sr-only'> (starting price)</span> : null}
                      </p>
                    </div>

                    <p
                      id={aftercareId}
                      className='text-sm font-medium border-t-4 border-primary pt-4'>
                      {aftercare}
                    </p>
                  </div>

                  <Link
                    href={link}
                    className='mt-6 w-full text-sm sm:text-base border-4 border-primary text-center uppercase font-headings py-4 px-4 bg-accent text-white hover:bg-primary hover:text-secondary transition-colors duration-200 shadow-[var(--shadow-brutal)] inline-flex items-center justify-center gap-2 hover:translate-x-[2px] hover:translate-y-[2px] transition-transform'>
                    Start with {title}
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </section>

      {/* FAQ section mirrors the FAQPage JSON-LD */}
      <section className='max-w-4xl mx-auto mt-24' aria-labelledby='faq-heading'>
        <h2
          id='faq-heading'
          className='text-3xl sm:text-4xl font-headings uppercase border-b-4 border-primary pb-3 mb-8'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-6 text-base sm:text-lg leading-relaxed'>
          <div>
            <h3 className='font-semibold text-primary'>How long does it take to launch a site?</h3>
            <p className='border-l-4 border-primary pl-4'>
              Landing pages usually launch in 1–2 weeks. More complex sites take longer depending on
              scope and features.
            </p>
          </div>
          <div>
            <h3 className='font-semibold text-primary'>Do you offer hosting or domain setup?</h3>
            <p className='border-l-4 border-primary pl-4'>
              Yes. I’ll help connect your domain and deploy to Vercel, Netlify, or other platforms.
            </p>
          </div>
          <div>
            <h3 className='font-semibold text-primary'>Can I request changes later?</h3>
            <p className='border-l-4 border-primary pl-4'>
              Absolutely. Returning clients get discounted hourly support for future tweaks and
              improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Contextual internal links (crawl depth & topical authority) */}
      <nav className='max-w-4xl mx-auto mt-16' aria-label='Next steps'>
        <ul className='flex flex-wrap gap-4'>
          <li>
            <Link href='/services' className='underline'>
              Explore all services →
            </Link>
          </li>
          <li>
            <Link href='/process' className='underline'>
              See my process →
            </Link>
          </li>
          <li>
            <Link href='/portfolio' className='underline'>
              View portfolio →
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
