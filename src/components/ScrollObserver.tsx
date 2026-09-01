"use client";

import { useEffect } from "react";

export function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            // Remove the class when it scrolls out of view so it animates again when scrolling back
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.15,
      }
    );

    const initObserver = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    };

    // Small delay to ensure the DOM is fully rendered (including Server Components)
    const timeoutId = setTimeout(initObserver, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return null;
}
