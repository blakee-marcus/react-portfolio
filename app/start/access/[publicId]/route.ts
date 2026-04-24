import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { verifyDepositAccessToken } from '@/lib/deposit/domain';
import { getDepositByPublicId } from '@/lib/deposit/repository';
import { setDepositAccessCookie } from '@/lib/deposit/server';
import { finalizeDepositFromCheckoutSession } from '@/lib/deposit/service';

export const runtime = 'nodejs';
export const maxDuration = 15;

function buildDepositRedirect(
  request: NextRequest,
  packageSlug?: string | null,
  checkout?: string,
) {
  const url = new URL('/deposit', request.nextUrl.origin);

  if (packageSlug) {
    url.searchParams.set('package', packageSlug);
  }

  if (checkout) {
    url.searchParams.set('checkout', checkout);
  }

  return NextResponse.redirect(url, { status: 303 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ publicId: string }> },
) {
  const { publicId } = await params;
  const token = request.nextUrl.searchParams.get('token');
  const sessionId = request.nextUrl.searchParams.get('session_id');

  if (!token) {
    return buildDepositRedirect(request, null, 'restricted');
  }

  try {
    let deposit = await getDepositByPublicId(publicId);

    if (!deposit) {
      return buildDepositRedirect(request, null, 'restricted');
    }

    if (sessionId) {
      const finalized = await finalizeDepositFromCheckoutSession(sessionId);

      if (finalized.kind !== 'unverified') {
        deposit = finalized.deposit;
      } else {
        const refreshedDeposit = await getDepositByPublicId(publicId);

        if (refreshedDeposit) {
          deposit = refreshedDeposit;
        }
      }
    }

    if (deposit.publicId !== publicId) {
      return buildDepositRedirect(request, deposit.packageSlug, 'restricted');
    }

    if (!verifyDepositAccessToken(token, deposit.accessTokenHash)) {
      return buildDepositRedirect(request, deposit.packageSlug, 'restricted');
    }

    if (deposit.status !== 'paid') {
      return buildDepositRedirect(
        request,
        deposit.packageSlug,
        deposit.status === 'processing' ? 'processing' : 'restricted',
      );
    }

    const response = NextResponse.redirect(new URL('/start/confirmation', request.url), {
      status: 303,
    });

    return setDepositAccessCookie(response, publicId, token);
  } catch (error) {
    console.error('Failed to establish paid deposit access.', error);
    return buildDepositRedirect(request, null, 'unavailable');
  }
}
