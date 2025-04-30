import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h2>
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>
          I'm a computer science student at the University of Queensland, passionate about building practical AI tools that make everyday life easier.
          Outside of tech, you'll usually find me shooting hoops, at the bench press, hanging out with mates, heading to the beach, gaming, or dreaming about my future Porsche.
          I believe in working hard, learning constantly, and creating things that actually make a difference.
        </p>
      </motion.div>
    </section>
  );
};

export default About; 