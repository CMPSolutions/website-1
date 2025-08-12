import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Factory Appliances Online</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Factory Appliances Online stands at the forefront of international electronics trade, 
              bridging global markets with expertise and reliability. Our comprehensive network spans 
              continents, delivering cutting-edge technology solutions to businesses worldwide.
            </p>
            <p>
              With years of experience in large-scale import and export operations, we specialize in 
              sourcing and distributing premium electronics at competitive prices. Our portfolio includes 
              the latest smartphones, tablets, computers, and innovative satellite communication equipment.
            </p>
            <p>
              We pride ourselves on our ability to handle high-volume transactions with precision, 
              ensuring timely delivery and maintaining the highest standards of quality control throughout 
              our supply chain.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>1M+</h3>
              <p>Units Traded Annually</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Global Partners</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;