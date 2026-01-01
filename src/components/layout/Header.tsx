"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { restaurantData, navigationLinks } from "@/src/config/restaurant-data";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Restaurant Name */}
          <Link
            href="/"
            className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors"
          >
            {restaurantData.info.name}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
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
              className="flex items-center gap-2 px-4 py-2 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call Now</span>
            </a>
            <a
              href={restaurantData.contact.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Location</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
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
                  className="block text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-gray-200 space-y-3">
              <a
                href={`tel:${restaurantData.contact.phone}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-2 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call Now</span>
              </a>
              <a
                href={restaurantData.contact.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Location</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
