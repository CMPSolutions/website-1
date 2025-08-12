import React from 'react';
import '../styles/Services.css';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Smartphones & Tablets',
      description: 'Premium mobile devices from leading manufacturers, available in bulk quantities for wholesale distribution.',
      icon: '📱'
    },
    {
      title: 'Computers & Laptops',
      description: 'Full range of computing solutions from desktop workstations to ultraportable laptops for enterprise and retail.',
      icon: '💻'
    },
    {
      title: 'Starlink Equipment',
      description: 'Authorized distribution of Starlink satellite internet hardware, bringing connectivity to remote locations.',
      icon: '🛰️'
    },
    {
      title: 'Import Services',
      description: 'Comprehensive import solutions including sourcing, quality control, customs clearance, and logistics management.',
      icon: '📦'
    },
    {
      title: 'Export Services',
      description: 'End-to-end export handling with global reach, documentation support, and reliable shipping partnerships.',
      icon: '🚢'
    },
    {
      title: 'Supply Chain Management',
      description: 'Optimized inventory management, warehousing solutions, and just-in-time delivery systems.',
      icon: '🔄'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;