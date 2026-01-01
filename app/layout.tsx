import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import { restaurantData } from "@/src/config/restaurant-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${restaurantData.info.name} | ${restaurantData.info.tagline}`,
    template: `%s | ${restaurantData.info.name}`,
  },
  description: restaurantData.info.description,
  keywords: [
    "restaurant",
    "food",
    "dining",
    restaurantData.contact.address.city,
    ...restaurantData.info.cuisine,
  ],
  // ... rest of metadata
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
