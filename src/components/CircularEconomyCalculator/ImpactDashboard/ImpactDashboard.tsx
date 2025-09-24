import React, { useMemo, useState, useEffect } from 'react';
import { ImpactDashboardProps } from '../types';
import { MetricCard } from './MetricCard';
import { EWasteIcon, ResourcesIcon, CarbonIcon, ValueIcon } from './Icons';
import { generateEquivalents, formatMetricValue } from '../utils/calculations';
import { METRIC_COLORS } from '../constants';
import '../../../styles/CircularEconomyCalculator/ImpactDashboard.css';

export const ImpactDashboard: React.FC<ImpactDashboardProps> = ({
  metrics,
  showEquivalents = true,
  animateOnLoad = true
}) => {
  const [currentCard, setCurrentCard] = useState(0);
  const equivalents = useMemo(() => generateEquivalents(metrics), [metrics]);

  const metricCards = useMemo(() => [
    {
      title: 'E-Waste Diverted',
      value: metrics.eWasteDiverted,
      unit: 'kg',
      icon: EWasteIcon,
      equivalent: showEquivalents 
        ? `Equivalent to ${equivalents.eWaste.garbageTrucks.toLocaleString()} garbage trucks of waste diverted from landfills`
        : `${formatMetricValue(metrics.eWasteDiverted, 'weight')} of electronic waste prevented from entering landfills`,
      color: METRIC_COLORS.eWaste
    },
    {
      title: 'Carbon Footprint Reduced',
      value: metrics.carbonReduced,
      unit: 'kg CO₂',
      icon: CarbonIcon,
      equivalent: showEquivalents
        ? `Equal to ${equivalents.carbon.treesPlanted.toLocaleString()} trees planted or ${equivalents.carbon.carsOffRoad.toLocaleString()} cars off the road for a year`
        : `${formatMetricValue(metrics.carbonReduced, 'carbon')} of CO₂ emissions prevented through refurbishment`,
      color: METRIC_COLORS.carbon
    },
    {
      title: 'Raw Materials Conserved',
      value: metrics.resourcesSaved.copper + metrics.resourcesSaved.aluminum,
      unit: 'kg',
      icon: ResourcesIcon,
      equivalent: showEquivalents
        ? `Including ${equivalents.materials.goldRings.toLocaleString()} wedding rings worth of gold and enough copper to wire ${equivalents.materials.copperHomes.toLocaleString()} homes`
        : `${metrics.resourcesSaved.gold.toFixed(1)}g gold, ${formatMetricValue(metrics.resourcesSaved.copper, 'weight')} copper, and other precious materials saved`,
      color: METRIC_COLORS.resources
    },
    {
      title: 'Circular Value Created',
      value: metrics.valueCreated,
      unit: 'USD',
      icon: ValueIcon,
      equivalent: showEquivalents
        ? `Supporting ${equivalents.value.jobsSupported.toLocaleString()} full-time jobs and saving customers ${formatMetricValue(equivalents.value.customerSavings, 'currency')} on average`
        : `${formatMetricValue(metrics.valueCreated, 'currency')} in economic value recovered through refurbishment and redistribution`,
      color: METRIC_COLORS.value
    }
  ], [metrics, equivalents, showEquivalents]);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % metricCards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [metricCards.length]);

  return (
    <div className="impact-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">
          Our Circular Economy <span className="title-accent">Impact</span>
        </h1>
        <p className="dashboard-subtitle">
          Real-time cumulative impact of Factory Appliances Online's commitment to sustainable electronics
        </p>
        <div className="last-updated">
          <span className="update-indicator"></span>
          Last updated: {metrics.lastUpdated.toLocaleString()}
        </div>
      </div>

      <div className="metrics-carousel">
        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentCard * 100}%)` }}
          >
            {metricCards.map((card, index) => (
              <div key={card.title} className="carousel-slide">
                <MetricCard
                  title={card.title}
                  value={card.value}
                  unit={card.unit}
                  icon={card.icon}
                  equivalent={card.equivalent}
                  color={card.color}
                  animationDuration={animateOnLoad ? 2000 : 0}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="carousel-indicators">
          {metricCards.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentCard ? 'active' : ''}`}
              onClick={() => setCurrentCard(index)}
              aria-label={`View ${metricCards[index].title} metric`}
            />
          ))}
        </div>
      </div>

      <div className="dashboard-footer">
        <div className="impact-summary">
          <h3>Making a Difference Together</h3>
          <p>
            Through our commitment to the circular economy, we're not just selling electronics – 
            we're building a sustainable future. Every refurbished device represents resources saved, 
            emissions prevented, and value created for our communities.
          </p>
        </div>
        
        <div className="methodology-link">
          <button 
            className="methodology-btn"
            onClick={() => {
              // This could open a modal or navigate to a methodology page
              console.log('Show methodology details');
            }}
            aria-label="Learn about our impact calculation methodology"
          >
            How we calculate impact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImpactDashboard;