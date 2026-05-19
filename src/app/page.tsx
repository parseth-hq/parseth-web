import HeroSection from "@/components/home/HeroSection";
import StanceSection from "@/components/home/StanceSection";
import EngagementSection from "@/components/home/EngagementSection";
import ClosingSection from "@/components/home/ClosingSection";

export default function Home() {
  return (
    <main className="snap-layout">
      <HeroSection />
      <StanceSection />
      <EngagementSection />
      <ClosingSection />
    </main>
  );
}
