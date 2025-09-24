import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';
import '../../styles/pages/SharedPages.css';

const ExportSolutions: React.FC = () => {
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
      title="Export Solutions"
      subtitle="Professional export services helping manufacturers and distributors reach global markets with comprehensive logistics and regulatory support."
    >
      <div className="container">
        <div className="service-content">
          <div className="service-overview">
            <h2>Expand Your Global Reach</h2>
            <p>
              Our export solutions enable electronics manufacturers and distributors to access international 
              markets efficiently and compliantly. With expertise in global trade regulations, logistics 
              networks, and market entry strategies, we help businesses expand their reach while minimizing 
              risks and maximizing opportunities.
            </p>
          </div>

          <div className="service-features">
            <h3>Export Capabilities</h3>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Market Research</h4>
                <p>Comprehensive market analysis and entry strategies for target countries and regions.</p>
              </div>
              <div className="feature-item">
                <h4>Documentation</h4>
                <p>Complete export documentation including certificates of origin, commercial invoices, and compliance papers.</p>
              </div>
              <div className="feature-item">
                <h4>Regulatory Compliance</h4>
                <p>Ensure products meet destination country standards including safety, environmental, and technical requirements.</p>
              </div>
              <div className="feature-item">
                <h4>Distribution Networks</h4>
                <p>Access to established distribution channels and retail partnerships in key international markets.</p>
              </div>
            </div>
          </div>

          <div className="service-cta">
            <h3>Ready to Export?</h3>
            <p>Let us help you navigate international markets and grow your global presence.</p>
            <a href="#contact" onClick={handleContactClick} className="cta-button">Explore Markets</a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ExportSolutions;