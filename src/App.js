import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import ProjectPage from './pages/ProjectPage';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </>
          } />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
        <footer className="footer">
          <p>OLIVER MCCARTHY ©{new Date().getFullYear()}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
