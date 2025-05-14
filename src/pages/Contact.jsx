import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch('https://formspree.io/f/mrbqowkn', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    }).then((res) => {
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    });
  };

  return (
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
            Whether you're looking to collaborate, hire, or just chat about development, I'd love to
            connect!
          </p>

          {submitted ? (
            <div className='text-2xl text-center font-bold text-black border-t-4 border-black pt-12'>
              Thank you for reaching out! I’ll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-8 border-t-4 border-black pt-8'>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                className='w-full border-4 border-black p-4 text-xl bg-transparent placeholder-black font-mono focus:outline-none focus:bg-black focus:text-white focus:invert transition-colors'
                required
              />
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                className='w-full border-4 border-black p-4 text-xl bg-transparent placeholder-black font-mono focus:outline-none focus:bg-black focus:text-white focus:invert transition-colors'
                required
              />
              <textarea
                name='message'
                placeholder='Your Message'
                rows='8'
                className='w-full border-4 border-black p-4 text-xl bg-transparent placeholder-black font-mono focus:outline-none focus:bg-black focus:text-white focus:invert transition-colors'
                required></textarea>
              <button
                type='submit'
                className='w-full bg-black text-white border-4 border-black p-4 text-xl font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors'>
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default Contact;
