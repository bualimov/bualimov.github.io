import React from 'react';
import './Projects.css';
import marchmaniacover from '../images/march-mania-cover.png';
import { FaGithub } from 'react-icons/fa'

// projects data
const myprojects = [
    {
        cover: marchmaniacover,
        title: 'March Machine Learning Mania',
        short: 'Built a machine learning model to predict NCAA tournament outcomes using 14+ years of data, placing in the top 40% of 2000+ teams. Developed features and processed 500K+ matchups with Python tools like Pandas and Scikit-learn.',
        long: 'filler',
        collaborators: [
            { name: 'Dimitrios Papazekos', github: 'github.com/dimitrios06'}
        ],
        languages: [
            { name: 'Python', color: '#3572A5' },
            { name: 'Pandas', color: '#150458' },
            { name: 'NumPy', color: '#013243' },
            { name: 'Scikit-learn', color: '#F7931E' }
        ],
        repo: 'https://github.com/bualimov/march-machine-learning-mania-2025'
    },
    {
        cover: marchmaniacover,
        title: 'March Machine Learning Mania',
        short: 'Built a machine learning model to predict NCAA tournament outcomes using 14+ years of data, placing in the top 40% of 2000+ teams. Developed features and processed 500K+ matchups with Python tools like Pandas and Scikit-learn.',
        long: 'filler',
        collaborators: [
            { name: 'Dimitrios Papazekos', github: 'github.com/dimitrios06'}
        ],
        languages: [
            { name: 'Python', color: '#3572A5' },
            { name: 'Pandas', color: '#150458' },
            { name: 'NumPy', color: '#013243' },
            { name: 'Scikit-learn', color: '#F7931E' }
        ],
        repo: 'https://github.com/bualimov/march-machine-learning-mania-2025'
    },    {
        cover: marchmaniacover,
        title: 'March Machine Learning Mania',
        short: 'Built a machine learning model to predict NCAA tournament outcomes using 14+ years of data, placing in the top 40% of 2000+ teams. Developed features and processed 500K+ matchups with Python tools like Pandas and Scikit-learn.',
        long: 'filler',
        collaborators: [
            { name: 'Dimitrios Papazekos', github: 'github.com/dimitrios06'}
        ],
        languages: [
            { name: 'Python', color: '#3572A5' },
            { name: 'Pandas', color: '#150458' },
            { name: 'NumPy', color: '#013243' },
            { name: 'Scikit-learn', color: '#F7931E' }
        ],
        repo: 'https://github.com/bualimov/march-machine-learning-mania-2025'
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