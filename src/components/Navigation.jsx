import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Navigation = () => {
  const location = useLocation(); // Use location to determine the current pathname

  // Custom function to determine if the link is active
  const checkIsActive = (path) => location.pathname === path ? 'nav-link-active' : '';

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            {/* Use NavLink from react-router-dom as "as" prop and apply active class conditionally */}
            <Nav.Link as={NavLink} to="/" className={checkIsActive('/')}>About Me</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" className={checkIsActive('/portfolio')}>Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className={checkIsActive('/contact')}>Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/resume" className={checkIsActive('/resume')}>Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
