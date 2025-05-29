import React from 'react';
import './Home.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import cover from '../images/cover.jpeg'

export default function Home() {
    return (
        <section id="home" className="home-section">
        <div className="home-container">
          <div className="home-content">
            {/* Left side - Text */}
            <div className="home-text">
              <h1>Hi, I'm Bakhtiyor! 👋</h1>
              <p>
                SWE & Data Engineer Intern <b>@US Steel</b><br />
                Studying CS <b>@Pitt</b><br />
                Passionate Creator
              </p>
              <div className="home-socials">
                <a
                  href="https://www.linkedin.com/in/bualimov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <FaLinkedin className="social-icon linkedin" />
                </a>
                <a
                  href="https://github.com/bualimov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <FaGithub className="social-icon github" />
                </a>
              </div>
            </div>
            {/* Right side - Image */}
            <div className="home-image">
              <img 
                src={cover} 
                alt="cover"
              />
            </div>
          </div>
        </div>
      </section>
    )
}