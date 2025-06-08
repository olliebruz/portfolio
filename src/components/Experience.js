import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Co-Founder",
      company: "Zenova Labs",
      logo: "/images/zenovalabs/logo.jpg",
      date: "2023 - Present",
      location: "Brisbane, Australia",
      description: "Leading the development and innovation of AI-powered applications designed to enhance everyday experiences.",
      achievements: [
        "Co-founded an AI app development agency focused on creating intuitive and accessible technology solutions",
        "Led the development of MailGem, an AI-driven Chrome extension for streamlined email writing in Gmail and Outlook",
        "Currently developing RoomGenius, an AI interior design and room improvement assistant",
        "Oversee product development, AI integration, and strategic growth initiatives",
        "Drive forward-thinking solutions in the tech space, bridging advanced technology with real-world usability"
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div className="experience-grid">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="experience-header">
              <div className="experience-title">
                <h3>{experience.title}</h3>
                <span className="company">
                  {experience.logo && <img src={experience.logo} alt={experience.company} className="company-logo" />}
                  {experience.company}
                </span>
              </div>
              <div className="experience-meta">
                <span className="experience-date">
                  <i className="far fa-calendar"></i>
                  {experience.date}
                </span>
                <span className="experience-location">
                  <i className="fas fa-map-marker-alt"></i>
                  {experience.location}
                </span>
              </div>
            </div>
            <div className="experience-content">
              <p>{experience.description}</p>
              <ul className="experience-details">
                {experience.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 