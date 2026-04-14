import './index.css';
import profilePhoto from './profile.jpg';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const heroText = {
  title: 'Harisudhan Baskaran',
  subtitle: 'Aspiring Artificial Intelligence & Machine Learning Engineer',
  tagline: 'Building smart solutions by combining AI, creativity, and engineering.',
  summary:
    'Aspiring AI & Machine Learning Engineer with a strong focus on building intelligent real-time systems by integrating software and embedded hardware.',
};

const highlights = [
  'Strong integration of AI + Embedded Systems + IoT',
  'Developed multiple real-world working prototypes',
  'Final Year Project focused on AI-based Healthcare Wearable Device',
  'Winner & achiever in national-level competitions and hackathons',
  'Experience in Computer Vision & Gesture Recognition Systems',
  'Growing expertise in UI/UX with React and animations',
  'Hands-on knowledge in cybersecurity fundamentals',
];

const skills = [
  {
    title: 'Programming',
    items: ['Python', 'C', 'C++', 'Core Java', 'Arduino', 'HTML'],
  },
  {
    title: 'AI & Software',
    items: ['Machine Learning', 'Data Handling', 'OpenCV', 'Computer Vision'],
  },
  {
    title: 'Embedded & Hardware',
    items: ['Arduino', 'ESP8266', 'ESP32', 'Raspberry Pi', 'Sensor Integration', 'Circuit Design', 'IoT Systems'],
  },
  {
    title: 'Tools & Tech',
    items: ['Fusion 360', 'SolidWorks', 'Tinkercad', 'Git', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Core Strengths',
    items: ['Problem Solving', 'Reverse Engineering', 'Creative Thinking', 'Adaptability'],
  },
];

const projects = [
  {
    category: 'Healthcare & AI-Based Systems',
    items: [
      {
        title: 'Wearable Inhaler Device with AI for Real-Time Asthma Risk Assessment',
        description: 'Final Year Project: Smart wearable system that predicts asthma risk using environmental and physiological data. Uses ESP8266, sensors, AI-based risk prediction, smart alerts, and a smartwatch-style UI.',
        points: ['Real-time health monitoring', 'Smart alert system', 'TFT display with animations', 'Preventive healthcare focus'],
      },
      {
        title: 'Portable Insulin Carrier',
        description: 'Smart carrier system for insulin with temperature monitoring and alerts.',
        points: ['Temperature control', 'Smart alerts', 'Portable design'],
      },
      {
        title: 'AsthmaGuard',
        description: 'AI-powered asthma monitoring and prediction system.',
        points: ['AI prediction', 'Real-time monitoring', 'Alert system'],
      },
      {
        title: 'Saliva-Based Disease & Cancer Risk Assessment',
        description: 'Non-invasive diagnostic system using saliva analysis for disease risk assessment.',
        points: ['Non-invasive testing', 'AI analysis', 'Risk prediction'],
      },
      {
        title: 'Saliva-Based Ulcer Risk Assessment System',
        description: 'System for assessing ulcer risk through saliva analysis.',
        points: ['Saliva analysis', 'Risk assessment', 'Early detection'],
      },
      {
        title: 'Smart Heart Diagnosis Assistant',
        description: 'AI-driven assistant for heart diagnosis and prevention.',
        points: ['AI diagnosis', 'Prevention focus', 'Smart assistance'],
      },
      {
        title: 'AI-Driven Prediction Model for Heart Attack Diagnosis and Prevention',
        description: 'Predictive model for heart attack risk using AI algorithms.',
        points: ['AI prediction', 'Heart attack prevention', 'Diagnostic model'],
      },
    ],
  },
  {
    category: 'Robotics & Automation',
    items: [
      {
        title: 'Pathology Lab Robot',
        description: 'Automated robot for pathology lab sample handling.',
        points: ['Sample transfer', 'Automation', 'Lab efficiency'],
      },
      {
        title: 'Intelligent Pathology Lab Robot for Contactless Sample Transfer',
        description: 'Contactless sample transfer robot with intelligent features.',
        points: ['Contactless transfer', 'Intelligent operation', 'Safety focus'],
      },
      {
        title: 'Automatic Speed Breaker',
        description: 'Automated speed breaker system for traffic control.',
        points: ['Traffic control', 'Automation', 'Safety'],
      },
      {
        title: 'AI-Driven Automatic Head Lamp',
        description: 'Smart head lamp that adjusts based on AI detection.',
        points: ['AI adjustment', 'Automatic operation', 'Energy efficient'],
      },
    ],
  },
  {
    category: 'IoT & Smart Systems',
    items: [
      {
        title: 'Bluetooth-Based Water Flow Meter',
        description: 'Smart water monitoring system using Arduino and Bluetooth to visualize real-time and average flow data via LCD and mobile app.',
        points: ['Bluetooth connectivity', 'Real-time flow analysis', 'Mobile app display'],
      },
      {
        title: 'Automatic Irrigation System',
        description: 'Automated irrigation system for efficient water usage.',
        points: ['Water efficiency', 'Automation', 'Smart control'],
      },
      {
        title: 'IoT-Based Smart Home Energy Monitoring and Conservation System',
        description: 'Energy monitoring and conservation system for smart homes.',
        points: ['Energy monitoring', 'Conservation', 'IoT integration'],
      },
      {
        title: 'AI-Powered Smart Home',
        description: 'Smart home system powered by AI for automation and control.',
        points: ['AI automation', 'Smart control', 'Home integration'],
      },
    ],
  },
  {
    category: 'Software & AI Applications',
    items: [
      {
        title: 'Gesture-Based Virtual Mouse using Computer Vision',
        description: 'Built a human-computer interaction system using OpenCV and MediaPipe to control cursor movement with hand gestures.',
        points: ['Real-time gesture tracking', 'Cursor control', 'Voice assistant scope'],
      },
      {
        title: 'MAC Address-Based Attendance System',
        description: 'Web-based attendance system that automatically marks attendance by detecting devices using MAC addresses.',
        points: ['Automated tracking', 'Network-based detection', 'Reduced manual effort'],
      },
      {
        title: 'Organ Transplantation Management System',
        description: 'Management system for organ transplantation processes.',
        points: ['Transplantation management', 'System efficiency', 'Data handling'],
      },
      {
        title: 'Chatbot System',
        description: 'AI-powered chatbot for interactive communication.',
        points: ['AI interaction', 'Conversational', 'User engagement'],
      },
    ],
  },
  {
    category: 'Embedded Systems & Prototyping',
    items: [
      {
        title: 'Portable Wristband for Alcohol and Inhalant Detection',
        description: 'Wearable device for detecting alcohol and inhalants.',
        points: ['Portable design', 'Detection technology', 'Safety monitoring'],
      },
      {
        title: 'Multiple Sensor-Based Automation and IoT Prototypes',
        description: 'Various prototypes using Arduino and ESP modules for automation and IoT applications.',
        points: ['Sensor integration', 'Automation', 'Prototyping'],
      },
    ],
  },
];

const achievements = [
  '3rd Prize – NEXATHON 2.0 (2026), National-Level Hackathon',
  'Best Paper Award – International Conclave on Sustainable Innovation (2024)',
  'Consolation Prize – SCIMIT for Portable Insulin Carrier (2025)',
  'Fourth Prize – Southern India Science Fair (2020)',
  'Inspire Award (2019)',
  'ATL Student Innovator Award (2019)',
  'Participated in ICRIMST-2025 International Conference',
  'Attended National Workshop on Nuclear Energy (2025)',
  'Completed Machine Learning Workshop (2025)',
];

const experience = [
  'Hands-on experience in embedded systems and IoT development',
  'Completed Core Java internship with practical exposure to application development concepts',
  'Actively participated in technical workshops, hackathons, and innovation programs',
  'Self-driven learning in AI, Computer Vision, Cybersecurity, and smart systems',
];

const contactInfo = {
  email: 'harisudhan4127@gmail.com',
  phone: '9344040002',
  location: 'Tamil Nadu, India',
};

function App() {
  return (
    <div className="app-shell">
      <nav className="topbar">
        <div className="brand">Harisudhan Baskaran</div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">AI & Embedded Systems Portfolio</p>
            <h1>{heroText.title}</h1>
            <p className="hero-subtitle">{heroText.subtitle}</p>
            <p className="hero-tagline">{heroText.tagline}</p>
            <p className="hero-description">{heroText.summary}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-card">
            <div className="profile-image">
              <img src={profilePhoto} alt="Harisudhan Baskaran" />
            </div>
            <div className="hero-card-content">
              <p className="card-eyebrow">Profile Summary</p>
              <p>
                Aspiring AI & Machine Learning Engineer focused on real-time smart systems,
                wearables, computer vision, and secure embedded solutions.
              </p>
              <div className="badge-grid">
                <span>AI</span>
                <span>IoT</span>
                <span>Computer Vision</span>
                <span>Embedded</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section glass-section">
          <div className="section-heading">
            <h2>About Me</h2>
            <p>Learn more about my journey and recent work.</p>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                I am currently pursuing a B.Tech in Artificial Intelligence and Machine Learning. I
                develop intelligent systems that integrate AI with embedded hardware and real-time
                applications.
              </p>
              <p>
                My journey began with curiosity and grew into a passion for research, innovation,
                and applied project development.
              </p>
              <p>
                I believe in learning by building. Most of my skills come from hands-on projects,
                competitions, and technical workshops.
              </p>
            </div>
            <div className="about-updates">
              <h3>Recent Updates</h3>
              <ul>
                <li>Working on AI-powered wearable health monitoring and smartwatch UI.</li>
                <li>Exploring Computer Vision, MediaPipe, and gesture recognition.</li>
                <li>Learning cybersecurity fundamentals alongside AI development.</li>
                <li>Improving UI/UX using React, animations, and modern design systems.</li>
                <li>Won 3rd Prize in NEXATHON 2.0 Hackathon (2026).</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <h2>Skills</h2>
            <p>Technical strengths across software, hardware, and product design.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.title} className="skill-card">
                <h3>{skill.title}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <h2>Projects</h2>
            <p>Selected work showing real-world functionality and product thinking.</p>
          </div>
          {projects.map((category) => (
            <div key={category.category} className="category-section">
              <h3 className="category-title">{category.category}</h3>
              <div className="projects-grid">
                {category.items.map((project) => (
                  <article key={project.title} className="project-card">
                    <div className="project-header">
                      <h4>{project.title}</h4>
                    </div>
                    <p>{project.description}</p>
                    <ul>
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="achievements" className="section glass-section">
          <div className="section-heading">
            <h2>Achievements</h2>
            <p>Awards, hackathon success, and recognition in innovation programs.</p>
          </div>
          <div className="achievement-list">
            {achievements.map((item) => (
              <div key={item} className="achievement-card">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <h2>Experience & Learning</h2>
            <p>Practical exposure from internships, workshops, and real world projects.</p>
          </div>
          <div className="experience-grid">
            {experience.map((item) => (
              <div key={item} className="experience-card">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <h2>Contact</h2>
            <p>Ready to collaborate on AI, embedded systems, and smart device projects.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Get in touch</h3>
              <p>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
              <p>Phone: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
              <p>Location: {contactInfo.location}</p>
            </div>
            <div className="contact-card contact-highlight">
              <h3>Portfolio Tagline</h3>
              <p>Building smart solutions by combining AI, creativity, and engineering.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <p>© 2026 Harisudhan Baskaran. Designed for modern AI & embedded systems portfolios.</p>
      </footer>
    </div>
  );
}

export default App;