import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className='min-h-screen bg-white text-black font-mono flex items-center justify-center border-b-8 border-black px-6'>
      <section className='max-w-5xl w-full'>
        <h1 className='text-5xl md:text-7xl font-extrabold uppercase border-b-8 border-black pb-6 mb-10 leading-tight tracking-tight'>
          Full-Stack Developer
          <br />
          Front-End Specialist
        </h1>

        <p className='text-2xl md:text-3xl uppercase mb-6'>
          React. Tailwind. Flask. PostgreSQL.
          <br />
          Modern web apps with clean code & clear UX.
        </p>

        <p className='text-lg md:text-xl uppercase mb-12 border-l-8 border-black pl-6'>
          Currently building a tech repair marketplace at{' '}
          <span className='underline'>GoBasile</span>.
        </p>

        <div className='flex flex-col md:flex-row gap-6 text-lg uppercase'>
          <Link
            to='/projects'
            className='border-4 border-black px-8 py-4 text-center font-bold hover:bg-black hover:text-white transition-colors'>
            See What I've Built
          </Link>
          <Link
            to='/contact'
            className='border-4 border-black px-8 py-4 text-center font-bold hover:bg-black hover:text-white transition-colors'>
            Let's Build Something Together
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
