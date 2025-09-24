import { ImpactMetrics } from '../types';
import { INITIAL_IMPACT_DATA } from '../constants';
import { addImpactMetrics, generateRealtimeIncrement } from '../utils/calculations';

const STORAGE_KEY = 'circular-economy-impact-data';
const LAST_UPDATE_KEY = 'circular-economy-last-update';

export class ImpactDataProvider {
  private static instance: ImpactDataProvider;
  private currentMetrics: ImpactMetrics;
  private updateInterval: NodeJS.Timeout | null = null;
  private subscribers: ((metrics: ImpactMetrics) => void)[] = [];

  private constructor() {
    this.currentMetrics = this.loadFromStorage() || INITIAL_IMPACT_DATA;
    this.startRealtimeUpdates();
  }

  public static getInstance(): ImpactDataProvider {
    if (!ImpactDataProvider.instance) {
      ImpactDataProvider.instance = new ImpactDataProvider();
    }
    return ImpactDataProvider.instance;
  }

  /**
   * Get current impact metrics
   */
  public getCurrentMetrics(): ImpactMetrics {
    return { ...this.currentMetrics };
  }

  /**
   * Subscribe to real-time updates
   */
  public subscribe(callback: (metrics: ImpactMetrics) => void): () => void {
    this.subscribers.push(callback);
    
    // Return unsubscribe function
    return () => {
      const index = this.subscribers.indexOf(callback);
      if (index > -1) {
        this.subscribers.splice(index, 1);
      }
    };
  }

  /**
   * Manually update metrics (for admin/testing purposes)
   */
  public updateMetrics(newMetrics: ImpactMetrics): void {
    this.currentMetrics = { ...newMetrics, lastUpdated: new Date() };
    this.saveToStorage();
    this.notifySubscribers();
  }

  /**
   * Add impact from new refurbished devices
   */
  public addImpact(additionalImpact: ImpactMetrics): void {
    this.currentMetrics = addImpactMetrics(this.currentMetrics, additionalImpact);
    this.currentMetrics.lastUpdated = new Date();
    this.saveToStorage();
    this.notifySubscribers();
  }

  /**
   * Reset metrics to initial values (for testing)
   */
  public resetMetrics(): void {
    this.currentMetrics = { ...INITIAL_IMPACT_DATA, lastUpdated: new Date() };
    this.saveToStorage();
    this.notifySubscribers();
  }

  /**
   * Start real-time updates simulation
   */
  private startRealtimeUpdates(): void {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }

    this.updateInterval = setInterval(() => {
      const increment = generateRealtimeIncrement(this.currentMetrics, 0.0001); // 0.01% increase
      this.currentMetrics = addImpactMetrics(this.currentMetrics, increment);
      this.currentMetrics.lastUpdated = new Date();
      this.saveToStorage();
      this.notifySubscribers();
    }, 5000); // Update every 5 seconds
  }

  /**
   * Stop real-time updates
   */
  public stopRealtimeUpdates(): void {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }

  /**
   * Load metrics from localStorage
   */
  private loadFromStorage(): ImpactMetrics | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const lastUpdate = localStorage.getItem(LAST_UPDATE_KEY);
      
      if (stored && lastUpdate) {
        const metrics = JSON.parse(stored);
        metrics.lastUpdated = new Date(lastUpdate);
        
        // Validate the structure
        if (this.isValidMetrics(metrics)) {
          return metrics;
        }
      }
    } catch (error) {
      console.warn('Failed to load impact data from storage:', error);
    }
    
    return null;
  }

  /**
   * Save metrics to localStorage
   */
  private saveToStorage(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        ...this.currentMetrics,
        lastUpdated: undefined // Don't store the date object directly
      }));
      localStorage.setItem(LAST_UPDATE_KEY, this.currentMetrics.lastUpdated.toISOString());
    } catch (error) {
      console.warn('Failed to save impact data to storage:', error);
    }
  }

  /**
   * Validate metrics structure
   */
  private isValidMetrics(metrics: any): metrics is ImpactMetrics {
    return (
      typeof metrics === 'object' &&
      typeof metrics.eWasteDiverted === 'number' &&
      typeof metrics.carbonReduced === 'number' &&
      typeof metrics.valueCreated === 'number' &&
      typeof metrics.resourcesSaved === 'object' &&
      typeof metrics.resourcesSaved.copper === 'number' &&
      typeof metrics.resourcesSaved.gold === 'number' &&
      typeof metrics.resourcesSaved.silver === 'number' &&
      typeof metrics.resourcesSaved.aluminum === 'number' &&
      typeof metrics.resourcesSaved.rareEarths === 'number'
    );
  }

  /**
   * Notify all subscribers of updates
   */
  private notifySubscribers(): void {
    const metrics = this.getCurrentMetrics();
    this.subscribers.forEach(callback => {
      try {
        callback(metrics);
      } catch (error) {
        console.error('Error in impact data subscriber:', error);
      }
    });
  }

  /**
   * Cleanup resources
   */
  public destroy(): void {
    this.stopRealtimeUpdates();
    this.subscribers = [];
  }
}

// Export singleton instance
export const impactDataProvider = ImpactDataProvider.getInstance();