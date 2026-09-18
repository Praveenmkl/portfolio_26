/**
 * ================================================================
 *  PORTFOLIO AI ASSISTANT — COMPREHENSIVE PERSONAL DATA FILE
 *
 *  Fill in every section below. The more detail you add,
 *  the more accurately the AI can answer ANY question about you.
 *
 *  After editing, just save the file — no restart needed.
 * ================================================================
 */

export const portfolioData = {

  // ── 1. PERSONAL INFORMATION ────────────────────────────────
  personal: {
    fullName: 'Praveen Kalansooriya',
    preferredName: 'Praveen',
    title: 'Full-Stack Developer',
    tagline: 'Building modern web applications with clean code and great UX.',
    dateOfBirth: '2000-XX-XX',                   // ← update (optional)
    nationality: 'Sri Lankan',
    location: {
      city: 'Colombo',                           // ← update
      country: 'Sri Lanka',
      remoteReady: true,
    },
    contact: {
      email: 'praveenmkl@example.com',           // ← update
      phone: '+94 XX XXX XXXX',                  // ← update (optional)
      whatsapp: '+94 XX XXX XXXX',               // ← update (optional)
    },
    social: {
      github: 'https://github.com/Praveenmkl',
      linkedin: 'https://linkedin.com/in/praveen-kalansooriya', // ← update
      portfolio: 'https://your-portfolio-url.com',              // ← update
      twitter: '',                               // ← update (optional)
      instagram: '',                             // ← update (optional)
    },
    summary: `
      I am a passionate Full-Stack Developer from Sri Lanka with hands-on experience building
      modern, scalable web applications using the MERN stack. I love solving real-world problems
      through clean code and great user experiences. I have built and deployed multiple
      production-ready projects ranging from e-commerce platforms to POS systems.
      I am currently open to full-time roles, freelance projects, and remote opportunities.
    `,
  },

  // ── 2. EDUCATION ───────────────────────────────────────────
  education: [
    {
      degree: 'Bachelor of Science in Information Technology',  // ← update
      institution: 'Your University Name',                       // ← update
      location: 'Sri Lanka',
      period: '2021 – 2025',                                     // ← update
      gpa: '3.5 / 4.0',                                         // ← update (optional)
      relevantCourses: [
        'Data Structures & Algorithms',
        'Web Technologies',
        'Database Management Systems',
        'Software Engineering',
        'Computer Networks',
        'Object-Oriented Programming',
      ],
      achievements: [
        'Dean\'s List 2022, 2023',                              // ← update
      ],
    },
    // Add more degrees if you have them:
    // {
    //   degree: 'Higher National Diploma in Computing',
    //   institution: 'SLIATE',
    //   period: '2019 – 2021',
    // },
  ],

  // ── 3. WORK EXPERIENCE ─────────────────────────────────────
  experience: [
    {
      role: 'Freelance Full-Stack Developer',
      company: 'Self-Employed / Various Clients',
      type: 'Freelance',
      period: '2023 – Present',
      location: 'Remote',
      responsibilities: [
        'Designed and developed full-stack web applications for clients in multiple industries.',
        'Built RESTful APIs using Node.js and Express with MongoDB as the database.',
        'Created responsive React frontends with modern UX practices.',
        'Managed client communication, requirements gathering, and delivery.',
        'Deployed applications on Vercel and other cloud platforms.',
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    },
    // Add internships or part-time jobs here:
    // {
    //   role: 'Software Engineering Intern',
    //   company: 'Tech Company Name',
    //   type: 'Internship',
    //   period: 'Jun 2024 – Aug 2024',
    //   responsibilities: ['...'],
    //   technologies: ['...'],
    // },
  ],

  // ── 4. TECHNICAL SKILLS ────────────────────────────────────
  skills: {
    languages: ['JavaScript (ES6+)', 'HTML5', 'CSS3'],
    frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'Responsive Design', 'Redux'],
    backend: ['Node.js', 'Express.js', 'REST API Design'],
    databases: ['MongoDB', 'Mongoose ODM'],
    authentication: ['JWT (JSON Web Tokens)', 'Session-based Auth', 'bcrypt'],
    devTools: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm'],
    deployment: ['Vercel', 'Netlify', 'Railway'],
    design: ['Figma', 'Adobe Photoshop', 'UI/UX Principles', 'Wireframing'],
    softSkills: [
      'Problem Solving',
      'Team Collaboration',
      'Client Communication',
      'Time Management',
      'Attention to Detail',
      'Fast Learner',
    ],
    currentlyLearning: ['TypeScript', 'Docker', 'AWS'],  // ← update
  },

  // ── 5. PROJECTS ────────────────────────────────────────────
  projects: [
    {
      title: 'MELOXIA - Creative Design Studio',
      type: 'Client Project',
      description: 'A modern, user-centric website for a creative design studio with intuitive navigation, clean aesthetics, and brand-focused content to elevate the client\'s digital presence.',
      role: 'Full-Stack Developer (Solo)',
      duration: '1 month',
      stack: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://meloxia.me',
      githubUrl: 'https://github.com/Praveenmkl/MELOXIA',
      highlights: [
        'Fully responsive across all devices.',
        'Custom animations and smooth transitions.',
        'Deployed and live on production domain.',
        'Client-approved design and branding.',
      ],
      challenges: 'Creating a design that matched the client\'s creative vision while maintaining performance.',
    },
    {
      title: 'Car Rental Platform',
      type: 'Personal Project',
      description: 'A full-stack car rental application featuring seamless booking workflows, dynamic vehicle listings, user authentication, and a complete administrative dashboard for fleet management.',
      role: 'Full-Stack Developer (Solo)',
      duration: '3 weeks',
      stack: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://car-rental-wehg.vercel.app/',
      githubUrl: 'https://github.com/Praveenmkl/CarRental',
      highlights: [
        'Admin dashboard for managing vehicles and bookings.',
        'User authentication and protected routes.',
        'Real-time vehicle availability checking.',
        'Booking history and management for users.',
      ],
      challenges: 'Implementing a reliable booking conflict prevention system.',
    },
    {
      title: 'PowerFit E-Commerce & Admin Management System',
      type: 'Personal Project',
      description: 'A comprehensive full-stack e-commerce platform for gym accessories with secure JWT authentication, real-time stock validation, shopping cart, order management, and a feature-rich administrative dashboard.',
      role: 'Full-Stack Developer (Solo)',
      duration: '1 month',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      liveUrl: 'https://gym-accessories-store-ie4ncdj7u-praveen-kalansooriyas-projects.vercel.app/',
      githubUrl: 'https://github.com/Praveenmkl/gym-accessories-store.git',
      highlights: [
        'Secure JWT-based authentication.',
        'Real-time stock validation to prevent overselling.',
        'Admin panel for product, order, and user management.',
        'Shopping cart with persistent state.',
      ],
      challenges: 'Handling concurrent stock updates safely to prevent race conditions.',
    },
    {
      title: "People's Bank Mobile App Redesign",
      type: 'UI/UX Design Project',
      description: 'A comprehensive UI/UX redesign of the People\'s Bank mobile application in Figma, focused on modernizing the interface, simplifying navigation, and optimizing transaction workflows to enhance user engagement and reduce friction.',
      role: 'UI/UX Designer (Solo)',
      duration: '2 weeks',
      stack: ['Figma', 'Adobe Photoshop'],
      liveUrl: 'https://www.figma.com/design/HbEhT72Y8jbgTrW3CmC3U0/pb-app',
      githubUrl: null,
      highlights: [
        'Complete UX overhaul of 15+ screens.',
        'User journey mapping and flow diagrams.',
        'High-fidelity interactive prototype.',
        'Modern visual design language applied throughout.',
      ],
      challenges: 'Balancing a modern aesthetic with the familiarity expected by existing banking app users.',
    },
    {
      title: 'POS & Inventory Management System',
      type: 'Personal Project',
      description: 'A full-stack Point-of-Sale and inventory management system supporting complete order lifecycles, secure RESTful APIs, role-based access control with JWT, real-time dashboard, and concurrency-safe stock reservation.',
      role: 'Full-Stack Developer (Solo)',
      duration: '5 weeks',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      liveUrl: 'https://pos-order-inventory-system-1ygirvh9h.vercel.app/login',
      githubUrl: 'https://github.com/Praveenmkl/POS-Order-Inventory-System',
      highlights: [
        'Real-time inventory tracking and low-stock alerts.',
        'Complete order lifecycle management (create, update, complete, cancel).',
        'Role-based access: Admin vs Cashier views.',
        'Concurrency-safe stock reservation for simultaneous orders.',
        'Sales reporting and analytics dashboard.',
      ],
      challenges: 'Engineering concurrency-safe stock reservation to handle multiple simultaneous transactions without conflicts.',
    },
  ],

  // ── 6. CERTIFICATIONS & COURSES ────────────────────────────
  certifications: [
    // Add your real certifications:
    // { name: 'Meta Front-End Developer Certificate', issuer: 'Coursera / Meta', year: '2024' },
    // { name: 'Full-Stack Web Development', issuer: 'Udemy', year: '2023' },
    // { name: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2023' },
  ],

  // ── 7. ACHIEVEMENTS & AWARDS ───────────────────────────────
  achievements: [
    // Add real achievements:
    // 'Winner – University Hackathon 2024',
    // 'Top performer in Web Development module (2023)',
  ],

  // ── 8. LANGUAGES ───────────────────────────────────────────
  languages: [
    { language: 'English', level: 'Professional proficiency' },
    { language: 'Sinhala', level: 'Native' },
  ],

  // ── 9. INTERESTS & HOBBIES ─────────────────────────────────
  interests: [
    'Open-source development',
    'UI/UX design trends',
    'Learning new web technologies',
    'Cricket',                                   // ← update with your hobbies
    'Gaming',                                    // ← update
    'Photography',                               // ← update
  ],

  // ── 10. AVAILABILITY & WORK PREFERENCES ───────────────────
  availability: {
    openToWork: true,
    status: 'Actively looking',                  // or 'Open to offers' or 'Not available'
    preferredRoles: [
      'Full-Stack Developer',
      'Frontend Developer',
      'React Developer',
      'Node.js Developer',
    ],
    workType: ['Remote', 'Hybrid', 'On-site'],
    preferredWorkType: 'Remote',
    noticePeriod: 'Immediately available',       // ← update
    salaryExpectation: 'Negotiable based on role and company', // ← update or remove
    willingToRelocate: false,                    // ← update
    targetCountries: ['Sri Lanka', 'Any (Remote)'],
  },

  // ── 11. PERSONALITY & WORK STYLE ──────────────────────────
  workStyle: {
    strengths: [
      'I write clean, maintainable code with clear documentation.',
      'I communicate proactively with clients and team members.',
      'I am highly self-motivated and can work independently.',
      'I take ownership of features end-to-end — from design to deployment.',
      'I consistently meet deadlines and manage scope effectively.',
    ],
    workApproach: `
      I follow an agile mindset — breaking large problems into smaller tasks,
      iterating quickly, and getting feedback early. I prefer to understand the
      "why" behind a feature before building it, which helps me make better
      technical decisions. I enjoy collaborating with designers, product managers,
      and other developers to build things that truly solve user problems.
    `,
  },

  // ── 12. FREQUENTLY ASKED QUESTIONS ────────────────────────
  faq: [
    {
      q: 'Are you available for freelance work?',
      a: 'Yes! I am currently open to freelance projects of any size. Feel free to reach out through the contact section.',
    },
    {
      q: 'Are you looking for a full-time job?',
      a: 'Yes, I am actively looking for full-time opportunities as a Full-Stack or Frontend Developer. I am open to remote, hybrid, or on-site roles.',
    },
    {
      q: 'What is your strongest skill or technology?',
      a: 'My strongest area is the MERN stack (MongoDB, Express, React, Node.js). I have built multiple production applications with this stack and feel very comfortable with it end-to-end.',
    },
    {
      q: 'Do you work with teams or solo?',
      a: 'Both! I have worked solo on personal and freelance projects, and I am equally comfortable collaborating in a team using Git workflows.',
    },
    {
      q: 'What kind of projects do you enjoy most?',
      a: 'I love building full-stack products that solve real problems — things like dashboards, e-commerce platforms, management systems, and anything with a great user experience.',
    },
    {
      q: 'How can I contact Praveen?',
      a: 'You can reach Praveen through the Contact section on this portfolio website, or directly via LinkedIn. He typically responds within 24 hours.',
    },
    {
      q: 'Are you open to remote work?',
      a: 'Absolutely! Remote work is my preferred working style. I have experience working remotely and I am fully set up for it.',
    },
    {
      q: 'What is your notice period?',
      a: 'I am immediately available and can start a new role or project right away.',
    },
    {
      q: 'Do you have experience with TypeScript?',
      a: 'I am currently learning TypeScript and actively expanding my skills in it. Most of my existing projects use JavaScript, but I am comfortable picking up TypeScript for a new role.',
    },
    {
      q: 'Can you show me your work?',
      a: 'Yes! You can browse all my projects in the Projects section of this portfolio. Each project has links to the live demo and GitHub source code.',
    },
    // Add more Q&A pairs:
    // { q: 'Question?', a: 'Answer.' },
  ],
};


/**
 * ================================================================
 * Builds a comprehensive system prompt from portfolioData.
 * This is what the AI uses as its knowledge base about you.
 * ================================================================
 */
export function buildSystemPrompt() {
  const d = portfolioData;
  const p = d.personal;

  const skillsText = Object.entries(d.skills)
    .filter(([, v]) => Array.isArray(v) && v.length)
    .map(([cat, items]) => `  • ${cat.charAt(0).toUpperCase() + cat.slice(1).replace(/([A-Z])/g, ' $1')}: ${items.join(', ')}`)
    .join('\n');

  const projectsText = d.projects.map((proj, i) => `
  ${i + 1}. ${proj.title} (${proj.type})
     Description: ${proj.description}
     Tech Stack: ${proj.stack.join(', ')}
     My Role: ${proj.role} | Duration: ${proj.duration}
     ${proj.liveUrl ? `Live Demo: ${proj.liveUrl}` : ''}
     ${proj.githubUrl ? `GitHub: ${proj.githubUrl}` : ''}
     Key Highlights: ${proj.highlights.join(' | ')}
     Main Challenge: ${proj.challenges}
  `).join('\n');

  const educationText = d.education.map(e =>
    `  • ${e.degree} – ${e.institution} (${e.period})${e.gpa ? ` | GPA: ${e.gpa}` : ''}`
  ).join('\n');

  const experienceText = d.experience.map(e => `
  • ${e.role} at ${e.company} (${e.period}) [${e.type}]
    Technologies: ${e.technologies.join(', ')}
    Responsibilities:
    ${e.responsibilities.map(r => `    - ${r}`).join('\n')}
  `).join('\n');

  const faqText = d.faq.map(f => `  Q: ${f.q}\n  A: ${f.a}`).join('\n\n');

  const certsText = d.certifications.length
    ? d.certifications.map(c => `  • ${c.name} – ${c.issuer} (${c.year})`).join('\n')
    : '  None listed yet.';

  const achievementsText = d.achievements.length
    ? d.achievements.map(a => `  • ${a}`).join('\n')
    : '  None listed yet.';

  return `
You are a smart, friendly, and professional AI assistant embedded in ${p.fullName}'s portfolio website.
Your job is to answer any question visitors ask about ${p.preferredName} — accurately and helpfully.
ONLY use information from this knowledge base. Never make up facts. If you don't know something, say so politely.

═══════════════════════════════════════════
PERSONAL INFORMATION
═══════════════════════════════════════════
Full Name: ${p.fullName}
Title: ${p.title}
Tagline: ${p.tagline}
Location: ${p.location.city}, ${p.location.country}
Remote Ready: ${p.location.remoteReady ? 'Yes' : 'No'}
GitHub: ${p.social.github}
LinkedIn: ${p.social.linkedin}
Portfolio: ${p.social.portfolio}

About ${p.preferredName}: ${p.summary.trim()}

═══════════════════════════════════════════
AVAILABILITY
═══════════════════════════════════════════
Status: ${d.availability.status}
Open to work: ${d.availability.openToWork ? 'Yes' : 'No'}
Preferred roles: ${d.availability.preferredRoles.join(', ')}
Work type: ${d.availability.workType.join(', ')} (Prefers: ${d.availability.preferredWorkType})
Notice period: ${d.availability.noticePeriod}
Willing to relocate: ${d.availability.willingToRelocate ? 'Yes' : 'No'}
Target locations: ${d.availability.targetCountries.join(', ')}

═══════════════════════════════════════════
EDUCATION
═══════════════════════════════════════════
${educationText}

═══════════════════════════════════════════
WORK EXPERIENCE
═══════════════════════════════════════════
${experienceText}

═══════════════════════════════════════════
TECHNICAL SKILLS
═══════════════════════════════════════════
${skillsText}

═══════════════════════════════════════════
PROJECTS (${d.projects.length} total)
═══════════════════════════════════════════
${projectsText}

═══════════════════════════════════════════
CERTIFICATIONS
═══════════════════════════════════════════
${certsText}

═══════════════════════════════════════════
ACHIEVEMENTS
═══════════════════════════════════════════
${achievementsText}

═══════════════════════════════════════════
LANGUAGES
═══════════════════════════════════════════
${d.languages.map(l => `  • ${l.language}: ${l.level}`).join('\n')}

═══════════════════════════════════════════
INTERESTS
═══════════════════════════════════════════
${d.interests.join(', ')}

═══════════════════════════════════════════
WORK STYLE
═══════════════════════════════════════════
Strengths: ${d.workStyle.strengths.join(' | ')}
Work Approach: ${d.workStyle.workApproach.trim()}

═══════════════════════════════════════════
FREQUENTLY ASKED QUESTIONS
═══════════════════════════════════════════
${faqText}

═══════════════════════════════════════════
BEHAVIOUR INSTRUCTIONS
═══════════════════════════════════════════
- Be warm, friendly, and professional at all times.
- You are a DUAL-PURPOSE assistant:
  (A) PORTFOLIO EXPERT: Answer any question about ${p.preferredName} using the knowledge base above — skills, projects, availability, education, experience, etc.
  (B) GENERAL AI ASSISTANT: You can also help with general questions like coding help, web development advice, career tips, tech explanations, and general knowledge — just like ChatGPT.
- When answering portfolio questions, always use the exact facts from the knowledge base. Never invent details.
- When answering general questions, be helpful, accurate, and concise.
- For contact, always direct visitors to the Contact section on the portfolio.
- For project demos/code, share the live URL and GitHub link when available.
- If asked something personal about ${p.preferredName} that is NOT in this knowledge base, say: "I don't have that specific detail, but you can ask ${p.preferredName} directly through the Contact section!"
- Format code with proper code blocks when sharing code snippets.
- Use bullet points and clear formatting for better readability.
- Keep responses focused and to the point — avoid overly long answers unless necessary.
`.trim();
}
