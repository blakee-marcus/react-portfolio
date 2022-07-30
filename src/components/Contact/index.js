import React from "react";

function Contact() {
    return (
        <section>
            <div className='about-header'>
                <div className='ah-left'>
                    <div className='selfie'>
                        <img
                            src='/assets/images/self-illustration.png'
                            alt='digital art of Blake'
                        ></img>
                    </div>
                    <div className='about-title'>
                        <div className='name'>Blake Marcus</div>
                        <div className='headliner'>
                            Full-Stack Web Developer
                        </div>
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
                            <img
                                src='/assets/images/phone-icon.png'
                                alt=''
                            />
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
                            <img
                                src='/assets/images/email-icon.png'
                                alt=''
                            />
                            <div>Email</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
