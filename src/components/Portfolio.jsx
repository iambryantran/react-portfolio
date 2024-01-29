// Create card component
// Map over an array of objects (projects)
import React from 'react';
import Card from './Card';

const Portfolio = () => {
    const projects = [
        { id: 1, title: 'Tips', url: '', githubLink: 'https://github.com/iambryantran/tips'},
        { id: 2, title: 'E-commerce Backend', url: '', githubLink: 'https://github.com/iambryantran/ecommerce-backend'},
        { id: 3, title: 'Employee Tracker', url: '', githubLink: 'https://github.com/iambryantran/employee-tracker'},
        { id: 4, title: 'Note Taker', url: '', githubLink: 'https://github.com/iambryantran/note-taker'},
        { id: 5, title: 'README Generator', url: '', githubLink: 'https://github.com/iambryantran/readme-generator'},
        { id: 6, title: 'Game Release Calendar', url: '', githubLink: 'https://github.com/iambryantran/game-release-calendar'},
    ];

    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            {projects.map((project) => (
                <div className="card" key={project.id}>
                    <Card title={project.title}/>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;
