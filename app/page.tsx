import ConsultationSection from "@/components/ConsultationSection";
import HealthArticleSection from "@/components/HealthArticleSection";
import HeroSection from "@/components/HeroSection";
import MoreAboutSection from "@/components/MoreAboutSection";
import WelcomeSection from "@/components/WelcomeSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <MoreAboutSection />
      <ConsultationSection />
      <HealthArticleSection />
    </main>
  );
}
