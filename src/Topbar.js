import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Topbar() {
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
        <Nav.Link href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Topbar;
