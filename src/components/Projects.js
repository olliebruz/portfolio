import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: "mailgem",
      title: "MailGem",
      status: "Live",
      description: "A Chrome extension that uses Google's built-in AI to generate personalized, context-aware email replies in Gmail and Outlook, enhancing productivity while ensuring privacy.",
      features: [
        "AI-powered email response generation",
        "Gmail & Outlook integration",
        "Context-aware responses",
        "Privacy-focused using on-device AI",
        "Seamless browser integration",
        "Real-time response generation"
      ],
      tech: ["JavaScript", "CSS", "Chrome Extension", "Gemini Nano", "Prompt API"],
      link: "https://devpost.com/software/mailgem"
    },
    {
      id: "roomgenius",
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
      id: "tabletap",
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
      id: "portfolio",
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
                {project.features.slice(0, 3).map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <Link 
              to={`/project/${project.id}`} 
              className="project-link"
            >
              View Details
              <span className="link-arrow">→</span>
            </Link>
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