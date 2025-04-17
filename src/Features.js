import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Features.css';
import FAQ from './FAQ';

function Features() {
  useEffect(() => {
    document.querySelectorAll('.stagger-item').forEach(item => {
      item.classList.add('visible');
    });
  }, []);

  return (
    <article className="about-container">
      <header className="about-header">
        <h1>Meet Our Team</h1>
        <p className="about-subtitle">Passionate student mentors bringing coding education to kids</p>
      </header>
      
      <Container>
        <section className="team-section">
          <h2 className="section-title">Teaching Team</h2>
          <Row className="g-4">
            <Col lg={6}>
              <Card className="team-card">
                <div className="team-image-container">
                  <picture>
                    <source srcSet="/images/optimized/Henry.webp" type="image/webp" />
                    <source srcSet="/images/optimized/Henry.png" type="image/png" />
                    <img 
                      src="/images/optimized/Henry.png" 
                      alt="Henry Santangelo, Founder of Kids Teaching Code, passionate about bringing computer science education to young learners" 
                      className="team-image" 
                      loading="lazy"
                      width="300"
                      height="300"
                    />
                  </picture>
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
                  <picture>
                    <source srcSet="/images/optimized/Zach.webp" type="image/webp" />
                    <source srcSet="/images/optimized/Zach.png" type="image/png" />
                    <img 
                      src="/images/optimized/Zach.png" 
                      alt="Zach Bostock, Co-Founder of Kids Teaching Code, combining his passion for programming and theater" 
                      className="team-image zach" 
                      loading="lazy"
                      width="300"
                      height="300"
                    />
                  </picture>
                </div>
                <Card.Body>
                  <Card.Title className="team-name">Zach Bostock</Card.Title>
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
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        
        <section className="mission-section">
          <h2>Our Vision & Impact</h2>
          <div itemScope itemType="https://schema.org/EducationalOrganization">
            <p itemProp="description">
              At Kids Teaching Code, we believe that every child deserves access to quality computer science education. 
              Our peer-to-peer teaching model creates a supportive environment where students can learn from relatable 
              mentors who understand the challenges of learning to code. We aim to inspire the next generation of 
              innovators, problem-solvers, and digital creators.
            </p>
            <div className="mission-stats">
              <div className="stat-item">
                <strong>Weekly Sessions</strong>
                <p>Every Monday after school</p>
              </div>
              <div className="stat-item">
                <strong>Location</strong>
                <p itemProp="location">Boys and Girls Club of Greenwich</p>
              </div>
              <div className="stat-item">
                <strong>Program Focus</strong>
                <p itemProp="knowsAbout">Computer Programming, Problem Solving, Critical Thinking</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
      
      <FAQ />
    </article>
  );
}

export default Features;
