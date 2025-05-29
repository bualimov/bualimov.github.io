// JSX for skills section
import React from 'react';
import './Skills.css'
import { FaPython, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiPandas, SiNumpy, SiScikitlearn } from 'react-icons/si';

export default function Skills() {

    // skills list w icons
    const mySkills= [
        { icon: <FaPython />, name: 'Python'},
        { icon: <FaJs />, name: 'JavaScript' },
        { icon: <FaReact />, name: 'React' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <SiPandas />, name: 'Pandas' },
        { icon: <SiNumpy />, name: 'NumPy' },
        { icon: <SiScikitlearn />, name: 'Scikit-learn' },
        { icon: <FaDatabase />, name: 'SQL' },
    ]

    const rows = [
        mySkills.slice(0, 4),
        mySkills.slice(4, 7),
        mySkills.slice(7, 11),
    ]

    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
            <h2 className="skills-title">Skills ⚒️</h2>
            <div className="skills-grid">
            {rows.map((row, i) => (
                <div className={`skills-row ${i % 2 === 0 ? 'even' : 'odd'}`} key={i}>
                {row.map((skill, j) => (
                    <div className="skill-icon-container" key={j}>
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-caption">{skill.name}</div>
                    </div>
                ))}
                </div>
            ))}
            </div>
        </div>
      </section>
    );
}