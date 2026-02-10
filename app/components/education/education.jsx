'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './education.css';
import uok from '../../../public/uok.svg';
import drpc from '../../../public/school.svg';


const Education = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const education = [
    {
  logo: uok, // University logo
  title: 'Bachelor of Information and Communication Technology',
  institution: 'University of Kelaniya, Faculty of Computing & Technology',
  period: '2022 - Present',
  description: 'Studying core computing subjects including data structures, software engineering, databases, web development, and UI/UX design. Actively working on academic and personal full-stack and UI/UX projects.'
},
{
  logo: drpc, // School logo
  title: 'G.C.E Advanced Level',
  institution: 'Dr. Richard Pathirana College, Galle',
  period: '2019 - 2021',
  description: 'Undergraduate in Bachelor of Information and Communication Technology (BICT) – Software Technology Pathway at the University of Kelaniya, focusing on software development, web technologies, and UI/UX design.'
}
  ];

  const toggleExpand = (index) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="education-section">
      <div className="edu-container">
        <h2 className="edu-title">Education</h2>
        
        <div className="edu-list">
          {education.map((item, index) => (
            <div key={index} className="edu-item">
              <div className="item-header">
                <div className="edu-logo">
                  <Image src={item.logo} alt={item.institution} width={70} height={70} />
                </div>
                <div className="edu-info">
                  <h3>{item.title}</h3>
                  <h4>{item.institution}</h4>
                  <span className="edu-period">{item.period}</span>
                </div>
              </div>
              {item.description && (
                <div className="description-section">
                  <button 
                    className="description-toggle" 
                    onClick={() => toggleExpand(index)}
                  >
                    <span>Description</span>
                    <span className={`arrow ${expandedItems.includes(index) ? 'up' : 'down'}`}>▼</span>
                  </button>
                  {expandedItems.includes(index) && (
                    <p className="description">{item.description}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
