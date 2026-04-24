import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { buildCheckoutInputFromFormData } from '@/lib/deposit/domain';
import { createDepositCheckout } from '@/lib/deposit/service';
import { getPackageBySlug } from '@/lib/site-content';

export const runtime = 'nodejs';
export const maxDuration = 15;

function buildDepositRedirect(request: NextRequest, packageSlug?: string, checkout?: string) {
  const url = new URL('/deposit', request.nextUrl.origin);

  if (packageSlug) {
    url.searchParams.set('package', packageSlug);
  }

  if (checkout) {
    url.searchParams.set('checkout', checkout);
  }

  return NextResponse.redirect(url, { status: 303 });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const packageParam = formData.get('package');
  const packageSlug = typeof packageParam === 'string' ? packageParam : undefined;
  const selectedPackage = getPackageBySlug(packageSlug);
  const validation = buildCheckoutInputFromFormData(formData);

  if (!selectedPackage || (validation.success === false && validation.errors.package)) {
    return buildDepositRedirect(request, undefined, 'invalid');
  }

  if (!validation.success) {
    return buildDepositRedirect(request, selectedPackage.slug, 'validation');
  }

  try {
    const result = await createDepositCheckout(validation.data, request.nextUrl.origin);

    if (result.kind === 'unavailable') {
      return buildDepositRedirect(request, selectedPackage.slug, 'unavailable');
    }

    if (result.kind === 'error') {
      return buildDepositRedirect(request, selectedPackage.slug, 'error');
    }

    return NextResponse.redirect(result.url, { status: 303 });
  } catch (error) {
    console.error('Failed to create deposit checkout session.', error);
    return buildDepositRedirect(request, selectedPackage.slug, 'error');
  }
}
