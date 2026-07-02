import { StickyNav } from "@/components/ui/StickyNav";
import { HeroSection } from "@/components/sections/Hero/HeroSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolution/ProblemSolutionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorks/HowItWorksSection";
import { BenefitsSection } from "@/components/sections/Benefits/BenefitsSection";
import { SavingsSection } from "@/components/sections/Savings/SavingsSection";
import { ScenariosSection } from "@/components/sections/Scenarios/ScenariosSection";
// import { FinancialSection } from "@/components/sections/Financial/FinancialSection"; // Секция скрыта по запросу (вырезаны неподтверждённые цифры)
import { CasesSection } from "@/components/sections/Cases/CasesSection";
// import { CommunitySection } from "@/components/sections/Community/CommunitySection"; // Секция скрыта по запросу
import { TechSection } from "@/components/sections/Tech/TechSection";
import { TermsSection } from "@/components/sections/Terms/TermsSection";
import { FAQSection } from "@/components/sections/FAQ/FAQSection";
// import { FinalCTASection } from "@/components/sections/FinalCTA/FinalCTASection"; // Секция скрыта: форма отключена, канала заявок пока нет
import { FooterSection } from "@/components/sections/Footer/FooterSection";
import { SectionTransition, SectionDivider } from "@/components/ui/SectionTransition";

export default function HomePage() {
  return (
    <>
      <StickyNav />
      <main className="relative overflow-x-hidden">
        {/* Hero - no transition, it's the first thing visible */}
        <HeroSection />

        {/* Problem/Solution with slide-up effect */}
        <SectionTransition variant="slide" depth={-0.05}>
          <ProblemSolutionSection />
        </SectionTransition>

        <SectionDivider variant="gradient" />

        {/* How It Works with zoom parallax */}
        <SectionTransition variant="zoom" depth={0.03}>
          <HowItWorksSection />
        </SectionTransition>

        <SectionDivider variant="dots" />

        {/* Savings — the main value prop */}
        <SectionTransition variant="slide" depth={-0.04}>
          <SavingsSection />
        </SectionTransition>

        <SectionDivider variant="gradient" />

        {/* Benefits floating up */}
        <SectionTransition variant="slide" depth={-0.02}>
          <BenefitsSection />
        </SectionTransition>

        <SectionDivider variant="line" />

        {/* Scenarios with subtle zoom */}
        <SectionTransition variant="zoom" depth={0.02}>
          <ScenariosSection />
        </SectionTransition>

        <SectionDivider variant="gradient" />

        {/* Секция «Финансовая модель» скрыта по запросу (вырезаем неподтверждённые цифры).
            Чтобы вернуть, раскомментируйте импорт выше и блок ниже.
        <SectionTransition variant="wave">
          <FinancialSection />
        </SectionTransition>
        */}

        {/* Cases - immersive section, no wrapper needed */}
        <CasesSection />

        {/* Секция «Комьюнити партнёров» скрыта по запросу — не отображается.
            Чтобы вернуть, раскомментируйте импорт выше и блок ниже.
        <SectionTransition variant="slide" depth={-0.03}>
          <CommunitySection />
        </SectionTransition>
        */}

        <SectionDivider variant="wave" />

        {/* Tech section with zoom */}
        <SectionTransition variant="zoom" depth={0.04}>
          <TechSection />
        </SectionTransition>

        <SectionDivider variant="dots" />

        {/* Terms with fade */}
        <SectionTransition variant="fade" depth={-0.02}>
          <TermsSection />
        </SectionTransition>

        <SectionDivider variant="line" />

        {/* FAQ with slide */}
        <SectionTransition variant="slide">
          <FAQSection />
        </SectionTransition>

        {/* Секция финального CTA с формой скрыта: форма не подключена к бэкенду,
            канала приёма заявок пока нет. Вернуть вместе с кнопками «Оставить заявку»
            в StickyNav и ссылкой в Footer, когда появится форма/контакт.
        <SectionTransition variant="reveal">
          <FinalCTASection />
        </SectionTransition>
        */}
      </main>
      <FooterSection />
    </>
  );
}
