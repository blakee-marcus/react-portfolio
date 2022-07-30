import React from "react";

function Works() {
    return (
        <section className='works'>
            <div>
                    <h2 className='title'>Work</h2>
                </div>
            <div className='card-carousel'>
                
                <article className='card'>
                    <div className='card-img'>
                        <a href="https://blakee-marcus.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer">
                            <img src='/assets/images/weather-dashboard-thumbnail.png' alt="screenshot of weather dashboard app"></img>
                        </a>
                    </div>
                    <div className='card-body'>
                        <a href="https://blakee-marcus.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer">
                            <p className='card-title'>Weather Dashboard</p>
                        </a>
                    </div>
                    <div className="card-subtext">
                        <a href="https://github.com/blakee-marcus/weather-dashboard" target="_blank" rel="noopener noreferrer">
                            View Repo
                        </a>
                    </div>
                    <div className='languages'>
                        <span>JS</span>
                        <span>HTML</span>
                        <span>CSS</span>
                    </div>
                </article>
                <article className='card'>
                    <div className='card-img'>
                        <a href="https://protected-coast-66126.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src='/assets/images/tech-blog-thumbnail.png' alt="screenshot of tech blog app"></img>
                        </a>
                    </div>
                    <div className='card-body'>
                        <a href="https://protected-coast-66126.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <p className='card-title'>Tech Blog</p>
                        </a>
                    </div>
                    <div className="card-subtext">
                        <a href="https://github.com/blakee-marcus/tech-blog" target="_blank" rel="noopener noreferrer">
                            View Repo
                        </a>
                    </div>
                    <div className='languages'>
                        <span>Express</span>
                        <span>MySQL</span>
                    </div>
                </article>
                <article className='card'>
                    <div className='card-img'>
                        <a href="https://lit-earth-22007.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src='/assets/images/pizza-hunt-thumbnail.png' alt="screenshot of pizza hunt app"></img>
                        </a>
                    </div>
                    <div className='card-body'>
                        <a href="https://lit-earth-22007.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <p className='card-title'>Pizza Hunt</p>
                        </a>
                    </div>
                    <div className="card-subtext">
                        <a href="https://github.com/blakee-marcus/pizza-hunt" target="_blank" rel="noopener noreferrer">
                            View Repo
                        </a>
                    </div>
                    <div className='languages'>
                        <span>Mongoose</span>
                        <span>Express</span>
                    </div>
                </article>
                <article className='card'>
                    <div className='card-img'>
                        <a href="https://blakee-marcus.github.io/taskinator/" target="_blank" rel="noopener noreferrer">
                            <img src='/assets/images/taskinator-thumbnail.png' alt="screenshot of taskinator app"></img>
                        </a>
                    </div>
                    <div className='card-body'>
                        <a href="https://blakee-marcus.github.io/taskinator/" target="_blank" rel="noopener noreferrer">
                            <p className='card-title'>Taskinator</p>
                        </a>
                    </div>
                    <div className="card-subtext">
                        <a href="https://github.com/blakee-marcus/taskinator" target="_blank" rel="noopener noreferrer">
                            View Repo
                        </a>
                    </div>
                    <div className='languages'>
                        <span>JS</span>
                        <span>HTML</span>
                        <span>CSS</span>
                    </div>
                </article>
                <article className='card'>
                    <div className='card-img'>
                        <a  href="https://thawing-sierra-93359.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src='/assets/images/zoo-keepr-thumbnail.png' alt="screenshot of zoo keeper app"></img>
                        </a>
                    </div>
                    <div className='card-body'>
                        <a href="https://thawing-sierra-93359.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <p className='card-title'>Zoo Keepr</p>
                        </a>
                    </div>
                    <div className="card-subtext">
                        <a href="https://github.com/blakee-marcus/zookeepr" target="_blank" rel="noopener noreferrer">
                            View Repo
                        </a>
                    </div>
                    <div className='languages'>
                        <span>MySQL</span>
                        <span>Express</span>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Works;
