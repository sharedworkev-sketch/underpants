import { CatalogSection } from "./components/CatalogSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HeroSection } from "./components/HeroSection";
import { OrderSection } from "./components/OrderSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { SiteFooter } from "./components/SiteFooter";
import { SpecialOfferSection } from "./components/SpecialOfferSection";
import { TopNavBar } from "./components/TopNavBar";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <HeroSection />
      <CatalogSection />
      <FeaturesSection />
      <SpecialOfferSection />
      <ComparisonSection />
      <ReviewsSection />
      <OrderSection />
      <SiteFooter />
    </>
  );
}
