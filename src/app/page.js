import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import MotionReveal from '@/components/MotionReveal';


export const dynamic = 'force-static';

// --- Page-level metadata (overrides layout template) ---
export const metadata = {
  title: 'Custom Websites for Small Businesses | Blake Marcus – Freelance Web Developer',
  description:
    'Need a modern website that loads fast and drives results? Blake Marcus builds responsive, mobile-friendly websites for small businesses, startups, and service providers in Long Beach and beyond.',
  alternates: { canonical: 'https://www.blakemarcus.com/' },
  openGraph: {
    title: 'Blake Marcus – Freelance Web Developer',
    description:
      'High-performance websites for small businesses. View work or get a quote for a mobile-friendly, SEO-optimized site built to grow with your brand.',
    url: 'https://www.blakemarcus.com/',
    images: [
      {
        url: 'https://www.blakemarcus.com/api/og?title=Blake+Marcus+Web+Developer',
        width: 1200,
        height: 630,
        alt: 'Blake Marcus — Freelance Web Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blake Marcus – Freelance Web Developer',
    description:
      'High-performance websites for small businesses. Mobile-first, fast, built to convert.',
  },
  keywords: [
    'freelance web developer',
    'web design Long Beach',
    'Next.js developer',
    'SEO websites',
    'small business websites',
  ],
};

export default function HomePage() {
  // --- JSON-LD: FAQ + Breadcrumbs (rich results) ---
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a small business website cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most projects start with a discovery call, then a fixed-scope proposal. Simple sites start around $3,000, with custom features priced based on complexity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you handle SEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. I implement technical SEO (metadata, structured data, sitemaps), performance budgets, and content guidance to improve rankings and conversions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a typical project take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most sites launch in 3–6 weeks depending on content readiness and complexity. I provide milestones and weekly updates.',
        },
      },
    ],
  };

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.blakemarcus.com/' },
    ],
  };

  return (
    <main className='min-h-screen bg-secondary text-primary font-base px-6 sm:px-12 py-16 border-4 border-primary shadow-brutal'>
      {/* JSON-LD */}
      <Script
        id='faq-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id='breadcrumbs-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* HERO (single H1 for clarity) */}
      <section className='max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-8 items-center'>
        <div>
          <h1 className='text-[2.5rem] sm:text-6xl md:text-7xl font-headings uppercase leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-wide)] border-b-4 border-primary pb-4'>
            Freelance Web Developer
            <br />
            for Small Business Websites
          </h1>

          <p className='mt-4 text-lg sm:text-xl uppercase tracking-wide'>
            Fast. Mobile-Friendly. Easy to Manage.
            <br />
            Built to rank. Designed to convert.
          </p>

          <p className='mt-3 text-base sm:text-lg uppercase border-l-4 border-primary pl-4'>
            Currently building a marketplace at{' '}
            <a
              href='https://www.gobasile.com'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-highlight transition-colors inline-flex items-center gap-1'>
              GoBasile
            </a>{' '}
            — now booking select freelance projects.
          </p>

          <nav aria-label='Primary calls to action' className='mt-6'>
            <ul className='flex flex-col sm:flex-row flex-wrap gap-4 text-base sm:text-lg uppercase pt-2'>
              <li>
                <Link
                  href='/portfolio'
                  className='bg-accent text-white border-4 border-primary shadow-brutal px-4 py-3 font-extrabold hover:bg-highlight hover:text-black transition-colors inline-flex items-center justify-center gap-2'>
                  See My Work
                </Link>
              </li>
              <li>
                <Link
                  href='/hire'
                  className='bg-accent text-white border-4 border-primary shadow-brutal px-4 py-3 font-extrabold hover:bg-highlight hover:text-black transition-colors inline-flex items-center justify-center gap-2'>
                  Get a Quote
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Optional LCP image (replace src with your hero). Keeps CLS low with width/height. */}
        <div className='relative aspect-[4/3] md:aspect-square border-4 border-primary rounded-lg overflow-hidden'>
          <Image
            src='/hero-blake.jpg'
            alt='Blake Marcus builds fast, SEO-optimized websites'
            fill
            priority
            sizes='(max-width: 768px) 100vw, 40vw'
            className='object-cover'
          />
        </div>
      </section>

      {/* Secondary section: introduces services & credibility with proper H2 */}
      <MotionReveal>
        <section className='mt-24 max-w-5xl mx-auto border-t-4 border-primary pt-6'>
          <h2 className='text-2xl sm:text-3xl font-headings uppercase tracking-[0.04em] border-l-4 border-primary pl-4'>
            Custom Websites Built to Perform
          </h2>

          <p className='mt-4 text-base sm:text-lg font-medium tracking-wide leading-relaxed'>
            Based in Long Beach, CA, I craft bold, responsive websites for small businesses, local
            entrepreneurs, and startups. From landing pages to full redesigns, I focus on speed,
            accessibility, clean architecture, and on-page SEO to help you rank and convert.
          </p>

          {/* Quick internal links (helps crawl depth) */}
          <ul className='mt-6 grid sm:grid-cols-3 gap-4'>
            <li className='border-2 border-primary rounded-lg p-4'>
              <h3 className='font-semibold uppercase'>Services</h3>
              <p className='text-sm mt-2'>Design, development, SEO, and maintenance.</p>
              <Link className='underline mt-2 inline-block' href='/services'>
                Explore services →
              </Link>
            </li>
            <li className='border-2 border-primary rounded-lg p-4'>
              <h3 className='font-semibold uppercase'>Case Studies</h3>
              <p className='text-sm mt-2'>See how sites improved Core Web Vitals and leads.</p>
              <Link className='underline mt-2 inline-block' href='/portfolio'>
                View portfolio →
              </Link>
            </li>
            <li className='border-2 border-primary rounded-lg p-4'>
              <h3 className='font-semibold uppercase'>Process</h3>
              <p className='text-sm mt-2'>Clear milestones, weekly updates, and fixed scope.</p>
              <Link className='underline mt-2 inline-block' href='/process'>
                How I work →
              </Link>
            </li>
          </ul>
        </section>
      </MotionReveal>

      {/* On-page FAQ (matches FAQPage JSON-LD) */}
      <MotionReveal>
        <section className='mt-24 max-w-4xl mx-auto border-t-4 border-primary pt-6'>
          <h2 className='text-2xl sm:text-3xl font-headings uppercase tracking-[0.04em] border-l-4 border-primary pl-4'>
            Frequently Asked Questions
          </h2>
          <div className='mt-4 space-y-4'>
            <details className='border-2 border-primary rounded-md p-4'>
              <summary className='font-semibold cursor-pointer'>
                How much does a small business website cost?
              </summary>
              <p className='mt-2 text-sm'>
                Most projects begin with discovery and a fixed-scope proposal. Simple sites start
                around $3,000 and scale with custom features or integrations.
              </p>
            </details>
            <details className='border-2 border-primary rounded-md p-4'>
              <summary className='font-semibold cursor-pointer'>Do you handle SEO?</summary>
              <p className='mt-2 text-sm'>
                Yes—technical SEO, structured data, sitemaps, metadata, and performance budgets. I
                also advise on content so pages can rank and convert.
              </p>
            </details>
            <details className='border-2 border-primary rounded-md p-4'>
              <summary className='font-semibold cursor-pointer'>
                How long does a typical project take?
              </summary>
              <p className='mt-2 text-sm'>
                Most sites launch in 3–6 weeks depending on content readiness and complexity.
              </p>
            </details>
          </div>
        </section>
      </MotionReveal>
    </main>
  );
}
