"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/src/lib/utils";

// Gallery images data
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
    category: "food",
    alt: "Delicious Paneer Tikka",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
    category: "food",
    alt: "Butter Chicken",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    category: "ambience",
    alt: "Restaurant Interior",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    category: "ambience",
    alt: "Cozy Dining Area",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
    category: "food",
    alt: "Biryani Special",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    category: "food",
    alt: "Gourmet Burger",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800",
    category: "ambience",
    alt: "Outdoor Seating",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    category: "ambience",
    alt: "Bar Area",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    category: "food",
    alt: "Pizza Delight",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1589119908995-c963f8f4d0a4?w=800",
    category: "food",
    alt: "Dessert Selection",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
    category: "events",
    alt: "Private Dining Event",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
    category: "events",
    alt: "Celebration Party",
  },
];

const categories = [
  { name: "All", value: "all" },
  { name: "Food", value: "food" },
  { name: "Ambience", value: "ambience" },
  { name: "Events", value: "events" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  // Filter images based on active category
  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-orange-100"
          >
            A visual journey through our culinary excellence
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={cn(
                  "px-6 py-3 rounded-full font-semibold transition-all duration-300",
                  "hover:scale-105 hover:shadow-md",
                  activeCategory === category.value
                    ? "bg-orange-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                )}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Images Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image */}
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 capitalize">
                    {image.category}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results Message */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-500">
                No images found in this category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-xl font-semibold">
                  {selectedImage.alt}
                </p>
                <p className="text-orange-300 capitalize">
                  {selectedImage.category}
                </p>
              </div>
            </motion.div>

            {/* Instructions */}
            <div className="absolute bottom-4 text-white/70 text-sm">
              Click anywhere to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
