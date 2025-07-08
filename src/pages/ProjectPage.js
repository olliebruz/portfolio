import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import { useEffect } from 'react';

const ProjectPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate('/#projects');
    // Add a small delay to ensure the navigation happens before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Special case for portfolio project
  if (projectId === 'portfolio') {
    return (
      <div className="project-page">
        <div className="container" style={{ 
          paddingTop: '120px', 
          textAlign: 'center',
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              Plot twist: You're already here! 🎉
            </h2>
            <p style={{ 
              color: 'var(--secondary-color)', 
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              This is the portfolio you're trying to view more details about. 
              We need to go deeper! *Inception BWAAAH sound plays* 🌀
              <br/><br/>
              Keep exploring - you're already in the dream! 😄
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="/#projects" onClick={handleBackClick} className="back-link" style={{ fontSize: '1.1rem' }}>
              ← Back to exploring
            </a>
          </motion.div>
        </div>
      </div>
    );
  }

  const projects = {
    mailgem: {
      title: "MailGem",
      status: "Live",
      description: "A Chrome extension that uses Google's built-in AI to generate personalized, context-aware email replies in Gmail and Outlook, enhancing productivity while ensuring privacy.",
      longDescription: `MailGem transforms the mundane and often repetitive task of email writing into a more efficient and engaging experience. 
      By leveraging Google's built-in AI (Gemini Nano), our Chrome extension seamlessly integrates with Gmail and Outlook to generate intelligent, 
      context-aware email responses. The extension ensures robust security and performance by using on-device AI processing, making it perfect for 
      handling sensitive communications such as confidential business emails.`,
      features: [
        "AI-powered email response generation",
        "Gmail & Outlook integration",
        "Context-aware responses",
        "Privacy-focused using on-device AI",
        "Seamless browser integration",
        "Real-time response generation"
      ],
      tech: ["JavaScript", "CSS", "Chrome Extension", "Gemini Nano", "Prompt API"],
      videoId: "OWAUvVDegkk",
      challenges: [
        "Navigating Prompt API integration during origin trial phase",
        "Complex DOM manipulation in Gmail and Outlook interfaces",
        "First-time Chrome extension development learning curve",
        "Crafting reliable and contextually appropriate AI prompts"
      ],
      futureFeatures: [
        "Chrome Web Store deployment",
        "Customizable settings page for AI parameters",
        "Enhanced user interface and experience",
        "Integration with additional email platforms",
        "Advanced prompt customization options"
      ],
      link: "https://devpost.com/software/mailgem"
    },
    roomgenius: {
      title: "RoomGenius",
      status: "Coming Soon",
      description: "An AI-powered interior design assistant that transforms living spaces through intelligent recommendations and visualizations.",
      longDescription: `RoomGenius is revolutionizing the way people design their living spaces. By leveraging cutting-edge AI technology, 
      we're making professional-grade interior design accessible to everyone. Our platform analyzes your room's dimensions, lighting, and current setup 
      to provide personalized recommendations that match your style and budget.`,
      features: [
        "AI-powered room analysis and recommendations",
        '"10/10 Perfect Room" AI visualization',
        "Amazon product integration",
        "Community-driven explore section",
        "Popular products showcase",
        "AI-inspired room designs"
      ],
      tech: ["AI", "React", "Expo", "Node.js", "AWS"],
      // Removed screenshots for RoomGenius
      challenges: [
        "Implementing accurate room measurement detection",
        "Optimizing AI response times for real-time recommendations",
        "Creating an intuitive user interface for complex features"
      ],
      futureFeatures: [
        "AR visualization of furniture placement",
        "AI-powered color scheme recommendations",
        "Integration with more furniture retailers",
        "Social sharing and community features"
      ],
      link: "https://www.roomgenius.app"
    },
    tabletap: {
      title: "TableTap",
      status: "In Development",
      description: "A SaaS platform for restaurant owners to manage digital menus through QR codes, streamlining the ordering process and reducing operational costs.",
      longDescription: `TableTap is transforming the restaurant industry by providing a seamless digital menu and ordering system. 
      Our platform enables restaurant owners to easily manage their menus, while customers can enjoy a contactless ordering experience 
      through their smartphones. The system integrates with existing POS systems and provides valuable analytics for business optimization.`,
      features: [
        "QR code generation for table menus",
        "Real-time menu updates",
        "Analytics dashboard for restaurant owners",
        "Customizable menu templates",
        "Order management system",
        "Customer feedback integration"
      ],
      tech: ["Python", "Django", "HTML", "CSS", "Bootstrap", "MySQL", "phpMyAdmin", "Nginx", "venv"],
      screenshots: [
        "/images/tabletap/why choose tabletap.png",
        "/images/tabletap/qr codes.png",
        "/images/tabletap/admin management saas.png",
        "/images/tabletap/order details.png",
        "/images/tabletap/manage restaurants.png",
        "/images/tabletap/login and google oauth.png",
      ],
      challenges: [
        "Ensuring real-time synchronization across devices",
        "Building a scalable infrastructure for multiple restaurants",
        "Creating an intuitive menu management system"
      ],
      futureFeatures: [
        "Mobile app for restaurant staff",
        "Integration with popular POS systems",
        "Advanced analytics and reporting",
        "Customer loyalty program"
      ],
      link: "#"
    }
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="project-page">
        <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
          <h2>Project not found</h2>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-page">
      <div className="project-page-header">
        <div className="container">
          <a href="/#projects" onClick={handleBackClick} className="back-link">← Back to Projects</a>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h1>
          <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
            {project.status}
          </div>
        </div>
      </div>

      <div className="project-page-content">
        <div className="container">
          <motion.div 
            className="project-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Overview</h2>
            <p>{project.longDescription}</p>
            {projectId === 'roomgenius' && (
              <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                  {[
                    '/images/roomgenius/home_screen_light.png',
                    '/images/roomgenius/trending_styles_light.png',
                    '/images/roomgenius/ai_inspiration_light.png'
                  ].map((src, idx) => (
                    <div key={src} style={{
                      border: '1px solid #eee',
                      borderRadius: '2rem',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                      overflow: 'hidden',
                      width: '220px',
                      background: '#fff',
                      padding: '1rem 0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '440px',
                      maxHeight: '440px',
                    }}>
                      <img src={src} alt={`RoomGenius app screenshot ${idx+1}`} style={{
                        width: '200px',
                        height: '420px',
                        objectFit: 'cover',
                        borderRadius: '1.5rem',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                      }} />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {project.screenshots && projectId !== 'roomgenius' && (
              <ImageSlider images={project.screenshots} />
            )}
          </motion.div>

          <div className="project-sections-grid">
            <motion.div 
              className="project-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2>Technologies Used</h2>
              <div className="tech-tags">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="project-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2>Key Features</h2>
              <ul className="feature-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="project-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2>Challenges</h2>
              <ul className="challenge-list">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="project-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2>Future Features</h2>
              <ul className="future-list">
                {project.futureFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          {project.link !== "#" && (
            <motion.div 
              className="project-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
                <span className="link-arrow">→</span>
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage; 