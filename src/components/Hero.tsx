import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/images/hero/pexels-pixabay-163726.jpg',
    '/images/hero/pexels-tima-miroshnichenko-6169051.jpg',
    '/images/hero/pexels-duaenam-kosonglima-424968847-16955622.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000); // Slower transition for more elegance

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Global Electronics Trade</span>
          </div>
          <h1 className="hero-title">
            Connecting Markets.<br />
            <span className="hero-accent">Delivering Excellence.</span>
          </h1>
          <p className="hero-description">
            We bridge international markets with premium electronics, from mobile devices
            to smart appliances, ensuring quality and reliability in every transaction.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Global Partners</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1M+</span>
              <span className="stat-label">Units Traded</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;