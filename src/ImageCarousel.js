import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ImageCarousel.css'; // Import the CSS file

function ImageCarousel() {
  return (
    <div className="carousel-container"> {/* Add container div */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/images/1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>A look at some of the kids</h3>
            <p>Taken in the spring of 2024</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/images/2.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Zach working one on one</h3>
            <p>Helping a student fix a bug</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/images/3.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Henry leading the class</h3>
            <p>One of the tools we use is code.org</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;