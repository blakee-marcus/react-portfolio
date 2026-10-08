import Link from 'next/link';

const navLinks = [
  { href: '/#packages', label: 'Packages' },
  { href: '/#process', label: 'Process' },
];

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(247,247,245,0.94)] px-5 backdrop-blur-md sm:px-8 lg:px-12'>
      <div className='mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-5'>
        <Link href='/' aria-label='Go to Blake Marcus Studio home' className='inline-flex min-h-11 items-center text-sm font-semibold uppercase tracking-[0.18em] text-[var(--ink)]'>
          Blake Marcus Studio
        </Link>

        <nav aria-label='Primary navigation' className='flex items-center gap-1 sm:gap-5'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='hidden min-h-11 items-center px-2 text-sm font-medium text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)] sm:inline-flex'>
              {link.label}
            </Link>
          ))}
          <Link
            href='/#project-form'
            className='action-surface header-cta inline-flex min-h-11 items-center justify-center px-4 text-sm font-semibold sm:px-5'>
            Start your project
          </Link>
        </nav>
      </div>
    </header>
  );
}
