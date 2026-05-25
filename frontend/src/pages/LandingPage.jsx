import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/landing/HeroSection";
import FeatureSection from "../components/landing/FeatureSection";
import AboutSection from "../components/landing/AboutSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";

export default function LandingPage() {
  return (
    <MainLayout>
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </MainLayout>
  );
}