import React from "react";

function About() {
    return (
        <section className='about'>
            <div className='about-header'>
                <div className='ah-left'>
                    <div className='selfie'>
                        <img
                            src={require("../../assets/images/self-illustration.png")}
                            alt='digital art of Blake'
                        ></img>
                    </div>
                    <div className='about-title'>
                        <h1 className='name'>Blake Marcus</h1>
                        <div className='headliner'>
                            Full-Stack Engineer
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
                            <img
                                src={require("../../assets/images/github-icon.png")}
                                alt='github logo'
                            />
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
                            <img
                                src={require("../../assets/images/linkedin-icon.png")}
                                alt='linkedin logo'
                            />
                            <div>LinkedIn</div>
                        </div>
                    </a>
                </div>
            </div>

            <article className='intro-container'>
                <div className='name intro'> About Me</div>
                <p className='headliner intro-text'>
                    {" "}
                    Full-Stack Web Developer with a passion for creating
                    mobile-first applications. Completed UCLA’s coding boot camp
                    and earned a certificate in full-stack web development. My
                    experience in management has allowed me to gain strengths in
                    leadership, teamwork, and communication..
                </p>
                <p className='headliner intro-text'>
                    {" "}
                    One of my hobbies, aside from playing Apex, is working on
                    streaming and stream production. I love helping friends make
                    their stream look as pretty as possible. I'm always testing
                    out new setups, settings, and art. Working on all of that
                    has also allowed me to get proficient with Adobe Photoshop.
                    It's also why you'll notice a heavy twitch influence on the
                    design of my portfolio.
                </p>
            </article>

            
        </section>
    );
}

export default About;
