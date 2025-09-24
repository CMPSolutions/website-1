import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';
import '../../styles/pages/SharedPages.css';

const QualityAssurance: React.FC = () => {
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
      title="Quality Assurance"
      subtitle="Comprehensive quality control processes ensuring every electronic product meets international standards and customer expectations."
    >
      <div className="container">
        <div className="service-content">
          <div className="service-overview">
            <h2>Uncompromising Quality Standards</h2>
            <p>
              Quality is at the heart of everything we do. Our comprehensive quality assurance program 
              encompasses supplier audits, pre-shipment inspections, and continuous monitoring to ensure 
              every product meets the highest international standards and exceeds customer expectations.
            </p>
          </div>

          <div className="service-features">
            <h3>Quality Control Process</h3>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Supplier Audits</h4>
                <p>Comprehensive factory audits and supplier certification processes to ensure manufacturing quality standards.</p>
              </div>
              <div className="feature-item">
                <h4>Pre-Shipment Inspection</h4>
                <p>Detailed product testing and inspection before shipment including functionality, safety, and compliance checks.</p>
              </div>
              <div className="feature-item">
                <h4>Compliance Testing</h4>
                <p>Verification of international standards compliance including CE, FCC, RoHS, and other regulatory requirements.</p>
              </div>
              <div className="feature-item">
                <h4>Continuous Monitoring</h4>
                <p>Ongoing quality monitoring and feedback systems to maintain and improve product standards over time.</p>
              </div>
            </div>
          </div>

          <div className="service-cta">
            <h3>Ensure Product Excellence</h3>
            <p>Partner with us to maintain the highest quality standards for your electronics products.</p>
            <a href="#contact" onClick={handleContactClick} className="cta-button">Quality Partnership</a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default QualityAssurance;