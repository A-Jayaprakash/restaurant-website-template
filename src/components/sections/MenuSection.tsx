"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Star } from "lucide-react";
import { cn } from "@/src/lib/utils";

// Sample menu data - we'll move this to config later
const menuData = {
  categories: [
    "All",
    "Starters",
    "Main Course",
    "Biryani",
    "Desserts",
    "Beverages",
  ],
  items: [
    {
      id: 1,
      name: "Paneer Tikka",
      description: "Grilled cottage cheese cubes marinated in aromatic spices",
      price: 280,
      category: "Starters",
      isVeg: true,
      isPopular: true,
      isSpicy: true,
      image:
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400",
    },
    {
      id: 2,
      name: "Chicken 65",
      description: "Crispy fried chicken tossed with curry leaves and spices",
      price: 320,
      category: "Starters",
      isVeg: false,
      isPopular: true,
      isSpicy: true,
      image:
        "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400",
    },
    {
      id: 3,
      name: "Butter Chicken",
      description: "Tender chicken in rich tomato-butter gravy",
      price: 450,
      category: "Main Course",
      isVeg: false,
      isPopular: true,
      isSpicy: false,
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
    },
    {
      id: 4,
      name: "Palak Paneer",
      description: "Cottage cheese cubes in creamy spinach gravy",
      price: 350,
      category: "Main Course",
      isVeg: true,
      isPopular: false,
      isSpicy: false,
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
    },
    {
      id: 5,
      name: "Hyderabadi Biryani",
      description: "Fragrant basmati rice layered with tender meat and spices",
      price: 420,
      category: "Biryani",
      isVeg: false,
      isPopular: true,
      isSpicy: true,
      image:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
    },
    {
      id: 6,
      name: "Veg Biryani",
      description: "Aromatic rice with mixed vegetables and exotic spices",
      price: 320,
      category: "Biryani",
      isVeg: true,
      isPopular: false,
      isSpicy: true,
      image:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
    },
    {
      id: 7,
      name: "Gulab Jamun",
      description: "Soft milk dumplings soaked in rose-flavored sugar syrup",
      price: 120,
      category: "Desserts",
      isVeg: true,
      isPopular: true,
      isSpicy: false,
      image:
        "https://images.unsplash.com/photo-1589119908995-c963f8f4d0a4?w=400",
    },
    {
      id: 8,
      name: "Masala Chai",
      description: "Traditional Indian tea brewed with aromatic spices",
      price: 60,
      category: "Beverages",
      isVeg: true,
      isPopular: true,
      isSpicy: false,
      image:
        "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400",
    },
  ],
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter menu items based on active category
  const filteredItems =
    activeCategory === "All"
      ? menuData.items
      : menuData.items.filter((item) => item.category === activeCategory);

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
          {menuData.categories.map((category) => (
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
