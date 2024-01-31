// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// const Navigation = () => {
//     return (
//         <nav className="nav">
//             <ul>
//                 <li>
//                     <Link to="/">About Me</Link>
//                 </li>
//                 <li>
//                     <Link to="/portfolio">Portfolio</Link>
//                 </li>
//                 <li>
//                     <Link to="/contact">Contact</Link>
//                 </li>
//                 <li>
//                     <Link to="/resume">Resume</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Navigation;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">Bryan Tran</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">About Me</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
            </Nav>
            </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
