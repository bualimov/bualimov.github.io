import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home'
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      {/* <Projects />
      <Skills /> */}
      <Footer />
    </div>
  );
}

export default App;
