import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.png'; // Save your illustration in /src/assets/

const Hero = () => (
  <main className="hero">
    <div className="hero-text">
      <h1>AI & Automation<br />for Small Businesses</h1>
      <p>We provide automation solutions to help small businesses save time, reduce costs, and improve efficiency.</p>
      <a className="btn" href="#">Get Started</a>
    </div>
    <div className="hero-image">
      <img src={heroImage} alt="Working at computer" />
    </div>
  </main>
);

export default Hero;
