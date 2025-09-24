import { ImpactMetrics, CalculationInput } from '../types';
import { DEVICE_CATEGORIES, EQUIVALENTS } from '../constants';

/**
 * Calculate impact metrics for a single device type and quantity
 */
export function calculateDeviceImpact(deviceId: string, quantity: number): ImpactMetrics {
  const device = DEVICE_CATEGORIES.find(d => d.id === deviceId);
  
  if (!device) {
    throw new Error(`Device category not found: ${deviceId}`);
  }

  const { impactFactors } = device;

  return {
    eWasteDiverted: impactFactors.weight * quantity,
    resourcesSaved: {
      copper: impactFactors.materials.copper * quantity,
      gold: impactFactors.materials.gold * quantity,
      silver: impactFactors.materials.silver * quantity,
      aluminum: impactFactors.materials.aluminum * quantity,
      rareEarths: impactFactors.materials.rareEarths * quantity
    },
    carbonReduced: impactFactors.carbonFootprint * quantity,
    valueCreated: impactFactors.valueRecovered * quantity,
    lastUpdated: new Date()
  };
}

/**
 * Calculate combined impact for multiple device types
 */
export function calculateCombinedImpact(inputs: CalculationInput[]): ImpactMetrics {
  const combinedImpact: ImpactMetrics = {
    eWasteDiverted: 0,
    resourcesSaved: {
      copper: 0,
      gold: 0,
      silver: 0,
      aluminum: 0,
      rareEarths: 0
    },
    carbonReduced: 0,
    valueCreated: 0,
    lastUpdated: new Date()
  };

  inputs.forEach(input => {
    const deviceImpact = calculateDeviceImpact(input.deviceId, input.quantity);
    
    combinedImpact.eWasteDiverted += deviceImpact.eWasteDiverted;
    combinedImpact.resourcesSaved.copper += deviceImpact.resourcesSaved.copper;
    combinedImpact.resourcesSaved.gold += deviceImpact.resourcesSaved.gold;
    combinedImpact.resourcesSaved.silver += deviceImpact.resourcesSaved.silver;
    combinedImpact.resourcesSaved.aluminum += deviceImpact.resourcesSaved.aluminum;
    combinedImpact.resourcesSaved.rareEarths += deviceImpact.resourcesSaved.rareEarths;
    combinedImpact.carbonReduced += deviceImpact.carbonReduced;
    combinedImpact.valueCreated += deviceImpact.valueCreated;
  });

  return combinedImpact;
}

/**
 * Generate equivalent comparisons for impact metrics
 */
export function generateEquivalents(metrics: ImpactMetrics) {
  return {
    eWaste: {
      garbageTrucks: EQUIVALENTS.eWaste.garbageTrucks(metrics.eWasteDiverted),
      elephants: EQUIVALENTS.eWaste.elephants(metrics.eWasteDiverted)
    },
    carbon: {
      carsOffRoad: EQUIVALENTS.carbon.carsOffRoad(metrics.carbonReduced),
      treesPlanted: EQUIVALENTS.carbon.treesPlanted(metrics.carbonReduced)
    },
    materials: {
      copperHomes: EQUIVALENTS.materials.copperHomes(metrics.resourcesSaved.copper),
      goldRings: EQUIVALENTS.materials.goldRings(metrics.resourcesSaved.gold)
    },
    value: {
      jobsSupported: EQUIVALENTS.value.jobsSupported(metrics.valueCreated),
      customerSavings: EQUIVALENTS.value.customerSavings(metrics.valueCreated)
    }
  };
}

/**
 * Format numbers for display with appropriate units and precision
 */
export function formatMetricValue(value: number, type: 'weight' | 'carbon' | 'currency' | 'materials'): string {
  switch (type) {
    case 'weight':
      if (value >= 1000000) {
        return `${(value / 1000000).toFixed(1)}M kg`;
      } else if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}K kg`;
      }
      return `${Math.round(value)} kg`;
    
    case 'carbon':
      if (value >= 1000000) {
        return `${(value / 1000000).toFixed(1)}M kg CO₂`;
      } else if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}K kg CO₂`;
      }
      return `${Math.round(value)} kg CO₂`;
    
    case 'currency':
      if (value >= 1000000) {
        return `$${(value / 1000000).toFixed(1)}M`;
      } else if (value >= 1000) {
        return `$${(value / 1000).toFixed(1)}K`;
      }
      return `$${Math.round(value)}`;
    
    case 'materials':
      if (value >= 1000) {
        return `${(value / 1000).toFixed(1)}K g`;
      }
      return `${Math.round(value)} g`;
    
    default:
      return value.toLocaleString();
  }
}

/**
 * Generate realistic incremental updates for real-time simulation
 */
export function generateRealtimeIncrement(baseMetrics: ImpactMetrics, incrementFactor: number = 0.001): ImpactMetrics {
  const increment = incrementFactor; // 0.1% increase per update
  
  return {
    eWasteDiverted: baseMetrics.eWasteDiverted * increment,
    resourcesSaved: {
      copper: baseMetrics.resourcesSaved.copper * increment,
      gold: baseMetrics.resourcesSaved.gold * increment,
      silver: baseMetrics.resourcesSaved.silver * increment,
      aluminum: baseMetrics.resourcesSaved.aluminum * increment,
      rareEarths: baseMetrics.resourcesSaved.rareEarths * increment
    },
    carbonReduced: baseMetrics.carbonReduced * increment,
    valueCreated: baseMetrics.valueCreated * increment,
    lastUpdated: new Date()
  };
}

/**
 * Add two impact metrics together
 */
export function addImpactMetrics(a: ImpactMetrics, b: ImpactMetrics): ImpactMetrics {
  return {
    eWasteDiverted: a.eWasteDiverted + b.eWasteDiverted,
    resourcesSaved: {
      copper: a.resourcesSaved.copper + b.resourcesSaved.copper,
      gold: a.resourcesSaved.gold + b.resourcesSaved.gold,
      silver: a.resourcesSaved.silver + b.resourcesSaved.silver,
      aluminum: a.resourcesSaved.aluminum + b.resourcesSaved.aluminum,
      rareEarths: a.resourcesSaved.rareEarths + b.resourcesSaved.rareEarths
    },
    carbonReduced: a.carbonReduced + b.carbonReduced,
    valueCreated: a.valueCreated + b.valueCreated,
    lastUpdated: new Date()
  };
}

/**
 * Validate calculation inputs
 */
export function validateCalculationInput(input: CalculationInput): { isValid: boolean; error?: string } {
  if (!input.deviceId || input.deviceId.trim() === '') {
    return { isValid: false, error: 'Device type is required' };
  }

  const device = DEVICE_CATEGORIES.find(d => d.id === input.deviceId);
  if (!device) {
    return { isValid: false, error: 'Invalid device type selected' };
  }

  if (!input.quantity || input.quantity <= 0) {
    return { isValid: false, error: 'Quantity must be greater than 0' };
  }

  if (input.quantity > 10000) {
    return { isValid: false, error: 'Quantity cannot exceed 10,000 units' };
  }

  if (!Number.isInteger(input.quantity)) {
    return { isValid: false, error: 'Quantity must be a whole number' };
  }

  return { isValid: true };
}