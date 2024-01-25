const Project = ({ screenshot, projectLink }) => {
    return (
        <div className="card">
            <img src={screenshot} alt="Project Screenshot" />
            <a href={projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};

export default Project;
