import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo';

const routes: Array<{
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]>['changeFrequency'];
  priority: number;
}> = [
  {
    path: '/',
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    path: '/services',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    path: '/process',
    changeFrequency: 'monthly',
    priority: 0.75,
  },
  {
    path: '/work',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/studio',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
