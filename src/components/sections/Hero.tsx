"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Star,
  Clock,
  MapPin,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { restaurantData } from "@/src/config/restaurant-data";

export default function Hero() {
  const { info, contact, hours } = restaurantData;
  const weekdayHours = hours.find((h) => h.day === "Monday");

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
          alt="Restaurant ambience"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 rounded-full mb-8 shadow-xl"
          >
            <Star className="w-5 h-5 text-white fill-white" />
            <span className="text-white font-bold text-lg">
              Rated {info.rating} | {info.totalReviews}+ Reviews
            </span>
          </motion.div>

          {/* Decorative Text "Discover" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-orange-400 text-3xl md:text-5xl font-serif italic">
              Discover
            </span>
          </motion.div>

          {/* Restaurant Name - Large & Prominent */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight leading-none"
          >
            {info.name.toUpperCase()}
          </motion.h1>

          {/* Decorative Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-6 mb-10"
          >
            <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent to-orange-500" />
            <UtensilsCrossed className="w-10 h-10 text-orange-500" />
            <div className="h-px w-24 md:w-32 bg-gradient-to-l from-transparent to-orange-500" />
          </motion.div>

          {/* Tagline/Caption */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl text-white font-light mb-8 leading-relaxed"
          >
            {info.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {info.description}
          </motion.p>

          {/* Info Bar - Opening Hours & Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="inline-flex flex-wrap items-center justify-center gap-6 md:gap-8 text-white/90 bg-black/30 backdrop-blur-md rounded-2xl px-8 py-5 border border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="bg-orange-600/20 p-2 rounded-lg">
                <Clock className="w-5 h-5 text-orange-400" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/60 uppercase tracking-wider mb-0.5">
                  Opening Hours
                </p>
                <p className="text-sm md:text-base font-semibold">
                  {weekdayHours?.open} - {weekdayHours?.close}
                </p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-white/20" />

            <div className="flex items-center gap-3">
              <div className="bg-orange-600/20 p-2 rounded-lg">
                <span className="text-2xl">🍽️</span>
              </div>
              <div className="text-left">
                <p className="text-xs text-white/60 uppercase tracking-wider mb-0.5">
                  Services
                </p>
                <p className="text-sm md:text-base font-semibold">
                  Dine-in • Takeaway • Delivery
                </p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-white/20" />

            <div className="flex items-center gap-3">
              <div className="bg-orange-600/20 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-orange-400" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/60 uppercase tracking-wider mb-0.5">
                  Location
                </p>
                <p className="text-sm md:text-base font-semibold">
                  {contact.address.city}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.4,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <div className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors">
          <span className="text-xs md:text-sm font-medium tracking-widest uppercase">
            Scroll to Explore
          </span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1 hover:border-white transition-colors">
            <ChevronDown className="w-4 h-4 animate-bounce mx-auto" />
          </div>
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    </section>
  );
}
