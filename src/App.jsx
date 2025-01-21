import { Link } from 'react-scroll'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import profilePic from './assets/profile.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen w-screen bg-dark font-raleway">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-dark-accent shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">Bakhtiyor Alimov</div>
            <div className="hidden md:flex items-center justify-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-lg text-white cursor-pointer hover:text-accent-blue transition-colors"
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Hi, I'm Bakhtiyor!</h1>
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
                  <div className="absolute inset-0 bg-accent-blue/30 rounded-2xl transform rotate-6"></div>
                  <img 
                    src={profilePic} 
                    alt="Bakhtiyor Alimov"
                    className="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-accent-blue/50 shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="h-screen w-full bg-dark-accent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">About Me</h2>
            <p className="text-lg text-gray-300">
              I'm a sophomore at the University of Pittsburgh, majoring in Computer Science
              with a minor in Economics. I'm passionate about technology and always eager
              to learn new things.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="h-screen w-full bg-dark flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Education</h2>
            <div className="bg-dark-accent p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold text-white">University of Pittsburgh</h3>
              <p className="text-gray-300">BS in Computer Science</p>
              <p className="text-gray-300">Minor in Economics</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="h-screen w-full bg-dark-accent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Add your projects here */}
              <div className="bg-dark p-6 rounded-lg shadow-xl border border-accent-blue/30">
                <h3 className="text-xl font-bold mb-2 text-white">Project 1</h3>
                <p className="text-gray-300">Description of your project goes here</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="h-screen w-full bg-dark flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Contact</h2>
            <p className="text-lg text-gray-300">
              Feel free to reach out to me for any opportunities or collaborations.
            </p>
            {/* Add your contact information or form here */}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
