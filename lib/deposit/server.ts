import type { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  depositAccessCookieName,
  depositAccessCookiePath,
  depositAccessMaxAgeInSeconds,
} from '@/lib/deposit';
import {
  buildDepositAccessCookieValue,
  parseDepositAccessCookieValue,
  verifyDepositAccessToken,
} from '@/lib/deposit/domain';
import { getDepositByPublicId, isDatabaseConfigured } from '@/lib/deposit/repository';

export async function getPaidDepositAccess() {
  if (!isDatabaseConfigured()) {
    return null;
  }

  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(depositAccessCookieName)?.value;
  const parsedCookie = parseDepositAccessCookieValue(cookieValue);

  if (!parsedCookie) {
    return null;
  }

  const deposit = await getDepositByPublicId(parsedCookie.publicId);

  if (!deposit || deposit.status !== 'paid') {
    return null;
  }

  if (!verifyDepositAccessToken(parsedCookie.token, deposit.accessTokenHash)) {
    return null;
  }

  return deposit;
}

export async function requirePaidDepositAccess() {
  const deposit = await getPaidDepositAccess();

  if (!deposit) {
    redirect('/deposit?checkout=restricted');
  }

  return deposit;
}

export function setDepositAccessCookie(response: NextResponse, publicId: string, token: string) {
  response.cookies.set({
    name: depositAccessCookieName,
    value: buildDepositAccessCookieValue(publicId, token),
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: depositAccessMaxAgeInSeconds,
    path: depositAccessCookiePath,
  });

  return response;
}
