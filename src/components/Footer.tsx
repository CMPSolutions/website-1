import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Factory Appliances Online</h3>
            <p>Your trusted partner in global electronics trade</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#director">Leadership</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li>Smartphones</li>
              <li>Tablets</li>
              <li>Computers</li>
              <li>Starlink Equipment</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Factory Appliances Online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;