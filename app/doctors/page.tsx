'use client';

import DoctorsHeroSection from '@/components/DoctorsSectionComponents/DoctorsHeroSection';
import DoctorsWorkSection from '@/components/DoctorsSectionComponents/DoctorsWorkSection';
import ScrollButton from '@/components/ScrollButton';
import { ApplyIcon, ApprovalIcon, VerifyIcon } from '@/components/SvgIcons';
import { countOneVariants, countThreeVariants, countTwoVariants } from '@/data';
import { motion } from 'framer-motion';

type Props = {};

const DoctorsPage = (props: Props) => {
  return (
    <div>
      <DoctorsHeroSection />
      <DoctorsWorkSection />
      <ScrollButton sectionId="doctors" />
    </div>
  );
};

export default DoctorsPage;
