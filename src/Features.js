import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Features.css';
import FAQ from './FAQ';

function Features() {
  // Force all stagger items to be visible when component mounts
  useEffect(() => {
    document.querySelectorAll('.stagger-item').forEach(item => {
      item.classList.add('visible');
    });
  }, []);

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p className="about-subtitle">Meet the team behind Kids Teaching Code</p>
      </div>
      
      <Container>
        <div className="team-section">
          <Row className="g-4">
            <Col lg={6}>
              <Card className="team-card">
                <div className="team-image-container">
                  <img src="/images/Henry.png" alt="Henry Santangelo" className="team-image" loading="lazy"/>
                </div>
                <Card.Body>
                  <Card.Title className="team-name">Henry Santangelo</Card.Title>
                  <Card.Subtitle className="team-role">Founder</Card.Subtitle>
                  <Card.Text className="team-bio">
                    Henry has been programming since 2020, discovering his passion for coding during the pandemic. 
                    Recognizing the limited resources available in schools for computer science education, 
                    he founded Kids Teaching Code to bridge this gap and provide opportunities for students 
                    interested in developing their programming skills.
                  </Card.Text>
                  <div className="social-links">
                    <a href="https://github.com/Henry-Santa" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/henry-santangelo-b2426b2aa/" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-linkedin"></i></a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className="team-card">
                <div className="team-image-container">
                  <img src="/images/Zach.png" alt="Zach Bostox" className="team-image zach" loading="lazy"/>
                </div>
                <Card.Body>
                  <Card.Title className="team-name">Zach Bostox</Card.Title>
                  <Card.Subtitle className="team-role">Co-Founder</Card.Subtitle>
                  <Card.Text className="team-bio">
                    Zach is both a dedicated programmer and passionate theater student. His interest in 
                    programming began during his first year of Computer Science at Greenwich Country Day School. 
                    Through dedication and practice, he has developed his coding skills over the years and is 
                    now committed to sharing his knowledge with younger students, helping them discover the 
                    value and excitement of coding.
                  </Card.Text>
                  <div className="social-links">
                    <a href="https://github.com/Sashazach" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-github"></i></a>
                    {/* Removed LinkedIn for Zach */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        
        <div className="mission-section">
          <h2>Our Vision</h2>
          
          <p>
            At Kids Teaching Code, we believe that every child deserves access to quality computer science education. 
            Our peer-to-peer teaching model creates a supportive environment where students can learn from relatable 
            mentors who understand the challenges of learning to code. We aim to inspire the next generation of 
            innovators, problem-solvers, and digital creators.
          </p>
        </div>
      </Container>
      
      <FAQ />
    </div>
  );
}

export default Features;
