# Circular Economy Calculator - Design Document

## Overview

The Circular Economy Calculator is an interactive web component that showcases Factory Appliances Online's environmental and economic impact through electronics refurbishment and redistribution. The system will display real-time cumulative metrics with engaging visualizations and provide an interactive calculator for users to explore potential impacts.

## Architecture

### Component Structure
```
CircularEconomyCalculator/
├── ImpactDashboard/
│   ├── MetricCard (E-waste, Resources, Carbon, Value)
│   ├── AnimatedCounter
│   └── EquivalentDisplay
├── InteractiveCalculator/
│   ├── DeviceSelector
│   ├── QuantityInput
│   └── ImpactResults
├── VisualizationEngine/
│   ├── CounterAnimations
│   ├── ProgressBars
│   └── IconAnimations
└── DataService/
    ├── ImpactDataProvider
    ├── CalculationEngine
    └── LocalStorageCache
```

### Data Flow
1. **Initial Load**: Fetch cumulative impact data from local data store
2. **Real-time Updates**: Simulate real-time updates with periodic increments
3. **User Interaction**: Calculate personal impact based on user inputs
4. **Display Updates**: Animate counters and update visualizations

## Components and Interfaces

### Core Data Models

```typescript
interface ImpactMetrics {
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

interface DeviceImpactFactors {
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

interface DeviceCategory {
  id: string;
  name: string;
  impactFactors: DeviceImpactFactors;
  icon: string;
}
```

### Component Interfaces

```typescript
interface MetricCardProps {
  title: string;
  value: number;
  unit: string;
  icon: React.ComponentType;
  equivalent: string;
  color: string;
  animationDuration: number;
}

interface InteractiveCalculatorProps {
  deviceCategories: DeviceCategory[];
  onCalculate: (results: ImpactMetrics) => void;
}

interface AnimatedCounterProps {
  targetValue: number;
  duration: number;
  formatter: (value: number) => string;
  onComplete?: () => void;
}
```

## Data Models

### Device Categories and Impact Factors

```typescript
const DEVICE_CATEGORIES: DeviceCategory[] = [
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
```

### Equivalent Conversions

```typescript
const EQUIVALENTS = {
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
```

## Error Handling

### Input Validation
- Validate device selection (must be from predefined categories)
- Validate quantity input (positive integers only, max 10,000)
- Handle edge cases for zero or negative values
- Provide user-friendly error messages

### Data Loading
- Graceful fallback to cached data if real-time updates fail
- Loading states for all async operations
- Error boundaries for component failures
- Retry mechanisms for failed calculations

### Performance Safeguards
- Debounce user inputs to prevent excessive calculations
- Limit animation frame rates for smooth performance
- Implement virtual scrolling for large data sets
- Memory leak prevention for timers and intervals

## Testing Strategy

### Unit Tests
- Test calculation engine with various device combinations
- Validate equivalent conversion formulas
- Test input validation and error handling
- Mock data service responses

### Integration Tests
- Test component interactions and data flow
- Validate animation sequences and timing
- Test responsive design breakpoints
- Cross-browser compatibility testing

### Performance Tests
- Animation performance under load
- Memory usage during extended sessions
- Mobile device performance optimization
- Accessibility compliance testing

### User Acceptance Tests
- Verify calculation accuracy against requirements
- Test user journey from landing to calculation
- Validate visual design matches specifications
- Ensure mobile responsiveness and usability

## Implementation Phases

### Phase 1: Core Calculator (Week 1)
- Basic component structure
- Calculation engine implementation
- Simple metric display without animations
- Interactive calculator functionality

### Phase 2: Visual Enhancements (Week 2)
- Animated counters and transitions
- Icon system and visual design
- Responsive layout implementation
- Basic equivalent displays

### Phase 3: Advanced Features (Week 3)
- Real-time update simulation
- Advanced visualizations and progress bars
- Comparison toggles and view modes
- Performance optimizations

### Phase 4: Polish and Integration (Week 4)
- Accessibility improvements
- SEO optimization and meta tags
- Integration with existing website
- Final testing and bug fixes

## Technical Considerations

### Performance Optimization
- Use React.memo for expensive calculations
- Implement useCallback for event handlers
- Lazy load heavy components and animations
- Optimize bundle size with code splitting

### Accessibility
- ARIA labels for all interactive elements
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Focus management for dynamic content

### Mobile Optimization
- Touch-friendly interface design
- Optimized animations for mobile devices
- Reduced motion preferences support
- Efficient rendering for slower devices

### SEO and Analytics
- Structured data for impact metrics
- Open Graph tags for social sharing
- Google Analytics event tracking
- Performance monitoring integration

This design provides a comprehensive foundation for implementing the circular economy calculator while ensuring scalability, maintainability, and excellent user experience across all devices and use cases.