import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './animations.css'; // Import animations
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Add scroll animation functionality after the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  // Make all stagger items visible initially to ensure they show up
  document.querySelectorAll('.stagger-item').forEach(item => {
    item.classList.add('visible');
  });
  
  // Set up the observer for future animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with stagger-item class
  document.querySelectorAll('.stagger-item').forEach(item => {
    observer.observe(item);
  });
});

reportWebVitals();
