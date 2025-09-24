import React, { useState, useEffect } from 'react';

interface QuantityInputProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  disabled?: boolean;
  min?: number;
  max?: number;
}

export const QuantityInput: React.FC<QuantityInputProps> = ({
  quantity,
  onQuantityChange,
  disabled = false,
  min = 1,
  max = 10000
}) => {
  const [inputValue, setInputValue] = useState(quantity.toString());
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setInputValue(quantity.toString());
  }, [quantity]);

  const validateAndUpdate = (value: string) => {
    setInputValue(value);
    setError('');

    // Allow empty input temporarily
    if (value === '') {
      return;
    }

    const numValue = parseInt(value, 10);

    // Validate input
    if (isNaN(numValue)) {
      setError('Please enter a valid number');
      return;
    }

    if (numValue < min) {
      setError(`Quantity must be at least ${min}`);
      return;
    }

    if (numValue > max) {
      setError(`Quantity cannot exceed ${max.toLocaleString()}`);
      return;
    }

    // Valid input - update parent
    onQuantityChange(numValue);
  };

  const handleBlur = () => {
    // If input is empty on blur, reset to minimum value
    if (inputValue === '' || parseInt(inputValue, 10) < min) {
      const defaultValue = Math.max(min, 1);
      setInputValue(defaultValue.toString());
      onQuantityChange(defaultValue);
      setError('');
    }
  };

  const incrementQuantity = () => {
    const newValue = Math.min(quantity + 1, max);
    onQuantityChange(newValue);
  };

  const decrementQuantity = () => {
    const newValue = Math.max(quantity - 1, min);
    onQuantityChange(newValue);
  };

  return (
    <div className="quantity-input">
      <label htmlFor="quantity" className="quantity-label">
        Quantity
      </label>
      <div className="quantity-input-container">
        <button
          type="button"
          className="quantity-btn quantity-btn-minus"
          onClick={decrementQuantity}
          disabled={disabled || quantity <= min}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <input
          id="quantity"
          type="number"
          value={inputValue}
          onChange={(e) => validateAndUpdate(e.target.value)}
          onBlur={handleBlur}
          disabled={disabled}
          min={min}
          max={max}
          className={`quantity-field ${error ? 'error' : ''}`}
          aria-describedby="quantity-help quantity-error"
        />
        <button
          type="button"
          className="quantity-btn quantity-btn-plus"
          onClick={incrementQuantity}
          disabled={disabled || quantity >= max}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <p id="quantity-help" className="quantity-help">
        Enter the number of devices (1 - {max.toLocaleString()})
      </p>
      {error && (
        <p id="quantity-error" className="quantity-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default QuantityInput;