import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import BackgroundOrnaments from '@/components/BackgroundOrnaments';

const siteName = 'Blake Marcus — Developer';
const siteUrl = 'https://blakemarcus.com';
const siteDescription =
  'Full-stack developer in Los Angeles building performant React/Next.js products with clean UX and scalable backends.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'Blake Marcus',
    'full stack developer',
    'Next.js',
    'React',
    'Tailwind',
    'Los Angeles developer',
  ],
  applicationName: siteName,
  creator: 'Blake Marcus',
  authors: [{ name: 'Blake Marcus', url: siteUrl }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    creator: '@your_handle',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  creatorUrl: siteUrl,
  category: 'technology',
  formatDetection: { email: false, address: false, telephone: false },
  viewport: { width: 'device-width', initialScale: 1, viewportFit: 'cover' },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0b1c17' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1c17' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Blake Marcus',
    url: siteUrl,
    jobTitle: 'Full-Stack Developer',
    sameAs: ['https://github.com/blakee-marcus', 'https://www.linkedin.com/in/blakee-marcus'],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang='en' dir='ltr' className='bg-bg-green text-primary font-base'>
      <body className='min-h-screen flex flex-col border-l-4 border-t-4 border-primary'>
        {/* Skip link for accessibility (helps SEO via better UX) */}
        <a
          href='#content'
          className='sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded'>
          Skip to main content
        </a>

        <NavBar />

        <main id='content' role='main' className='relative flex-grow px-6 py-8 sm:px-12'>
          {/* CLS-safe, decorative only */}
          <BackgroundOrnaments />

          <div className='relative z-10 max-w-6xl mx-auto'>{children}</div>
        </main>

        <Footer />

        {/* JSON-LD for rich results */}
        <Script
          id='org-jsonld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          id='website-jsonld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* Vercel analytics & speed insights (safe to include in Server layout) */}
        {/* If you were previously using /next imports, keep them the same here */}
        <Script src='/_vercel/insights/script.js' strategy='afterInteractive' />
        <Script src='/_vercel/speed-insights/script.js' strategy='afterInteractive' />
      </body>
    </html>
  );
}
