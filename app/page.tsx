import ConsultationSection from "@/components/ConsultationSection";
import HeroSection from "@/components/HeroSection";
import MoreAboutSection from "@/components/MoreAboutSection";
import WelcomeSection from "@/components/WelcomeSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <MoreAboutSection />
      <ConsultationSection />
    </main>
  );
}
