// Basic restaurant information
export interface RestaurantInfo {
  name: string;
  tagline: string;
  description: string;
  cuisine: string[];
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  rating: number;
  totalReviews: number;
}

// Contact & location
export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    googleMapsUrl: string;
  };
}

// Business hours
export interface Hours {
  day: string;
  open: string;
  close: string;
  isClosed?: boolean;
}

// Menu item structure
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isVeg: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
  image?: string;
}

// Menu category
export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

// Gallery image
export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: "food" | "ambience" | "staff" | "events";
}

// Customer review
export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  platform: "Google" | "Zomato" | "Swiggy";
}

// Complete restaurant data structure
export interface RestaurantData {
  info: RestaurantInfo;
  contact: ContactInfo;
  hours: Hours[];
  menu: MenuCategory[];
  gallery: GalleryImage[];
  reviews: Review[];
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}
