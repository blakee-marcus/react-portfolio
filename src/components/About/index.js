import React from "react";

function About() {
    return (
        <section className='about'>
            <div className='about-header'>
                <div className='ah-left'>
                    <div className='selfie'>
                        <img src='/assets/images/self-illustration.png'></img>
                    </div>
                    <div className='about-title'>
                        <div className='name'>Blake Marcus</div>
                        <div className='headliner'>
                            Full-Stack Web Developer
                        </div>
                    </div>
                </div>
                <div className="ah-right">
                    <a className="social-btn github" href='https://github.com/blakee-marcus' target="_blank" rel="noopener noreferrer">
                        <div className="btn-items"> 
                            <img src='/assets/images/github-icon.png'/>
                            <div>GitHub</div>
                        </div>
                    </a>
                    <a className="social-btn linkedin" href='https://www.linkedin.com/in/blake-marcus/' target="_blank" rel="noopener noreferrer">
                        <div className="btn-items">
                        <img src='/assets/images/linkedin-icon.png'/>
                            <div>LinkedIn</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
