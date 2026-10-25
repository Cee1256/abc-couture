import { Bestsellers } from "@/components/home/Bestsellers";
import { BrandIntro } from "@/components/home/BrandIntro";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { EditorialSection } from "@/components/home/EditorialSection";
import { Hero } from "@/components/home/Hero";
import { NewArrivals } from "@/components/home/NewArrivals";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <NewArrivals />
      <Bestsellers />
      <EditorialSection />
      <BrandIntro />
      <Newsletter />
    </>
  );
}
