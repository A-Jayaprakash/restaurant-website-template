import { Metadata } from "next";
import { restaurantData } from "@/src/config/restaurant-data";

export const metadata: Metadata = {
  title: "Menu",
  description: `Explore our diverse menu featuring ${restaurantData.info.cuisine.join(
    ", "
  )} cuisine`,
  openGraph: {
    title: `Menu | ${restaurantData.info.name}`,
    description: `View our full menu with authentic dishes`,
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
