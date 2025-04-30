import { motion } from 'framer-motion';

const Projects = () => {
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
      links: {
        project: "https://zenova.software/roomgenius",
        demo: "#"
      }
    }
  ];

  return (
    <section id="projects" className="section">
      <motion.h2
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
            <div className="project-status">{project.status}</div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-features">
              <h4>Key Features:</h4>
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
            <div className="project-links">
              <a 
                href={project.links.project} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                View Project
              </a>
              <a 
                href={project.links.demo} 
                className="project-link disabled"
              >
                Demo
              </a>
            </div>
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