import React, { useState, useEffect, useRef } from 'react';
import { AnimatedCounterProps } from '../types';

/**
 * Easing function for smooth animation
 */
const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

/**
 * Animated counter component with smooth number transitions
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  targetValue,
  duration = 2000,
  formatter,
  onComplete
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);
  const startValueRef = useRef<number>(0);
  const previousTargetRef = useRef<number>(0);

  useEffect(() => {
    // Don't animate if target hasn't changed
    if (targetValue === previousTargetRef.current) {
      return;
    }

    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    // Set up new animation
    startValueRef.current = currentValue;
    startTimeRef.current = performance.now();
    setIsAnimating(true);
    previousTargetRef.current = targetValue;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - (startTimeRef.current || 0);
      const progress = Math.min(elapsed / duration, 1);
      
      // Apply easing function
      const easedProgress = easeOutCubic(progress);
      
      // Calculate current value
      const startValue = startValueRef.current;
      const difference = targetValue - startValue;
      const newValue = startValue + (difference * easedProgress);
      
      setCurrentValue(newValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentValue(targetValue);
        setIsAnimating(false);
        onComplete?.();
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetValue, duration, onComplete]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <span 
      className={`animated-counter ${isAnimating ? 'animating' : ''}`}
      aria-live="polite"
      aria-label={`Current value: ${formatter(currentValue)}`}
    >
      {formatter(currentValue)}
    </span>
  );
};

export default AnimatedCounter;