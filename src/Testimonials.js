import React from 'react';
import { Container } from 'react-bootstrap';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials-section">
      <Container>
        <h2 className="section-title">What People Say</h2>
        <div className="coming-soon-container">
          <p className="coming-soon-text">Testimonials coming soon</p>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;