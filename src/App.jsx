import './index.css'
import { useState, useEffect } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const intro = `Hello, I'm Harisudhan Baskaran
An aspiring Artificial Intelligence and Machine Learning Engineer passionate about building innovative and impactful technology solutions.

I specialize in combining software and hardware to create smart systems, focusing on AI, embedded systems, and real-time applications. I enjoy transforming ideas into real-world projects that solve meaningful problems.`;

  const about = `I am currently pursuing a B.Tech in Artificial Intelligence and Machine Learning. I have a strong interest in developing intelligent systems that integrate AI with embedded hardware.

My journey in technology started with curiosity and has grown into a deep passion for innovation, research, and project development. I continuously explore new tools, frameworks, and technologies to enhance my skills.

I believe in learning by building, and most of my knowledge comes from hands-on experience in creating projects, participating in competitions, and attending technical workshops.`;

  const skills = {
    programming: "Python, C, C++, Arduino, HTML",
    aiSoftware: "Basic Machine Learning, Data Handling, OpenCV (learning), Computer Vision (learning)",
    hardware: "Arduino, ESP8266/ESP32, Raspberry Pi (basic), Sensor Integration, Circuit Prototyping",
    tools: "Fusion 360, SolidWorks, Tinkercad, Git (basic)",
    other: "Problem Solving, Reverse Engineering, Creative Thinking, Adaptability"
  };

  const projects = [
    {
      title: "Wearable Inhaler Device with AI for Real-Time Asthma Risk Assessment",
      description: "This is my final year project focused on developing a smart wearable device that monitors environmental and physiological parameters to predict asthma risk in real time. The system uses ESP8266, sensors, and AI-based analysis to provide alerts and display health insights on a TFT screen with a smartwatch-style interface. The project aims to improve preventive healthcare using intelligent monitoring systems."
    },
    {
      title: "Bluetooth-Based Water Flow Meter",
      description: "Developed a smart water monitoring system using Arduino and Bluetooth connectivity. The system calculates water flow and displays real-time and 1-minute average data on both an LCD and a mobile application built using MIT App Inventor."
    },
    {
      title: "Gesture-Based Virtual Mouse using Computer Vision",
      description: "Designed a system using OpenCV and MediaPipe to control the computer cursor using hand gestures. This project explores human-computer interaction and aims to extend functionality with voice assistant integration."
    },
    {
      title: "MAC Address-Based Attendance System",
      description: "Created a web-based attendance tracking system that automatically marks attendance by detecting and matching students' MAC addresses over a network."
    },
    {
      title: "Embedded System Projects & Prototyping",
      description: "Worked on multiple hardware-based prototypes including sensor-based automation systems and IoT-based solutions using Arduino and ESP modules."
    }
  ];

  const achievements = [
    "Best Paper Award – International Conclave on Sustainable Innovation (2024)",
    "Consolation Prize – SCIMIT for Portable Insulin Carrier (2025)",
    "Fourth Prize – Southern India Science Fair (2020)",
    "Inspire Award (2019)",
    "ATL Student Innovator Award (2019)",
    "Participated in ICRIMST-2025 International Conference",
    "Attended National Workshop on Nuclear Energy (2025)",
    "Completed Machine Learning Workshop (2025)"
  ];

  const experience = [
    "Hands-on experience in embedded systems and IoT development",
    "Actively participated in technical workshops and innovation programs",
    "Self-driven learning in AI, Computer Vision, and Smart Systems"
  ];

  const highlights = [
    "Strong combination of hardware + software skills",
    "Experience in real-world project development",
    "Passion for AI-based smart devices",
    "Continuous learner and innovation-driven mindset"
  ];

  const contact = {
    email: "harisudhan4127@gmail.com",
    phone: "9344040002"
  };

  const tagline = "Building smart solutions by combining AI, creativity, and engineering.";

  return (
    <div className="portfolio">
      <section className="section">
        <h1>🚀 Welcome</h1>
        <p>{intro.split('\n').map((line, index) => (
          <span key={index}>{line}<br /></span>
        ))}</p>
      </section>

      <section className="section">
        <h2>📋 About Me</h2>
        <p>{about.split('\n').map((line, index) => (
          <span key={index}>{line}<br /></span>
        ))}</p>
      </section>

      <section className="section">
        <h2>💻 Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>🔤 Programming Languages</h3>
            <p>{skills.programming}</p>
          </div>
          <div className="skill-card">
            <h3>🤖 AI & Software Skills</h3>
            <p>{skills.aiSoftware}</p>
          </div>
          <div className="skill-card">
            <h3>⚙️ Hardware & Embedded Systems</h3>
            <p>{skills.hardware}</p>
          </div>
          <div className="skill-card">
            <h3>🛠️ Tools & Technologies</h3>
            <p>{skills.tools}</p>
          </div>
          <div className="skill-card">
            <h3>🧠 Other Skills</h3>
            <p>{skills.other}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🎯 Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>🏆 Achievements</h2>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>📚 Experience / Learning</h2>
        <ul>
          {experience.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>⭐ Portfolio Highlights</h2>
        <ul>
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>📞 Contact</h2>
        <div className="contact-info">
          <p><strong>📧 Email:</strong> <a href={`mailto:${contact.email}`} style={{color: '#00d4ff', textDecoration: 'none'}}>{contact.email}</a></p>
          <p><strong>📱 Phone:</strong> <a href={`tel:${contact.phone}`} style={{color: '#00d4ff', textDecoration: 'none'}}>{contact.phone}</a></p>
        </div>
      </section>

      <footer>
        <p>✨ {tagline}</p>
        <p style={{marginTop: '20px', fontSize: '0.9em', color: '#555'}}>© 2026 Harisudhan Baskaran. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;