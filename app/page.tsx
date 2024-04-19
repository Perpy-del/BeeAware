'use client';

import Footer from '@/components/Footer';
import CommunitySection from '@/components/HomepageComponents/CommunitySection';
import ConsultationSection from '@/components/HomepageComponents/ConsultationSection';
import FaqSection from '@/components/HomepageComponents/FaqSection';
import HealthArticleSection from '@/components/HomepageComponents/HealthArticleSection';
import HeroSection from '@/components/HomepageComponents/HeroSection';
import MoreAboutSection from '@/components/HomepageComponents/MoreAboutSection';
import TestimonialSection from '@/components/HomepageComponents/TestimonialSection';
import WelcomeSection from '@/components/HomepageComponents/WelcomeSection';
import Navbar from '@/components/NavBar';

export default function Home() {
  return (
    <main className="-z-10">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <MoreAboutSection />
      <ConsultationSection />
      <HealthArticleSection />
      <TestimonialSection />
      <FaqSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
