import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getPackageBySlug } from '@/lib/site-content';

export const maxDuration = 5;

export function GET(request: NextRequest) {
  const packageParam = request.nextUrl.searchParams.get('package');
  const selectedPackage = getPackageBySlug(packageParam);
  const url = request.nextUrl.clone();

  url.pathname = '/start/confirmation';
  url.searchParams.set('mode', 'demo');

  if (selectedPackage) {
    url.searchParams.set('package', selectedPackage.slug);
  }

  return NextResponse.redirect(url);
}
