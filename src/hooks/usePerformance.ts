import { useEffect } from 'react';

/**
 * Hook to prevent forced reflows by batching DOM reads and writes
 * and providing utilities for performance-conscious DOM operations
 */
export const usePerformanceOptimizations = () => {
  useEffect(() => {
    // Batch DOM operations using requestAnimationFrame
    let rafId: number;
    const domOperations: (() => void)[] = [];

    const flushOperations = () => {
      domOperations.forEach(op => op());
      domOperations.length = 0;
    };

    const batchDOMOperation = (operation: () => void) => {
      domOperations.push(operation);
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          flushOperations();
          rafId = 0;
        });
      }
    };

    // Add to global scope for components to use
    (window as any).__batchDOMOperation = batchDOMOperation;

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Utility functions for performance-conscious operations
  const measureElement = (element: HTMLElement) => {
    return new Promise<DOMRect>((resolve) => {
      requestAnimationFrame(() => {
        resolve(element.getBoundingClientRect());
      });
    });
  };

  const updateElementStyle = (element: HTMLElement, styles: Partial<CSSStyleDeclaration>) => {
    if ((window as any).__batchDOMOperation) {
      (window as any).__batchDOMOperation(() => {
        Object.assign(element.style, styles);
      });
    } else {
      Object.assign(element.style, styles);
    }
  };

  return {
    measureElement,
    updateElementStyle,
  };
};

/**
 * Hook to detect and minimize layout shifts
 */
export const useLayoutShiftOptimization = () => {
  useEffect(() => {
    // Create a ResizeObserver to track layout shifts
    const resizeObserver = new ResizeObserver((entries) => {
      // Batch style updates to prevent multiple reflows
      requestAnimationFrame(() => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          // Add smooth transition for size changes
          if (!element.style.transition.includes('height') && !element.style.transition.includes('width')) {
            element.style.transition = element.style.transition 
              ? `${element.style.transition}, width 0.2s ease, height 0.2s ease`
              : 'width 0.2s ease, height 0.2s ease';
          }
        });
      });
    });

    // Observe elements that commonly cause layout shifts
    const observeElement = (selector: string) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => resizeObserver.observe(el));
    };

    // Common elements that cause layout shifts
    observeElement('img');
    observeElement('[data-dynamic-height]');
    observeElement('.hero-image');
    observeElement('.modal');

    return () => {
      resizeObserver.disconnect();
    };
  }, []);
};

/**
 * Hook to optimize long tasks by breaking them into smaller chunks
 */
export const useTaskOptimization = () => {
  const yieldToMain = () => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, 0);
    });
  };

  const scheduleTask = (task: () => void, priority: 'high' | 'normal' | 'low' = 'normal') => {
    const delay = priority === 'high' ? 0 : priority === 'normal' ? 5 : 16;
    
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        task();
        resolve();
      }, delay);
    });
  };

  const breakLongTask = async (tasks: (() => void)[], batchSize = 5) => {
    for (let i = 0; i < tasks.length; i += batchSize) {
      const batch = tasks.slice(i, i + batchSize);
      batch.forEach(task => task());
      
      if (i + batchSize < tasks.length) {
        await yieldToMain();
      }
    }
  };

  return {
    yieldToMain,
    scheduleTask,
    breakLongTask,
  };
};