import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <Helmet>
        <title>404 - Page Not Found | Kids Teaching Code</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Container>
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, we couldn't find the page you're looking for.</p>
          <div className="suggested-links">
            <h3>You might want to check out:</h3>
            <ul>
              <li><Link to="/">Home Page</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          <Link to="/" className="home-button">
            Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default NotFound;