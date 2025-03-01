import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer'; // Import Footer component
import ImageCarousel from './ImageCarousel'; // Import ImageCarousel component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Footer /> {/* Add Footer component */}
  </React.StrictMode>
);

reportWebVitals();
