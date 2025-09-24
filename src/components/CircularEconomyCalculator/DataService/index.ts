import { useState, useEffect } from 'react';
import { ImpactMetrics } from '../types';
import { impactDataProvider } from './ImpactDataProvider';

// Export all data service components
export { ImpactDataProvider, impactDataProvider } from './ImpactDataProvider';

/**
 * React hook to subscribe to real-time impact data updates
 */
export function useImpactData(): {
  metrics: ImpactMetrics | null;
  loading: boolean;
  error: string | null;
} {
  const [metrics, setMetrics] = useState<ImpactMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Get initial data
      const initialMetrics = impactDataProvider.getCurrentMetrics();
      setMetrics(initialMetrics);
      setLoading(false);

      // Subscribe to updates
      const unsubscribe = impactDataProvider.subscribe((updatedMetrics) => {
        setMetrics(updatedMetrics);
        setError(null);
      });

      return unsubscribe;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load impact data');
      setLoading(false);
    }
  }, []);

  return { metrics, loading, error };
}

/**
 * React hook for managing impact data with admin capabilities
 */
export function useImpactDataAdmin(): {
  metrics: ImpactMetrics | null;
  loading: boolean;
  error: string | null;
  updateMetrics: (metrics: ImpactMetrics) => void;
  addImpact: (impact: ImpactMetrics) => void;
  resetMetrics: () => void;
} {
  const { metrics, loading, error } = useImpactData();

  const updateMetrics = (newMetrics: ImpactMetrics) => {
    try {
      impactDataProvider.updateMetrics(newMetrics);
    } catch (err) {
      console.error('Failed to update metrics:', err);
    }
  };

  const addImpact = (additionalImpact: ImpactMetrics) => {
    try {
      impactDataProvider.addImpact(additionalImpact);
    } catch (err) {
      console.error('Failed to add impact:', err);
    }
  };

  const resetMetrics = () => {
    try {
      impactDataProvider.resetMetrics();
    } catch (err) {
      console.error('Failed to reset metrics:', err);
    }
  };

  return {
    metrics,
    loading,
    error,
    updateMetrics,
    addImpact,
    resetMetrics
  };
}