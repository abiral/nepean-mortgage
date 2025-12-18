import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const metrics: PerformanceMetrics = {};

    // Measure Core Web Vitals
    const observePerformance = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            metrics.lcp = lastEntry.startTime;
            
            // Send to analytics (replace with your analytics service)
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                name: 'LCP',
                value: Math.round(lastEntry.startTime),
                event_category: 'Web Vitals',
              });
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // Cumulative Layout Shift (CLS)
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            for (const entry of list.getEntries() as any[]) {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            }
            metrics.cls = clsValue;
            
            if (window.gtag && clsValue > 0) {
              window.gtag('event', 'web_vitals', {
                name: 'CLS',
                value: Math.round(clsValue * 1000),
                event_category: 'Web Vitals',
              });
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // First Input Delay (FID)
          const fidObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries() as any[]) {
              metrics.fid = entry.processingStart - entry.startTime;
              
              if (window.gtag) {
                window.gtag('event', 'web_vitals', {
                  name: 'FID',
                  value: Math.round(entry.processingStart - entry.startTime),
                  event_category: 'Web Vitals',
                });
              }
            }
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // First Contentful Paint (FCP)
          const fcpObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries() as any[]) {
              if (entry.name === 'first-contentful-paint') {
                metrics.fcp = entry.startTime;
                
                if (window.gtag) {
                  window.gtag('event', 'web_vitals', {
                    name: 'FCP',
                    value: Math.round(entry.startTime),
                    event_category: 'Web Vitals',
                  });
                }
              }
            }
          });
          fcpObserver.observe({ entryTypes: ['paint'] });

        } catch (error) {
          console.warn('Performance monitoring failed:', error);
        }
      }

      // Time to First Byte (TTFB)
      if (window.performance && window.performance.timing) {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
        if (navigationEntry) {
          metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'TTFB',
              value: Math.round(metrics.ttfb),
              event_category: 'Web Vitals',
            });
          }
        }
      }
    };

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries() as any[]) {
            // Log tasks longer than 50ms
            if (entry.duration > 50) {
              console.warn(`Long task detected: ${entry.duration}ms`);
              
              if (window.gtag) {
                window.gtag('event', 'long_task', {
                  value: Math.round(entry.duration),
                  event_category: 'Performance',
                });
              }
            }
          }
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (error) {
        console.warn('Long task monitoring failed:', error);
      }
    }

    // Start observing performance
    observePerformance();

    // Send performance metrics on page unload
    const sendBeacon = () => {
      if ('sendBeacon' in navigator && Object.keys(metrics).length > 0) {
        navigator.sendBeacon('/analytics/performance', JSON.stringify(metrics));
      }
    };

    window.addEventListener('beforeunload', sendBeacon);

    return () => {
      window.removeEventListener('beforeunload', sendBeacon);
    };
  }, []);

  return null;
};

// Extend global Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default PerformanceMonitor;