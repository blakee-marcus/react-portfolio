'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, Loader, Send, CheckCircle, Boxes } from 'lucide-react';

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Read preselected tier from URL (?tier=starter|professional|premium)
  const params = useSearchParams();
  const tier = useMemo(() => params.get('tier') || '', [params]);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check (simple spam trap)
    if (data.get('website')) {
      return; // bot likely filled the hidden field
    }

    setLoading(true);
    setError(null);
    try {
      // Optional analytics
      // eslint-disable-next-line no-unsafe-optional-chaining
      window.umami?.track?.('form_submit_started');

      const res = await fetch('https://formspree.io/f/mrbqowkn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      setLoading(false);
      if (res.ok) {
        setSubmitted(true);
        form.reset();
        // eslint-disable-next-line no-unsafe-optional-chaining
        window.umami?.track?.('form_submit_contact');
      } else {
        setError('Something went wrong. Please try again later.');
        // eslint-disable-next-line no-unsafe-optional-chaining
        window.umami?.track?.('form_submit_error');
      }
    } catch {
      setLoading(false);
      setError('Network error. Please try again later.');
      // eslint-disable-next-line no-unsafe-optional-chaining
      window.umami?.track?.('form_submit_network_error');
    }
  }

  const inputBase =
    'w-full border-4 border-primary p-4 text-xl bg-transparent placeholder-primary font-base focus:outline-none focus:bg-primary focus:text-secondary transition-colors duration-200';

  return (
    <main className='min-h-screen bg-secondary text-primary font-base px-6 sm:px-12 py-16 border-4 border-primary shadow-brutal'>
      {/* Page H1 should be in the Server Page; this header is fine as a visual section title */}
      <header className='text-center bg-primary text-secondary py-8 px-4 text-[clamp(2rem,5vw,3rem)] font-headings uppercase tracking-wide border-b-4 border-primary flex justify-center items-center gap-4'>
        <Mail size={32} aria-hidden='true' />
        <span>Contact Blake Marcus</span>
      </header>

      <section
        className='max-w-5xl mx-auto mt-16 border-4 border-primary'
        aria-labelledby='contact-title'>
        <div className='px-6 sm:px-12 py-12'>
          <h2
            id='contact-title'
            className='text-[clamp(1.75rem,5vw,3rem)] font-headings uppercase border-b-4 border-primary pb-4 mb-8 leading-tight'>
            Let’s build something for your business
          </h2>

          <p className='text-lg sm:text-xl mb-10 border-l-4 border-primary pl-4'>
            I specialize in bold, mobile-friendly websites and landing pages for small businesses.
            From gyms and salons to startups and consultants — let’s launch something that performs.
          </p>

          {submitted ? (
            <div
              className='text-center text-2xl font-headings text-primary pt-12 border-t-4 border-primary flex flex-col items-center gap-6'
              role='status'
              aria-live='polite'>
              <CheckCircle size={48} className='text-accent' aria-hidden='true' />
              Thanks for reaching out — I’ll reply within 1–2 business days.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className='space-y-8 border-t-4 border-primary pt-8'
              noValidate>
              {/* Honeypot field (hidden from users) */}
              <div className='hidden' aria-hidden='true'>
                <label htmlFor='website'>Website</label>
                <input id='website' name='website' type='text' tabIndex={-1} autoComplete='off' />
              </div>

              {[
                { id: 'name', label: 'Name', type: 'text', required: true, autoComplete: 'name' },
                {
                  id: 'email',
                  label: 'Email',
                  type: 'email',
                  required: true,
                  autoComplete: 'email',
                },
                {
                  id: 'business',
                  label: 'Business Name (Optional)',
                  type: 'text',
                  required: false,
                  autoComplete: 'organization',
                },
                {
                  id: 'industry',
                  label: 'Business Type',
                  type: 'text',
                  required: true,
                  autoComplete: 'organization-title',
                },
                {
                  id: 'timeline',
                  label: 'Preferred Timeline',
                  type: 'text',
                  required: false,
                  autoComplete: 'off',
                },
              ].map(({ id, label, type, required, autoComplete }) => (
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
                    autoComplete={autoComplete}
                    className={inputBase}
                    aria-required={required ? 'true' : 'false'}
                  />
                </div>
              ))}

              {/* Context / attribution fields */}
              <input type='hidden' name='package' value={tier} />
              <input type='hidden' name='ref' value='contact-page' />
              <input
                type='hidden'
                name='subject'
                value={tier ? `Inquiry — ${tier} package` : 'General Inquiry'}
              />

              <div>
                <label htmlFor='message' className='block text-xl font-bold mb-2 uppercase'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={6}
                  placeholder='Tell me what you need — goals, style, features, budget, and any links.'
                  required
                  className={inputBase}
                  aria-required='true'
                />
              </div>

              {error && (
                <div
                  className='text-accent text-xl font-bold border-l-4 border-accent pl-4'
                  role='alert'>
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
                }`}
                aria-busy={loading ? 'true' : 'false'}>
                {loading ? (
                  <>
                    <Loader className='animate-spin' size={20} aria-hidden='true' />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} aria-hidden='true' />
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
          <Boxes size={18} aria-hidden='true' />
          View Packages
        </a>
      </div>
    </main>
  );
}
