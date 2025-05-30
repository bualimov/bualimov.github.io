// JSX for skills section
import React from 'react';
import './Skills.css'
import { FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiMongodb, SiPandas, SiNumpy, SiScikitlearn, SiTableau, SiApachehive, SiApachekafka, SiJupyter, SiYarn, SiOracle, SiSelenium, SiYaml, SiKedro, SiPlotly, SiHive, SiPytorch, SiTensorflow } from 'react-icons/si';

const skills = [
    // Languages
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <SiCplusplus />, name: 'C++' },
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaDatabase />, name: 'SQL' },

    // Data Engineering & Analysis
    { icon: <SiPandas />, name: 'Pandas' },
    { icon: <SiNumpy />, name: 'NumPy' },
    { icon: <SiScikitlearn />, name: 'Scikit-learn' },
    { icon: <SiKedro />, name: 'Kedro' },
    { icon: <SiPlotly />, name: 'Plotly' },
    { icon: <SiTableau />, name: 'Tableau' },
    { icon: <SiHive />, name: 'Hive' },
    { icon: <FaDatabase />, name: 'Parquet' }, // fallback icon
    { icon: <SiJupyter />, name: 'Jupyter' },

    { icon: <SiMongodb />, name: 'MongoDB' },

    // Cloud & DevOps
    { icon: <SiOracle />, name: 'Oracle Cloud' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaLinux />, name: 'Linux' },

    // Misc
    { icon: <SiSelenium />, name: 'Selenium' },
    { icon: <SiYaml />, name: 'YAML' },
];

// Alternate rows: 7, 6, 7, 6, ...
function getAlternatingRows(skills, firstRowCount = 7, secondRowCount = 6) {
    const rows = [];
    let i = 0;
    let toggle = true;
    while (i < skills.length) {
        const count = toggle ? firstRowCount : secondRowCount;
        rows.push(skills.slice(i, i + count));
        i += count;
        toggle = !toggle;
    }
    return rows;
}

const skillRows = getAlternatingRows(skills);

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
            <h2 className="skills-title">Skills ⚒️</h2>
            <div className="skills-grid">
            {skillRows.map((row, i) => (
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