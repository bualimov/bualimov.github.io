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
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Your Name</div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Home Section */}
        <section id="home" className="min-h-screen bg-gray-50 flex items-center">
          <div className="container mx-auto px-6 py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl text-gray-600">CS Student at University of Pittsburgh</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen bg-white flex items-center">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-gray-600">
              I'm a sophomore at the University of Pittsburgh, majoring in Computer Science
              with a minor in Economics. I'm passionate about technology and always eager
              to learn new things.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen bg-gray-50 flex items-center">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Education</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">University of Pittsburgh</h3>
              <p className="text-gray-600">BS in Computer Science</p>
              <p className="text-gray-600">Minor in Economics</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen bg-white flex items-center">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Add your projects here */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <p className="text-gray-600">Description of your project goes here</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen bg-gray-50 flex items-center">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Contact</h2>
            <p className="text-lg text-gray-600">
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
