import {
  calculateDeviceImpact,
  calculateCombinedImpact,
  generateEquivalents,
  formatMetricValue,
  validateCalculationInput,
  addImpactMetrics
} from '../utils/calculations';
import { CalculationInput, ImpactMetrics } from '../types';

describe('Calculation Engine', () => {
  describe('calculateDeviceImpact', () => {
    it('should calculate correct impact for smartphones', () => {
      const result = calculateDeviceImpact('smartphone', 100);
      
      expect(result.eWasteDiverted).toBe(20); // 0.2kg * 100
      expect(result.resourcesSaved.copper).toBe(1.5); // 0.015kg * 100
      expect(result.resourcesSaved.gold).toBeCloseTo(3.4); // 0.034g * 100
      expect(result.carbonReduced).toBe(7000); // 70kg * 100
      expect(result.valueCreated).toBe(15000); // $150 * 100
    });

    it('should calculate correct impact for laptops', () => {
      const result = calculateDeviceImpact('laptop', 50);
      
      expect(result.eWasteDiverted).toBe(125); // 2.5kg * 50
      expect(result.resourcesSaved.copper).toBe(10); // 0.2kg * 50
      expect(result.carbonReduced).toBe(17500); // 350kg * 50
      expect(result.valueCreated).toBe(20000); // $400 * 50
    });

    it('should throw error for invalid device ID', () => {
      expect(() => calculateDeviceImpact('invalid', 10)).toThrow('Device category not found: invalid');
    });
  });

  describe('calculateCombinedImpact', () => {
    it('should combine impacts from multiple device types', () => {
      const inputs: CalculationInput[] = [
        { deviceId: 'smartphone', quantity: 100 },
        { deviceId: 'laptop', quantity: 50 }
      ];

      const result = calculateCombinedImpact(inputs);
      
      expect(result.eWasteDiverted).toBe(145); // 20 + 125
      expect(result.resourcesSaved.copper).toBe(11.5); // 1.5 + 10
      expect(result.carbonReduced).toBe(24500); // 7000 + 17500
      expect(result.valueCreated).toBe(35000); // 15000 + 20000
    });

    it('should handle empty input array', () => {
      const result = calculateCombinedImpact([]);
      
      expect(result.eWasteDiverted).toBe(0);
      expect(result.resourcesSaved.copper).toBe(0);
      expect(result.carbonReduced).toBe(0);
      expect(result.valueCreated).toBe(0);
    });
  });

  describe('generateEquivalents', () => {
    it('should generate correct equivalent comparisons', () => {
      const metrics: ImpactMetrics = {
        eWasteDiverted: 50000, // kg
        resourcesSaved: {
          copper: 1000, // kg
          gold: 100, // g
          silver: 500, // g
          aluminum: 2000, // kg
          rareEarths: 50 // kg
        },
        carbonReduced: 230000, // kg CO2
        valueCreated: 450000, // USD
        lastUpdated: new Date()
      };

      const equivalents = generateEquivalents(metrics);
      
      expect(equivalents.eWaste.garbageTrucks).toBe(5); // 50000 / 10000
      expect(equivalents.carbon.carsOffRoad).toBe(50); // 230000 / 4600
      expect(equivalents.carbon.treesPlanted).toBe(10455); // 230000 / 22
      expect(equivalents.materials.copperHomes).toBe(5); // 1000 / 200
      expect(equivalents.materials.goldRings).toBe(40); // 100 / 2.5
      expect(equivalents.value.jobsSupported).toBe(10); // 450000 / 45000
    });
  });

  describe('formatMetricValue', () => {
    it('should format weight values correctly', () => {
      expect(formatMetricValue(500, 'weight')).toBe('500 kg');
      expect(formatMetricValue(1500, 'weight')).toBe('1.5K kg');
      expect(formatMetricValue(2500000, 'weight')).toBe('2.5M kg');
    });

    it('should format carbon values correctly', () => {
      expect(formatMetricValue(750, 'carbon')).toBe('750 kg CO₂');
      expect(formatMetricValue(2300, 'carbon')).toBe('2.3K kg CO₂');
      expect(formatMetricValue(1800000, 'carbon')).toBe('1.8M kg CO₂');
    });

    it('should format currency values correctly', () => {
      expect(formatMetricValue(850, 'currency')).toBe('$850');
      expect(formatMetricValue(15000, 'currency')).toBe('$15.0K');
      expect(formatMetricValue(2500000, 'currency')).toBe('$2.5M');
    });

    it('should format materials values correctly', () => {
      expect(formatMetricValue(250, 'materials')).toBe('250 g');
      expect(formatMetricValue(1500, 'materials')).toBe('1.5K g');
    });
  });

  describe('validateCalculationInput', () => {
    it('should validate correct input', () => {
      const input: CalculationInput = { deviceId: 'smartphone', quantity: 100 };
      const result = validateCalculationInput(input);
      
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should reject empty device ID', () => {
      const input: CalculationInput = { deviceId: '', quantity: 100 };
      const result = validateCalculationInput(input);
      
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Device type is required');
    });

    it('should reject invalid device ID', () => {
      const input: CalculationInput = { deviceId: 'invalid', quantity: 100 };
      const result = validateCalculationInput(input);
      
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Invalid device type selected');
    });

    it('should reject zero quantity', () => {
      const input: CalculationInput = { deviceId: 'smartphone', quantity: 0 };
      const result = validateCalculationInput(input);
      
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Quantity must be greater than 0');
    });

    it('should reject negative quantity', () => {
      const input: CalculationInput = { deviceId: 'smartphone', quantity: -5 };
      const result = validateCalculationInput(input);
      
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Quantity must be greater than 0');
    });

    it('should reject quantity over 10,000', () => {
      const input: CalculationInput = { deviceId: 'smartphone', quantity: 15000 };
      const result = validateCalculationInput(input);
      
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Quantity cannot exceed 10,000 units');
    });

    it('should reject non-integer quantity', () => {
      const input: CalculationInput = { deviceId: 'smartphone', quantity: 10.5 };
      const result = validateCalculationInput(input);
      
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Quantity must be a whole number');
    });
  });

  describe('addImpactMetrics', () => {
    it('should correctly add two impact metrics', () => {
      const a: ImpactMetrics = {
        eWasteDiverted: 1000,
        resourcesSaved: { copper: 50, gold: 10, silver: 100, aluminum: 200, rareEarths: 5 },
        carbonReduced: 5000,
        valueCreated: 10000,
        lastUpdated: new Date()
      };

      const b: ImpactMetrics = {
        eWasteDiverted: 500,
        resourcesSaved: { copper: 25, gold: 5, silver: 50, aluminum: 100, rareEarths: 2.5 },
        carbonReduced: 2500,
        valueCreated: 5000,
        lastUpdated: new Date()
      };

      const result = addImpactMetrics(a, b);

      expect(result.eWasteDiverted).toBe(1500);
      expect(result.resourcesSaved.copper).toBe(75);
      expect(result.resourcesSaved.gold).toBe(15);
      expect(result.carbonReduced).toBe(7500);
      expect(result.valueCreated).toBe(15000);
    });
  });
});