import ButtonComponent from '@/components/ButtonComponent';
import DoctorsHeroSection from '@/components/DoctorsSectionComponents/DoctorsHeroSection';
import Image from 'next/image';

type Props = {};

const DoctorsPage = (props: Props) => {
  return (
    <div>
      <DoctorsHeroSection />
    </div>
  );
};

export default DoctorsPage;
