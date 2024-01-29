import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <a href="https://github.com/iambryantran" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/bryanntran" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
