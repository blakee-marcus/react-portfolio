import Link from 'next/link';

export const dynamic = 'force-static'; 

export default function NotFound() {
  return (
    <main
      className='flex flex-col items-center justify-center min-h-screen bg-white px-6 border-t-8 border-l-8 border-black'
      aria-labelledby='not-found-title'>
      {/* Visual 404 with accessible label */}
      <h1
        id='not-found-title'
        className='text-[10rem] font-extrabold uppercase leading-none tracking-tight border-b-8 border-r-8 border-black mb-8 p-4'>
        404
      </h1>

      <p className='text-xl sm:text-2xl font-bold uppercase mb-4 border-b-4 border-black pb-2 w-full max-w-md text-left'>
        Oops! That page doesn&apos;t exist or may have moved.
      </p>

      <p className='text-base sm:text-lg mb-10 max-w-md text-left'>
        Try the links below or head home. You can also explore my portfolio of small-business
        websites and web apps.
      </p>

      {/* Primary actions */}
      <div className='flex flex-col items-center gap-3'>
        <Link
          href='/'
          className='border-8 border-black px-10 py-5 uppercase font-extrabold text-black hover:bg-black hover:text-white transition-all duration-300'>
          Go Home
        </Link>

        <Link
          href='/portfolio'
          className='border-4 border-black px-8 py-4 text-black font-extrabold uppercase hover:bg-black hover:text-white transition-all duration-300'>
          View My Work
        </Link>
      </div>

      {/* Helpful site links to aid recovery & crawl path */}
      <nav aria-label='Popular destinations' className='mt-10 w-full max-w-xl'>
        <ul className='grid sm:grid-cols-2 gap-3 text-sm'>
          <li>
            <Link href='/hire' className='underline hover:no-underline'>
              Packages & Pricing
            </Link>
          </li>
          <li>
            <Link href='/contact' className='underline hover:no-underline'>
              Contact
            </Link>
          </li>
          <li>
            <Link href='/services' className='underline hover:no-underline'>
              Services
            </Link>
          </li>
          <li>
            <Link href='/about' className='underline hover:no-underline'>
              About Blake
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
