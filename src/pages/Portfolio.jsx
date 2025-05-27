import React from 'react';
import { Helmet } from 'react-helmet-async';

import ProjectCard from '../components/ProjectCard';
import projects from '../utils/projects';
import realProjects from '../utils/realProjects';

function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Web Developer Portfolio | Blake Marcus – Business Websites & Web Apps</title>
        <meta
          name='description'
          content='Browse freelance web development projects by Blake Marcus. Includes client work, business websites, landing pages, and custom full-stack apps built with React and Flask.'
        />
        <meta
          name='keywords'
          content='web developer portfolio, freelance web developer, business website portfolio, React projects, full-stack development, Long Beach web design, custom web apps, Blake Marcus projects'
        />
        <meta name='author' content='Blake Marcus' />
        <link rel='canonical' href='https://blakemarcus.com/portfolio' />
        <meta property='og:title' content='Blake Marcus | Freelance Web Developer Portfolio' />
        <meta
          property='og:description'
          content='Explore the work of Blake Marcus — web developer specializing in responsive websites and custom applications for small businesses.'
        />
        <meta property='og:url' content='https://blakemarcus.com/portfolio' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CreativeWorkSeries',
              name: 'Web Development Portfolio',
              description:
                'A collection of websites and web applications developed by Blake Marcus, including custom builds for businesses and creative experiments.',
              url: 'https://blakemarcus.com/portfolio',
              creator: {
                '@type': 'Person',
                name: 'Blake Marcus',
                url: 'https://blakemarcus.com',
              },
              hasPart: [
                ...realProjects.map((proj) => ({
                  '@type': 'CreativeWork',
                  name: proj.title,
                  url:
                    proj.url ||
                    `https://blakemarcus.com/portfolio#${proj.title
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`,
                  description:
                    proj.description ||
                    'A custom-built website or web app project by Blake Marcus.',

                  creator: {
                    '@type': 'Person',
                    name: 'Blake Marcus',
                  },
                })),
              ],
            }),
          }}
        />
      </Helmet>

      <section className='min-h-screen bg-white text-black font-mono border-t-8 border-black py-16'>
        <div className='max-w-7xl mx-auto px-8'>
          {/* Intro for clients */}
          <header className='mb-20'>
            <h1 className='text-5xl font-extrabold uppercase border-b-4 border-black pb-6 mb-8'>
              Web Development Portfolio – Custom Sites & Web Apps
            </h1>

            <p className='text-xl max-w-3xl'>
              Below are real projects and bootcamp builds that show what I can create for your
              business. Whether you need a modern landing page, a tool to streamline your workflow,
              or a custom full-stack app — I can help you launch it with confidence.
            </p>
          </header>

          {/* Real-World Projects */}
          <section aria-labelledby='real-projects'>
            <h2 id='real-projects' className='text-4xl font-bold uppercase ...'>
              Real Projects for Real Clients
            </h2>
            <div className='grid ...'>
              {realProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section aria-labelledby='bootcamp-projects' className='mt-24'>
            <h2 id='bootcamp-projects' className='text-4xl font-bold uppercase ...'>
              Bootcamp Builds & Experiments
            </h2>
            <div className='grid ...'>
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
