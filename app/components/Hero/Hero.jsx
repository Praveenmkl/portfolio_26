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
        <h1><TextScramble text="Praveen Kalansooriya" /></h1>
        <h2>Fullstack Developer ● UI/UX Enthusiast</h2>
        <p>I design intuitive user experiences and build powerful web applications. Turning ideas into visually stunning and functional digital products.</p>
        <button onClick={handleResumeClick}>RESUME</button>
        <button onClick={handleContactClick}>Let&apos;s Talk</button>
      </div>
    </section>
  );
}