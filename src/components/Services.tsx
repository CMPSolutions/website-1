import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Services.css';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const services = [
    {
      title: 'Mobile Phones',
      description: 'Premium smartphones from leading global manufacturers, ensuring quality and reliability for wholesale distribution.',
      icon: '📱',
      features: ['Latest Models', 'Bulk Quantities', 'Quality Assured'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: '/products/mobile-phones'
    },
    {
      title: 'Tablet Computers',
      description: 'High-performance tablets for business, education, and consumer markets with comprehensive wholesale support.',
      icon: '/images/products/iPad icon transp bg.png',
      features: ['Business Grade', 'Educational Solutions', 'Consumer Models'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      link: '/products/tablet-computers',
      isImage: true
    },
    {
      title: 'Laptops',
      description: 'Complete range of laptops from ultraportable notebooks to high-performance workstations for global distribution.',
      icon: '💻',
      features: ['Enterprise Grade', 'Custom Configs', 'Global Shipping'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: '/products/laptops'
    },
    {
      title: 'IoT Devices',
      description: 'Smart connected devices and Internet of Things solutions for modern homes, businesses, and industrial applications.',
      icon: '🌐',
      features: ['Smart Sensors', 'Connected Systems', 'Industrial IoT'],
      gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
      link: '/products/iot-devices'
    },
    {
      title: 'Smart Appliances',
      description: 'Next-generation home and commercial appliances with intelligent features, energy efficiency, and connected capabilities.',
      icon: '🏠',
      features: ['IoT Ready', 'Energy Efficient', 'Smart Integration'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      link: '/products/smart-appliances'
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 6000); // Change slide every 6 seconds for better viewing time

    return () => clearInterval(interval);
  }, [services.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  // Calculate which cards to show based on screen size
  const getVisibleServices = () => {
    const width = window.innerWidth;
    let count = 3; // Default for desktop
    if (width <= 768) {
      count = 1; // Mobile
    } else if (width <= 1024) {
      count = 2; // Tablet
    }
    
    const visible = [];
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % services.length;
      visible.push(services[index]);
    }
    return visible;
  };
  
  // Update visible cards on resize
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);
  
  useEffect(() => {
    const handleResize = () => forceUpdate();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tradingServices = [
    {
      title: 'Global Import',
      description: 'Comprehensive sourcing and import solutions with quality control and customs expertise.',
      icon: '🌍'
    },
    {
      title: 'Export Excellence',
      description: 'End-to-end export handling with documentation support and reliable partnerships.',
      icon: '📦'
    },
    {
      title: 'Supply Chain',
      description: 'Optimized logistics, warehousing, and just-in-time delivery systems.',
      icon: '🔄'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <div className="section-badge">What We Offer</div>
          <h2 className="section-title">
            Comprehensive Electronics <span className="title-accent">Solutions</span>
          </h2>
          <p className="section-description">
            From cutting-edge mobile technology to smart appliances, we deliver premium electronics 
            with unmatched service and global reach.
          </p>
        </div>

        <div className="carousel-container">
          <button className="carousel-arrow carousel-arrow-left" onClick={goToPrevious}>
            ‹
          </button>
          
          <div className="featured-services">
            {getVisibleServices().map((service, index) => {
              // Check if this is the center card (index 1 for 3-card display, index 0 for mobile)
              const width = window.innerWidth;
              let isCenterCard = false;
              if (width <= 768) {
                isCenterCard = index === 0; // Mobile - single card is always center
              } else if (width <= 1024) {
                isCenterCard = index === 0; // Tablet - first of 2 cards
              } else {
                isCenterCard = index === 1; // Desktop - middle of 3 cards
              }
              
              return (
                <div key={currentIndex + index} className={`featured-card ${isCenterCard ? 'featured-card-center' : ''}`}>
                  <div className="card-background" style={{ background: service.gradient }}></div>
                  <div className="card-content">
                    <div className="card-icon">
                      {service.isImage ? (
                        <img src={service.icon} alt={service.title} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                      ) : (
                        service.icon
                      )}
                    </div>
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-description">{service.description}</p>
                    <ul className="card-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <button className="card-cta" onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(service.link);
                    }}>
                      Learn More
                      <span className="cta-arrow">→</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="carousel-arrow carousel-arrow-right" onClick={goToNext}>
            ›
          </button>
        </div>

        <div className="carousel-indicators">
          {services.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="trading-services">
          <h3 className="trading-title">Trading & Logistics Excellence</h3>
          <div className="trading-grid">
            {tradingServices.map((service, index) => (
              <div key={index} className="trading-card">
                <div className="trading-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;