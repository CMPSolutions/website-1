// Main export for the Circular Economy Calculator
export { CircularEconomyCalculator } from './CircularEconomyCalculator';

// Export individual components for flexibility
export { ImpactDashboard } from './ImpactDashboard/ImpactDashboard';
export { InteractiveCalculator } from './InteractiveCalculator';
export { MetricCard } from './ImpactDashboard';
export { AnimatedCounter } from './VisualizationEngine';

// Export data services and hooks
export { useImpactData, useImpactDataAdmin } from './DataService';

// Export types for external use
export type {
  ImpactMetrics,
  DeviceCategory,
  CalculationResult,
  MetricCardProps,
  ViewMode
} from './types';

// Export constants
export { DEVICE_CATEGORIES, EQUIVALENTS, METRIC_COLORS } from './constants';

// Export utilities
export {
  calculateDeviceImpact,
  calculateCombinedImpact,
  generateEquivalents,
  formatMetricValue
} from './utils/calculations';