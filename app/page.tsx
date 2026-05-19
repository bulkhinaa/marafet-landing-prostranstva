import { HeroSection } from "@/components/sections/Hero/HeroSection";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <main className="relative">
        <HeroSection />
      </main>
    </SmoothScrollProvider>
  );
}
