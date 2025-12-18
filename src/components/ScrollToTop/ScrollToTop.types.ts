/**
 * Props interface for the ScrollToTop component
 */
export interface ScrollToTopProps {
  /** Scroll threshold in pixels before button appears (default: 300) */
  threshold?: number;

  /** Scroll animation duration in milliseconds (default: 500) */
  duration?: number;

  /** Additional CSS classes to apply to the button */
  className?: string;

  /** Position of the button on screen (default: 'bottom-right') */
  position?: "bottom-right" | "bottom-left";
}

/**
 * Internal scroll state management interface
 */
export interface ScrollState {
  /** Whether the button should be visible */
  isVisible: boolean;

  /** Current scroll position in pixels */
  scrollY: number;

  /** Whether the user is currently scrolling */
  isScrolling: boolean;
}

/**
 * Configuration options for scroll behavior
 */
export interface ScrollConfig {
  /** Scroll threshold in pixels */
  threshold: number;

  /** Animation duration in milliseconds */
  duration: number;

  /** CSS easing function for animations */
  easing: "ease" | "ease-in" | "ease-out" | "ease-in-out";
}

/**
 * Scroll event handler function type
 */
export type ScrollEventHandler = () => void;

/**
 * Keyboard event handler function type for button interactions
 */
export type KeyboardEventHandler = (
  event: React.KeyboardEvent<HTMLButtonElement>
) => void;

/**
 * Click event handler function type for button interactions
 */
export type ClickEventHandler = (
  event: React.MouseEvent<HTMLButtonElement>
) => void;
