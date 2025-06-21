'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';
import { Mail, Loader, Send, CheckCircle, Boxes } from 'lucide-react';

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
    'w-full border-4 border-primary p-4 text-xl bg-transparent placeholder-primary font-base focus:outline-none focus:bg-primary focus:text-secondary transition-colors duration-200';

  return (
    <>
      <Head>
        <title>Contact Blake Marcus | Hire a Web Developer for Your Business Website</title>
        <meta
          name='description'
          content='Looking to hire a freelance web developer? Reach out to Blake Marcus to get a fast, mobile-friendly website or landing page tailored for your business.'
        />
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
      </Head>

      <main className='min-h-screen bg-secondary text-primary font-base px-6 sm:px-12 py-16 border-4 border-primary shadow-brutal'>
        <header className='text-center bg-primary text-secondary py-8 px-4 text-[clamp(2rem,5vw,3rem)] font-headings uppercase tracking-wide border-b-4 border-primary flex justify-center items-center gap-4'>
          <Mail size={32} />
          Contact Blake Marcus
        </header>

        <section className='max-w-5xl mx-auto mt-16 border-4 border-primary'>
          <div className='px-6 sm:px-12 py-12'>
            <h1 className='text-[clamp(1.75rem,5vw,3rem)] font-headings uppercase border-b-4 border-primary pb-4 mb-8 leading-tight'>
              Let’s build something for your business
            </h1>

            <p className='text-lg sm:text-xl mb-10 border-l-4 border-primary pl-4'>
              I specialize in building bold, mobile-friendly websites and landing pages for small
              businesses. From gyms and salons to startups and consultants — I’ll help you launch
              something that performs.
            </p>

            {submitted ? (
              <div className='text-center text-2xl font-headings text-primary pt-12 border-t-4 border-primary flex flex-col items-center gap-6'>
                <CheckCircle size={48} className='text-accent' />
                Thanks for reaching out — I’ll reply within 1–2 business days.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-8 border-t-4 border-primary pt-8'>
                {[
                  { id: 'name', label: 'Name', type: 'text', required: true },
                  { id: 'email', label: 'Email', type: 'email', required: true },
                  {
                    id: 'business',
                    label: 'Business Name (Optional)',
                    type: 'text',
                    required: false,
                  },
                  { id: 'industry', label: 'Business Type', type: 'text', required: true },
                  { id: 'timeline', label: 'Preferred Timeline', type: 'text', required: false },
                ].map(({ id, label, type, required }) => (
                  <div key={id}>
                    <label htmlFor={id} className='block text-xl font-bold mb-2 uppercase'>
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

                <input type='hidden' name='package' value={tier} />
                <input type='hidden' name='ref' value='landing-pages' />
                <input type='hidden' name='subject' value='Landing Page Inquiry' />

                <div>
                  <label htmlFor='message' className='block text-xl font-bold mb-2 uppercase'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows='6'
                    placeholder='Tell me what you need — project goals, style, features, etc.'
                    required
                    className={inputStyles}
                  />
                </div>

                {error && (
                  <div className='text-accent text-xl font-bold border-l-4 border-accent pl-4'>
                    {error}
                  </div>
                )}

                <button
                  type='submit'
                  disabled={loading}
                  className={`w-full border-4 border-primary p-4 text-xl font-headings uppercase tracking-wide transition-colors flex items-center justify-center gap-3 shadow-brutal ${
                    loading
                      ? 'bg-muted text-white cursor-not-allowed'
                      : 'bg-primary text-secondary hover:bg-highlight hover:text-primary'
                  }`}>
                  {loading ? (
                    <>
                      <Loader className='animate-spin' size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>

        <div className='text-center mt-16 mb-24'>
          <p className='text-xl mb-4'>Want to explore service tiers first?</p>
          <a
            href='/hire'
            className='inline-flex items-center gap-2 border-4 border-primary bg-primary text-secondary px-6 py-3 font-bold uppercase hover:bg-accent hover:text-secondary transition-colors'>
            <Boxes size={18} />
            View Packages
          </a>
        </div>
      </main>
    </>
  );
}
