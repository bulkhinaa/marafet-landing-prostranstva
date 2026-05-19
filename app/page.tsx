import { HeroSection } from "@/components/sections/Hero/HeroSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolution/ProblemSolutionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorks/HowItWorksSection";
import { BenefitsSection } from "@/components/sections/Benefits/BenefitsSection";

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
    </main>
  );
}
