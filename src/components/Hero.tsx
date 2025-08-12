import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="circuit-bg">
        <svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg" className="circuit-svg">
          {/* Horizontal circuit lines - full coverage */}
          <path d="M0,80 L150,80 L170,100 L350,100 L370,80 L550,80 L570,100 L750,100 L770,80 L950,80 L970,100 L1200,100" className="circuit-line" />
          <path d="M0,140 L120,140 L140,120 L320,120 L340,140 L520,140 L540,120 L720,120 L740,140 L920,140 L940,120 L1200,120" className="circuit-line" />
          <path d="M0,200 L180,200 L200,220 L380,220 L400,200 L580,200 L600,220 L780,220 L800,200 L980,200 L1000,220 L1200,220" className="circuit-line" />
          <path d="M0,260 L160,260 L180,240 L360,240 L380,260 L560,260 L580,240 L760,240 L780,260 L960,260 L980,240 L1200,240" className="circuit-line" />
          <path d="M0,320 L140,320 L160,340 L340,340 L360,320 L540,320 L560,340 L740,340 L760,320 L940,320 L960,340 L1200,340" className="circuit-line" />
          <path d="M0,380 L190,380 L210,360 L390,360 L410,380 L590,380 L610,360 L790,360 L810,380 L990,380 L1010,360 L1200,360" className="circuit-line" />
          <path d="M0,440 L170,440 L190,460 L370,460 L390,440 L570,440 L590,460 L770,460 L790,440 L970,440 L990,460 L1200,460" className="circuit-line" />
          <path d="M0,500 L130,500 L150,480 L330,480 L350,500 L530,500 L550,480 L730,480 L750,500 L930,500 L950,480 L1200,480" className="circuit-line" />
          
          {/* Vertical connection lines - full coverage */}
          <path d="M150,40 L150,140" className="circuit-line" />
          <path d="M350,60 L350,160" className="circuit-line" />
          <path d="M550,40 L550,140" className="circuit-line" />
          <path d="M750,60 L750,160" className="circuit-line" />
          <path d="M950,40 L950,140" className="circuit-line" />
          <path d="M120,140 L120,240" className="circuit-line" />
          <path d="M320,120 L320,220" className="circuit-line" />
          <path d="M520,140 L520,240" className="circuit-line" />
          <path d="M720,120 L720,220" className="circuit-line" />
          <path d="M920,140 L920,240" className="circuit-line" />
          <path d="M180,200 L180,300" className="circuit-line" />
          <path d="M380,220 L380,320" className="circuit-line" />
          <path d="M580,200 L580,300" className="circuit-line" />
          <path d="M780,220 L780,320" className="circuit-line" />
          <path d="M980,200 L980,300" className="circuit-line" />
          <path d="M160,260 L160,360" className="circuit-line" />
          <path d="M360,240 L360,340" className="circuit-line" />
          <path d="M560,260 L560,360" className="circuit-line" />
          <path d="M760,240 L760,340" className="circuit-line" />
          <path d="M960,260 L960,360" className="circuit-line" />
          <path d="M140,320 L140,420" className="circuit-line" />
          <path d="M340,340 L340,440" className="circuit-line" />
          <path d="M540,320 L540,420" className="circuit-line" />
          <path d="M740,340 L740,440" className="circuit-line" />
          <path d="M940,320 L940,420" className="circuit-line" />
          <path d="M190,380 L190,480" className="circuit-line" />
          <path d="M390,360 L390,460" className="circuit-line" />
          <path d="M590,380 L590,480" className="circuit-line" />
          <path d="M790,360 L790,460" className="circuit-line" />
          <path d="M990,380 L990,480" className="circuit-line" />
          <path d="M170,440 L170,540" className="circuit-line" />
          <path d="M370,460 L370,560" className="circuit-line" />
          <path d="M570,440 L570,540" className="circuit-line" />
          <path d="M770,460 L770,560" className="circuit-line" />
          <path d="M970,440 L970,540" className="circuit-line" />
          
          {/* Connection nodes - full grid */}
          <circle cx="150" cy="80" r="3" className="circuit-node" />
          <circle cx="350" cy="100" r="3" className="circuit-node" />
          <circle cx="550" cy="80" r="3" className="circuit-node" />
          <circle cx="750" cy="100" r="3" className="circuit-node" />
          <circle cx="950" cy="80" r="3" className="circuit-node" />
          <circle cx="120" cy="140" r="3" className="circuit-node" />
          <circle cx="320" cy="120" r="3" className="circuit-node" />
          <circle cx="520" cy="140" r="3" className="circuit-node" />
          <circle cx="720" cy="120" r="3" className="circuit-node" />
          <circle cx="920" cy="140" r="3" className="circuit-node" />
          <circle cx="180" cy="200" r="3" className="circuit-node" />
          <circle cx="380" cy="220" r="3" className="circuit-node" />
          <circle cx="580" cy="200" r="3" className="circuit-node" />
          <circle cx="780" cy="220" r="3" className="circuit-node" />
          <circle cx="980" cy="200" r="3" className="circuit-node" />
          <circle cx="160" cy="260" r="3" className="circuit-node" />
          <circle cx="360" cy="240" r="3" className="circuit-node" />
          <circle cx="560" cy="260" r="3" className="circuit-node" />
          <circle cx="760" cy="240" r="3" className="circuit-node" />
          <circle cx="960" cy="260" r="3" className="circuit-node" />
          <circle cx="140" cy="320" r="3" className="circuit-node" />
          <circle cx="340" cy="340" r="3" className="circuit-node" />
          <circle cx="540" cy="320" r="3" className="circuit-node" />
          <circle cx="740" cy="340" r="3" className="circuit-node" />
          <circle cx="940" cy="320" r="3" className="circuit-node" />
          <circle cx="190" cy="380" r="3" className="circuit-node" />
          <circle cx="390" cy="360" r="3" className="circuit-node" />
          <circle cx="590" cy="380" r="3" className="circuit-node" />
          <circle cx="790" cy="360" r="3" className="circuit-node" />
          <circle cx="990" cy="380" r="3" className="circuit-node" />
          <circle cx="170" cy="440" r="3" className="circuit-node" />
          <circle cx="370" cy="460" r="3" className="circuit-node" />
          <circle cx="570" cy="440" r="3" className="circuit-node" />
          <circle cx="770" cy="460" r="3" className="circuit-node" />
          <circle cx="970" cy="440" r="3" className="circuit-node" />
        </svg>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Factory Appliances Online</h1>
        <p className="hero-subtitle">Global Leaders in Electronics Import & Export</p>
        <p className="hero-description">
          Specializing in high-volume international trade of premium electronics, 
          including smartphones, tablets, computers, and cutting-edge Starlink equipment.
        </p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;