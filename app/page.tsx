'use client';

import { useState, useEffect } from 'react';
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';


export default function Home() {
  // State to track which section is active
  const [activeSection, setActiveSection] = useState('home');

  // Remove any hash from URL on initial load
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', '/');
    }
  }, []);

  return (
    <div>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Conditionally render sections based on activeSection */}
      {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
      {activeSection === 'about' && <About />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'projects' && <Projects/>}

      <Footer />
    </div>
  );
}
          
          