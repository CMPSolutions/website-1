import React, { useState } from 'react';
import { MetricCardProps } from '../types';
import { AnimatedCounter } from '../VisualizationEngine';
import { useIntersectionObserver } from '../VisualizationEngine';
import '../../../styles/CircularEconomyCalculator/MetricCard.css';

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  icon: Icon,
  equivalent,
  color,
  animationDuration = 2000
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const formatValue = (val: number): string => {
    if (val >= 1000000) {
      return `${(val / 1000000).toFixed(1)}M`;
    } else if (val >= 1000) {
      return `${(val / 1000).toFixed(1)}K`;
    }
    return Math.round(val).toLocaleString();
  };

  return (
    <div 
      ref={elementRef}
      className={`metric-card ${showDetails ? 'expanded' : ''}`}
      style={{ '--metric-color': color } as React.CSSProperties}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      role="article"
      aria-labelledby={`metric-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="metric-card-header">
        <div className="metric-icon">
          <Icon className="icon" />
        </div>
        <h3 
          id={`metric-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="metric-title"
        >
          {title}
        </h3>
      </div>

      <div className="metric-value">
        <AnimatedCounter
          targetValue={isIntersecting ? value : 0}
          duration={animationDuration}
          formatter={formatValue}
        />
        <span className="metric-unit">{unit}</span>
      </div>

      <div className={`metric-equivalent ${showDetails ? 'visible' : ''}`}>
        <p className="equivalent-text">{equivalent}</p>
      </div>

      <div className="metric-card-footer">
        <div className="progress-indicator">
          <div 
            className="progress-bar"
            style={{ 
              width: isIntersecting ? '100%' : '0%',
              transitionDelay: `${animationDuration}ms`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;