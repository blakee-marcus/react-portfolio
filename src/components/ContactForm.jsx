'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const params = useSearchParams();
  const tier = params.get('tier') || '';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setLoading(true);
    setError(null);
    window.umami?.track?.('form_submit_started');

    fetch('https://formspree.io/f/mrbqowkn', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          setSubmitted(true);
          form.reset();
          window.umami?.track?.('form_submit_contact');
        } else {
          setError('Something went wrong. Please try again later.');
          window.umami?.track?.('form_submit_error');
        }
      })
      .catch(() => {
        setLoading(false);
        setError('Network error. Please try again later.');
        window.umami?.track?.('form_submit_network_error');
      });
  };

  const inputStyles =
    'w-full border-4 border-black p-4 text-xl bg-transparent placeholder-black font-mono focus:outline-none focus:bg-black focus:text-white focus:invert transition-colors';

  return (
    <>
      <Head>
        <title>Contact Blake Marcus | Hire a Web Developer for Your Business Website</title>
        <meta
          name='description'
          content='Looking to hire a freelance web developer? Reach out to Blake Marcus to get a fast, mobile-friendly website or landing page tailored for your business. Serving Long Beach and remote clients.'
        />
        <meta
          name='keywords'
          content='hire web developer, business website contact form, landing page developer, freelance React developer, Long Beach web design, custom websites for small business, contact Blake Marcus'
        />
        <meta name='author' content='Blake Marcus' />
        <link rel='canonical' href='https://blakemarcus.com/contact' />
        <meta
          property='og:title'
          content='Contact Blake Marcus | Web Developer for Small Business Websites'
        />
        <meta
          property='og:description'
          content='Have a project in mind? Fill out this form to contact Blake Marcus — a web developer focused on building clean, high-converting websites and landing pages for businesses.'
        />
        <meta property='og:url' content='https://blakemarcus.com/contact' />
        <meta
          property='og:image'
          content='https://blakemarcus.com/api/og?title=Contact+Blake+Marcus'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Blake Marcus',
              jobTitle: 'Freelance Web Developer',
              url: 'https://blakemarcus.com',
              worksFor: { '@type': 'Organization', name: 'Self-Employed' },
              sameAs: [
                'https://www.linkedin.com/in/blake-marcus/',
                'https://github.com/blakee-marcus',
              ],
              knowsAbout: [
                'React',
                'Tailwind CSS',
                'Flask',
                'JavaScript',
                'Landing Page Design',
                'Small Business Web Development',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Long Beach',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Support',
                email: 'marcusb733@gmail.com',
                url: 'https://blakemarcus.com/contact',
              },
            }),
          }}
        />
      </Head>

      <main className='min-h-screen bg-white text-black font-mono'>
        <header className='w-full bg-black text-white p-6 text-center text-4xl font-extrabold uppercase tracking-tight border-b-8 border-black'>
          GET IN TOUCH
        </header>

        <section className='max-w-screen-lg mx-auto border-8 border-black mt-16'>
          <div className='p-12'>
            <h1 className='text-4xl md:text-5xl font-extrabold uppercase tracking-wide border-b-4 border-black pb-4 mb-8 text-left'>
              Hire a Web Developer for Your Business Website
            </h1>

            <p className='text-lg md:text-xl mb-10 text-left'>
              Whether you’re launching a new business or refreshing your online presence, I
              specialize in building custom websites and landing pages for small businesses. From
              barbershops and gyms to service-based pros, I work with you to create something fast,
              mobile-friendly, and built to convert.
            </p>

            {submitted ? (
              <div className='text-2xl text-center font-bold text-black border-t-4 border-black pt-12'>
                Thank you for reaching out! I’ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-8 border-t-4 border-black pt-8'>
                {[
                  { id: 'name', label: 'Name', type: 'text', required: true },
                  { id: 'email', label: 'Email', type: 'email', required: true },
                  {
                    id: 'business',
                    label: 'Business Name (Optional)',
                    type: 'text',
                    required: false,
                  },
                  {
                    id: 'industry',
                    label: 'Business Type',
                    type: 'text',
                    required: true,
                  },
                  {
                    id: 'timeline',
                    label: 'Preferred Timeline',
                    type: 'text',
                    required: false,
                  },
                ].map(({ id, label, type, required }) => (
                  <div key={id}>
                    <label htmlFor={id} className='block text-xl font-bold mb-2'>
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      placeholder={label}
                      required={required}
                      className={inputStyles}
                    />
                  </div>
                ))}

                <input type='hidden' name='package' value={tier} className={inputStyles} />
                <input type='hidden' name='ref' value='landing-pages' />
                <input type='hidden' name='subject' value='Landing Page Inquiry' />

                <div>
                  <label htmlFor='message' className='block text-xl font-bold mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows='8'
                    placeholder='Tell me what you’re looking for! Services, style, colors, must-haves, etc.'
                    className={inputStyles}
                    required
                  />
                </div>

                {error && <div className='text-red-500 text-xl font-bold mb-4'>{error}</div>}

                <button
                  type='submit'
                  disabled={loading}
                  className={`w-full border-4 border-black p-4 text-xl font-bold uppercase tracking-wider transition-colors ${
                    loading
                      ? 'bg-gray-400 text-white'
                      : 'bg-black text-white hover:bg-white hover:text-black'
                  }`}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </section>

        <div className='text-center mt-12'>
          <p className='text-xl mb-4'>Ready to start your project?</p>
          <a
            href='/hire'
            className='inline-block bg-black text-white border-4 border-black px-6 py-3 font-bold uppercase hover:bg-white hover:text-black transition-colors'>
            View Service Tiers
          </a>
        </div>
      </main>
    </>
  );
}
