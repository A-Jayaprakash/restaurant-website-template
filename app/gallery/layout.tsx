import { Metadata } from "next";
import { restaurantData } from "@/src/config/restaurant-data";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Browse photos of our delicious food and beautiful restaurant ambience`,
  openGraph: {
    title: `Gallery | ${restaurantData.info.name}`,
    description: `View our photo gallery`,
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
