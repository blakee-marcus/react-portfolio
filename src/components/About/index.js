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

            <div className='skill-container'>
                <div className='section-header'>
                    {" "}
                    Blake Marcus has these front-end skills
                </div>
                <div className='carousel-container'>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/html5-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>HTML5</div>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/css-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>CSS</div>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/js-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>JavaScript</div>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/jquery-icon.jpg")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>jQuery</div>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/bootstrap-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>BootStrap</div>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/react-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>React</div>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/pwa-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>PWA</div>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/webpack-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>WebPack</div>
                    </div>
                </div>
            </div>
            <div className='skill-container'>
                <div className='section-header'>
                    {" "}
                    Blake Marcus has these back-end skills
                </div>
                <div className='carousel-container'>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/mysql-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>MySQL</div>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/nosql-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>NoSQL</div>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/mongodb-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>MongoDB</div>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/mongoose-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>Mongoose</div>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/express-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>Express.js</div>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/node-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>Node.js</div>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/handlebars-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>Handlebars.js</div>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/graphql-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>GraphQL</div>
                    </div>
                </div>
            </div>
            <div className='skill-container'>
                <div className='section-header'>
                    {" "}
                    Blake Marcus has these version control skills
                </div>
                <div className='carousel-container'>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/git-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>Git</div>
                    </div>
                    <div className='carousel-item'>
                        <div className='carousel-img'>
                            <img
                                src={require("../../assets/images/skill-icons/github-icon.png")}
                                alt=''
                            ></img>
                        </div>
                        <div className='carousel-subtitle'>GitHub</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
