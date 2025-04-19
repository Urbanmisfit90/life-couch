import React, { useState } from 'react';
import './styles.css'; // Ensure file name matches

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const navigateTo = (sectionId) => {
    setCurrentSection(sectionId);
  };

  return (
    <div>
      <header>
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <ul>
            <li>
              <button className="navlinks" onClick={() => navigateTo('home')} aria-label="Navigate to Home">Home</button>
            </li>
            <li>
              <button className="navlinks" onClick={() => navigateTo('about')}>About</button>
            </li>
            <li>
              <button className="navlinks" onClick={() => navigateTo('references')}>References</button>
            </li>
            <li>
              <button className="navlinks" onClick={() => navigateTo('contact')}>Contact</button>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main-content">
        {currentSection === 'home' && (
          <section id="home">
            <img src="/images/1000004410.jpg" alt="Overview of services offered" />
            <h2>Services</h2>
            <h3>???</h3>
            <ul>
              <li>???</li>
            </ul>
            <h3>???</h3>
            <ul>
              <li>???</li>
            </ul>
            <h3>Additional:</h3>
            <ul>
              <li>??</li>
            </ul>
            <h2 className="projects-heading">???</h2>
            <div className="projects-container"></div>
          </section>
        )}
        {currentSection === 'about' && (
          <section id="about">
            <h2>About Me</h2>
            <img src="/images/1000004410.jpg" alt="Sylvia Dixon" />
            <p>
              Hello! I'm Sylvia Dixon, a passionate
            </p>
          </section>
        )}
        {currentSection === 'contact' && (
          <section id="contact" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <h2>Contact Me</h2>
              <p>Email: sdixon24@gmail.com</p>
              <p>Phone: (757) - 285 - 8943</p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/sylviadixon/">Sylvia Dixon</a></p>
              <p>Location: Chesapeake, VA 23320</p>
            </div>
          </section>
        )}
      </main>
      <footer>
        <p>Operated by Sylvia Dixon</p>
        <p>&copy; 2025 All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;