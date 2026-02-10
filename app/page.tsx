'use client';

import { useState } from 'react';
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from './components/contact/contact';


export default function Home() {
  // State to track which section is active
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Conditionally render sections based on activeSection */}
      {activeSection === 'home' && <Hero />}
      {activeSection === 'about' && <About />}
      {activeSection === 'contact' && <Contact />}

      <Footer />
    </div>
  );
}
          
          