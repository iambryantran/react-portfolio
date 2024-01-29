import React from 'react';

const Card = ({ title, screenshot, projectLink, githubLink }) => {
    return (
        <div className="card">
            <img src={screenshot} alt="Project Screenshot" />
            <div className="card-body">
                <h3>{title}</h3>
                <p>Description of the project</p>
                <a href={projectLink}>View Project</a>
                <a href={githubLink}>
                    <img src="github-icon.png" alt="GitHub Repository" />
                </a>
            </div>
        </div>
    );
};

export default Card;
