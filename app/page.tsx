import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className='px-20'>
      <HeroSection />
      <WelcomeSection />
    </main>
  );
}
