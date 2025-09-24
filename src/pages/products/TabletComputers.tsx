import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';
import '../../styles/pages/SharedPages.css';

const TabletComputers: React.FC = () => {
  const navigate = useNavigate();
  
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  return (
    <PageTemplate
      title="Tablet Computers"
      subtitle="High-performance tablets for business, education, and consumer markets with comprehensive wholesale support."
    >
      <div className="container">
        <div className="product-content">
          <div className="product-overview">
            <h2>Professional Tablet Solutions</h2>
            <p>
              Our tablet computer division provides access to premium tablets from leading manufacturers, 
              serving business, educational, and consumer markets with reliable wholesale distribution 
              and comprehensive support services.
            </p>
          </div>

          <div className="product-features">
            <h3>Tablet Categories</h3>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Business Tablets</h4>
                <p>Enterprise-grade tablets with enhanced security features and productivity applications for corporate environments.</p>
              </div>
              <div className="feature-item">
                <h4>Educational Tablets</h4>
                <p>Durable, cost-effective tablets designed for educational institutions with learning management integration.</p>
              </div>
              <div className="feature-item">
                <h4>Consumer Tablets</h4>
                <p>High-performance tablets for entertainment, gaming, and personal productivity with premium displays.</p>
              </div>
              <div className="feature-item">
                <h4>Rugged Tablets</h4>
                <p>Industrial-grade tablets built for harsh environments with enhanced durability and weather resistance.</p>
              </div>
            </div>
          </div>

          <div className="product-specs">
            <h3>Technical Specifications</h3>
            <ul>
              <li>Screen sizes ranging from 8" to 15" with various resolution options</li>
              <li>Multiple operating systems: Android, iOS, Windows</li>
              <li>Storage options from 32GB to 1TB with expandable memory support</li>
              <li>Wi-Fi and cellular connectivity options available</li>
              <li>Battery life optimized for all-day usage</li>
              <li>Accessories including keyboards, styluses, and protective cases</li>
            </ul>
          </div>

          <div className="product-cta">
            <h3>Explore Tablet Solutions</h3>
            <p>Discover our comprehensive range of tablet computers tailored to your market needs.</p>
            <a href="#contact" onClick={handleContactClick} className="cta-button">Request Catalog</a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default TabletComputers;