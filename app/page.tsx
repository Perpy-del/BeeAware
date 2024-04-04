'use client';

import CommunitySection from "@/components/CommunitySection";
import ConsultationSection from "@/components/ConsultationSection";
import FaqSection from "@/components/FaqSection";
import HealthArticleSection from "@/components/HealthArticleSection";
import HeroSection from "@/components/HeroSection";
import MoreAboutSection from "@/components/MoreAboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import WelcomeSection from "@/components/WelcomeSection";

export default function Home() {
  return (
    <main className="-z-10">
      <HeroSection />
      <WelcomeSection />
      <MoreAboutSection />
      <ConsultationSection />
      <HealthArticleSection />
      <TestimonialSection />
      <FaqSection />
      <CommunitySection />
    </main>
  );
}
