'use client';

import ButtonComponent from '@/components/ButtonComponent';
import DoctorsFaqSection from '@/components/DoctorsSectionComponents/DoctorsFaqSection';
import DoctorsHeroSection from '@/components/DoctorsSectionComponents/DoctorsHeroSection';
import DoctorsNeedSection from '@/components/DoctorsSectionComponents/DoctorsNeedSection';
import DoctorsWorkSection from '@/components/DoctorsSectionComponents/DoctorsWorkSection';
import ScrollButton from '@/components/ScrollButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Props = {};

const DoctorsPage = (props: Props) => {
  return (
    <div>
      <DoctorsHeroSection />
      <DoctorsWorkSection />
      <DoctorsNeedSection />
      {/* Testimonial Section */}
      <div className="sm:px-5 lg:px-20 3xl:px-40 text-baDark dark:text-baLight sm:mb-14 lg:mb-24 py-10 bg-baAccent">
        <h1 className="text-center text-baDark text-headerFour lg:text-headerTwo font-ba_medium lg:font-ba_large pb-7 lg:pb-12">
          Hear What People Say About Us
        </h1>
        <div className="bg-baPrimary rounded-[40px] lg:w-[75%] px-10 py-16 h-fit mx-auto relative mb-6">
          <span className="text-headerTwo absolute top-5 left-10 block">“</span>
          <span className="lg:text-headerFive 3xl:text-headerThree text-center block text-baLight font-ba_normal sm:w-[95%] lg:w-[90%] mx-auto">
            Overall, my experience working with BeeAware has been incredibly
            rewarding. They are a true example of a healthcare organization that
            prioritizes patient well-being and actively seeks to improve the
            lives of those they serve.
          </span>
          <span className="text-headerTwo absolute bottom-5 right-10 inline-block text-baLight rotate-180">
            “
          </span>
        </div>
        <h3 className="text-center text-headerFive 3xl:text-headerFour text-baDark font-ba_normal pb-1">
          Ibukun Olayode
        </h3>
        <h3 className="text-center text-headerFive 3xl:text-headerFour text-baPrimary font-ba_normal">
          Consultant doctor
        </h3>
      </div>
      <DoctorsFaqSection />
      {/* Consultant Community Section */}
      <div className="sm:pb-14 lg:pb-24 sm:px-5 lg:px-14 xl:px-20 3xl:px-40">
        <div className="bg-baAccent sm:px-5 sm:py-10 lg:p-14 sm:rounded-[10px] lg:rounded-[20px] flex sm:flex-col lg:flex-row justify-between items-center sm:gap-5 lg:gap-20">
          <h1 className="sm:text-headerFour lg:text-headerThree xl:text-headerTwo 3xl:text-textLarge sm:text-center lg:text-left sm:font-ba_medium lg:font-ba_large lg:leading-[48px] 3xl:leading-[60px] text-baPrimary font-ba_large">
            Join Other Consultants Today!
          </h1>
          <div>
            <h3 className="sm:text-smallSize lg:text-headerFour font-ba_normal text-baPrimary lg:leading-9 sm:text-center lg:text-left pb-7">
              Join other professional practicing consultant and embark on a
              journey of career growth and expansion.
            </h3>
            <ButtonComponent
              btnText={'Click To Get Started'}
              width={'w-[250px] 3xl:w-[340px]'}
              variant="primary"
            />
          </div>
        </div>
      </div>
      <ScrollButton sectionId="doctors" />
    </div>
  );
};

export default DoctorsPage;
