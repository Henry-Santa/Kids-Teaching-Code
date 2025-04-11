import React, { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Topbar.css';

function Topbar() {
  useEffect(() => {
    document.title = 'Kids Teaching Code';
  }, []); 
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="brand-logo">
            <img 
              src="/logo512.png" 
              alt="Kids Teaching Code Logo" 
              className="d-inline-block align-top logo-image"
              width="30"
              height="30"
            />
            {' '}Kids Teaching Code
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link className="nav-link-custom">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="nav-link-custom">About Us</Nav.Link>
            </LinkContainer>
            <Nav.Link 
              href="https://github.com/Henry-Santa/Kids-Teaching-Code" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link-custom"
            >
              <i className="fab fa-github"></i> GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
