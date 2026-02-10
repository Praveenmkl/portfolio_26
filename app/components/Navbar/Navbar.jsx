'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';
import signature from "../../../public/signature.png"

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false); // Close mobile menu
    
    // Remove hash from URL for home section, otherwise keep clean URL
    if (section === 'home') {
      window.history.replaceState(null, '', '/');
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <button onClick={() => handleNavClick('home')} className="navbar-logo" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
          <Image 
            src={signature} 
            alt="Portfolio Signature Logo" 
            width={250} 
            height={60}
            priority
            className="logo-image"
          />
        </button>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} 
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} 
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} 
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </button>
          </li>
        </ul>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          <span className="theme-icon">
            {isDarkMode ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;