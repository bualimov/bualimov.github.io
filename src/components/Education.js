import React, { useEffect, useState } from "react";
import "./Home.css"; // Make sure the CSS file includes styles for .about
import cathedral from "./cathedral.jpg";

function Education() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Add the "education-page" class to the body when the About page is mounted
    document.body.classList.add("education-page");

    // Trigger animations after component mounts
    const timer = setTimeout(() => setAnimate(true), 100); // Add a small delay
    return () => {
      document.body.classList.remove("education-page"); // Clean up class when the component unmounts
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="education" className="education">
      <div className="education-content">
        <div className="education-text-container">
          <h2>Education:</h2>
          <div className={`education-text ${animate ? "animate" : "hidden"}`}>
            <p>
                <b>University of Pittsburgh</b> - c/o 2027 <br/>
                <i>Major:</i> <span>&nbsp;</span> Computer Science <br/>
                <i>Minor:</i>  <span>&nbsp;</span> Economics <br/>
                <i>Honors Degree</i> <br/>
                <i>GPA:</i> <span>&nbsp;</span> 3.83 <br/><br/>


                <b>Coursework:</b> <span>&nbsp;</span> Data Structures & Algorithms, Advanced Programming,
                Discrete Structures, Computer Organization & Assembly Language, Systems Software, Economics.<br/>
                <b>Clubs:</b> <span>&nbsp;</span> Computer Science Club, Panther Equity, Chess Club.<br/>
            </p>
        </div>
        </div>
        <div className={`education-image ${animate ? "animate" : "hidden"}`}>
          <img src={cathedral} alt="cathedral" />
        </div>
      </div>
    </section>
  );
}

export default Education;
