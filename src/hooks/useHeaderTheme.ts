"use client";

import { useState, useEffect } from "react";

export type HeaderTheme = "transparent" | "white" | "dark";

export function useHeaderTheme() {
  const [theme, setTheme] = useState<HeaderTheme>("transparent");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Define section backgrounds manually for precise control
      if (scrollPosition < 100) {
        setTheme("transparent");
      } else if (scrollPosition < 800) {
        setTheme("dark"); // Hero section with dark image
      } else if (scrollPosition < 1600) {
        setTheme("white"); // Features section (gradient to white)
      } else if (scrollPosition < 2400) {
        setTheme("white"); // Menu section (white background)
      } else if (scrollPosition < 3200) {
        setTheme("white"); // Reviews section (gray background)
      } else {
        setTheme("white"); // Contact section (gray background)
      }
    };

    // Intersection Observer for more accurate detection
    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px 0px 0px", // Offset for header height
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target;
          const bgColor = window.getComputedStyle(section).backgroundColor;
          
          // Detect based on section ID or background color
          if (section.id === "hero") {
            setTheme("transparent");
          } else if (bgColor.includes("255, 255, 255")) {
            setTheme("white");
          } else if (bgColor.includes("249, 250, 251") || bgColor.includes("243, 244, 246")) {
            setTheme("white");
          } else {
            setTheme("dark");
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all main sections
    const sections = document.querySelectorAll("main > div, main > section");
    sections.forEach((section) => observer.observe(section));

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return { theme, scrolled };
}
