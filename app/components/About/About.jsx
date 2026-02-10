import React from 'react';
import './About.css';
import ProfessionalExp from '../professional_EXP/professional_EXP';
import Education from '../education/education';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <div className="about-text">
            <p>
              I am a Bachelor of Information and Communication Technology (BICT) undergraduate and a Full-Stack development and UI/UX enthusiast focused on creating clean, modern, and user-centered digital experiences. I combine design thinking with technical development skills to build visually engaging, functional, and scalable web applications.
            </p>
            <p>
              I have experience in graphic design and content creation, and my background as a bank cashier strengthened my communication, teamwork, and problem-solving skills. I am continuously learning new technologies and frameworks to build responsive, high-performance, and production-ready digital solutions.
            </p>
          </div>

          <h3 className="techstack">Tech Stack & Design Tools</h3>

          <div className="tech-stack-container">
            <div className="tech-grid">
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                <span>React</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="icon-nextjs" />
                <span>Next.js</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" />
                <span>HTML5</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" />
                <span>CSS3</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                <span>Tailwind</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" className="icon-express" />
                <span>Express</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" />
                <span>MySQL</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
                <span>Python</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />
                <span>Java</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" />
                <span>Figma</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" alt="Photoshop" />
                <span>Photoshop</span>
              </div>
              <div className="tech-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" />
                <span>Postman</span>
              </div>
            </div>
          </div>

          <ProfessionalExp />
          <Education />
        </div>
      </div>
    </section>
  );
};

export default About;