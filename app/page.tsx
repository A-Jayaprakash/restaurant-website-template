import Hero from "@/src/components/sections/Hero";
import Features from "@/src/components/sections/Features";
import MenuSection from "@/src/components/sections/MenuSection";
import { LazyReviews, LazyContact } from "@/src/components/LazyComponents";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <MenuSection />
      <LazyReviews />
      <LazyContact />
    </main>
  );
}
