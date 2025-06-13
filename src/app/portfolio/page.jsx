import ProjectCard from '@/components/ProjectCard';
import projects from '@/utils/projects';
import realProjects from '@/utils/realProjects';
import { FolderOpen, Briefcase, FlaskConical } from 'lucide-react';

export const metadata = {
  title: 'Web Developer Portfolio | Blake Marcus – Business Websites & Web Apps',
  description:
    'Browse freelance web development projects by Blake Marcus. Includes client work, business websites, landing pages, and custom full-stack apps built with React and Flask.',
  keywords:
    'web developer portfolio, freelance web developer, business website portfolio, React projects, full-stack development, Long Beach web design, custom web apps, Blake Marcus projects',
  authors: [{ name: 'Blake Marcus' }],
  openGraph: {
    title: 'Blake Marcus | Freelance Web Developer Portfolio',
    description:
      'Explore the work of Blake Marcus — web developer specializing in responsive websites and custom applications for small businesses.',
    url: 'https://www.blakemarcus.com/portfolio',
    images: [
      {
        url: 'https://www.blakemarcus.com/api/og?title=Web+Developer+Portfolio',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Portfolio() {
  return (
    <main className='min-h-screen bg-secondary text-primary font-base px-6 sm:px-12 py-16 border-4 border-primary shadow-brutal'>
      <div className='max-w-7xl mx-auto px-6 sm:px-12'>
        <header className='mb-20'>
          <h1 className='text-[clamp(2.25rem,6vw,3.5rem)] font-headings uppercase border-b-4 border-primary pb-6 mb-8 tracking-wider leading-tight flex flex-col sm:flex-row sm:items-center gap-3 text-center sm:text-left'>
            <span className='inline-flex justify-center sm:justify-start'>
              <FolderOpen size={32} className='shrink-0' />
            </span>
            <span className='break-words'>Web Development Portfolio</span>
          </h1>

          <p className='text-lg sm:text-xl max-w-3xl border-l-4 border-primary pl-4'>
            Real-world projects and experimental builds that show what I can create for your
            business. Whether you need a bold landing page, a custom workflow tool, or a scalable
            web app — I’ll help you launch it with confidence.
          </p>
        </header>

        <section aria-labelledby='real-projects'>
          <h2
            id='real-projects'
            className='text-2xl sm:text-4xl font-headings uppercase tracking-[0.03em] border-l-4 border-primary pl-4 mb-8 inline-flex items-center gap-2'>
            <Briefcase size={22} />
            Real Projects for Real Clients
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {realProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section aria-labelledby='bootcamp-projects' className='mt-24'>
          <h2
            id='bootcamp-projects'
            className='text-2xl sm:text-4xl font-headings uppercase tracking-[0.03em] border-l-4 border-primary pl-4 mb-8 inline-flex items-center gap-2'>
            <FlaskConical size={22} />
            Bootcamp Builds & Experiments
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
