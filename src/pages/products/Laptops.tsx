import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';
import '../../styles/pages/SharedPages.css';

const Laptops: React.FC = () => {
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
      title="Laptops"
      subtitle="Complete range of laptops from ultraportable notebooks to high-performance workstations for global distribution."
    >
      <div className="container">
        <div className="product-content">
          <div className="product-overview">
            <h2>Comprehensive Laptop Portfolio</h2>
            <p>
              Factory Appliances Online offers an extensive range of laptops covering every market segment, 
              from budget-friendly notebooks to high-end gaming and professional workstations. Our global 
              supply chain ensures competitive pricing and reliable availability.
            </p>
          </div>

          <div className="product-features">
            <h3>Laptop Categories</h3>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Business Laptops</h4>
                <p>Professional-grade laptops with enterprise security, long battery life, and robust build quality for corporate use.</p>
              </div>
              <div className="feature-item">
                <h4>Gaming Laptops</h4>
                <p>High-performance gaming systems with dedicated graphics cards and advanced cooling for enthusiast markets.</p>
              </div>
              <div className="feature-item">
                <h4>Ultrabooks</h4>
                <p>Thin, lightweight laptops with premium materials and all-day battery life for mobile professionals.</p>
              </div>
              <div className="feature-item">
                <h4>Workstations</h4>
                <p>Powerful mobile workstations for CAD, video editing, and scientific applications with certified graphics.</p>
              </div>
            </div>
          </div>

          <div className="product-specs">
            <h3>Configuration Options</h3>
            <ul>
              <li>Screen sizes from 11" to 17" with various resolution and panel technologies</li>
              <li>Latest generation processors from Intel and AMD</li>
              <li>Memory configurations from 4GB to 64GB RAM</li>
              <li>Storage options including SSD, HDD, and hybrid configurations</li>
              <li>Graphics solutions from integrated to high-end discrete GPUs</li>
              <li>Operating systems: Windows, macOS, Linux, and Chrome OS</li>
              <li>Connectivity: USB-C, Thunderbolt, HDMI, and wireless standards</li>
            </ul>
          </div>

          <div className="product-cta">
            <h3>Find Your Perfect Laptop Solution</h3>
            <p>Let us help you find the right laptop configurations for your target market and budget requirements.</p>
            <a href="#contact" onClick={handleContactClick} className="cta-button">Get Consultation</a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Laptops;