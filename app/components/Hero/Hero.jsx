'use client';
import Image from 'next/image';
import TextScramble from '../TextScramble/TextScramble';
import "./Hero.css";

export default function Hero({ setActiveSection }) {
  const handleResumeClick = () => {
    // Opens resume in a new tab
    window.open('/Praveen_Kalansooriya_CV.pdf', '_blank');
  };

  const handleContactClick = () => {
    // Navigate to contact section
    setActiveSection('contact');
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-status-badge">
          <span className="status-dot"></span>
          <span className="status-text">Available for projects & roles</span>
        </div>
        <h1><TextScramble text="Praveen Kalansooriya" /></h1>
        <h2>Fullstack Developer <span className="hero-accent-dot">•</span> UI/UX Specialist</h2>
        <p>I design intuitive user experiences and build powerful web applications. Turning ideas into visually stunning and functional digital products.</p>
        <div className="hero-cta-group">
          <button className="hero-btn-primary" onClick={handleResumeClick}>
            <span>RESUME</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </button>
          <button className="hero-btn-secondary" onClick={handleContactClick}>
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </section>
  );
}