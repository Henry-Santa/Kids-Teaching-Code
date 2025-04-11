import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './App.css';
import Topbar from './Topbar';
import ImageCarousel from './ImageCarousel';
import Footer from './Footer';
import Features from './Features';
import ContactForm from './ContactForm';
import Testimonials from './Testimonials';

// Remove the ContactForm import if it exists

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Routes>
          <Route path="/about" element={<Features />} />
          <Route path="/" element={
            <>
              <header className="App-header fade-in">
                <h1>Welcome to Kids Teaching Code</h1>
                <p className="header-subtitle">Empowering the next generation of innovators</p>
              </header>
              
              <div className="carousel-container fade-in">
                <ImageCarousel />
              </div>
              
              <main className="App-main">
                <section className="intro-section slide-up">
                  <h2 className="section-title">Our Mission</h2>
                  <p>
                    Kids Teaching Code is a student-led initiative focused on making computer science and mathematics accessible to young learners. 
                    We believe that early exposure to coding concepts builds critical thinking skills and prepares children for future opportunities in technology.
                    Join us every Monday after school at the Boys and Girls Club campuses for interactive, fun-filled learning sessions.
                  </p>
                </section>
                
                <section className="features-section">
                  <Container>
                    <h2 className="section-title">What We Offer</h2>
                    <Row className="g-4">
                      <Col md={4}>
                        <Card className="feature-card stagger-item">
                          <Card.Body>
                            <div className="feature-icon">
                              <i className="fas fa-laptop-code"></i>
                            </div>
                            <Card.Title>Coding Fundamentals</Card.Title>
                            <Card.Text>
                              Learn the basics of programming through interactive exercises and games designed for beginners.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="feature-card stagger-item">
                          <Card.Body>
                            <div className="feature-icon">
                              <i className="fas fa-puzzle-piece"></i>
                            </div>
                            <Card.Title>Problem Solving</Card.Title>
                            <Card.Text>
                              Develop critical thinking skills by solving age-appropriate coding challenges and puzzles.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="feature-card stagger-item">
                          <Card.Body>
                            <div className="feature-icon">
                              <i className="fas fa-project-diagram"></i>
                            </div>
                            <Card.Title>Creative Projects</Card.Title>
                            <Card.Text>
                              Build confidence through hands-on projects that bring coding concepts to life in meaningful ways.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </section>
                
                <Testimonials />
                
                {/* Removed the CTA section (Ready to join us) */}
                
                {/* Removed the contact form section */}
              </main>
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
