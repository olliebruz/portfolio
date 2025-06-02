import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div data-aos="fade-up" data-aos-duration="1000">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="section-title"
        >
          About Me
        </motion.h2>
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            I'm a computer science student at the University of Queensland, passionate about building practical AI tools that make everyday life easier.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Outside of tech, you'll usually find me shooting hoops, at the gym, hanging out with mates, heading to the beach, or manifesting my future Porsche.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            I believe in working hard, learning constantly, and creating things that actually make a difference.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 