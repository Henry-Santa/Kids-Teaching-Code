import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ImageCarousel.css';

function ImageCarousel() {
  return (
    <div className="carousel-container">
      <Carousel fade interval={5000} className="carousel">
        <Carousel.Item>
          <img
            className="carousel-image"
            src="/images/1.png"
            alt="Students learning to code"
          />
          <Carousel.Caption>
            <h3>Inspiring Young Minds</h3>
            <p>Our students engaged in learning computer science fundamentals</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="/images/2.png"
            alt="One-on-one mentoring"
          />
          <Carousel.Caption>
            <h3>Personalized Guidance</h3>
            <p>Our mentors provide individual attention to help students overcome challenges</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="/images/3.png"
            alt="Classroom instruction"
          />
          <Carousel.Caption>
            <h3>Interactive Learning</h3>
            <p>Using modern tools and platforms to make coding accessible and fun</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;