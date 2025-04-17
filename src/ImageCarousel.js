import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './ImageCarousel.css';

function ImageCarousel() {
  const [imagesLoaded, setImagesLoaded] = useState({});

  const handleImageLoad = (index) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  const carouselItems = [
    {
      src: '/images/1.png',
      alt: 'Students actively engaged in coding lessons at Kids Teaching Code, learning computer science fundamentals through hands-on exercises',
      title: 'Inspiring Young Minds',
      description: 'Our students engaged in learning computer science fundamentals'
    },
    {
      src: '/images/2.png',
      alt: 'One-on-one mentoring session at Boys and Girls Club, where student mentors provide personalized coding guidance',
      title: 'Personalized Guidance',
      description: 'Our mentors provide individual attention to help students overcome challenges'
    },
    {
      src: '/images/3.png',
      alt: 'Interactive classroom instruction at Kids Teaching Code, demonstrating coding concepts using modern tools and platforms',
      title: 'Interactive Learning',
      description: 'Using modern tools and platforms to make coding accessible and fun'
    }
  ];

  return (
    <div className="carousel-container">
      <Carousel fade interval={5000} className="carousel">
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            {!imagesLoaded[index] && (
              <div className="carousel-skeleton">
                <div className="skeleton-loader" />
              </div>
            )}
            <img
              className={`carousel-image ${imagesLoaded[index] ? 'loaded' : ''}`}
              src={item.src}
              alt={item.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              width="1000"
              height="500"
              onLoad={() => handleImageLoad(index)}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;