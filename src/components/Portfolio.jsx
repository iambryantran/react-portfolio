// Create card component
// Map over an array of objects (projects)
import React from 'react';
// import Card from './Card';
import Card from 'react-bootstrap/Card';

import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
    const projects = [
        { id: 1, title: 'Tips', image: '/img/tips.png', url: '', githubLink: 'https://github.com/iambryantran/tips'},
        { id: 2, title: 'E-commerce Backend', image: '/img/ecommercebackend.png', url: '', githubLink: 'https://github.com/iambryantran/ecommerce-backend'},
        { id: 3, title: 'Employee Tracker', image: '/img/employeetracker.png', url: '', githubLink: 'https://github.com/iambryantran/employee-tracker'},
        { id: 4, title: 'Note Taker', image: '/img/notetaker.png', url: '', githubLink: 'https://github.com/iambryantran/note-taker'},
        { id: 5, title: 'README Generator', image: '/img/readme-generator.png', url: '', githubLink: 'https://github.com/iambryantran/readme-generator'},
        { id: 6, title: 'Game Release Calendar', image: '/img/game-calendar.png', url: '', githubLink: 'https://github.com/iambryantran/game-release-calendar'},
    ];

    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            <div className='card-row'>
                {projects.map((project) => (
                    <div className="card-container" key={project.id}>
                        {/* <Card title={project.title} githubLink={project.githubLink}/> */}
                        <Card style={{ width: '18rem' }}>
                        <Card.Img src={project.image} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href={project.githubLink}>
                                    <FaGithub />
                                </Card.Link>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
