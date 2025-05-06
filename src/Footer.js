import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Kids Teaching Code</h5>
            <p className="footer-description">
              A student-led initiative bringing computer science education to young learners at the Boys and Girls Club.
            </p>
            <div className="social-icons">
              {/* Removed Facebook and Twitter icons */}
              <a href="https://www.instagram.com/kidsteachingcode" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="https://github.com/Henry-Santa/Kids-Teaching-Code" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
            </div>
          </Col>
          
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              {/* Removed Resources link */}
            </ul>
          </Col>
          
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Contact Us</h5>
            <p><i className="fas fa-map-marker-alt"></i> Boys and Girls Club, Greenwich</p>
            <p><i className="fas fa-envelope"></i> hsantangelo26@gcds.net / zbostock26@gcds.net</p>
            <p><i className="fas fa-clock"></i> Every Monday after school</p>
          </Col>
        </Row>
        
        <Row className="footer-bottom">
          <Col>
            <p>&copy; {currentYear} Kids Teaching Code | Created by Henry Santangelo and Zach Bostock</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
