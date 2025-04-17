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
          <Navbar.Brand className="brand-logo" aria-label="Kids Teaching Code Home">
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
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto" role="navigation" aria-label="Main navigation">
            <LinkContainer to="/">
              <Nav.Link className="nav-link-custom" aria-current="page">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="nav-link-custom">About Us</Nav.Link>
            </LinkContainer>
            <Nav.Link 
              href="https://github.com/Henry-Santa/Kids-Teaching-Code" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link-custom"
              aria-label="Visit our GitHub repository (opens in new tab)"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
              <span className="ms-1">GitHub</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
