'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import type { PackageKey } from '@/lib/site-content';

type PackageInput = Pick<HTMLInputElement, 'click' | 'focus'>;

export function activatePackageChoice(
  input: PackageInput | null,
  schedule: (callback: () => void) => void = requestAnimationFrame
) {
  if (!input) return;

  input.click();
  schedule(() => input.focus());
}

export function PackageChoiceLink({
  packageSlug,
  children,
  className,
}: {
  packageSlug: PackageKey;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href='#project-form'
      className={className}
      onClick={() =>
        activatePackageChoice(document.querySelector<HTMLInputElement>(`#package-${packageSlug}`))
      }>
      {children}
    </Link>
  );
}
