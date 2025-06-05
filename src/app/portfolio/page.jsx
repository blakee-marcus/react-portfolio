import ProjectCard from '@/components/ProjectCard';
import projects from '@/utils/projects';
import realProjects from '@/utils/realProjects';

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
    url: 'https://blakemarcus.com/portfolio',
    images: [
      {
        url: 'https://blakemarcus.com/api/og?title=Web+Developer+Portfolio',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Portfolio() {
  return (
    <section className='min-h-screen bg-white text-black font-mono border-t-8 border-black py-16'>
      <div className='max-w-7xl mx-auto px-8'>
        <header className='mb-20'>
          <h1 className='text-5xl font-extrabold uppercase border-b-4 border-black pb-6 mb-8'>
            Web Development Portfolio – Custom Sites & Web Apps
          </h1>

          <p className='text-xl max-w-3xl'>
            Below are real projects and bootcamp builds that show what I can create for your
            business. Whether you need a modern landing page, a tool to streamline your workflow, or
            a custom full-stack app — I can help you launch it with confidence.
          </p>
        </header>

        <section aria-labelledby='real-projects'>
          <h2 id='real-projects' className='text-4xl font-bold uppercase mb-8 tracking-tight'>
            Real Projects for Real Clients
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {realProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section aria-labelledby='bootcamp-projects' className='mt-24'>
          <h2 id='bootcamp-projects' className='text-4xl font-bold uppercase mb-8 tracking-tight'>
            Bootcamp Builds & Experiments
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
