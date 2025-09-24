import React, { useState, useCallback, useMemo } from 'react';
import { InteractiveCalculatorProps, CalculationResult } from '../types';
import { calculateDeviceImpact, validateCalculationInput } from '../utils/calculations';
import { DeviceSelector } from './DeviceSelector';
import { QuantityInput } from './QuantityInput';
import { ImpactResults } from './ImpactResults';
import '../../../styles/CircularEconomyCalculator/InteractiveCalculator.css';

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({
  deviceCategories,
  onCalculate
}) => {
  const [selectedDevice, setSelectedDevice] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [isCalculating, setIsCalculating] = useState(false);

  // Calculate impact in real-time as user changes inputs
  const calculationResult = useMemo((): CalculationResult | null => {
    if (!selectedDevice || quantity <= 0) {
      return null;
    }

    const validation = validateCalculationInput({ deviceId: selectedDevice, quantity });
    if (!validation.isValid) {
      return null;
    }

    try {
      const impact = calculateDeviceImpact(selectedDevice, quantity);
      const device = deviceCategories.find(d => d.id === selectedDevice);
      
      return {
        ...impact,
        deviceCategory: device?.name || selectedDevice,
        quantity
      };
    } catch (error) {
      console.error('Calculation error:', error);
      return null;
    }
  }, [selectedDevice, quantity, deviceCategories]);

  // Notify parent component when calculation changes
  React.useEffect(() => {
    if (calculationResult) {
      onCalculate(calculationResult);
    }
  }, [calculationResult, onCalculate]);

  const handleDeviceChange = useCallback((deviceId: string) => {
    setSelectedDevice(deviceId);
  }, []);

  const handleQuantityChange = useCallback((newQuantity: number) => {
    setQuantity(newQuantity);
  }, []);

  const handleCalculateClick = useCallback(async () => {
    if (!calculationResult) return;

    setIsCalculating(true);
    
    // Simulate brief calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setIsCalculating(false);
    
    // Scroll to results
    const resultsElement = document.querySelector('.impact-results');
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [calculationResult]);

  const isFormValid = selectedDevice && quantity > 0;

  return (
    <div className="interactive-calculator">
      <div className="calculator-header">
        <h2>Calculate Your Impact</h2>
        <p className="calculator-subtitle">
          See the environmental benefits of choosing refurbished electronics
        </p>
      </div>

      <div className="calculator-form">
        <div className="form-row">
          <DeviceSelector
            devices={deviceCategories}
            selectedDevice={selectedDevice}
            onDeviceChange={handleDeviceChange}
            disabled={isCalculating}
          />
          
          <QuantityInput
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            disabled={isCalculating}
          />
        </div>

        {isFormValid && (
          <div className="form-actions">
            <button
              type="button"
              className="calculate-btn"
              onClick={handleCalculateClick}
              disabled={isCalculating}
            >
              {isCalculating ? 'Calculating...' : 'Calculate Impact'}
            </button>
          </div>
        )}
      </div>

      <div className="calculator-results">
        <ImpactResults 
          result={calculationResult} 
          loading={isCalculating}
        />
      </div>

      {calculationResult && (
        <div className="calculator-cta">
          <p className="cta-text">
            Ready to make a positive impact? Get a quote for your refurbished electronics.
          </p>
          <button className="cta-button">
            Get Quote
          </button>
        </div>
      )}
    </div>
  );
};

export default InteractiveCalculator;