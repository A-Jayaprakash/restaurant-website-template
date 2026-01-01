import { Metadata } from "next";
import { restaurantData } from "@/src/config/restaurant-data";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about our story, mission, and the team behind ${restaurantData.info.name}`,
  openGraph: {
    title: `About Us | ${restaurantData.info.name}`,
    description: `Discover our journey and values`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
