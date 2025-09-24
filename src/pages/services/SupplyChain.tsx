import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';
import '../../styles/pages/SharedPages.css';

const SupplyChain: React.FC = () => {
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
      title="Supply Chain Management"
      subtitle="Optimized supply chain solutions including inventory management, warehousing, and just-in-time delivery systems for electronics distribution."
    >
      <div className="container">
        <div className="service-content">
          <div className="service-overview">
            <h2>Streamlined Supply Chain Excellence</h2>
            <p>
              Our advanced supply chain management services optimize every aspect of electronics distribution, 
              from procurement and inventory management to warehousing and final delivery. We leverage 
              technology, strategic partnerships, and industry expertise to create efficient, cost-effective 
              supply chain solutions.
            </p>
          </div>

          <div className="service-features">
            <h3>Supply Chain Services</h3>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Inventory Optimization</h4>
                <p>Advanced inventory management systems with demand forecasting and automated reordering capabilities.</p>
              </div>
              <div className="feature-item">
                <h4>Warehousing Solutions</h4>
                <p>Strategic warehouse locations with climate-controlled storage and advanced security systems.</p>
              </div>
              <div className="feature-item">
                <h4>Just-in-Time Delivery</h4>
                <p>Precise delivery scheduling to minimize inventory costs while ensuring product availability.</p>
              </div>
              <div className="feature-item">
                <h4>Technology Integration</h4>
                <p>Real-time tracking, automated systems, and data analytics for supply chain visibility and optimization.</p>
              </div>
            </div>
          </div>

          <div className="service-cta">
            <h3>Optimize Your Supply Chain</h3>
            <p>Discover how our supply chain expertise can reduce costs and improve efficiency for your business.</p>
            <a href="#contact" onClick={handleContactClick} className="cta-button">Learn More</a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default SupplyChain;