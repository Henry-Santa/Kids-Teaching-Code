import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet';
import './App.css';
import Topbar from './Topbar';
import ImageCarousel from './ImageCarousel';
import Footer from './Footer';
import Features from './Features';
import Testimonials from './Testimonials';
import Breadcrumbs from './components/Breadcrumbs';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';

function SEOWrapper({ children }) {
  const location = useLocation();
  const getMetaTags = () => {
    const baseTitle = "Kids Teaching Code";
    const baseDesc = "Student-led initiative bringing computer science education to young learners at the Boys and Girls Club of Greenwich";
    const baseUrl = "https://kidsteachingcode.org";
    
    switch(location.pathname) {
      case '/about':
        return {
          title: `About Us | ${baseTitle}`,
          description: "Meet our passionate team of student mentors teaching coding to kids at the Boys and Girls Club of Greenwich.",
          canonical: `${baseUrl}/about`,
          image: `${baseUrl}/images/social/about.png`,
          imageAlt: "Meet the student mentors at Kids Teaching Code"
        };
      default:
        return {
          title: `${baseTitle} | Student-led Coding Education`,
          description: baseDesc,
          canonical: baseUrl,
          image: `${baseUrl}/images/social/home.png`,
          imageAlt: "Kids Teaching Code - Student mentors teaching coding to young learners"
        };
    }
  };

  const meta = getMetaTags();

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        
        {/* OpenGraph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={meta.imageAlt} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Kids Teaching Code" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content={meta.imageAlt} />
        <meta name="twitter:url" content={meta.canonical} />
      </Helmet>
      {children}
    </>
  );
}

function MainLayout({ children }) {
  return (
    <>
      <Topbar />
      <Breadcrumbs />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="App">
            <SEOWrapper>
              <MainLayout>
                <Routes>
                  <Route path="/about" element={<Features />} />
                  <Route path="/" element={
                    <>
                      <header className="App-header fade-in">
                        <h1>Kids Teaching Code</h1>
                        <p className="header-subtitle">Empowering the next generation of innovators</p>
                      </header>
                      
                      <main>
                        <div className="carousel-container fade-in">
                          <ImageCarousel />
                        </div>
                        
                        <div className="App-main">
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
                        </div>
                      </main>
                    </>
                  } />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </MainLayout>
            </SEOWrapper>
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
