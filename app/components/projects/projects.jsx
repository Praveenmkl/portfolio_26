'use client';
import React from 'react';
import Image from 'next/image';
import './projects.css';
import project1 from '../../../public/project1.webp'
import project2 from '../../../public/carrental.webp'
const Projects = () => {
  const projectsData = [
   {
  id: 1,
  title: "MELOXIA - CREATIVE DESIGN STUDIO",
  description: "Designed to engage users and showcase a clean, modern interface with attention to detail.",
  image: project1,
  technologies: ["React", "Node.js", "MongoDB", "Express"],
  liveLink: "https://meloxia.me",
  githubLink: "https://github.com/Praveenmkl/MELOXIA"
}
,
  
  {
  id: 2,
  title: "Car Rental Platform",
  description: "A full-stack car rental platform with smooth booking, dynamic listings, and an intuitive admin dashboard.",
  image: project2,
  technologies: ["React", "Node.js", "MongoDB", "Express"],
  liveLink: "https://car-rental-wehg.vercel.app/",
  githubLink: "https://github.com/Praveenmkl/CarRental"
}

  
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={400}
                  height={250}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      aria-label="View Live Demo"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>Live</span>
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      aria-label="View GitHub Repository"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
