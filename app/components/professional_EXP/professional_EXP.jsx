'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './professional_EXP.css';
import peoplebank from '../../../public/pb.svg';
import artemsphere from '../../../public/art.svg';
import meloxia from '../../../public/meloxia.svg';

const ProfessionalExp = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const experiences = [
{
  logo: meloxia,
  title: 'Founder',
  company: 'Meloxia',
  period: '2023 - Present',
  description: 'Founded a creative design service providing social media graphics, flyers, posters, and branding materials for clients. Managed client communication, design workflow, and project delivery while building a strong creative portfolio.'
},
{
  logo: artemsphere,
  title: 'Graphic Designer',
  company: 'Artemsphere',
  period: '2024 - Present',
  description: 'Designed marketing creatives, social media posts, and promotional materials using Adobe Creative Suite. Collaborated with clients and team members to deliver visually engaging and brand-consistent designs.'
},
{
  logo: peoplebank,
  title: 'Trainee Bank Cashier',
  company: "People’s Bank",
  period: '2020 - 2021',
  description: 'Handled customer transactions, assisted clients with banking services, and maintained accurate records. Developed strong communication, teamwork, and attention to detail while learning banking operations and compliance procedures.'
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
    <section className="professional-exp">
      <div className="exp-container">
        <h2 className="exp-title">Professional Experience</h2>
        
        <div className="exp-list">
          {experiences.map((item, index) => (
            <div key={index} className="exp-item">
              <div className="item-header">
                <div className="exp-logo">
                  <Image src={item.logo} alt={item.company} width={70} height={70} />
                </div>
                <div className="exp-info">
                  <h3>{item.title}</h3>
                  <h4>{item.company}</h4>
                  <span className="exp-period">{item.period}</span>
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

export default ProfessionalExp;