import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Topbar from './Topbar';
import ImageCarousel from './ImageCarousel';
import Footer from './Footer';
import Features from './Features';

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Routes>
          <Route path="/about" element={<Features />} />
          <Route path="/" element={
            <>
              <header className="App-header">
                <h1>Welcome to Kids Teaching Code</h1>
              </header>
              <div className="carousel-container">
                <ImageCarousel />
              </div>
              <main className="App-main">
                <p>Kids Teaching Code is a program that focuses on teaching computer science and math skills to kids. You can find us teaching every Monday after school at one of the Boys and Girls Club campuses.</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
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

/*
<p></p>
        <br></br>
        <br></br>
        <br></br>
        */