import React from "react";
import './Footer.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <p className="footer-text">
                <b>© {year} Bakhtiyor Alimov. All rights reserved. <br/></b>
                Thanks for visiting my page!
                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/bualimov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-footer-link"
                    >
                        <FaLinkedin className="social-icon-footer linkedin" />
                    </a>

                    <a href="https://www.github.com/bualimov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-footer-link"
                    >
                        <FaGithub className="social-icon-footer github" />
                    </a>
                </div>
            </p>
        </div>
    )
}