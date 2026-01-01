"use client";

import dynamic from "next/dynamic";

// Lazy load Reviews component
export const LazyReviews = dynamic(
  () => import("@/src/components/sections/Reviews"),
  {
    loading: () => (
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-200 rounded w-1/3 mx-auto" />
            <div className="h-64 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    ),
  }
);

// Lazy load Contact component (with SSR disabled)
export const LazyContact = dynamic(
  () => import("@/src/components/sections/Contact"),
  {
    loading: () => (
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="animate-pulse h-96 bg-gray-200 rounded" />
        </div>
      </div>
    ),
    ssr: false, // This is now allowed because the file has "use client"
  }
);

// Lazy load Gallery/Menu Section
export const LazyMenuSection = dynamic(
  () => import("@/src/components/sections/MenuSection"),
  {
    loading: () => (
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-6">
            <div className="h-12 bg-gray-200 rounded w-1/4 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-2xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  }
);
