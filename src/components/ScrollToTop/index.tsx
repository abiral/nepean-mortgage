import React, { useState, useEffect } from "react";
import "./index.css";
import type { ScrollToTopProps } from "./ScrollToTop.types";

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  threshold = 300,
  duration = 500,
  className = "",
  position = "bottom-right",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Debounced scroll handler for better performance
  useEffect(() => {
    let timeoutId: number;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          try {
            const currentScrollY = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;

            // Only show button if page is scrollable and user has scrolled past threshold
            const isPageScrollable = documentHeight > windowHeight;
            setIsVisible(isPageScrollable && currentScrollY > threshold);

            // Clear existing timeout
            if (timeoutId) {
              clearTimeout(timeoutId);
            }

            // Debounce scroll events
            timeoutId = setTimeout(() => {
              // Additional scroll handling if needed
            }, 150);
          } catch (error) {
            console.warn("ScrollToTop: Error in scroll handler:", error);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check for page scrollability
    handleScroll();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [threshold]);

  // Smooth scroll to top function
  const scrollToTop = () => {
    try {
      // Check if browser supports smooth scrolling
      if ("scrollBehavior" in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        // Fallback for older browsers
        const scrollStep = -window.scrollY / (duration / 15);
        const scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15);
      }

      // Hide button after scroll starts (for smooth behavior)
      setTimeout(() => {
        if (window.scrollY <= threshold) {
          setIsVisible(false);
        }
      }, duration);
    } catch (error) {
      console.warn("ScrollToTop: Error during scroll operation:", error);
      // Fallback: try basic scroll without smooth behavior
      try {
        window.scrollTo(0, 0);
      } catch (fallbackError) {
        console.error(
          "ScrollToTop: Critical error - unable to scroll:",
          fallbackError
        );
      }
    }
  };

  // Handle keyboard events
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToTop();
    }
  };

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <button
      className={`scroll-to-top ${position} ${className}`}
      aria-label="Scroll to top of page"
      aria-describedby="scroll-to-top-description"
      type="button"
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <span aria-hidden="true">↑</span>
      <span id="scroll-to-top-description" className="sr-only">
        Click to scroll to the top of the page
      </span>
    </button>
  );
};

export default ScrollToTop;
