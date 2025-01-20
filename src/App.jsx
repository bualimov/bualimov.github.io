import { Link } from 'react-scroll'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    <div className="min-h-screen w-screen bg-dark">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-dark-accent shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-white">Bakhtiyor Alimov</div>
            <div className="hidden md:flex items-center justify-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white cursor-pointer hover:text-accent-blue transition-colors"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Bakhtiyor Alimov</h1>
            <p className="text-xl text-gray-300">Studying CS@Pitt<br></br> Passionate Creator</p>
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
              <div className="bg-dark p-6 rounded-lg shadow-xl border border-accent-blue/20">
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
