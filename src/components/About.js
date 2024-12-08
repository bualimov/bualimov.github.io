import React, { useEffect, useState } from "react";
import "./Home.css"; // Make sure the CSS file includes styles for .about
import bahaRessi from "./baha_ressi.jpeg";

function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Add the "about-page" class to the body when the About page is mounted
    document.body.classList.add("about-page");

    // Trigger animations after component mounts
    const timer = setTimeout(() => setAnimate(true), 100); // Add a small delay
    return () => {
      document.body.classList.remove("about-page"); // Clean up class when the component unmounts
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text-container">
          <h2>About Me</h2>
          <div className={`about-text ${animate ? "animate" : "hidden"}`}>
            <p>
              Hi, I'm Bakhtiyor! Currently in my second year at the University of Pittsburgh,
              I am majoring in Computer Science and minoring in Economics. I love creating things,
              problem solving, putting things together, and hope to become a software developer
              one day. To work towards this goal, I've worked on a variety of projects, and
              incorporated my hobbies into them. Be sure to check them out!
              <br />
              <br />
              Outside of academics, I love exploring and trying new things. I've had the opportunity
              to travel all over the world, being from Uzbekistan myself, I've loved taking in the
              different cultures. I've always had an appreciation for music, and a few years ago
              I picked up the guitar and have loved it since. Playing and learning new songs takes up
              more of my time than it should😅 Along with music, I enjoy learning and playing chess. I'm big into sports,
              both as a fan and athlete. I've played hockey, soccer, basketball, and tennis throughout
              my life. Also a huge Pittsburgh sports fan. But enough about me, thanks for visiting my page!
            </p>
          </div>
        </div>
        <div className={`about-image ${animate ? "animate" : "hidden"}`}>
          <img src={bahaRessi} alt="Bakhtiyor Alimov" />
        </div>
      </div>
    </section>
  );
}

export default About;
