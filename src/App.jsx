import React from "react";
import HeroSection from "./Hero/HeroSection";
import ProductivityShowcase from "./Benefits/ProductivitySection";
import SuccessSection from "./Features/Features-1/StrategySection";
import VisualSection from "./Features/Features-2/InformationSection";
import PricingSection from "./Pricing/PricingSection";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="bg-[#000000] h-full">
      <HeroSection />
      <ProductivityShowcase />
      <SuccessSection />
      <VisualSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;
