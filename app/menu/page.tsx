"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Flame, Star, X } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { restaurantData } from "@/src/config/restaurant-data";

const dietFilters = ["All", "Veg Only", "Non-Veg Only"];

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDietFilter, setActiveDietFilter] = useState("All");

  const menuCategories = restaurantData.menu;

  // Flatten all menu items for search
  const allItems = useMemo(() => {
    return menuCategories.flatMap((category) =>
      category.items.map((item) => ({
        ...item,
        categoryName: category.name,
      }))
    );
  }, []);

  // Filter logic
  const filteredCategories = useMemo(() => {
    return menuCategories
      .map((category) => {
        const filteredItems = category.items.filter((item) => {
          // Search filter
          const matchesSearch =
            searchQuery === "" ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());

          // Diet filter
          const matchesDiet =
            activeDietFilter === "All" ||
            (activeDietFilter === "Veg Only" && item.isVeg) ||
            (activeDietFilter === "Non-Veg Only" && !item.isVeg);

          return matchesSearch && matchesDiet;
        });

        return {
          ...category,
          items: filteredItems,
        };
      })
      .filter((category) => category.items.length > 0);
  }, [searchQuery, activeDietFilter, menuCategories]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl text-orange-100 mb-8">
              Explore our diverse selection of authentic dishes
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-600" />
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-full bg-white/95 backdrop-blur-sm text-gray-900 placeholder:text-orange-400 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg border-2 border-white/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-[73px] z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-3">
            {dietFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveDietFilter(filter)}
                className={cn(
                  "px-6 py-2 rounded-full font-semibold transition-all duration-300",
                  "hover:scale-105",
                  activeDietFilter === filter
                    ? "bg-orange-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredCategories.length > 0 ? (
            <div className="space-y-16">
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">
                      {category.name}
                    </h2>
                  </div>

                  {/* Menu Items Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 group"
                      >
                        <div className="flex items-start gap-4">
                          {/* Item Details */}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {/* Veg/Non-Veg Indicator */}
                              <div
                                className={cn(
                                  "w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0",
                                  item.isVeg
                                    ? "border-green-600"
                                    : "border-red-600"
                                )}
                              >
                                <div
                                  className={cn(
                                    "w-2.5 h-2.5 rounded-full",
                                    item.isVeg ? "bg-green-600" : "bg-red-600"
                                  )}
                                />
                              </div>

                              {/* Item Name */}
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                {item.name}
                              </h3>

                              {/* Badges */}
                              <div className="flex gap-2">
                                {item.isPopular && (
                                  <Star className="w-5 h-5 fill-orange-500 text-orange-500" />
                                )}
                                {item.isSpicy && (
                                  <Flame className="w-5 h-5 text-red-500" />
                                )}
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                              {item.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {item.isPopular && (
                                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                                  Popular
                                </span>
                              )}
                              {item.isSpicy && (
                                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                                  Spicy
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // No Results Message
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                No dishes found
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveDietFilter("All");
                }}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-orange-100 mb-6">
            Call us now or visit our restaurant
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${restaurantData.contact.phone}`}
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transform hover:scale-105 transition-all shadow-lg"
            >
              Call Now
            </a>
            <a
              href={restaurantData.contact.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
