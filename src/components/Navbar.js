import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleClick = (e, sectionId) => {
    if (!isHomePage) {
      // If not on homepage, don't prevent default
      return;
    }
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Oliver McCarthy
          </Link>
        </motion.h1>
        <div className="nav-links">
          <motion.a 
            href={isHomePage ? "#about" : "/#about"}
            onClick={(e) => handleClick(e, "about")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.a>
          <motion.a 
            href={isHomePage ? "#experience" : "/#experience"}
            onClick={(e) => handleClick(e, "experience")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience
          </motion.a>
          <motion.a 
            href={isHomePage ? "#projects" : "/#projects"}
            onClick={(e) => handleClick(e, "projects")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.a>
          <motion.a 
            href={isHomePage ? "#skills" : "/#skills"}
            onClick={(e) => handleClick(e, "skills")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Skills
          </motion.a>
          <motion.a 
            href={isHomePage ? "#contact" : "/#contact"}
            onClick={(e) => handleClick(e, "contact")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 