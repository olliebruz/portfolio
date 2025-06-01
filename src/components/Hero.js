import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content" data-aos="fade-up">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100 
            }}
          >
            Hello, I'm Oliver
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100 
            }}
          >
            University Student & Developer
          </motion.p>
          <motion.a 
            href="#projects" 
            className="cta-button"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              stiffness: 100 
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View my work
            <motion.span 
              className="arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 