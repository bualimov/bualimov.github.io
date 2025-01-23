import { Link } from 'react-scroll'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import profilePic from './assets/profile.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import cathedral from './assets/cathedral.jpg'
import './App.css'

// Project Modal Component
const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-dark-accent rounded-xl p-8 max-w-5xl w-full relative" onClick={e => e.stopPropagation()}>
        <span
          className="absolute top-2 right-3 text-4xl text-gray-400 hover:text-red-500 transition-colors cursor-pointer leading-none"
          onClick={onClose}
        >
          ×
        </span>
        <div className="flex justify-center mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-3/4 h-auto max-h-[350px] object-contain rounded-lg"
          />
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-2xl font-bold text-white mb-4 hover:text-accent-blue transition-colors"
        >
          {project.title}
        </a>
        <p className="text-gray-300 mb-6">{project.fullDescription}</p>
        
        {/* Collaborators Section - Only show if there are collaborators */}
        {project.collaborators && project.collaborators.length > 0 && (
          <div className="mb-6 text-center">
            <h4 className="text-xl font-bold text-white mb-2">Collaborators</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {project.collaborators.map((collab, index) => (
                <a
                  key={index}
                  href={collab.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-blue hover:text-accent-blue/80 transition-colors"
                >
                  {collab.name}
                  {index < project.collaborators.length - 1 && ", "}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Technical Skills Section */}
        <div className="text-center">
          <h4 className="text-xl font-bold text-white mb-2">Applied Technical Skills</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {project.technicalSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-dark px-3 py-1 rounded-full text-sm text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Project Card Component
const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="bg-dark rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-all hover:scale-105"
      onClick={onClick}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300">{project.shortDescription}</p>
      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
  ];

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "This Website!",
      image: "https://picsum.photos/800/600?random=1",
      github: "https://github.com/bualimov/bualimov.github.io",
      shortDescription: "My website to showcase my projects + skills.",
      fullDescription: "More often than not, I am working on backend-focused projects. In an effort to improve my frontend skills, and because a personal website is convenient to have, I put this site together utilizing the React and Vite frameworks, and the main web-building languages of HTML5 and CSS3. At my upcoming internship this summer with US Steel, I know I'll be using React, and I wanted to expand my understanding of frontend development. I aim to learn about more tools and frameworks to help me more efficiently build sites like this with more practical goals in mind.",
      collaborators: [],
      technicalSkills: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind", "Vite"]
    },
    {
      id: 2,
      title: "NFL Big Data Bowl 2025",
      image: "/src/assets/databowl_cover.png",
      github: "https://github.com/bualimov/nfl_project",
      shortDescription: (
        <>
          Analyzed 56M+ data points to analyze NFL data. Gained <b>500+ views</b> on Kaggle.
        </>
      ),      fullDescription: "Every year, the NFL hosts a data competition through Kaggle, open to everyone, where they release extensive amounts of data from games the previous season. This year, I partnered with my brother, Dimitrios, to analyze the data. We developed a metric to measure the randomness of defensive players, and how it impacts the game as a whole. We looked at a variety of factors to determine what makes a defense more random, and how it can be used to predict the outcome of a play, and the game itself. We created live visuals that represent the actual plays, and graphs that correlate to the plays that display the entropy ratings of each player. Also in our analysis, we observed all players in the league, and calculated who has the highest entropy rating, and how it corresponds to in-game performance. Our conclusion, well, view it yourself to see!",
      collaborators: [
        { name: "Dimitrios Papazekos", github: "https://github.com/dimitrios06" },
      ],
      technicalSkills: ["Python", "Pandas", "NumPy", "Plotly", "Matplotlib", "HTML", "CSS", "Markdown", "Jupyter"]
    },
    {
      id: 3,
      title: "Java Study Tool",
      image: "/src/assets/javastudytool_cover.png",
      github: "https://github.com/Ilya-Abbasian/JavaStudyTool-SteelHacks_Project/tree/MAIN3.0/public",
      shortDescription: "Interactive learning platform for Java programming concepts.",
      fullDescription: "I built this with my friends as part of my first ever hackathon project. Our goal was to make a website that both students and professors could use to help visualize the concepts of complex data structures in programming, such as arrays and linked lists. We integrated a data structure \"populator\", where users could input a data structure and length. Along with that, users can draw using the built-in canvas on our page. Also, feel free to talk with Pitt's mascot, where you can learn more in detail about these data structures. Use the Professor Search Tool to find your professor's name, email, and office hours instead of having to look them up. In the future, we look to expand upon this project to fully implement its intended functionalities, adding more data structures and details.",
      collaborators: [
        { name: "Ilya Abbasian", github: "https://github.com/ilya-abbasian" },
        { name: "Kyle Zheng", github: "https://github.com/kylezheng11" }
      ],
      technicalSkills: ["Java", "JavaScript", "TypeScript", "HTML", "CSS", "Markdown"]
    },
    {
      id: 4,
      title: "Top Chess Players",
      image: "/src/assets/chessplayers_cover.png",
      github: "https://github.com/bualimov/coding_projects/tree/main",
      shortDescription: "Data analysis of chess player statistics and strategies.",
      fullDescription: "I started this project to sharpen my Python skills, after mostly working with Java for a long time in my classes. This was a side project that aimed to deliver an interactive notebook where users can select a player, and find out a lot more information about them. For example, right now there are functionalities to find surface level information like country, name, and age. Along with that, there are more complex ideas like incorporating player tendencies, opening strategies, etc.",
      collaborators: [],
      technicalSkills: ["Python", "Pandas", "Matplotlib", "Selenium", "Jupyter"]
    },
    {
      id: 5,
      title: "Pittsburgh Sports",
      image: "/src/assets/pghsports_cover.png",
      github: "https://github.com/bualimov/coding_projects/blob/main/final-notebook.ipynb",
      shortDescription: "Analyzed Pittsburgh neighborhoods to find the best for playing sports.",
      fullDescription: "This project was my first ever programming project, and one of the most fun ones. I partnered with my friend in the same class, as it was a class project. In the end, it actually ended up being a model project for future classes. We came up with four different metrics that determine which neighborhood in Pittsburgh is the best for playing sports. We analyzed population, crime, quality of the parks, and quantity of the parks in each neighborhood. Both being from the Pittsburgh area, we were able to go through this project as a duo, in contrast to everyone else who worked in groups of 3-4. It was my first time doing a proper programming project, and when I started practicing writing organized code.",
      collaborators: [
        { name: "Matthew Lu", github: "https://github.com/matthewlu2" }
      ],
      technicalSkills: ["Python", "Pandas", "NumPy", "PlotLy", "Geopandas", "Jupyter"]
    },
    {
      id: 6,
      title: "Sports Injuries",
      image: "/src/assets/sportsinjuries_cover.png",
      github: "https://github.com/cmarsalko/Sports_Injuries_and_Treatment",
      shortDescription: "Website showcasing common sports-related injuries athletes should know about.",
      fullDescription: "This was a group project I worked on with my classmates - we thought this would be a clever way to sharpen our frontend programming skills while also learning more about common injuries, their treatments, and ways to prevent them. Each one of us is active so it was interesting to learn in depth about all sorts of accidents, considering we have all had a sports-related injury at some point in our lives. We built this website collectively with the basic frontend languages, without frameworks. This was also good practice with version control, since there was a total of five of us in a group.",
      collaborators: [
        { name: "Carter Knight", github: "https://github.com/carknight8" },
        { name: "Chase Marsalko", github: "https://github.com/cmarsalko" },
        { name: "Thayne Stine", github: "https://github.com/thaynestine" }
      ],
      technicalSkills: ["JavaScript", "HTML", "CSS", "Markdown"]
    },
    {
      id: 7,
      title: "Algorithms & Data Structures Projects",
      image: "/src/assets/algds_cover.png",
      github: "https://github.com/bualimov/cs445",
      shortDescription: "Brief description of project seven goes here.",
      fullDescription: "Here you will find my repository for my projects I worked on in my Algorithms & Data Structures class. A lot of these consist of familiarizing myself with implementing algorithms on different data structures, studying how they work, and how they can be utilized in real-world applications. Not much interesting information here, but I'm sure I'll be adding more to this repository as I continue to work on more projects.",
      collaborators: [],
      technicalSkills: ["Java"]
    },
  ]

  return (
    <div className="min-h-screen w-screen bg-dark font-raleway">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-dark-accent shadow-2xl z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/src/assets/logo3.png" alt="BA Logo" className="h-8 brightness-0 invert" />
              <a
                href="#home"
                className="nav-link text-2xl font-bold text-white cursor-pointer hover:text-accent-blue transition-colors ml-3"
              >
                Bakhtiyor Alimov
              </a>
            </div>
            <div className="hidden md:flex items-center justify-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  className="nav-link text-lg text-white cursor-pointer hover:text-accent-blue transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full">
        {/* Home Section */}
        <section id="home" className="h-screen w-full bg-dark flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left side - Text */}
              <div className="w-full md:w-1/2 flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Hi, I'm Bakhtiyor! 👋</h1>
                <p className="text-2xl md:text-3xl text-gray-300 mb-8">
                  Studying CS@Pitt
                  <br />
                  Passionate Creator
                </p>
                {/* Social Icons - centered */}
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://www.linkedin.com/in/bualimov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transform transition-transform hover:scale-110"
                  >
                    <FaLinkedin className="w-10 h-10 text-[#0077b5]" />
                  </a>
                  <a 
                    href="https://github.com/bualimov" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transform transition-transform hover:scale-110"
                  >
                    <FaGithub className="w-10 h-10 text-[#f4511e]" />
                  </a>
                </div>
              </div>
              
              {/* Right side - Image */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]">
                  <div className="absolute inset-0 bg-accent-blue/40 rounded-2xl transform rotate-6"></div>
                  <img 
                    src={profilePic} 
                    alt="Bakhtiyor Alimov"
                    className="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-accent-blue/20 shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="h-screen w-full bg-dark-accent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">About Me 🎸</h2>
            <p className="text-2xl leading-relaxed text-gray-300">
              Hi, I'm Bakhtiyor! Currently in my second year at the <b>University of Pittsburgh</b>,
              I am majoring in Computer Science, minoring in Economics, and pursuing the Pitt Honors
              Degree. I love creating things, problem solving, putting things together, and hope to
              become a software developer one day. To work towards this goal, I've worked on a variety
              of projects, and incorporated my hobbies into them. Be sure to check them out! As far as
              this website, I built it to share a little more about myself, and showcase some of the
              cool things I've worked on. I used <i>React, Vite, Tailwind, HTML, CSS, & JavaScript.</i>
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
        </section>

        {/* Education Section */}
        <section id="education" className="h-screen w-full bg-dark flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white text-center">Education 👨‍🎓</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left side - Cathedral Image */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <div className="relative w-72 h-96 md:w-[24rem] md:h-[32rem]">
                  <div className="absolute inset-0 bg-pitt-gold/30 rounded-2xl transform -rotate-6"></div>
                  <img 
                    src={cathedral} 
                    alt="Cathedral of Learning"
                    className="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-pitt-gold/50 shadow-xl"
                  />
                </div>
              </div>

              {/* Right side - Education Details */}
              <div className="w-full md:w-1/2">
                <div className="space-y-6">
                  <div className="bg-dark-accent p-6 rounded-lg shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-2">University of Pittsburgh</h3>
                    <div className="text-lg text-gray-300 space-y-1">
                      <p>BS in Computer Science</p>
                      <p>Minor in Economics</p>
                      <p>Pitt Honors Degree</p>
                    </div>
                  </div>

                  <div className="bg-dark-accent p-6 rounded-lg shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-3">Coursework</h3>
                    <div className="text-lg text-gray-300 space-y-1">
                      <p>• Data Structures & Algorithms</p>
                      <p>• Advanced Programming</p>
                      <p>• Discrete Structures</p>
                      <p>• Computer Organization & Assembly Language</p>
                      <p>• Systems Software</p>
                      <p>• Economics</p>
                    </div>
                  </div>

                  <div className="bg-dark-accent p-6 rounded-lg shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-3">Clubs</h3>
                    <div className="text-lg text-gray-300 space-y-1">
                      <p>• Computer Science Club</p>
                      <p>• Panther Equity (Investment Fund)</p>
                      <p>• Chess Club</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen w-full bg-dark-accent flex items-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">Projects 🚀</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </section>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {/* Experience Section */}
        <section id="experience" className="min-h-screen w-full bg-dark flex items-center py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white text-center">Experience 💼</h2>
            
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pitt-gold/30"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {/* Current - Peer Tutor */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-dark p-5 rounded-lg shadow-xl">
                      <h3 className="text-xl font-bold text-white mb-2">Peer Tutor</h3>
                      <p className="text-lg text-gray-300">University of Pittsburgh</p>
                      <p className="text-sm text-pitt-gold mb-3">June 2024 - Present</p>
                      <p className="text-gray-300">Led 50+ sessions on algorithms & data structures using Python & Java, enhancing students' understanding and confidence. Guided students in resolving programming challenges & enhanced coding skills using VSCode.</p>
                    </div>
                  </div>
                  <div className="mx-auto md:mx-0 w-4 h-4 bg-pitt-gold rounded-full relative z-10"></div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>

                {/* Raising Cane's */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="mx-auto md:mx-0 w-4 h-4 bg-pitt-gold rounded-full relative z-10"></div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-dark p-5 rounded-lg shadow-xl text-left">
                      <h3 className="text-xl font-bold text-white mb-2">Certified Trainer & Shift Supervisor</h3>
                      <p className="text-lg text-gray-300">Raising Cane's</p>
                      <p className="text-sm text-pitt-gold mb-3">January 2024 - October 2024</p>
                      <p className="text-gray-300">Identified as a high-potential employee and fast-tracked for a managerial role. Routinely trained team members on crew member tasks while maintaining operational efficiency and customer satisfaction.</p>
                    </div>
                  </div>
                </div>

                {/* Junior Analyst */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-dark p-5 rounded-lg shadow-xl">
                      <h3 className="text-xl font-bold text-white mb-2">Junior Analyst</h3>
                      <p className="text-lg text-gray-300">Panther Equity</p>
                      <p className="text-sm text-pitt-gold mb-3">September 2024 - Present</p>
                      <p className="text-gray-300">Utilized Excel & financial modeling tools to assess investment opportunities, performing quantitative analysis. Prepared reports and presentations analyzing activity & trends in the stock market.</p>
                    </div>
                  </div>
                  <div className="mx-auto md:mx-0 w-4 h-4 bg-pitt-gold rounded-full relative z-10"></div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>

                {/* Golden Oaks */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="mx-auto md:mx-0 w-4 h-4 bg-pitt-gold rounded-full relative z-10"></div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-dark p-5 rounded-lg shadow-xl text-left">
                      <h3 className="text-xl font-bold text-white mb-2">President</h3>
                      <p className="text-lg text-gray-300">Golden Oaks Designs</p>
                      <p className="text-sm text-pitt-gold mb-3">September 2021 - June 2023</p>
                      <p className="text-gray-300">Led production to a record sales year, increasing revenue by 30% through designing best-selling wooden pens. Managed business operations within a collaborative team, overseeing product development and marketing.</p>
                    </div>
                  </div>
                </div>

                {/* Salvation Army */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-dark p-5 rounded-lg shadow-xl">
                      <h3 className="text-xl font-bold text-white mb-2">Volunteer Operations Manager</h3>
                      <p className="text-lg text-gray-300">Pittsburgh Salvation Army</p>
                      <p className="text-sm text-pitt-gold mb-3">August 2021 - August 2022</p>
                      <p className="text-gray-300">Maintained warm, welcoming atmosphere aligned with organization's standards. Actively participated in clothing donations and inventory management, providing essential services to the community.</p>
                    </div>
                  </div>
                  <div className="mx-auto md:mx-0 w-4 h-4 bg-pitt-gold rounded-full relative z-10"></div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen w-full bg-dark-accent flex items-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">Skills 🛠️</h2>
            
            <div className="space-y-12">
              {/* Languages */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-left">Languages</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-12 h-12 mb-2" alt="Java" />
                    <span className="text-white text-sm font-bold">Java</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-12 h-12 mb-2" alt="Python" />
                    <span className="text-white text-sm font-bold">Python</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-12 h-12 mb-2" alt="HTML5" />
                    <span className="text-white text-sm font-bold">HTML5</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-12 h-12 mb-2" alt="CSS3" />
                    <span className="text-white text-sm font-bold">CSS3</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-12 h-12 mb-2" alt="JavaScript" />
                    <span className="text-white text-sm font-bold">JavaScript</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="w-12 h-12 mb-2" alt="C++" />
                    <span className="text-white text-sm font-bold">C++</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <div className="h-12 flex items-center justify-center mb-2">
                      <span className="text-white text-2xl font-bold">MIPS</span>
                    </div>
                    <span className="text-white text-sm font-bold">MIPS</span>
                  </div>
                </div>
              </div>

              {/* Data */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-left">Data</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" className="w-12 h-12 mb-2" alt="NumPy" />
                    <span className="text-white text-sm font-bold">NumPy</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" className="w-12 h-12 mb-2" alt="Pandas" />
                    <span className="text-white text-sm font-bold">Pandas</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://plotly.com/all_static/images/icon-dash.png" className="w-12 h-12 mb-2" alt="Plotly" />
                    <span className="text-white text-sm font-bold">Plotly</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-12 h-12 mb-2" alt="SQL" />
                    <span className="text-white text-sm font-bold">SQL</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <div className="h-12 flex items-center justify-center mb-2">
                      <img 
                        src="https://matplotlib.org/stable/_static/logo2.svg" 
                        className="h-12 w-12 object-contain" 
                        alt="Matplotlib" 
                      />
                    </div>
                    <span className="text-white text-sm font-bold">Matplotlib</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://geopandas.org/en/stable/_images/geopandas_icon.png" className="w-12 h-12 mb-2" alt="GeoPandas" />
                    <span className="text-white text-sm font-bold">GeoPandas</span>
                  </div>
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-left">Frameworks</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg" className="w-12 h-12 mb-2" alt="Cucumber" />
                    <span className="text-white text-sm font-bold">Cucumber</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" className="w-12 h-12 mb-2" alt="Jupyter" />
                    <span className="text-white text-sm font-bold">Jupyter</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className="w-12 h-12 mb-2 invert" alt="Markdown" />
                    <span className="text-white text-sm font-bold">Markdown</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-12 h-12 mb-2" alt="NodeJS" />
                    <span className="text-white text-sm font-bold">NodeJS</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" className="w-12 h-12 mb-2" alt="Selenium" />
                    <span className="text-white text-sm font-bold">Selenium</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" className="w-12 h-12 mb-2" alt="Spring" />
                    <span className="text-white text-sm font-bold">Spring</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-12 h-12 mb-2" alt="React" />
                    <span className="text-white text-sm font-bold">React</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <div className="h-12 flex items-center justify-center mb-2">
                      <span className="text-white text-2xl font-bold">XML</span>
                    </div>
                    <span className="text-white text-sm font-bold">XML</span>
                  </div>
                  <div className="bg-dark w-24 h-24 p-4 rounded-xl shadow-xl flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                    <img src="https://vitejs.dev/logo.svg" className="w-12 h-12 mb-2" alt="Vite" />
                    <span className="text-white text-sm font-bold">Vite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-dark py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white mb-2">© 2025 Bakhtiyor Alimov. All rights reserved.</p>
            <p className="text-sm text-gray-400">
              Thank you for visiting my page! <br />
              Contact me at{' '}
              <a href="mailto:baa160@pitt.edu" className="text-accent-blue hover:text-accent-blue/80">
                baa160@pitt.edu
              </a>
              !
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
