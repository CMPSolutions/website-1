import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTemplate from '../../components/PageTemplate';
import '../../styles/pages/SharedPages.css';

const IoTDevices: React.FC = () => {
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
      title="IoT Devices"
      subtitle="Smart connected devices and Internet of Things solutions for modern homes, businesses, and industrial applications."
    >
      <div className="container">
        <div className="product-content">
          <div className="product-overview">
            <h2>Smart Connected Solutions</h2>
            <p>
              The Internet of Things represents the future of connected living and working. Our IoT device 
              portfolio includes smart sensors, connected appliances, and intelligent systems that enable 
              automation, monitoring, and control across residential, commercial, and industrial environments.
            </p>
          </div>

          <div className="product-features">
            <h3>IoT Device Categories</h3>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Smart Home Devices</h4>
                <p>Connected thermostats, security cameras, smart locks, and lighting systems for residential automation.</p>
              </div>
              <div className="feature-item">
                <h4>Industrial IoT</h4>
                <p>Sensors, gateways, and monitoring systems for manufacturing, logistics, and industrial process control.</p>
              </div>
              <div className="feature-item">
                <h4>Health & Fitness</h4>
                <p>Wearable devices, health monitors, and fitness trackers with advanced biometric capabilities.</p>
              </div>
              <div className="feature-item">
                <h4>Environmental Monitoring</h4>
                <p>Air quality sensors, weather stations, and environmental monitoring systems for smart cities.</p>
              </div>
            </div>
          </div>

          <div className="product-specs">
            <h3>Technical Capabilities</h3>
            <ul>
              <li>Wireless connectivity: Wi-Fi, Bluetooth, Zigbee, LoRaWAN, and cellular</li>
              <li>Edge computing capabilities with local data processing</li>
              <li>Cloud integration with major platforms (AWS, Azure, Google Cloud)</li>
              <li>Advanced security features including encryption and secure boot</li>
              <li>Low power consumption with extended battery life options</li>
              <li>Scalable deployment from single devices to enterprise networks</li>
              <li>Open APIs and SDK support for custom integrations</li>
            </ul>
          </div>

          <div className="product-cta">
            <h3>Build Your IoT Ecosystem</h3>
            <p>Explore our comprehensive IoT solutions and discover how connected devices can transform your business.</p>
            <a href="#contact" onClick={handleContactClick} className="cta-button">Explore Solutions</a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default IoTDevices;