import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';
import '../../styles/pages/SharedPages.css';

const MobilePhones: React.FC = () => {
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
      title="Mobile Phones"
      subtitle="Premium smartphones from leading global manufacturers, available in bulk quantities for wholesale distribution worldwide."
    >
      <div className="container">
        <div className="product-content">
          <div className="product-overview">
            <h2>Premium Mobile Phone Solutions</h2>
            <p>
              Factory Appliances Online specializes in the global distribution of premium mobile phones 
              from leading manufacturers. Our extensive network ensures access to the latest smartphone 
              technologies at competitive wholesale prices.
            </p>
          </div>

          <div className="product-features">
            <h3>Product Range</h3>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Latest Models</h4>
                <p>Access to newest smartphone releases from top manufacturers including flagship and mid-range devices.</p>
              </div>
              <div className="feature-item">
                <h4>Bulk Quantities</h4>
                <p>Wholesale quantities from 100 to 10,000+ units per order, perfect for distributors and retailers.</p>
              </div>
              <div className="feature-item">
                <h4>Quality Assurance</h4>
                <p>All devices undergo rigorous quality control testing before shipment to ensure optimal performance.</p>
              </div>
              <div className="feature-item">
                <h4>Global Shipping</h4>
                <p>Worldwide delivery with comprehensive logistics support and customs documentation.</p>
              </div>
            </div>
          </div>

          <div className="product-specs">
            <h3>Specifications & Standards</h3>
            <ul>
              <li>All devices are factory unlocked and ready for global distribution</li>
              <li>Compliance with international safety and quality standards (CE, FCC, IC)</li>
              <li>Original manufacturer warranties and documentation included</li>
              <li>Support for multiple network frequencies and standards</li>
              <li>Packaging optimized for retail distribution</li>
            </ul>
          </div>

          <div className="product-cta">
            <h3>Ready to Order?</h3>
            <p>Contact our team to discuss your mobile phone requirements and get a customized quote.</p>
            <a href="#contact" onClick={handleContactClick} className="cta-button">Get Quote</a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default MobilePhones;