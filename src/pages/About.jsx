import React from 'react';

function About() {
  return (
    <main className='min-h-screen bg-black text-white font-mono'>
      <header className='w-full bg-black text-white p-6 text-center text-4xl font-extrabold uppercase tracking-tight'>
        ABOUT ME
      </header>

      <section className='max-w-screen-lg mx-auto px-8 py-16'>
        <h2 className='text-5xl font-extrabold uppercase text-white border-b-2 border-white pb-6 mb-12 tracking-widest'>
          Hi, I'm Blake Marcus
        </h2>

        <p className='text-lg mb-12'>
          I’m a <span className='font-bold'>full-stack developer</span> with a passion for building
          modern, scalable web applications. I specialize in{' '}
          <span className='font-bold'>front-end</span>
          technologies like <span className='font-bold'>React</span> and{' '}
          <span className='font-bold'>Tailwind CSS</span>, but I also have strong back-end
          experience with <span className='font-bold'>Node.js</span>,{' '}
          <span className='font-bold'>Express</span>, and <span className='font-bold'>GraphQL</span>
          . Currently, I'm building a <span className='font-bold'>marketplace platform</span>
          for tech repair shops at <span className='font-bold'>GoBasile</span>.
        </p>

        <p className='text-lg mb-12'>
          I recently completed the{' '}
          <span className='font-bold'>Full Stack Development Bootcamp</span> at UCLA Extension,
          gaining proficiency in both front-end and back-end technologies. I’ve built everything
          from <span className='font-bold'>CRM systems</span>
          to <span className='font-bold'>queue management tools</span> and{' '}
          <span className='font-bold'>social media platforms</span>. My background in development
          and teaching gives me a unique ability to break down complex concepts into digestible
          pieces.
        </p>

        <h3 className='text-3xl font-extrabold uppercase tracking-wide mb-6'>Technical Skills</h3>
        <ul className='list-none pl-0 text-xl mb-8'>
          <li className='border-b-2 border-white py-2'>
            Front-End: React.js, Tailwind CSS, JavaScript, HTML, CSS
          </li>
          <li className='border-b-2 border-white py-2'>
            Back-End: Node.js, Express.js, GraphQL, Flask
          </li>
          <li className='border-b-2 border-white py-2'>Database: MongoDB, PostgreSQL, MySQL</li>
          <li className='border-b-2 border-white py-2'>Version Control: Git, GitHub</li>
          <li className='border-b-2 border-white py-2'>Deployment & Hosting: Heroku, AWS</li>
        </ul>

        <h3 className='text-3xl font-extrabold uppercase tracking-wide mb-6'>Key Projects</h3>
        <ul className='list-none pl-0 text-xl mb-8'>
          <li className='border-b-2 border-white py-2'>
            <strong>Customer Central CRM:</strong> A tool to manage customer data and track
            communication history. Built with <span className='font-bold'>React.js</span>,{' '}
            <span className='font-bold'>GraphQL</span>, and{' '}
            <span className='font-bold'>MongoDB</span>.
            <br />
            <a
              href='https://github.com/blakee-marcus/customer-central'
              target='_blank'
              rel='noopener noreferrer'
              className='text-neon hover:text-white'>
              View Repo
            </a>
          </li>
          <li className='border-b-2 border-white py-2'>
            <strong>Check-In Tool:</strong> Developed for Tesla to manage guest check-ins. Built
            with <span className='font-bold'>React</span>,{' '}
            <span className='font-bold'>GraphQL</span>, and{' '}
            <span className='font-bold'>MongoDB</span>.
            <br />
            <a
              href='https://github.com/blakee-marcus/Check-In-Tool'
              target='_blank'
              rel='noopener noreferrer'
              className='text-neon hover:text-white'>
              View Repo
            </a>
          </li>
          <li className='border-b-2 border-white py-2'>
            <strong>Deep Thoughts Social Media App:</strong> A social media platform for users to
            post and interact. Built with <span className='font-bold'>React.js</span>,{' '}
            <span className='font-bold'>Node.js</span>, <span className='font-bold'>MongoDB</span>,
            and <span className='font-bold'>GraphQL</span>.
            <br />
            <a
              href='https://github.com/blakee-marcus/deep-thoughts'
              target='_blank'
              rel='noopener noreferrer'
              className='text-neon hover:text-white'>
              View Repo
            </a>
          </li>
        </ul>

        <h3 className='text-3xl font-extrabold uppercase tracking-wide mb-6'>
          Professional Experience
        </h3>
        <div className='mb-8'>
          <h4 className='text-2xl font-semibold'>Teaching Assistant at edX (Oct 2022 - Present)</h4>
          <p className='text-lg mb-4'>
            I assist in online courses, offering one-on-one support to students and helping them
            debug their code.
          </p>
        </div>

        <div className='mb-8'>
          <h4 className='text-2xl font-semibold'>Tesla Advisor (Mar 2023 - Apr 2024)</h4>
          <p className='text-lg mb-4'>
            Developed a tool to improve customer delivery throughput by 75%, streamlining queue
            management with a custom-built <span className='font-bold'>React</span> and{' '}
            <span className='font-bold'>MongoDB</span> solution.
          </p>
        </div>

        <h3 className='text-3xl font-extrabold uppercase tracking-wide mb-6'>Let's Connect</h3>
        <p className='text-lg mb-8'>
          Explore my{' '}
          <a
            href='https://github.com/blakee-marcus'
            target='_blank'
            rel='noopener noreferrer'
            className='text-neon hover:text-white'>
            GitHub
          </a>{' '}
          or{' '}
          <a
            href='https://www.linkedin.com/in/blake-marcus/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-neon hover:text-white'>
            LinkedIn
          </a>{' '}
          to see more of my work.
        </p>
        <p className='text-lg'>
          You can also reach out directly via email at{' '}
          <a href='mailto:marcusb733@gmail.com' className='text-neon hover:text-white'>
            marcusb733@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}

export default About;
