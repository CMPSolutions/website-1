import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Navigate to home page first, then scroll to section
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>Factory Appliances <span className="brand-accent">Online</span></h3>
            <p>Connecting global markets with premium electronics. Your trusted partner in international trade since 2009.</p>
            <div className="footer-stats">
              <div className="footer-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="footer-stat">
                <span className="stat-number">1M+</span>
                <span className="stat-label">Units Traded</span>
              </div>
              <div className="footer-stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years</span>
              </div>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScrollToSection('about'); }}>About Us</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollToSection('services'); }}>Our Services</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollToSection('contact'); }}>Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Products</h4>
              <ul>
                <li><Link to="/products/mobile-phones">Mobile Phones</Link></li>
                <li><Link to="/products/tablet-computers">Tablet Computers</Link></li>
                <li><Link to="/products/laptops">Laptops</Link></li>
                <li><Link to="/products/iot-devices">IoT Devices</Link></li>
                <li><Link to="/products/smart-appliances">Smart Appliances</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><Link to="/services/global-import">Global Import</Link></li>
                <li><Link to="/services/export-solutions">Export Solutions</Link></li>
                <li><Link to="/services/supply-chain">Supply Chain</Link></li>
                <li><Link to="/services/quality-assurance">Quality Assurance</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2025 Factory Appliances Online. All rights reserved.</p>
            </div>
            <div className="footer-legal">
              <Link to="/legal/privacy-policy">Privacy Policy</Link>
              <Link to="/legal/terms-of-service">Terms of Service</Link>
              <Link to="/legal/cookie-policy">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;