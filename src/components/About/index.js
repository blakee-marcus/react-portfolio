import React from 'react';

function About() {
  return (
    <section className='about'>
      <div className='about-header'>
        <div className='ah-left'>
          <div className='selfie'>
            <img
              src={require('../../assets/images/self-illustration.png')}
              alt='digital art of Blake'></img>
          </div>
          <div className='about-title'>
            <h1 className='name'>Blake Marcus</h1>
            <div className='headliner'>Front-End Engineer</div>
          </div>
        </div>
        <div className='ah-right'>
          <a
            className='social-btn github'
            href='https://github.com/blakee-marcus'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='btn-items'>
              <img
                src={require('../../assets/images/github-icon.png')}
                alt='github logo'
              />
              <div>GitHub</div>
            </div>
          </a>
          <a
            className='social-btn linkedin'
            href='https://www.linkedin.com/in/blake-marcus/'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='btn-items'>
              <img
                src={require('../../assets/images/linkedin-icon.png')}
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
          {' '}
          A skilled front-end developer with experience in back-end technologies.
          Proficient in version control using Git and
          testing with Jest. Strong design skills with Adobe Photoshop. A proven
          track record of successfully completing full-stack development
          projects, including a weather dashboard, social media application, and
          a recipe app. Experienced teaching assistant and supervisor with a
          strong ability to facilitate learning and contribute to an outstanding
          educational experience. Recently obtained a Full Stack Development
          certification from UCLA.
        </p>
        <p className='headliner intro-text'>
          {' '}
          In my free time, I've been learning C# and Blender to create a First
          Person Shooter Survival Game. Through this project, I've developed a
          strong understanding of game development concepts and gained hands-on
          experience with C# programming, game physics, and 3D modeling.
          Learning new technologies has always been a passion of mine, and I'm
          excited to apply the problem-solving and creative skills I've
          developed to new challenges.
        </p>
      </article>
    </section>
  );
}

export default About;

