import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p>Henry Santangelo and Zach Bostox</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
