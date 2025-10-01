'use client';

import { motion, useReducedMotion } from 'framer-motion';

const bgVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: -10 },
  animate: {
    opacity: 0.25,
    scale: 1,
    rotate: 0,
    transition: { duration: 2, ease: 'easeInOut' },
  },
};

export default function BackgroundOrnaments() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden='true' className='absolute inset-0 overflow-hidden pointer-events-none'>
      <svg className='absolute w-0 h-0'>
        <filter id='squiggly'>
          <feTurbulence baseFrequency='0.02' numOctaves='3' seed='8' />
          <feDisplacementMap in='SourceGraphic' scale='3' />
        </filter>
      </svg>

      <motion.div
        className='absolute top-10 -left-12 w-48 h-48 border-4 border-primary rounded-full'
        style={{ filter: 'url(#squiggly)' }}
        variants={bgVariants}
        initial='initial'
        animate={reduce ? undefined : 'animate'}
      />
      <motion.div
        className='absolute bottom-16 -right-12 w-40 h-40 border-4 border-primary rotate-45'
        style={{ filter: 'url(#squiggly)' }}
        variants={bgVariants}
        initial='initial'
        animate={reduce ? undefined : 'animate'}
      />
      <motion.div
        className='absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 border-4 border-primary rounded-md'
        style={{ filter: 'url(#squiggly)' }}
        variants={bgVariants}
        initial='initial'
        animate={reduce ? undefined : 'animate'}
      />
    </div>
  );
}
