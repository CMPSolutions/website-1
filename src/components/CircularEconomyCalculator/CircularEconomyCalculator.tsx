import React, { useState } from 'react';
import { CalculationResult } from './types';
import { ImpactDashboard } from './ImpactDashboard/ImpactDashboard';
import { InteractiveCalculator } from './InteractiveCalculator';
import { useImpactData } from './DataService';
import { DEVICE_CATEGORIES } from './constants';
import '../../styles/CircularEconomyCalculator/CircularEconomyCalculator.css';

export const CircularEconomyCalculator: React.FC = () => {
  const { metrics, loading, error } = useImpactData();

  const handleCalculationResult = (result: CalculationResult) => {
    // Handle calculation result for future features like analytics
    console.log('Calculation result:', result);
  };

  if (loading) {
    return (
      <div className="calculator-loading">
        <div className="loading-container">
          <div className="loading-spinner">
            <div className="spinner-large"></div>
          </div>
          <h2>Loading Impact Data...</h2>
          <p>Fetching real-time environmental impact metrics</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="calculator-error">
        <div className="error-container">
          <h2>Unable to Load Impact Data</h2>
          <p>{error}</p>
          <button 
            className="retry-btn"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="calculator-error">
        <div className="error-container">
          <h2>No Impact Data Available</h2>
          <p>Unable to display environmental impact metrics at this time.</p>
        </div>
      </div>
    );
  }

  return (
    <div id="calculator" className="circular-economy-calculator">
      {/* Hero Section with Real-time Impact */}
      <section className="calculator-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Circular Economy <span className="hero-accent">Impact Calculator</span>
          </h1>
          <p className="hero-subtitle">
            Discover the environmental and economic benefits of choosing refurbished electronics. 
            See our real-time cumulative impact and calculate your potential contribution.
          </p>
        </div>
        
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">
              {(metrics.eWasteDiverted / 1000000).toFixed(1)}M
            </div>
            <div className="hero-stat-label">kg E-Waste Diverted</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">
              {(metrics.carbonReduced / 1000000).toFixed(1)}M
            </div>
            <div className="hero-stat-label">kg CO₂ Reduced</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">
              ${(metrics.valueCreated / 1000000).toFixed(1)}M
            </div>
            <div className="hero-stat-label">Value Created</div>
          </div>
        </div>
      </section>

      {/* Real-time Impact Dashboard */}
      <section className="dashboard-section">
        <ImpactDashboard 
          metrics={metrics}
          showEquivalents={true}
          animateOnLoad={true}
        />
      </section>

      {/* Interactive Calculator */}
      <section className="calculator-section">
        <div className="section-container">
          <InteractiveCalculator
            deviceCategories={DEVICE_CATEGORIES}
            onCalculate={handleCalculationResult}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Make an Impact?</h2>
          <p>
            Join thousands of businesses and individuals who are choosing sustainable electronics. 
            Every refurbished device makes a difference for our planet.
          </p>
          <div className="cta-buttons">
            <button className="cta-primary">
              Browse Refurbished Electronics
            </button>
            <button className="cta-secondary">
              Learn About Our Process
            </button>
          </div>
        </div>
      </section>

      {/* Methodology and Transparency */}
      <section className="methodology-section">
        <div className="methodology-container">
          <h3>Our Calculation Methodology</h3>
          <div className="methodology-grid">
            <div className="methodology-item">
              <h4>Data Sources</h4>
              <p>
                Our impact calculations are based on peer-reviewed lifecycle assessments, 
                industry standards, and real operational data from our refurbishment processes.
              </p>
            </div>
            <div className="methodology-item">
              <h4>Transparency</h4>
              <p>
                We believe in complete transparency. All calculation methods, assumptions, 
                and data sources are available for review and verification.
              </p>
            </div>
            <div className="methodology-item">
              <h4>Continuous Improvement</h4>
              <p>
                We regularly update our calculations as new research becomes available 
                and our processes become more efficient.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CircularEconomyCalculator;