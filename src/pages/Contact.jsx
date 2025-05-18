import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    setLoading(true);
    setError(null);

    if (window.umami && typeof window.umami.track === 'function') {
      window.umami.track('form_submit_started');
    }

    fetch('https://formspree.io/f/mrbqowkn', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    }).then((res) => {
      setLoading(false);
      if (res.ok) {
        setSubmitted(true);
        form.reset();
        if (window.umami && typeof window.umami.track === 'function') {
          window.umami.track('form_submit_contact');
        }
      } else {
        setError('Something went wrong. Please try again later.');
        if (window.umami && typeof window.umami.track === 'function') {
          window.umami.track('form_submit_error');
        }
      }
    });
  };

  const inputStyles =
    'w-full border-4 border-black p-4 text-xl bg-transparent placeholder-black font-mono focus:outline-none focus:bg-black focus:text-white focus:invert transition-colors';

  return (
    <>
      <Helmet>
        <title>Contact Blake Marcus – Full-Stack Developer & Landing Page Expert</title>
        <meta
          name='description'
          content="Get in touch with Blake Marcus for clean, fast, and effective landing pages tailored for your business. Whether you're a barber, gym owner, or service provider, Blake can help."
        />
        <meta
          name='keywords'
          content='contact, landing page development, business websites, web developer, Blake Marcus'
        />
        <meta name='author' content='Blake Marcus' />
      </Helmet>
      <main className='min-h-screen bg-white text-black font-mono'>
        <header className='w-full bg-black text-white p-6 text-center text-4xl font-extrabold uppercase tracking-tight border-b-8 border-black'>
          GET IN TOUCH
        </header>

        <section className='max-w-screen-lg mx-auto border-8 border-black mt-16'>
          <div className='p-12'>
            <h2 className='text-5xl font-extrabold uppercase tracking-wide border-b-4 border-black pb-4 mb-8 text-left'>
              Contact Me
            </h2>

            <p className='text-xl mb-12 text-left'>
              Need a high-converting landing page for your business? Whether you're a barber, gym
              owner, or service provider, I’d love to help you build something clean, fast, and
              effective.
            </p>

            {submitted ? (
              <div className='text-2xl text-center font-bold text-black border-t-4 border-black pt-12'>
                Thank you for reaching out! I’ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-8 border-t-4 border-black pt-8'>
                <div>
                  <label htmlFor='name' className='block text-xl font-bold mb-2'>
                    Name
                  </label>
                  <input
                    id='name'
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    className={inputStyles}
                    required
                  />
                </div>

                <div>
                  <label htmlFor='email' className='block text-xl font-bold mb-2'>
                    Email
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    className={inputStyles}
                    required
                  />
                </div>

                <div>
                  <label htmlFor='business' className='block text-xl font-bold mb-2'>
                    Business Name (Optional)
                  </label>
                  <input
                    id='business'
                    type='text'
                    name='business'
                    placeholder='Business Name (Optional)'
                    className={inputStyles}
                  />
                </div>

                <div>
                  <label htmlFor='industry' className='block text-xl font-bold mb-2'>
                    Business Type
                  </label>
                  <input
                    id='industry'
                    type='text'
                    name='industry'
                    placeholder='Business Type (e.g. Gym, Florist, Barber)'
                    className={inputStyles}
                    required
                  />
                </div>

                <div>
                  <label htmlFor='timeline' className='block text-xl font-bold mb-2'>
                    Preferred Timeline
                  </label>
                  <input
                    id='timeline'
                    type='text'
                    name='timeline'
                    placeholder='Preferred Timeline (e.g. 1-2 weeks)'
                    className={inputStyles}
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-xl font-bold mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    placeholder='Tell me what you’re looking for! Services, style, colors, must-haves, etc.'
                    rows='8'
                    className={inputStyles}
                    required
                  />
                </div>

                <input type='hidden' name='ref' value='landing-pages' />
                <input type='hidden' name='subject' value='Landing Page Inquiry' />
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
      </main>
    </>
  );
}

export default Contact;
