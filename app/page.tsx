import { StickyNav } from "@/components/ui/StickyNav";
import { HeroSection } from "@/components/sections/Hero/HeroSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolution/ProblemSolutionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorks/HowItWorksSection";
import { BenefitsSection } from "@/components/sections/Benefits/BenefitsSection";
import { ScenariosSection } from "@/components/sections/Scenarios/ScenariosSection";
import { FinancialSection } from "@/components/sections/Financial/FinancialSection";
import { CasesSection } from "@/components/sections/Cases/CasesSection";
import { CommunitySection } from "@/components/sections/Community/CommunitySection";
import { TechSection } from "@/components/sections/Tech/TechSection";
import { TermsSection } from "@/components/sections/Terms/TermsSection";
import { FAQSection } from "@/components/sections/FAQ/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTA/FinalCTASection";
import { FooterSection } from "@/components/sections/Footer/FooterSection";

export default function HomePage() {
  return (
    <>
      <StickyNav />
      <main className="relative">
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <BenefitsSection />
        <ScenariosSection />
        <FinancialSection />
        <CasesSection />
        <CommunitySection />
        <TechSection />
        <TermsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <FooterSection />
    </>
  );
}
