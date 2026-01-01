"use client";

import { motion } from "framer-motion";
import { Phone, UtensilsCrossed, MapPin } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { restaurantData } from "@/src/config/restaurant-data";

export default function Hero() {
  const { info, contact, hours } = restaurantData;
  const weekdayHours = hours.find((h) => h.day === "Monday");

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070')",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-orange-600/90 text-white rounded-full text-sm font-semibold">
              ⭐ Rated {info.rating} | {info.totalReviews}+ Reviews
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {info.tagline.split(", ")[0]},{" "}
            <span className="text-orange-500">
              {info.tagline.split(", ")[1]}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed"
          >
            {info.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary CTA */}
            <a
              href="/menu"
              className={cn(
                "flex items-center justify-center gap-3 px-8 py-4",
                "bg-orange-600 text-white rounded-lg font-semibold text-lg",
                "hover:bg-orange-700 transform hover:scale-105",
                "transition-all duration-300 shadow-lg hover:shadow-xl"
              )}
            >
              <UtensilsCrossed className="w-5 h-5" />
              View Menu
            </a>

            {/* Secondary CTA */}
            <a
              href={`tel:${contact.phone}`}
              className={cn(
                "flex items-center justify-center gap-3 px-8 py-4",
                "bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg",
                "border-2 border-white/30 hover:bg-white/20",
                "transform hover:scale-105 transition-all duration-300"
              )}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>

            {/* Tertiary CTA */}
            <a
              href="#contact"
              className={cn(
                "flex items-center justify-center gap-3 px-8 py-4",
                "bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg",
                "border-2 border-white/30 hover:bg-white/20",
                "transform hover:scale-105 transition-all duration-300"
              )}
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-6 text-white/90"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🕐</span>
              <span className="text-sm md:text-base">
                Open Daily: {weekdayHours?.open} - {weekdayHours?.close}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍽️</span>
              <span className="text-sm md:text-base">
                Dine-in • Takeaway • Delivery
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <span className="text-sm md:text-base">
                {contact.address.city}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
