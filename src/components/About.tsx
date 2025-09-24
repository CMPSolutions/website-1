import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-badge">Our Story</div>
            <h2 className="about-title">
              Connecting Global Markets with <span className="title-accent">Innovation</span>
            </h2>
            <p className="about-description">
              For over 15 years, Factory Appliances Online has been at the forefront of international 
              electronics trade, building bridges between manufacturers and markets across the globe.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🌍</div>
                <div className="highlight-content">
                  <h4>Global Reach</h4>
                  <p>Our network spans continents, connecting manufacturers with distributors worldwide through strategic partnerships and local expertise.</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-content">
                  <h4>Quality Assurance</h4>
                  <p>Every product undergoes rigorous quality control processes, ensuring only premium electronics reach our partners and end customers.</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>Innovation Focus</h4>
                  <p>We stay ahead of technology trends, sourcing the latest mobile devices, IoT solutions, and smart appliances for modern markets.</p>
                </div>
              </div>
            </div>
            
            <div className="about-cta">
              <button className="cta-primary">Learn More About Us</button>
              <button className="cta-secondary">View Our Portfolio</button>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="visual-card">
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">1M+</span>
                  <span className="stat-label">Units Traded</span>
                  <span className="stat-period">Annually</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Global Partners</span>
                  <span className="stat-period">Worldwide</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                  <span className="stat-period">In Trade</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">99.8%</span>
                  <span className="stat-label">Success Rate</span>
                  <span className="stat-period">Delivery</span>
                </div>
              </div>
              
              <div className="achievement-badges">
                <div className="badge">ISO Certified</div>
                <div className="badge">Global Trade Leader</div>
                <div className="badge">Quality Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;