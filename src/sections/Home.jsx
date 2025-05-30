import React from 'react';
import './Home.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import cover from '../images/cover.jpeg'

export default function Home() {
    return (
        <section id="home" className="home-section">
            <div className="home-container">
                <div className="home-content">
                    {/* Left side - Text */}
                    <motion.div 
                        className="home-text"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Hi, I'm Bakhtiyor! 👋
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            SWE & Data Engineer Intern <b>@US Steel</b><br />
                            Studying CS <b>@Pitt</b><br />
                            Passionate Creator
                        </motion.p>
                        <motion.div 
                            className="home-socials"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <a
                                href="https://www.linkedin.com/in/bualimov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link"
                            >
                                <FaLinkedin className="social-icon linkedin" />
                            </a>
                            <a
                                href="https://github.com/bualimov"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link"
                            >
                                <FaGithub className="social-icon github" />
                            </a>
                        </motion.div>
                    </motion.div>
                    {/* Right side - Image */}
                    <motion.div 
                        className="home-image"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <img 
                            src={cover} 
                            alt="cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}