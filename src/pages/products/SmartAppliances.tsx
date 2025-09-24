import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';
import '../../styles/pages/SharedPages.css';

const SmartAppliances: React.FC = () => {
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
      title="Smart Appliances"
      subtitle="Next-generation home and commercial appliances with intelligent features, energy efficiency, and connected capabilities."
    >
      <div className="container">
        <div className="product-content">
          <div className="product-overview">
            <h2>Intelligent Appliance Solutions</h2>
            <p>
              Smart appliances represent the evolution of traditional home and commercial equipment, 
              integrating advanced sensors, connectivity, and AI-driven features to deliver enhanced 
              efficiency, convenience, and performance for modern living and working environments.
            </p>
          </div>

          <div className="product-features">
            <h3>Smart Appliance Categories</h3>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Kitchen Appliances</h4>
                <p>Smart refrigerators, ovens, dishwashers, and cooking systems with app control and energy monitoring.</p>
              </div>
              <div className="feature-item">
                <h4>Laundry Solutions</h4>
                <p>Connected washing machines and dryers with remote monitoring, scheduling, and maintenance alerts.</p>
              </div>
              <div className="feature-item">
                <h4>Climate Control</h4>
                <p>Smart air conditioners, heat pumps, and ventilation systems with intelligent temperature management.</p>
              </div>
              <div className="feature-item">
                <h4>Commercial Equipment</h4>
                <p>Professional-grade smart appliances for restaurants, hotels, and commercial facilities.</p>
              </div>
            </div>
          </div>

          <div className="product-specs">
            <h3>Smart Features & Benefits</h3>
            <ul>
              <li>Wi-Fi connectivity with smartphone app control and monitoring</li>
              <li>Energy efficiency optimization with real-time consumption tracking</li>
              <li>Predictive maintenance alerts and diagnostic capabilities</li>
              <li>Voice control integration with Alexa, Google Assistant, and Siri</li>
              <li>Smart scheduling and automation based on usage patterns</li>
              <li>Integration with home automation systems and smart hubs</li>
              <li>Over-the-air updates for new features and improvements</li>
              <li>Advanced safety features with remote monitoring and alerts</li>
            </ul>
          </div>

          <div className="product-cta">
            <h3>Upgrade to Smart Living</h3>
            <p>Discover how smart appliances can enhance efficiency, convenience, and sustainability for your customers.</p>
            <a href="#contact" onClick={handleContactClick} className="cta-button">View Catalog</a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default SmartAppliances;