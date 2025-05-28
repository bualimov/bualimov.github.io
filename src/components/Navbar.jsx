import React from "react";
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../images/initials.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo-group">
                <img src={logo} alt="BA Logo" className="navbar-logo-img" />
                <span className="navbar-logo-text">Bakhtiyor Alimov</span>
            </div>
            <ul className="navbar-links">
                <li><Link to="/about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="/education" smooth={true} duration={500}>Education</Link></li>
                <li><Link to="/experience" smooth={true} duration={500}>Experience</Link></li>
                <li><Link to="/projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="/skills" smooth={true} duration={500}>Skills</Link></li>
            </ul>
        </nav>
    )
}

