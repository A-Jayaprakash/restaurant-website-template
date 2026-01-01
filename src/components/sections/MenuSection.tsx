"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Star } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { restaurantData } from "@/src/config/restaurant-data";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Get all categories including "All"
  const categories = ["All", ...restaurantData.menu.map((cat) => cat.name)];

  // Get items for preview (first 8 items across all categories)
  const allItems = restaurantData.menu.flatMap((category) => category.items);
  const previewItems = allItems.slice(0, 8);

  // Filter menu items based on active category
  const filteredItems =
    activeCategory === "All"
      ? previewItems
      : restaurantData.menu
          .find((cat) => cat.name === activeCategory)
          ?.items.slice(0, 8) || [];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic dishes
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-3 rounded-full font-semibold transition-all duration-300",
                "hover:scale-105 hover:shadow-md",
                activeCategory === category
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badges Overlay */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {/* Veg/Non-Veg Badge */}
                  <div
                    className={cn(
                      "w-6 h-6 rounded border-2 flex items-center justify-center bg-white",
                      item.isVeg ? "border-green-600" : "border-red-600"
                    )}
                  >
                    <div
                      className={cn(
                        "w-3 h-3 rounded-full",
                        item.isVeg ? "bg-green-600" : "bg-red-600"
                      )}
                    />
                  </div>

                  {/* Popular Badge */}
                  {item.isPopular && (
                    <div className="bg-orange-600 text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
                      <Star className="w-3 h-3 fill-white" />
                      Popular
                    </div>
                  )}
                </div>

                {/* Spicy Indicator */}
                {item.isSpicy && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white p-1.5 rounded-full">
                    <Flame className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">
                    ₹{item.price}
                  </span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors transform hover:scale-105">
                    Add +
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/menu"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View Full Menu
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
