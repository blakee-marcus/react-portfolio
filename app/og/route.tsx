import { ImageResponse } from 'next/og';
import { OgImageCard, ogImageSize } from '@/lib/og-image';
import { siteConfig } from '@/lib/seo';

export const runtime = 'edge';

function cleanText(value: string | null, fallback: string, maxLength: number) {
  if (!value) {
    return fallback;
  }

  return value.trim().replace(/\s+/g, ' ').slice(0, maxLength) || fallback;
}

function cleanPath(value: string | null) {
  if (!value || value === '/') {
    return '/';
  }

  const withoutOrigin = value.replace(/^https?:\/\/[^/]+/i, '');
  const normalized = withoutOrigin.startsWith('/') ? withoutOrigin : `/${withoutOrigin}`;

  return normalized.split(/[?#]/, 1)[0] || '/';
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = cleanText(searchParams.get('title'), siteConfig.defaultTitle, 110);
  const description = cleanText(searchParams.get('description'), siteConfig.description, 200);
  const eyebrow = cleanText(searchParams.get('eyebrow'), siteConfig.name, 48);
  const path = cleanPath(searchParams.get('path'));

  return new ImageResponse(<OgImageCard title={title} description={description} eyebrow={eyebrow} path={path} />, {
    ...ogImageSize,
    headers: {
      'Cache-Control': 'public, max-age=0, s-maxage=86400',
    },
  });
}
