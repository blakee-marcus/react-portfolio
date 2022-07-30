import React from "react";

function About() {
    return (
        <section className='about'>
            <div className='about-header'>
                <div className='ah-left'>
                    <div className='selfie'>
                        <img src='/assets/images/self-illustration.png' alt="digital art of Blake"></img>
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
                        href='https://github.com/blakee-marcus'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='btn-items'>
                            <img src='/assets/images/github-icon.png' alt="github logo"/>
                            <div>GitHub</div>
                        </div>
                    </a>
                    <a
                        className='social-btn linkedin'
                        href='https://www.linkedin.com/in/blake-marcus/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className='btn-items'>
                            <img src='/assets/images/linkedin-icon.png' alt="linkedin logo"/>
                            <div>LinkedIn</div>
                        </div>
                    </a>
                </div>
            </div>

            {/* <div className='secondary-nav'>
                <ul className='sn-ul'>
                    <li>
                        <a href='/' className="nav-link">
                            <div className="nav-text">About</div>
                            <div className="active-indicator"></div>
                        </a>
                    </li>
                    <li>
                        <a href='/about/skills' className="nav-link">Skills</a>
                    </li>
                </ul>
            </div> */}

            <div className="intro-container">
                <div className="name"> About Me</div>
                <p className="headliner"> Here's some text about myself wowie!!!</p>
            </div>
        </section>
    );
}

export default About;
