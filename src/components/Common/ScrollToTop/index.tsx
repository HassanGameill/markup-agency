"use client"
import { useEffect, useState, useCallback } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Memoize the toggleVisibility function to avoid unnecessary re-renders
  const toggleVisibility = useCallback(() => {
    setIsVisible(window.pageYOffset > 300);
  }, []);

  // Use a more efficient scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smoothly to the top with a configurable speed
  const scrollToTop = (duration = 500) => {
    const start = performance.now();
    const startY = window.pageYOffset;
    const scrollStep = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const scrollTo = startY + (0 - startY) * progress;
      window.scrollTo(0, scrollTo);
      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <button
          onClick={() => scrollToTop(500)} // Adjust duration as needed
          aria-label="Scroll to top"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-blueMain dark:bg-orangeMain text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
        </button>
      )}
    </div>
  );
}