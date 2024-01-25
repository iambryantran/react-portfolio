const Resume = () => {
    return (
        <div>
            <h1>Resume</h1>
            <p>Click the button below to download my resume:</p>
            {/* Add resume to src/assets and correct this href */}
            <a href="/path/to/resume.pdf" download> 
                Download Resume
            </a>
        </div>
    );
};

export default Resume;
