"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Flame, Star, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

// Comprehensive menu data
const menuCategories = [
  {
    name: "Starters",
    description: "Begin your culinary journey",
    items: [
      {
        id: 1,
        name: "Paneer Tikka",
        description:
          "Grilled cottage cheese cubes marinated in aromatic spices and yogurt",
        price: 280,
        isVeg: true,
        isPopular: true,
        isSpicy: true,
      },
      {
        id: 2,
        name: "Chicken 65",
        description:
          "Crispy fried chicken tossed with curry leaves, chilies and spices",
        price: 320,
        isVeg: false,
        isPopular: true,
        isSpicy: true,
      },
      {
        id: 3,
        name: "Veg Spring Rolls",
        description:
          "Crispy rolls filled with fresh vegetables and served with sweet chili sauce",
        price: 220,
        isVeg: true,
        isPopular: false,
        isSpicy: false,
      },
      {
        id: 4,
        name: "Fish Fingers",
        description: "Golden fried fish strips with tangy tartar sauce",
        price: 350,
        isVeg: false,
        isPopular: false,
        isSpicy: false,
      },
    ],
  },
  {
    name: "Main Course",
    description: "Hearty dishes to satisfy your appetite",
    items: [
      {
        id: 5,
        name: "Butter Chicken",
        description: "Tender chicken pieces in rich tomato-butter gravy",
        price: 450,
        isVeg: false,
        isPopular: true,
        isSpicy: false,
      },
      {
        id: 6,
        name: "Palak Paneer",
        description:
          "Cottage cheese cubes in creamy spinach gravy with aromatic spices",
        price: 350,
        isVeg: true,
        isPopular: true,
        isSpicy: false,
      },
      {
        id: 7,
        name: "Dal Makhani",
        description: "Black lentils slow-cooked with butter and cream",
        price: 280,
        isVeg: true,
        isPopular: false,
        isSpicy: false,
      },
      {
        id: 8,
        name: "Mutton Rogan Josh",
        description: "Kashmiri-style mutton curry with aromatic spices",
        price: 520,
        isVeg: false,
        isPopular: true,
        isSpicy: true,
      },
      {
        id: 9,
        name: "Kadai Paneer",
        description:
          "Cottage cheese cooked with bell peppers in spicy tomato gravy",
        price: 370,
        isVeg: true,
        isPopular: false,
        isSpicy: true,
      },
    ],
  },
  {
    name: "Biryani & Rice",
    description: "Fragrant rice dishes",
    items: [
      {
        id: 10,
        name: "Hyderabadi Chicken Biryani",
        description:
          "Fragrant basmati rice layered with tender chicken and exotic spices",
        price: 420,
        isVeg: false,
        isPopular: true,
        isSpicy: true,
      },
      {
        id: 11,
        name: "Mutton Biryani",
        description: "Slow-cooked mutton pieces with aromatic basmati rice",
        price: 480,
        isVeg: false,
        isPopular: true,
        isSpicy: true,
      },
      {
        id: 12,
        name: "Veg Biryani",
        description:
          "Aromatic rice with mixed vegetables and traditional spices",
        price: 320,
        isVeg: true,
        isPopular: false,
        isSpicy: true,
      },
      {
        id: 13,
        name: "Jeera Rice",
        description: "Steamed basmati rice tempered with cumin seeds",
        price: 180,
        isVeg: true,
        isPopular: false,
        isSpicy: false,
      },
    ],
  },
  {
    name: "Breads",
    description: "Freshly baked in tandoor",
    items: [
      {
        id: 14,
        name: "Butter Naan",
        description: "Soft leavened bread brushed with butter",
        price: 60,
        isVeg: true,
        isPopular: true,
        isSpicy: false,
      },
      {
        id: 15,
        name: "Garlic Naan",
        description: "Naan topped with fresh garlic and coriander",
        price: 70,
        isVeg: true,
        isPopular: true,
        isSpicy: false,
      },
      {
        id: 16,
        name: "Laccha Paratha",
        description: "Multi-layered whole wheat bread",
        price: 80,
        isVeg: true,
        isPopular: false,
        isSpicy: false,
      },
    ],
  },
  {
    name: "Desserts",
    description: "Sweet endings",
    items: [
      {
        id: 17,
        name: "Gulab Jamun",
        description: "Soft milk dumplings soaked in rose-flavored sugar syrup",
        price: 120,
        isVeg: true,
        isPopular: true,
        isSpicy: false,
      },
      {
        id: 18,
        name: "Rasmalai",
        description: "Cottage cheese discs in sweetened milk with cardamom",
        price: 140,
        isVeg: true,
        isPopular: true,
        isSpicy: false,
      },
      {
        id: 19,
        name: "Ice Cream (3 Scoops)",
        description: "Choice of vanilla, chocolate, or strawberry",
        price: 150,
        isVeg: true,
        isPopular: false,
        isSpicy: false,
      },
    ],
  },
  {
    name: "Beverages",
    description: "Refreshing drinks",
    items: [
      {
        id: 20,
        name: "Masala Chai",
        description: "Traditional Indian tea brewed with aromatic spices",
        price: 60,
        isVeg: true,
        isPopular: true,
        isSpicy: false,
      },
      {
        id: 21,
        name: "Mango Lassi",
        description: "Refreshing yogurt drink blended with sweet mangoes",
        price: 120,
        isVeg: true,
        isPopular: true,
        isSpicy: false,
      },
      {
        id: 22,
        name: "Fresh Lime Soda",
        description: "Zesty lime with soda and choice of sweet or salt",
        price: 80,
        isVeg: true,
        isPopular: false,
        isSpicy: false,
      },
      {
        id: 23,
        name: "Cold Coffee",
        description: "Chilled coffee shake with ice cream",
        price: 140,
        isVeg: true,
        isPopular: false,
        isSpicy: false,
      },
    ],
  },
];

const dietFilters = ["All", "Veg Only", "Non-Veg Only"];

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDietFilter, setActiveDietFilter] = useState("All");

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
  }, [searchQuery, activeDietFilter]);

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

            {/* Search Bar - Updated Color */}
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
                    <p className="text-gray-600 text-lg">
                      {category.description}
                    </p>
                  </div>

                  {/* Menu Items Grid - Removed Prices and Add Buttons */}
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
              href="tel:+919876543210"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transform hover:scale-105 transition-all shadow-lg"
            >
              Call Now
            </a>
            <a
              href="#location"
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
