import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-content">
          <h1>Oliver McCarthy</h1>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm Oliver McCarthy</h1>
          <p className="subtitle">Software Developer & Creative Technologist</p>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I'm a passionate software developer dedicated to creating innovative solutions
            and building meaningful applications. With a strong foundation in modern
            technologies, I strive to deliver exceptional user experiences and clean,
            efficient code.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>VS Code</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {/* Project cards will be added here */}
          <div className="project-card">
            <h3>Project 1</h3>
            <p>Description of your first project</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Description of your second project</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="contact-content">
          <p>Get in touch with me:</p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com">Email</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Oliver McCarthy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
