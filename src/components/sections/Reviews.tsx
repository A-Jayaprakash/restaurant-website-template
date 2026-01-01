"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { restaurantData } from "@/src/config/restaurant-data";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const reviews = restaurantData.reviews;
  const { rating, totalReviews } = restaurantData.info;

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  const currentReview = reviews[currentIndex];

  // Generate avatar URL based on author name
  const getAvatarUrl = (name: string) => {
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${name.replace(
      " ",
      ""
    )}`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it – hear from our valued guests
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-1">
              {rating}
            </div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-orange-500 text-orange-500"
                />
              ))}
            </div>
            <div className="text-sm text-gray-600">{totalReviews}+ Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-1">2K+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-1">98%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-orange-50 hover:shadow-xl transition-all group"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-orange-600 transition-colors" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-orange-50 hover:shadow-xl transition-all group"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-orange-600 transition-colors" />
          </button>

          {/* Review Cards Carousel */}
          <div className="relative h-96 md:h-80">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-orange-100">
                    <Quote className="w-16 h-16" />
                  </div>

                  {/* Review Content */}
                  <div className="relative z-10">
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-5 h-5",
                            i < currentReview.rating
                              ? "fill-orange-500 text-orange-500"
                              : "text-gray-300"
                          )}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">
                        {currentReview.rating}.0
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                      "{currentReview.text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={getAvatarUrl(currentReview.author)}
                          alt={currentReview.author}
                          className="w-14 h-14 rounded-full border-2 border-orange-100"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {currentReview.author}
                          </div>
                          <div className="text-sm text-gray-500">
                            {currentReview.date}
                          </div>
                        </div>
                      </div>

                      {/* Platform Badge */}
                      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                        <span className="text-sm font-medium text-gray-700">
                          via {currentReview.platform}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  index === currentIndex
                    ? "w-8 h-3 bg-orange-600"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Join thousands of satisfied customers
          </p>
          <a
            href={`tel:${restaurantData.contact.phone}`}
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Book Your Table Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
