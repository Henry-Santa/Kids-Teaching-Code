import React, { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Topbar() {
  useEffect(() => {
    document.title = 'Kids Teaching Code';
  }, []); 
  return (
    
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Kids Teaching Code</Navbar.Brand>
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link>About Us</Nav.Link>
        </LinkContainer>
        <Nav.Link href="https://github.com/Henry-Santa/Kids-Teaching-Code" target="_blank" rel="noopener noreferrer">GitHub</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Topbar;
