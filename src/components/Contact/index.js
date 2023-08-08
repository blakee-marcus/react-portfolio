import React, { useState } from 'react';

function Contact() {

  return (
    <section>
      <div className='center-container'>
        <div className='contact w-100'>
          <div className='title'>
            Contact
          </div>

        </div>
      </div>
      <div className='about-header'>
        <div className='ah-left'>
          <div className='selfie'>
            <img
              src={require('../../assets/images/self-illustration.png')}
              alt='digital art of Blake'
            ></img>
          </div>
          <div className='about-title'>
            <div className='name'>Blake Marcus</div>
            <div className='headliner'>Front-End Developer</div>
          </div>
        </div>
        <div className='ah-right'>
          <a
            className='social-btn github'
            href='tel:3109087309'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='btn-items'>
              <img src={require('../../assets/images/phone-icon.png')} alt='' />
              <div>Phone Number</div>
            </div>
          </a>
          <a
            className='social-btn linkedin'
            href='mailto: marcusb733@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='btn-items'>
              <img src={require('../../assets/images/email-icon.png')} alt='' />
              <div>Email</div>
            </div>
          </a>
        </div>
      </div>
      <div className='flex-column ml-5'>
        <div className='flex-column'>
          <h2>Phone Number</h2>
          <p>310-908-7309</p>
        </div>
        <div className='flex-column'>
          <h2>Email</h2>
          <p>marcusb733@gmail.com</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;

