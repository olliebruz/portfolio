import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [clickedLinks, setClickedLinks] = useState({});

  const handleLinkClick = (projectTitle) => {
    setClickedLinks(prev => ({
      ...prev,
      [projectTitle]: true
    }));
  };

  const projects = [
    {
      title: "RoomGenius",
      status: "Coming Soon",
      description: "An AI-powered interior design assistant that transforms living spaces through intelligent recommendations and visualizations.",
      features: [
        "AI-powered room analysis and recommendations",
        "\"10/10 Perfect Room\" AI visualization",
        "Amazon product integration",
        "Community-driven explore section",
        "Popular products showcase",
        "AI-inspired room designs"
      ],
      tech: ["AI", "React", "Expo", "Node.js", "AWS"],
      link: "https://zenova.software/roomgenius"
    },
    {
      title: "TableTap",
      status: "In Development",
      description: "A SaaS platform for restaurant owners to manage digital menus through QR codes, streamlining the ordering process and reducing operational costs.",
      features: [
        "QR code generation for table menus",
        "Real-time menu updates",
        "Analytics dashboard for restaurant owners",
        "Customizable menu templates",
        "Order management system",
        "Customer feedback integration"
      ],
      tech: ["Python", "Django", "HTML", "CSS", "Bootstrap", "MySQL", "phpMyAdmin", "Nginx", "venv"],
      link: "#"
    },
    {
      title: "Digital Portfolio",
      status: "Live",
      description: "A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with a focus on clean design, smooth animations, and optimal user experience.",
      features: [
        "Responsive design for all devices",
        "Smooth scroll animations and transitions",
        "Interactive project showcase",
        "Dynamic content rendering",
        "Modern UI/UX design",
        "Optimized performance and loading"
      ],
      tech: ["React", "JavaScript", "CSS", "Vercel"],
      link: "https://olivermccarthy.dev"
    }
  ];

  return (
    <section id="projects" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
              {project.status}
            </div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-features">
              <h4>Key Features</h4>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`project-link ${project.link === "#" ? "disabled" : ""}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                if (project.link === "#") {
                  e.preventDefault();
                  handleLinkClick(project.title);
                }
              }}
            >
              {clickedLinks[project.title] ? "Coming Soon" : "View Project"}
              <span className="link-arrow">→</span>
            </motion.a>
          </motion.div>
        ))}
        
        <motion.div 
          className="project-card coming-soon"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>More Projects Coming Soon</h3>
          <p className="project-description">
            I'm currently working on several exciting projects. Stay tuned for updates!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 