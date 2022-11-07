import React from "react";


function Skills() {
    return (
        <section className='skill-container'>
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
        </section>
    );
}

export default Skills;