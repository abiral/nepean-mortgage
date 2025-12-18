import { useState, useEffect, useCallback } from 'react';

interface UseOptimizedImageOptions {
  priority?: 'high' | 'low' | 'auto';
  loading?: 'eager' | 'lazy';
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const useOptimizedImage = (
  src: string | undefined,
  options: UseOptimizedImageOptions = {}
) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  const {
    priority = 'auto',
    loading = 'lazy',
    onLoad,
    onError
  } = options;

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    
    const handleLoad = () => {
      setIsLoaded(true);
      setIsError(false);
      onLoad?.();
    };

    const handleError = () => {
      setIsError(true);
      setIsLoaded(false);
      onError?.();
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);
    
    // Start loading the image
    img.src = src;
    setImage(img);

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src, onLoad, onError]);

  const imageProps = useCallback(() => ({
    src,
    loading,
    fetchPriority: priority,
    decoding: priority === 'high' ? 'sync' : 'async',
    style: {
      opacity: isLoaded ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out',
    }
  }), [src, loading, priority, isLoaded]);

  return {
    isLoaded,
    isError,
    imageProps,
    preloadedImage: image
  };
};

// Hook for critical images that should be preloaded immediately
export const useCriticalImage = (src: string | undefined, onLoad?: () => void) => {
  return useOptimizedImage(src, {
    priority: 'high',
    loading: 'eager',
    onLoad
  });
};

// Hook for lazy loaded images
export const useLazyImage = (src: string | undefined) => {
  return useOptimizedImage(src, {
    priority: 'low',
    loading: 'lazy'
  });
};