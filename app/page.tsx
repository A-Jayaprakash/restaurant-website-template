import Hero from "@/src/components/sections/Hero";
import Features from "@/src/components/sections/Features";
import MenuSection from "@/src/components/sections/MenuSection";
import Reviews from "@/src/components/sections/Reviews";
import Contact from "@/src/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <MenuSection />
      <Reviews />
      <Contact />
    </main>
  );
}
