import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import algdscover from '../images/algds_cover.png';
import chessplayerscover from '../images/chessplayers_cover.png';
import dentcover from '../images/dent_cover.png';
import javastudytoolcover from '../images/javastudytool_cover.png';
import marchmaniacover from '../images/march-mania-cover.png';
import pghsportscover from '../images/pghsports_cover.png';
import sportsinjuriescover from '../images/sportsinjuries_cover.png';
// import website from '';


//   // Languages & Frameworks
//   { name: 'Java', color: '#007396' },
//   { name: 'Python', color: '#3572A5' },
//   { name: 'React', color: '#61DAFB' },
//   { name: 'HTML5', color: '#E34F26' },
//   { name: 'CSS3', color: '#1572B6' },
//   { name: 'JavaScript', color: '#F7DF1E' },
//   { name: 'C++', color: '#00599C' },

//   // Data Engineering & Analysis
//   { name: 'Pandas', color: '#150458' },
//   { name: 'NumPy', color: '#013243' },
//   { name: 'Spark', color: '#E25A1C' },
//   { name: 'PySpark', color: '#B37400' },
//   { name: 'Matplotlib', color: '#11557C' },
//   { name: 'Plotly', color: '#3F4F75' },
//   { name: 'Kedro', color: '#08D4BE' },
//   { name: 'Tableau', color: '#E97627' },
//   { name: 'Hive', color: '#FDEE21' },
//   { name: 'Parquet', color: '#221F1F' },
//   { name: 'SQL', color: '#336791' },

//   // Cloud & DevOps
//   { name: 'Azure Devops', color: '#0078D7' },
//   { name: 'Apache Airflow', color: '#017CEE' },
//   { name: 'Oracle Cloud', color: '#F80000' },
//   { name: 'Bash', color: '#4EAA25' },
//   { name: 'YAML', color: '#CB171E' },
//   { name: 'Conda', color: '#44A833' },
//   { name: 'Git', color: '#F05032' },
//   { name: 'Toad', color: '#73C02C' }, // approximate based on branding

//   // Systems & Misc
//   { name: 'MIPS Assembly', color: '#00427A' }, // approximate (not standardized)
//   { name: 'ETL/ELT Pipelines', color: '#FF6D00' }, // conceptual (representing data flow)
//   { name: 'Metadata Management', color: '#8E24AA' }, // conceptual (purple for data-related tools)
//   { name: 'Selenium', color: '#43B02A' }

// projects data
const myprojects = [
    {
        cover: marchmaniacover,
        title: 'My Website!',
        short: 'Designed and built a personal website using React, Vite, HTML5, and CSS3 to deepen frontend development knowledge. Used the project to experiment with clean, functional UI design and improve fluency with modern web development tools.',
        
        languages: [
            { name: 'React', color: '#61DAFB' },
            { name: 'HTML5', color: '#E34F26' },
            { name: 'CSS3', color: '#1572B6' },
            { name: 'JavaScript', color: '#F7DF1E' },
        ],
        repo: 'https://github.com/bualimov/bualimov.github.io'
    },
    {
        cover: marchmaniacover,
        title: 'March Machine Learning Mania',
        short: 'Used classification models to predict NCAA March Madness outcomes and simulate full tournament brackets. Placed in the top 40% of submissions based on prediction accuracy.',
        
        languages: [
            { name: 'Python', color: '#3572A5' },
            { name: 'Pandas', color: '#150458' },
            { name: 'NumPy', color: '#013243' },
            { name: 'Scikit-learn', color: '#F7931E' }
        ],
        repo: 'https://github.com/bualimov/march-machine-learning-mania-2025'
    },
    {
        cover: dentcover,
        title: 'NFL Big Data Bowl',
        short: 'Engineered a defensive entropy metric using player tracking data to measure randomness and performance. Visualized play outcomes, earning 700+ views on Kaggle.',

        languages: [
            { name: 'Python', color: '#3572A5' },
            { name: 'Pandas', color: '#150458' },
            { name: 'NumPy', color: '#013243' },
            { name: 'Matplotlib', color: '#11557C' },
            { name: 'Plotly', color: '#3F4F75' },
        ],
        repo: 'https://www.kaggle.com/code/bakhtiyoralimov/dent-defensive-entropy-in-the-nfl'
    },
    {
        cover: javastudytoolcover,
        title: 'Java Study Tool',
        short: 'Designed a web tool to help students learn algorithms and search professors. Served 600+ users with interactive diagrams and integrated APIs for course visualization.',

        languages: [
            { name: 'HTML5', color: '#E34F26' },
            { name: 'CSS3', color: '#1572B6' },
            { name: 'JavaScript', color: '#F7DF1E' },
        ],
        repo: 'https://github.com/Ilya-Abbasian/JavaStudyTool-SteelHacks_Project/tree/MAIN3.0/public'
    },
    {
        cover: chessplayerscover,
        title: 'Top Chess Players',
        short: 'Built an interactive Python notebook to explore chess player data, enabling insights into nationalities, ages, openings, and playing tendencies through dynamic filters.',

        languages: [
            { name: 'Python', color: '#3572A5' },
            { name: 'Pandas', color: '#150458' },
            { name: 'NumPy', color: '#013243' },
            { name: 'in progress!', color: '#FFFFFF' }

        ],
        repo: 'https://github.com/bualimov/coding_projects/blob/main/chessProject.ipynb'
    },
    {
        cover: pghsportscover,
        title: 'Pittsburgh Sports',
        short: 'Ranked Pittsburgh neighborhoods for sports using public datasets on parks, crime, and population. Cleaned and analyzed data to produce a ranked list with key submetrics.',

        languages: [
            { name: 'Python', color: '#3572A5' },
            { name: 'Pandas', color: '#150458' },
            { name: 'GeoPandas', color: '#3288BD' },
            { name: 'NumPy', color: '#013243' },
            { name: 'Matplotlib', color: '#11557C' },
            { name: 'Plotly', color: '#3F4F75' },
        ],
        repo: 'https://github.com/bualimov/coding_projects/blob/main/final-notebook.ipynb'
    }
]

// card component within file
function ProjectCard({ project }) {
    const handleClick = () => {
        window.open(project.repo, '_blank')
    }

    return (
        <div className="project-card">
            <img src={project.cover} alt={project.title} className="project-cover" />
            <h3>{project.title}</h3>
            <p>{project.short}</p>
            <div className="project-languages">
                {project.languages.map(lang => (
                    <span key={lang.name} className="language-tag" style={{ borderColor: lang.color }}>
                        {lang.name}
                    </span>
                ))}
            </div>
            <div className="card-icon" onClick={handleClick}>
                <FaGithub className="card-icon github" />
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <h2 className="projects-title">Projects 📖</h2>

                {/* start scrollable sideways box */}
                <div className="projects-scroll-container">
                    {myprojects.map((project, idx) => (
                        <ProjectCard
                            key={idx}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}