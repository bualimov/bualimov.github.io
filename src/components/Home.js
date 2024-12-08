import React, { useEffect, useState } from "react";
import "./Home.css"; // Import your styles
import bahaPic from "./baha_pic.png";

function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setAnimate(true), 100); // Add a small delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className={`hero-text ${animate ? "animate" : "hidden"}`}>
            <h1>Welcome to Bakhtiyor's website!</h1>
            <p>Studying CS @Pitt | Passionate Creator</p>
          </div>
          <div className={`hero-image ${animate ? "animate" : "hidden"}`}>
            <img
              src={bahaPic}
              alt="Profile or Illustration"
              className="profile-image"
            />
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="why-wrapper">
        <div className="why">
          <div className={`${animate ? "animate" : "hidden"}`}>
            <div className="why-text">
              <h1>Why and how I built this website:</h1>
              <p>
                I built this website to share a little more about myself, and
                showcase some of the cool things I've worked on. I used React,
                HTML, CSS, and JavaScript. Thanks for visiting! 😁
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
