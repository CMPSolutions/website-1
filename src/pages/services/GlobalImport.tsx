import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';
import '../../styles/pages/SharedPages.css';

const GlobalImport: React.FC = () => {
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
      title="Global Import Solutions"
      subtitle="Comprehensive import services connecting you with premium electronics manufacturers worldwide through our established supply chain network."
    >
      <div className="container">
        <div className="service-content">
          <div className="service-overview">
            <h2>Your Gateway to Global Electronics</h2>
            <p>
              With over 15 years of experience in international trade, Factory Appliances Online provides 
              comprehensive import solutions that connect businesses with premium electronics manufacturers 
              across Asia, Europe, and the Americas. Our established relationships and expertise ensure 
              smooth, efficient, and cost-effective import operations.
            </p>
          </div>

          <div className="service-features">
            <h3>Import Services</h3>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Supplier Sourcing</h4>
                <p>Access to verified manufacturers and suppliers with quality certifications and competitive pricing.</p>
              </div>
              <div className="feature-item">
                <h4>Quality Control</h4>
                <p>Pre-shipment inspections, factory audits, and quality assurance protocols to ensure product standards.</p>
              </div>
              <div className="feature-item">
                <h4>Customs Clearance</h4>
                <p>Expert handling of customs documentation, duty calculations, and regulatory compliance requirements.</p>
              </div>
              <div className="feature-item">
                <h4>Logistics Management</h4>
                <p>End-to-end shipping coordination including freight forwarding, insurance, and delivery tracking.</p>
              </div>
            </div>
          </div>

          <div className="service-process">
            <h3>Import Process</h3>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h4>Requirements Analysis</h4>
                <p>We analyze your product specifications, quantity requirements, and target pricing to identify optimal suppliers.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h4>Supplier Selection</h4>
                <p>Leverage our network to connect with verified manufacturers that meet your quality and pricing criteria.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h4>Order Management</h4>
                <p>Handle purchase orders, production monitoring, and quality control throughout the manufacturing process.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h4>Shipping & Delivery</h4>
                <p>Coordinate international shipping, customs clearance, and final delivery to your specified location.</p>
              </div>
            </div>
          </div>

          <div className="service-benefits">
            <h3>Why Choose Our Import Services</h3>
            <ul>
              <li>Established relationships with 200+ verified electronics manufacturers</li>
              <li>Average cost savings of 15-30% compared to direct purchasing</li>
              <li>99.8% on-time delivery rate with comprehensive tracking</li>
              <li>Full regulatory compliance and documentation support</li>
              <li>Risk mitigation through supplier verification and quality control</li>
              <li>Flexible payment terms and trade financing options</li>
            </ul>
          </div>

          <div className="service-cta">
            <h3>Start Your Import Journey</h3>
            <p>Ready to access global electronics markets? Contact our import specialists for a consultation.</p>
            <a href="#contact" onClick={handleContactClick} className="cta-button">Get Started</a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default GlobalImport;