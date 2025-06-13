'use client';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const bgVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: -10 },
  animate: {
    opacity: 0.25,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='bg-bg-green text-primary font-base'>
      {/* <svg className='absolute w-0 h-0'>
        <filter id='squiggly'>
          <feTurbulence baseFrequency='0.02' numOctaves='3' seed='8' />
          <feDisplacementMap in='SourceGraphic' scale='3' />
        </filter>
      </svg> */}

      <body className='border-l-4 border-t-4 border-primary min-h-screen flex flex-col'>
        <NavBar />
        <main className='relative flex-grow px-6 py-8 sm:px-12'>
          {/* Decorative background shapes */}
          <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            <motion.div
              className='absolute top-10 left-[-3rem] w-48 h-48 border-4 border-primary rounded-full'
              style={{ filter: 'url(#squiggly)' }}
              variants={bgVariants}
              initial='initial'
              animate='animate'
            />
            <motion.div
              className='absolute bottom-16 right-[-3rem] w-40 h-40 border-4 border-primary rotate-45'
              style={{ filter: 'url(#squiggly)' }}
              variants={bgVariants}
              initial='initial'
              animate='animate'
            />
            <motion.div
              className='absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 border-4 border-primary rounded-md'
              style={{ filter: 'url(#squiggly)' }}
              variants={bgVariants}
              initial='initial'
              animate='animate'
            />
          </div>

          {/* Main content */}
          <div className='relative z-10 max-w-6xl mx-auto'>
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
