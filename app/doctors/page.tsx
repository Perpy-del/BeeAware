'use client';

import DoctorsHeroSection from '@/components/DoctorsSectionComponents/DoctorsHeroSection';
import DoctorsNeedSection from '@/components/DoctorsSectionComponents/DoctorsNeedSection';
import DoctorsWorkSection from '@/components/DoctorsSectionComponents/DoctorsWorkSection';
import ScrollButton from '@/components/ScrollButton';

type Props = {};

const DoctorsPage = (props: Props) => {
  return (
    <div>
      <DoctorsHeroSection />
      <DoctorsWorkSection />
      <DoctorsNeedSection />
      <ScrollButton sectionId="doctors" />
    </div>
  );
};

export default DoctorsPage;
