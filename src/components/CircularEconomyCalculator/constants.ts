import { DeviceCategory, EquivalentConversions } from './types';

// Device categories with impact factors
export const DEVICE_CATEGORIES: DeviceCategory[] = [
  {
    id: 'smartphone',
    name: 'Mobile Phones',
    impactFactors: {
      weight: 0.2,
      materials: {
        copper: 0.015,
        gold: 0.034,
        silver: 0.34,
        aluminum: 0.025,
        rareEarths: 0.002
      },
      carbonFootprint: 70,
      valueRecovered: 150
    },
    icon: 'smartphone'
  },
  {
    id: 'laptop',
    name: 'Laptops',
    impactFactors: {
      weight: 2.5,
      materials: {
        copper: 0.2,
        gold: 0.2,
        silver: 1.5,
        aluminum: 0.8,
        rareEarths: 0.01
      },
      carbonFootprint: 350,
      valueRecovered: 400
    },
    icon: 'laptop'
  },
  {
    id: 'desktop',
    name: 'Desktop Computers',
    impactFactors: {
      weight: 8.0,
      materials: {
        copper: 1.5,
        gold: 0.5,
        silver: 3.0,
        aluminum: 2.0,
        rareEarths: 0.02
      },
      carbonFootprint: 500,
      valueRecovered: 300
    },
    icon: 'desktop'
  },
  {
    id: 'tablet',
    name: 'Tablet Computers',
    impactFactors: {
      weight: 0.5,
      materials: {
        copper: 0.05,
        gold: 0.1,
        silver: 0.8,
        aluminum: 0.3,
        rareEarths: 0.005
      },
      carbonFootprint: 120,
      valueRecovered: 200
    },
    icon: 'tablet'
  },
  {
    id: 'appliance-small',
    name: 'Small Appliances',
    impactFactors: {
      weight: 15.0,
      materials: {
        copper: 2.0,
        gold: 0.1,
        silver: 0.5,
        aluminum: 5.0,
        rareEarths: 0.01
      },
      carbonFootprint: 200,
      valueRecovered: 100
    },
    icon: 'appliance'
  },
  {
    id: 'appliance-large',
    name: 'Large Appliances',
    impactFactors: {
      weight: 90.0,
      materials: {
        copper: 8.0,
        gold: 0.05,
        silver: 0.2,
        aluminum: 15.0,
        rareEarths: 0.005
      },
      carbonFootprint: 800,
      valueRecovered: 250
    },
    icon: 'appliance-large'
  }
];

// Equivalent conversions for relatable comparisons
export const EQUIVALENTS: EquivalentConversions = {
  eWaste: {
    garbageTrucks: (kg: number) => Math.round(kg / 10000), // 10 tonnes per truck
    elephants: (kg: number) => Math.round(kg / 6000) // 6 tonnes per elephant
  },
  carbon: {
    carsOffRoad: (kgCO2: number) => Math.round(kgCO2 / 4600), // 4.6 tonnes per car per year
    treesPlanted: (kgCO2: number) => Math.round(kgCO2 / 22) // 22kg CO2 per tree per year
  },
  materials: {
    copperHomes: (kg: number) => Math.round(kg / 200), // 200kg copper per home
    goldRings: (g: number) => Math.round(g / 2.5) // 2.5g per wedding ring
  },
  value: {
    jobsSupported: (usd: number) => Math.round(usd / 45000), // $45k per job per year
    customerSavings: (usd: number) => Math.round(usd * 0.3) // 30% savings passed to customers
  }
};

// Mock cumulative data for initial display
export const INITIAL_IMPACT_DATA = {
  eWasteDiverted: 2847650, // kg
  resourcesSaved: {
    copper: 45230, // kg
    gold: 1247, // g
    silver: 18950, // g
    aluminum: 89340, // kg
    rareEarths: 892 // kg
  },
  carbonReduced: 15847200, // kg CO2
  valueCreated: 8947500, // USD
  lastUpdated: new Date()
};

// Animation and timing constants
export const ANIMATION_DURATIONS = {
  counter: 2000, // 2 seconds
  cardHover: 300, // 0.3 seconds
  pageLoad: 500, // 0.5 seconds
  realTimeUpdate: 5000 // 5 seconds between updates
};

// Color scheme for different metrics
export const METRIC_COLORS = {
  eWaste: '#4CAF50', // Green
  resources: '#2196F3', // Blue
  carbon: '#8BC34A', // Light Green
  value: '#FF9800' // Orange/Gold
};