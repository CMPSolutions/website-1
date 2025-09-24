import React from 'react';
import { CalculationResult } from '../types';
import { generateEquivalents, formatMetricValue } from '../utils/calculations';
import { EWasteIcon, ResourcesIcon, CarbonIcon, ValueIcon } from '../ImpactDashboard/Icons';

interface ImpactResultsProps {
  result: CalculationResult | null;
  loading?: boolean;
}

export const ImpactResults: React.FC<ImpactResultsProps> = ({
  result,
  loading = false
}) => {
  if (loading) {
    return (
      <div className="impact-results loading">
        <div className="loading-spinner" aria-label="Calculating impact...">
          <div className="spinner"></div>
        </div>
        <p>Calculating your impact...</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="impact-results empty">
        <p className="empty-message">
          Select a device type and quantity to see your potential environmental impact.
        </p>
      </div>
    );
  }

  const equivalents = generateEquivalents(result);

  const impactItems = [
    {
      icon: EWasteIcon,
      title: 'E-Waste Diverted',
      value: result.eWasteDiverted,
      unit: 'kg',
      equivalent: `Equivalent to ${equivalents.eWaste.garbageTrucks} garbage trucks of waste`,
      color: '#4CAF50',
      formatType: 'weight' as const
    },
    {
      icon: CarbonIcon,
      title: 'Carbon Reduced',
      value: result.carbonReduced,
      unit: 'kg CO₂',
      equivalent: `Equal to ${equivalents.carbon.treesPlanted} trees planted or ${equivalents.carbon.carsOffRoad} cars off the road`,
      color: '#8BC34A',
      formatType: 'carbon' as const
    },
    {
      icon: ResourcesIcon,
      title: 'Materials Saved',
      value: result.resourcesSaved.copper + result.resourcesSaved.aluminum,
      unit: 'kg',
      equivalent: `Including ${result.resourcesSaved.gold.toFixed(1)}g gold and ${result.resourcesSaved.copper.toFixed(1)}kg copper`,
      color: '#2196F3',
      formatType: 'weight' as const
    },
    {
      icon: ValueIcon,
      title: 'Value Created',
      value: result.valueCreated,
      unit: '',
      equivalent: `Supporting ${equivalents.value.jobsSupported} jobs and saving customers ${formatMetricValue(equivalents.value.customerSavings, 'currency')}`,
      color: '#FF9800',
      formatType: 'currency' as const
    }
  ];

  return (
    <div className="impact-results">
      <div className="results-header">
        <h3>Your Environmental Impact</h3>
        <p className="results-subtitle">
          By choosing {result.quantity} refurbished {result.deviceCategory.toLowerCase()}, you would contribute:
        </p>
      </div>

      <div className="results-grid">
        {impactItems.map((item, index) => (
          <div 
            key={index} 
            className="result-item"
            style={{ '--item-color': item.color } as React.CSSProperties}
          >
            <div className="result-icon">
              <item.icon className="icon" />
            </div>
            <div className="result-content">
              <h4 className="result-title">{item.title}</h4>
              <div className="result-value">
                <span className="value">{formatMetricValue(item.value, item.formatType)}</span>
                {item.unit && <span className="unit">{item.unit}</span>}
              </div>
              <p className="result-equivalent">{item.equivalent}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="results-footer">
        <p className="disclaimer">
          * Impact calculations based on industry averages and lifecycle assessments
        </p>
      </div>
    </div>
  );
};

export default ImpactResults;