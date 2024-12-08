import React, { useState, useEffect } from "react";
import websiteCover from "./website_cover.jpg";
import javaStudyTool from "./javastudytool_cover.png"
import dataBowlCover from "./databowl_cover.png"
import chessPlayersCover from "./chessplayers_cover.png"
import pghSportsCover from "./pghsports_cover.png"
import sportsInjuries from "./sportsinjuries_cover.png"

function Projects() {
  const [,setAnimate] = useState(false);

  useEffect(() => {
    // Add the "projects-page" class to the body when the About page is mounted
    document.body.classList.add("projects-page");

    // Trigger animations after component mounts
    const timer = setTimeout(() => setAnimate(true), 100); // Add a small delay
    return () => {
      document.body.classList.remove("projects-page"); // Clean up class when the component unmounts
      clearTimeout(timer);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      title: <a href="https://github.com/bualimov/bualimov.github.io" target="_blank" rel="noopener noreferrer">This Website!</a>, 
      description: "My website to showcase my projects + skills.",
      image: websiteCover, // Replace with actual image URL
      detailedDescription: (
        <>
          <b>Applied technical skills: </b> React, JavaScript, HTML5, CSS3. <br/> <br/>

          <b>Overview:</b> More often than not, I am working on backend-focused projects. In an
          effort to improve my frontend skills, and because a personal website is convenient
          to have, I put this site together utilizing the React framework, and the main web-building
          languages of HTML5 and CSS3. At my upcoming internship this summer with US Steel, I
          know I'll be using React, and I wanted to expand my understanding of frontend
          development. I aim to learn about more tools and frameworks to help me more
          efficiently build sites like this with more practical goals in mind. <br/>
        </>
      ),
    },
    {
      title: <a href="https://github.com/Ilya-Abbasian/JavaStudyTool-SteelHacks_Project/tree/MAIN3.0/public" target="_blank" rel="noopener noreferrer">Java Study Tool</a>, 
      description: "An interactive notebook for students and professors to use to help understand DS and Algorithms.",
      image: javaStudyTool, // Replace with actual image URL
      detailedDescription: (
        <>
          <b>Applied technical skills: </b> JavaScript, HTML5, CSS3, Gemini and Pitt API Integration. <br/>
          <b>Collaborators: </b> 
          <a href="https://github.com/ilya-abbasian" target="_blank" rel="noopener noreferrer">Ilya Abbasian</a>, 
          <a href="https://github.com/kylezheng11" target="_blank" rel="noopener noreferrer">Kyle Zheng</a>.

          <br/> <br/>
          <b>Overview:</b> I built this with my friends as part of my first ever hackathon project.
          Our goal was to make a website that both students and proofessors could use to help 
          visualize the concepts of complex data structures in programming, such as arrays and linked 
          lists. We integrated a data structure "populator", where users could input a data structure 
          and length. Along with that, users can draw using the built-in canvas on our page. Also, 
          feel free to talk with Pitt's mascot, where you can learn more in detail about these data 
          structures. Use the Professor Search Tool to find your professor's name, email, and office 
          hours instead of having to look them up. In the future, we look to expand upon this project 
          to fully implement its intended functionalities, adding
          more data structures and details.
        </>
      ),
    },
    {
      title: <a href="https://github.com/bualimov/nfl-databowl-2025" target="_blank" rel="noopener noreferrer">NFL Big Data Bowl 2025</a>, 
      description: "Python scripts, using pre-snap behavior to predict NFL team and player tendencies.",
      image: dataBowlCover, // Replace with actual image URL
      detailedDescription: (
        <>
          <b>Applied technical skills: </b> Python, Pandas, GeoPandas, Matplotlib, NumPy, JupyterLab. <br/>
          <b>Collaborators: </b> 
          <a href="https://github.com/dimitrios06" target="_blank" rel="noopener noreferrer">Dimitrios Papzekos</a>.
          <br/> <br/>

          <b>Overview:</b> This project I'm working on aims to reach a conclusion that helps NFL coaches
          become better at their job. The NFL hosts a data competition yearly through Kaggle, open to everyone,
          where they release extremely large amounts of data from games the previous season. This year, I'm partnering
          with my brother to utilize pre-snap data to predict player movements, probability of certain in-game 
          events, play selection, and several other things. The competition runs through end of December 2025, 
          so I will post updates then. Mainly using python and its popular libraries to manipulate the csv files and 
          visualize our findings, and eventually form a conclusion.
        </>
      ),
    },
    {
      title: <a href="https://github.com/bualimov/coding_projects/blob/main/chessProject.ipynb" target="_blank" rel="noopener noreferrer">Top Chess Players</a>, 
      description: "Interactive Jupyter Notebook to process info about world's top players.",
      image: chessPlayersCover, // Replace with actual image URL
      detailedDescription: (
        <>
          <b>Applied technical skills: </b> Python, Pandas, GeoPandas, Selenium. <br/> <br/>

          <b>Overview:</b> I started this project to sharpen my Python skills, after mostly working with 
          Java for a long time in my classes. This was a side project that aimed to deliver an interactive 
          notebook where users can select a player, and find out a lot more information about them. For example,
          right now there are functionalities to find surface level information like country, name, and age. 
          Along with that, there are more complex ideas like incorporating player tendencies, opening strategies, etc.
        </>
      ),
    },
    {
      title: <a href="https://github.com/bualimov/coding_projects/blob/main/final-notebook.ipynb" target="_blank" rel="noopener noreferrer">Pittsburgh Sports</a>, 
      description: "A detailed, visualization-focused Jupyter Notebook that examines the best areas in PGH for sports.",
      image: pghSportsCover, // Replace with actual image URL
      detailedDescription: (
        <>
          <b>Applied technical skills: </b> Python, Pandas, GeoPandas, Matplotlib, NumPy. <br/>
          <b>Collaborators: </b> 
          <a href="https://github.com/matthewlu2" target="_blank" rel="noopener noreferrer">Matthew Lu</a>.
          <br/> <br/>

          <b>Overview:</b> This project was my first ever programming project, and one of the most fun ones. 
          I partnered with my friend in the same class, as it was a class project. In the end, it actually 
          ended up being a model project for future classes. We came up with four different metrics that 
          determine which neighborhood in Pittsburgh is the best for playing sports. We analyzed population, 
          crime, quality of the parks, and quantity of the parks in each neighborhood. Both being from the Pittsburgh 
          area, we were able to go through this project as a duo, in contrast to everyone else who worked in groups of 3-4. 
          It was my first time doing a proper programming project, and when I started practicing writing organized code.

        </>
      ),
    },
    {
      title: <a href="https://github.com/cmarsalko/Sports_Injuries_and_Treatment" target="_blank" rel="noopener noreferrer">Common Sports Injuries</a>, 
      description: "A website that informs users of common sports-related injuries that athletes should know about.",
      image: sportsInjuries, // Replace with actual image URL
      detailedDescription: (
        <>
          <b>Applied technical skills: </b> JavaScript, HTML5, CSS3. <br/>
          <b>Collaborators: </b> 
          <a href="https://github.com/carknight8" target="_blank" rel="noopener noreferrer">Carter Knight</a>,
          <a href="https://github.com/cmarsalko" target="_blank" rel="noopener noreferrer">Chase Marsalko</a>,
          <a href="https://github.com/thaynestine" target="_blank" rel="noopener noreferrer">Thayne Stine</a>.
          <br/> <br/>

          <b>Overview:</b> This was a group project I worked on with my classmates - we thought this would be 
          a clever way to sharpen our frontend programming skills while also learning more about common injuries, 
          their treatments, and ways to prevent them. Each one of us is active so it was interesting to learn 
          in depth about all sorts of accidents, considering we have all had a soprts-related injury at some point 
          in our lives. We built this website collectively with the basic frontend languages, without frameworks. This 
          was also good practice with version control, since there was a total of five of us in a group.
        </>
      ),
    },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => openModal(project)}
          >
            <img src={project.image} alt={project.title} className="project-card-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <h3>{currentProject.title}</h3> {/* Title appears first */}
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="modal-image"
            />
            <p>{currentProject.detailedDescription}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;