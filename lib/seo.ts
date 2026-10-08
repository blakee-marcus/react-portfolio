import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Blake Marcus Studio',
  creator: 'Blake Marcus',
  url: 'https://www.blakemarcus.com',
  defaultTitle: 'Honolulu Web Design for Service Businesses',
  description:
    'Blake Marcus Studio builds clear, premium websites for founder-led service businesses in Honolulu and nationwide.',
  locale: 'en_US',
  keywords: [
    'service business web design',
    'founder-led service business websites',
    'boutique web design studio',
  ],
  location: {
    city: 'Honolulu',
    region: 'HI',
    regionName: 'Hawaii',
    country: 'US',
  },
  logo: '/icon-512.png',
} as const;

const honoluluServiceArea = {
  '@type': 'City',
  name: 'Honolulu',
  sameAs: 'https://en.wikipedia.org/wiki/Honolulu',
} as const;

type MetadataInput = {
  title?: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  socialEyebrow?: string;
  socialTitle?: string;
  socialDescription?: string;
};

type JsonLd = Record<string, unknown>;

export const socialImageSize = {
  width: 1200,
  height: 630,
} as const;

function normalizeSocialText(value: string, maxLength: number) {
  return value.trim().replace(/\s+/g, ' ').slice(0, maxLength);
}

function normalizeSocialPath(path = '/') {
  if (!path || path === '/') {
    return '/';
  }

  const withoutOrigin = path.replace(/^https?:\/\/[^/]+/i, '');
  const normalized = withoutOrigin.startsWith('/') ? withoutOrigin : `/${withoutOrigin}`;

  return normalized.split(/[?#]/, 1)[0] || '/';
}

function buildRobots(noIndex = false): NonNullable<Metadata['robots']> {
  if (noIndex) {
    return {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    };
  }

  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  };
}

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

function breadcrumbList(items: Array<{ name: string; path: string }>) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildOgImageUrl({
  title,
  description,
  path = '/',
  eyebrow = siteConfig.name,
}: {
  title: string;
  description: string;
  path?: string;
  eyebrow?: string;
}) {
  const params = new URLSearchParams({
    title: normalizeSocialText(title, 110),
    description: normalizeSocialText(description, 200),
    eyebrow: normalizeSocialText(eyebrow, 48),
    path: normalizeSocialPath(path),
  });

  return absoluteUrl(`/og?${params.toString()}`);
}

function buildSocialImage({
  title,
  description,
  path = '/',
  eyebrow,
}: {
  title: string;
  description: string;
  path?: string;
  eyebrow?: string;
}) {
  return {
    url: buildOgImageUrl({ title, description, path, eyebrow }),
    width: socialImageSize.width,
    height: socialImageSize.height,
    alt: `${normalizeSocialText(title, 90)} · ${siteConfig.name}`,
  };
}

export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  noIndex = false,
  socialEyebrow,
  socialTitle,
  socialDescription,
}: MetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const fullTitle = title ? `${title} · ${siteConfig.name}` : siteConfig.defaultTitle;
  const imageTitle = socialTitle ?? title ?? siteConfig.defaultTitle;
  const imageDescription = socialDescription ?? description;
  const socialImage = buildSocialImage({
    title: imageTitle,
    description: imageDescription,
    path,
    eyebrow: socialEyebrow,
  });

  return {
    title,
    description,
    keywords: [...new Set([...siteConfig.keywords, ...keywords])],
    alternates: {
      canonical,
    },
    authors: [{ name: siteConfig.creator, url: siteConfig.url }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    category: 'web design',
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [socialImage],
    },
    robots: buildRobots(noIndex),
  };
}

export function buildNoIndexMetadata(input: Omit<MetadataInput, 'noIndex'>): Metadata {
  return buildMetadata({ ...input, noIndex: true });
}

export function buildWebPageSchema({
  title,
  description,
  path = '/',
  breadcrumbs = [],
}: {
  title: string;
  description: string;
  path?: string;
  breadcrumbs?: Array<{ name: string; path: string }>;
}) {
  const url = absoluteUrl(path);
  const graph: JsonLd[] = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: 'en-US',
      isPartOf: {
        '@id': `${siteConfig.url}/#website`,
      },
      about: {
        '@id': `${siteConfig.url}/#studio`,
      },
      publisher: {
        '@id': `${siteConfig.url}/#studio`,
      },
    },
  ];

  if (breadcrumbs.length > 0) {
    graph.push(breadcrumbList([{ name: 'Home', path: '/' }, ...breadcrumbs]));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function buildFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildOfferCatalogSchema(
  offers: Array<{
    name: string;
    summary: string;
    startingPrice: string;
    slug: string;
  }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    '@id': `${absoluteUrl('/services')}#website-packages`,
    name: 'Website design packages',
    url: absoluteUrl('/services'),
    areaServed: [
      honoluluServiceArea,
      { '@type': 'AdministrativeArea', name: 'Hawaii' },
      { '@type': 'Country', name: 'United States' },
    ],
    itemListElement: offers.map((offer) => ({
      '@type': 'Offer',
      name: offer.name,
      description: `${offer.summary} ${offer.startingPrice}.`,
      url: absoluteUrl(`/deposit?package=${offer.slug}`),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      offeredBy: {
        '@id': `${siteConfig.url}/#studio`,
      },
      itemOffered: {
        '@type': 'Service',
        name: `${offer.name} website package`,
        serviceType: 'Website design and development',
        areaServed: [
          honoluluServiceArea,
          { '@type': 'AdministrativeArea', name: 'Hawaii' },
          { '@type': 'Country', name: 'United States' },
        ],
        provider: {
          '@id': `${siteConfig.url}/#studio`,
        },
      },
    })),
  };
}

export const rootMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.creator, url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  category: 'web design',
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      buildSocialImage({
        title: siteConfig.defaultTitle,
        description: siteConfig.description,
        path: '/',
      }),
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [
      buildSocialImage({
        title: siteConfig.defaultTitle,
        description: siteConfig.description,
        path: '/',
      }),
    ],
  },
  robots: buildRobots(),
};

export const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#studio`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      image: absoluteUrl(siteConfig.logo),
      logo: absoluteUrl(siteConfig.logo),
      areaServed: [
        {
          ...honoluluServiceArea,
        },
        {
          '@type': 'AdministrativeArea',
          name: siteConfig.location.regionName,
        },
        {
          '@type': 'Country',
          name: 'United States',
        },
      ],
      knowsAbout: [
        'Web design',
        'Website development',
        'Website strategy',
        'Conversion-focused website design',
        'Service business website design',
      ],
      hasOfferCatalog: {
        '@id': `${absoluteUrl('/services')}#website-packages`,
      },
      founder: {
        '@id': `${siteConfig.url}/#person`,
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.creator,
      url: siteConfig.url,
      image: absoluteUrl(siteConfig.logo),
      jobTitle: 'Web Designer and Developer',
      worksFor: {
        '@id': `${siteConfig.url}/#studio`,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: 'en-US',
      publisher: {
        '@id': `${siteConfig.url}/#studio`,
      },
    },
  ],
};
