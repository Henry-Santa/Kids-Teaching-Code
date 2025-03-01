import React from 'react';
import './Features.css'; // Import the CSS file

function Features() {
  return (
    <div className="features-container">
      <h2>About Us</h2>
      <div className="features-grid">
        <div className="feature-item">
          <img src="/images/Henry.png" alt="Henry" className="feature-image" loading="lazy"/>
          <h3>Henry Santangelo</h3>
          <h4>Founder</h4>
          <p>Henry has been programming since 2020 and became interested in the subject during the pandemic. When he was younger, he felt a lack of resources present in the school system to learn computer science. With that knowledge, he decided to found Kids Teaching Code to help fill the resource gap that students passionate in computer science might feel.</p>
        </div>
        <div className="feature-item">
          <img src="/images/Zach.png" alt="Zach" className="feature-image zach" loading="lazy"/>
          <h3>Zach Bostox</h3>
          <h4>Co-Founder</h4>
          <p>As well as a programmer, Zach is a committed theater student. He became interested in programming during his first year of Computer Science at Greenwich Country Day School. Through his passion for the subject, he has honed his skills over the past few years and wants to teach younger kids the value of coding.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
