import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/landing/HeroSection";
import FeatureSection from "../components/landing/FeatureSection";

export default function LandingPage() {
  return (
    <MainLayout>
      <HeroSection />
      <FeatureSection />
    </MainLayout>
  );
}