// Core data models for the Circular Economy Calculator

export interface ImpactMetrics {
  eWasteDiverted: number; // kg
  resourcesSaved: {
    copper: number; // kg
    gold: number; // g
    silver: number; // g
    aluminum: number; // kg
    rareEarths: number; // kg
  };
  carbonReduced: number; // kg CO2
  valueCreated: number; // USD
  lastUpdated: Date;
}

export interface DeviceImpactFactors {
  weight: number; // kg
  materials: {
    copper: number; // kg per device
    gold: number; // g per device
    silver: number; // g per device
    aluminum: number; // kg per device
    rareEarths: number; // kg per device
  };
  carbonFootprint: number; // kg CO2 per device
  valueRecovered: number; // USD per device
}

export interface DeviceCategory {
  id: string;
  name: string;
  impactFactors: DeviceImpactFactors;
  icon: string;
}

export interface CalculationInput {
  deviceId: string;
  quantity: number;
}

export interface CalculationResult extends ImpactMetrics {
  deviceCategory: string;
  quantity: number;
}

// Component prop interfaces
export interface MetricCardProps {
  title: string;
  value: number;
  unit: string;
  icon: React.ComponentType<{ className?: string }>;
  equivalent: string;
  color: string;
  animationDuration?: number;
}

export interface InteractiveCalculatorProps {
  deviceCategories: DeviceCategory[];
  onCalculate: (results: CalculationResult) => void;
}

export interface AnimatedCounterProps {
  targetValue: number;
  duration?: number;
  formatter: (value: number) => string;
  onComplete?: () => void;
}

export interface ImpactDashboardProps {
  metrics: ImpactMetrics;
  showEquivalents?: boolean;
  animateOnLoad?: boolean;
}

// Equivalent conversion types
export interface EquivalentConversions {
  eWaste: {
    garbageTrucks: (kg: number) => number;
    elephants: (kg: number) => number;
  };
  carbon: {
    carsOffRoad: (kgCO2: number) => number;
    treesPlanted: (kgCO2: number) => number;
  };
  materials: {
    copperHomes: (kg: number) => number;
    goldRings: (g: number) => number;
  };
  value: {
    jobsSupported: (usd: number) => number;
    customerSavings: (usd: number) => number;
  };
}

export type ViewMode = 'raw' | 'equivalents' | 'economic' | 'environmental';