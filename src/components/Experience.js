import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Team Member",
      company: "Factorie",
      date: "August 2024 - Present",
      location: "Robina, QLD",
      details: [
        "Enhanced customer satisfaction, increasing repeat business by fostering a welcoming shopping environment.",
        "Increased average transaction value (ATV) through upselling and cross-selling initiatives.",
        "Managed stock levels, ensuring efficient inventory turnover."
      ]
    },
    {
      title: "Assistant Instructor",
      company: "Junior Engineers",
      date: "May 2024 – January 2025",
      location: "Gold Coast, QLD",
      details: [
        "Instructed over fifty young learners in coding basics and robotics, enhancing their STEM education.",
        "Developed and led engaging educational programs across various locations."
      ]
    },
    {
      title: "Crew Member",
      company: "Guzman Y Gomez",
      date: "October 2021 – April 2024",
      location: "Burleigh Waters, QLD",
      details: [
        "Excelled in customer service, handling EFTPOS, front counter, and drive-thru operations.",
        "Adapted to peak-hour demands, reducing customer wait times."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="experience-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="experience-header">
              <div className="experience-title">
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
              </div>
              <div className="experience-meta">
                <div className="experience-date">
                  <i className="fas fa-calendar"></i>
                  <span>{exp.date}</span>
                </div>
                <div className="experience-location">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            <div className="experience-content">
              <ul className="experience-details">
                {exp.details.map((detail, i) => (
                  <li key={i}>
                    <span className="highlight">{detail.split(',')[0]}</span>
                    {detail.includes(',') ? detail.substring(detail.indexOf(',')) : ''}
                  </li>
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