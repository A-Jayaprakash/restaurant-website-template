"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { restaurantData, navigationLinks } from "@/src/config/restaurant-data";

type HeaderTheme = "transparent" | "white" | "dark";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerTheme, setHeaderTheme] = useState<HeaderTheme>("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Basic scroll detection for shadow effects
      setScrolled(scrollPosition > 50);

      // Dynamic theme detection based on scroll position and sections
      if (scrollPosition < 80) {
        // At the very top - transparent
        setHeaderTheme("transparent");
      } else {
        // Detect section backgrounds dynamically
        const sections = document.querySelectorAll(
          "main > div, main > section"
        );
        let foundTheme = false;

        sections.forEach((section) => {
          if (foundTheme) return;

          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top;

          // Check if header is currently over this section (with small offset)
          if (sectionTop <= 100 && sectionTop + rect.height > 100) {
            const bgColor = window.getComputedStyle(section).backgroundColor;
            const hasBackgroundImage =
              window.getComputedStyle(section).backgroundImage !== "none";

            // Check for hero section or sections with background images
            if (section.id === "hero" || hasBackgroundImage) {
              setHeaderTheme("transparent");
              foundTheme = true;
            }
            // Check for dark backgrounds
            else if (
              bgColor.includes("rgb(17") ||
              bgColor.includes("rgb(31") ||
              bgColor.includes("rgb(55")
            ) {
              setHeaderTheme("dark");
              foundTheme = true;
            }
            // Check for light/white backgrounds
            else if (
              bgColor.includes("rgb(255, 255, 255)") ||
              bgColor.includes("rgb(249, 250, 251)") ||
              bgColor.includes("rgb(243, 244, 246)")
            ) {
              setHeaderTheme("white");
              foundTheme = true;
            }
          }
        });

        // Fallback: if no section detected, use white theme
        if (!foundTheme && scrollPosition > 80) {
          setHeaderTheme("white");
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener with passive flag for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Dynamic styles based on current theme
  const headerStyles = {
    transparent: "bg-transparent text-white",
    white: "bg-white/95 backdrop-blur-md text-gray-900 shadow-md",
    dark: "bg-gray-900/95 backdrop-blur-md text-white shadow-md",
  };

  const linkStyles = {
    transparent: "text-white hover:text-orange-300",
    white: "text-gray-700 hover:text-orange-600",
    dark: "text-white hover:text-orange-400",
  };

  const logoStyles = {
    transparent: "text-white hover:text-orange-300",
    white: "text-orange-600 hover:text-orange-700",
    dark: "text-white hover:text-orange-400",
  };

  const buttonPrimaryStyles = {
    transparent:
      "text-white border-white/70 hover:bg-white/10 hover:border-white",
    white: "text-orange-600 border-orange-600 hover:bg-orange-50",
    dark: "text-white border-white/70 hover:bg-white/10 hover:border-white",
  };

  const buttonSecondaryStyles = {
    transparent:
      "bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20",
    white: "bg-orange-600 text-white hover:bg-orange-700 shadow-sm",
    dark: "bg-orange-600 text-white hover:bg-orange-700 shadow-sm",
  };

  const mobileMenuBorderStyles = {
    transparent: "border-white/20",
    white: "border-gray-200",
    dark: "border-gray-700",
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out",
        headerStyles[headerTheme]
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Restaurant Name */}
          <Link
            href="/"
            className={cn(
              "text-2xl font-bold transition-colors duration-300",
              logoStyles[headerTheme]
            )}
          >
            {restaurantData.info.name}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors duration-300",
                    linkStyles[headerTheme]
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${restaurantData.contact.phone}`}
              className={cn(
                "flex items-center gap-2 px-4 py-2 border-2 rounded-lg font-medium transition-all duration-300",
                buttonPrimaryStyles[headerTheme]
              )}
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href="#contact"
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300",
                buttonSecondaryStyles[headerTheme]
              )}
            >
              <MapPin className="w-4 h-4" />
              <span>Location</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={cn(
              "md:hidden p-2 transition-colors duration-300",
              linkStyles[headerTheme]
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          )}
        >
          <ul className="flex flex-col space-y-4 pb-4">
            {navigationLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block font-medium transition-colors duration-300",
                    linkStyles[headerTheme]
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li
              className={cn(
                "pt-4 space-y-3 border-t",
                mobileMenuBorderStyles[headerTheme]
              )}
            >
              <a
                href={`tel:${restaurantData.contact.phone}`}
                className={cn(
                  "flex items-center justify-center gap-2 w-full px-4 py-2 border-2 rounded-lg font-medium transition-all duration-300",
                  buttonPrimaryStyles[headerTheme]
                )}
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href="#contact"
                className={cn(
                  "flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg font-medium transition-all duration-300",
                  buttonSecondaryStyles[headerTheme]
                )}
              >
                <MapPin className="w-4 h-4" />
                <span>Location</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
