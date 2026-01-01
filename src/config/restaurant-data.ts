import { RestaurantData } from "@/src/types/restaurant";

export const restaurantData: RestaurantData = {
  // Basic Restaurant Information
  info: {
    name: "Restaurant Name",
    tagline: "Authentic Flavors, Unforgettable Experience",
    description: "Experience culinary excellence where tradition meets innovation. Fresh ingredients, bold flavors, and warm hospitality await you.",
    cuisine: ["Indian", "North Indian", "South Indian", "Biryani"],
    priceRange: "$$",
    rating: 4.8,
    totalReviews: 500
  },

  // Contact Information
  // Contact Information
  // Contact Information
  contact: {
    phone: "+919876543210",
    whatsapp: "+919876543210",
    email: "info@restaurant.com",
    address: {
      street: "123 T. Nagar Main Road",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600017",
      googleMapsUrl: "https://www.google.com/maps/place/T.+Nagar,+Chennai,+Tamil+Nadu/@13.0417,80.2341,15z",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62194.89756409733!2d80.19937842167969!3d13.041730590804128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526650e0b6c595%3A0x4f74ddbff946af6b!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704137000000!5m2!1sen!2sin"
    }
  },



  // Business Hours
  hours: [
    { day: "Monday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Tuesday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Wednesday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Thursday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Friday", open: "11:00 AM", close: "10:00 PM" },
    { day: "Saturday", open: "10:00 AM", close: "11:00 PM" },
    { day: "Sunday", open: "10:00 AM", close: "11:00 PM" }
  ],

  // Menu Data
  menu: [
    {
      name: "Starters",
      items: [
        {
          id: "1",
          name: "Paneer Tikka",
          description: "Grilled cottage cheese cubes marinated in aromatic spices and yogurt",
          price: 280,
          category: "Starters",
          isVeg: true,
          isPopular: true,
          isSpicy: true,
          image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400"
        },
        {
          id: "2",
          name: "Chicken 65",
          description: "Crispy fried chicken tossed with curry leaves, chilies and spices",
          price: 320,
          category: "Starters",
          isVeg: false,
          isPopular: true,
          isSpicy: true,
          image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400"
        },
        {
          id: "3",
          name: "Veg Spring Rolls",
          description: "Crispy rolls filled with fresh vegetables and served with sweet chili sauce",
          price: 220,
          category: "Starters",
          isVeg: true,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400"
        },
        {
          id: "4",
          name: "Fish Fingers",
          description: "Golden fried fish strips with tangy tartar sauce",
          price: 350,
          category: "Starters",
          isVeg: false,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400"
        }
      ]
    },
    {
      name: "Main Course",
      items: [
        {
          id: "5",
          name: "Butter Chicken",
          description: "Tender chicken pieces in rich tomato-butter gravy",
          price: 450,
          category: "Main Course",
          isVeg: false,
          isPopular: true,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400"
        },
        {
          id: "6",
          name: "Palak Paneer",
          description: "Cottage cheese cubes in creamy spinach gravy with aromatic spices",
          price: 350,
          category: "Main Course",
          isVeg: true,
          isPopular: true,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"
        },
        {
          id: "7",
          name: "Dal Makhani",
          description: "Black lentils slow-cooked with butter and cream",
          price: 280,
          category: "Main Course",
          isVeg: true,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400"
        },
        {
          id: "8",
          name: "Mutton Rogan Josh",
          description: "Kashmiri-style mutton curry with aromatic spices",
          price: 520,
          category: "Main Course",
          isVeg: false,
          isPopular: true,
          isSpicy: true,
          image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400"
        },
        {
          id: "9",
          name: "Kadai Paneer",
          description: "Cottage cheese cooked with bell peppers in spicy tomato gravy",
          price: 370,
          category: "Main Course",
          isVeg: true,
          isSpicy: true,
          image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400"
        }
      ]
    },
    {
      name: "Biryani & Rice",
      items: [
        {
          id: "10",
          name: "Hyderabadi Chicken Biryani",
          description: "Fragrant basmati rice layered with tender chicken and exotic spices",
          price: 420,
          category: "Biryani & Rice",
          isVeg: false,
          isPopular: true,
          isSpicy: true,
          image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400"
        },
        {
          id: "11",
          name: "Mutton Biryani",
          description: "Slow-cooked mutton pieces with aromatic basmati rice",
          price: 480,
          category: "Biryani & Rice",
          isVeg: false,
          isPopular: true,
          isSpicy: true,
          image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400"
        },
        {
          id: "12",
          name: "Veg Biryani",
          description: "Aromatic rice with mixed vegetables and traditional spices",
          price: 320,
          category: "Biryani & Rice",
          isVeg: true,
          isSpicy: true,
          image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400"
        },
        {
          id: "13",
          name: "Jeera Rice",
          description: "Steamed basmati rice tempered with cumin seeds",
          price: 180,
          category: "Biryani & Rice",
          isVeg: true,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400"
        }
      ]
    },
    {
      name: "Breads",
      items: [
        {
          id: "14",
          name: "Butter Naan",
          description: "Soft leavened bread brushed with butter",
          price: 60,
          category: "Breads",
          isVeg: true,
          isPopular: true,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400"
        },
        {
          id: "15",
          name: "Garlic Naan",
          description: "Naan topped with fresh garlic and coriander",
          price: 70,
          category: "Breads",
          isVeg: true,
          isPopular: true,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400"
        },
        {
          id: "16",
          name: "Laccha Paratha",
          description: "Multi-layered whole wheat bread",
          price: 80,
          category: "Breads",
          isVeg: true,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400"
        }
      ]
    },
    {
      name: "Desserts",
      items: [
        {
          id: "17",
          name: "Gulab Jamun",
          description: "Soft milk dumplings soaked in rose-flavored sugar syrup",
          price: 120,
          category: "Desserts",
          isVeg: true,
          isPopular: true,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1589119908995-c963f8f4d0a4?w=400"
        },
        {
          id: "18",
          name: "Rasmalai",
          description: "Cottage cheese discs in sweetened milk with cardamom",
          price: 140,
          category: "Desserts",
          isVeg: true,
          isPopular: true,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1606313564220-5e08c0d96e8e?w=400"
        },
        {
          id: "19",
          name: "Ice Cream (3 Scoops)",
          description: "Choice of vanilla, chocolate, or strawberry",
          price: 150,
          category: "Desserts",
          isVeg: true,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400"
        }
      ]
    },
    {
      name: "Beverages",
      items: [
        {
          id: "20",
          name: "Masala Chai",
          description: "Traditional Indian tea brewed with aromatic spices",
          price: 60,
          category: "Beverages",
          isVeg: true,
          isPopular: true,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400"
        },
        {
          id: "21",
          name: "Mango Lassi",
          description: "Refreshing yogurt drink blended with sweet mangoes",
          price: 120,
          category: "Beverages",
          isVeg: true,
          isPopular: true,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400"
        },
        {
          id: "22",
          name: "Fresh Lime Soda",
          description: "Zesty lime with soda and choice of sweet or salt",
          price: 80,
          category: "Beverages",
          isVeg: true,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400"
        },
        {
          id: "23",
          name: "Cold Coffee",
          description: "Chilled coffee shake with ice cream",
          price: 140,
          category: "Beverages",
          isVeg: true,
          isSpicy: false,
          image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400"
        }
      ]
    }
  ],

  // Gallery Images
  gallery: [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
      alt: "Delicious Paneer Tikka",
      category: "food"
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
      alt: "Butter Chicken",
      category: "food"
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
      alt: "Restaurant Interior",
      category: "ambience"
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      alt: "Cozy Dining Area",
      category: "ambience"
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
      alt: "Biryani Special",
      category: "food"
    },
    {
      id: "6",
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
      alt: "Gourmet Burger",
      category: "food"
    },
    {
      id: "7",
      url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800",
      alt: "Outdoor Seating",
      category: "ambience"
    },
    {
      id: "8",
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      alt: "Bar Area",
      category: "ambience"
    },
    {
      id: "9",
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
      alt: "Pizza Delight",
      category: "food"
    },
    {
      id: "10",
      url: "https://images.unsplash.com/photo-1589119908995-c963f8f4d0a4?w=800",
      alt: "Dessert Selection",
      category: "food"
    },
    {
      id: "11",
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
      alt: "Private Dining Event",
      category: "events"
    },
    {
      id: "12",
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      alt: "Celebration Party",
      category: "events"
    }
  ],

  // Customer Reviews
  reviews: [
    {
      id: "1",
      author: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      text: "Absolutely loved the food! The Butter Chicken was divine and the ambience was perfect for a family dinner. The staff was incredibly courteous and attentive. Will definitely visit again!",
      platform: "Google"
    },
    {
      id: "2",
      author: "Rajesh Kumar",
      rating: 5,
      date: "1 month ago",
      text: "Best biryani in Chennai! The flavors were authentic and portion sizes were generous. The restaurant maintains excellent hygiene standards. Highly recommend for anyone craving quality food.",
      platform: "Zomato"
    },
    {
      id: "3",
      author: "Anjali Menon",
      rating: 5,
      date: "3 weeks ago",
      text: "What a delightful experience! The Paneer Tikka was perfectly grilled and the desserts were heavenly. The outdoor seating area has a lovely vibe. Great place for celebrations!",
      platform: "Google"
    },
    {
      id: "4",
      author: "Vikram Reddy",
      rating: 4,
      date: "2 months ago",
      text: "Solid food quality and reasonable prices. The starters were exceptional. Service was quick even during peak hours. Only minor suggestion would be to add more vegetarian options to the menu.",
      platform: "Swiggy"
    },
    {
      id: "5",
      author: "Meera Iyer",
      rating: 5,
      date: "1 week ago",
      text: "Hands down the best dining experience in T. Nagar! The staff remembered our preferences from our last visit. Food arrived hot and fresh. The masala chai is a must-try!",
      platform: "Google"
    }
  ],

  // Social Media Links
  socialMedia: {
    instagram: "https://instagram.com/restaurant",
    facebook: "https://facebook.com/restaurant",
    twitter: "https://twitter.com/restaurant"
  }
};

// Navigation Links
export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" }
];

// Quick Service Links
export const quickLinks = [
  { name: "Order Online", href: "#order" },
  { name: "Table Reservation", href: "#reservation" },
  { name: "Catering Services", href: "#catering" },
  { name: "Private Events", href: "#events" }
];
