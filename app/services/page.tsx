'use client';

import ButtonComponent from '@/components/ButtonComponent';
import CommunitySection from '@/components/HomepageComponents/CommunitySection';
import ScrollButton from '@/components/ScrollButton';
import ServiceCardComponent, {
  ServicesProps,
} from '@/components/ServiceCardComponent';
import { servicesCardData } from '@/data';
import React from 'react';

type Props = {};

const ServicesPage = (props: Props) => {
  return (
    <>
      {/* Services Hero Section */}
      <div
        className="bg-no-repeat bg-[url('/services_hero.jpg')] rounded-[30px] bg-center bg-cover sm:px-3 lg:pl-16 sm:py-20 lg:py-24 3xl:mt-20 sm:mx-5 lg:mx-20 3xl:mx-40"
        id="about"
      >
        <h1 className="lg:text-headerTwo 3xl:text-textLarge sm:text-headerThree text-baLight sm:font-ba_medium lg:font-ba_large sm:text-center lg:text-left sm:pb-5 lg:pb-14">
          Our Services
        </h1>

        <h4 className="sm:text-headerSix lg:text-headerFour 3xl:text-headerTwo text-baLight font-ba_normal lg:w-[75%] 3xl:w-full pb-9 sm:text-center lg:text-left">
          BeeAware is a Nigerian healthcare company dedicated to modernizing
          healthcare access through innovative digital solutions. We provide a
          seamless and reliable Service that empowers individuals to take
          control of their well-being.
        </h4>
        <ButtonComponent
          btnText={'Explore Services'}
          width="w-[230px] 3xl:w-[350px]"
          variant={'primary'}
        />
      </div>

      {/* Services Card Section */}
      <div className="sm:my-14 lg:my-24 sm:mx-5 lg:mx-20 3xl:mx-40">
        <h1 className="lg:text-headerTwo 3xl:text-textLarge sm:text-headerThree text-baDark dark:text-baLight sm:font-ba_medium lg:font-ba_large text-center pb-5">
          What Does BeeAware Do?
        </h1>
        <p className="lg:text-headerFive 3xl:text-headerThree font-ba_normal text-center text-baBody dark:text-baLight pb-10">
          Through BeeAware, users can access consultations with healthcare
          professionals, informative articles on a wide range of sexual health
          topics, anonymous forums, and chatrooms for open discussions, and
          discover nearby STI testing locations for proactive health management.
        </p>
        <div className="grid sm:grid-col-1 lg:grid-cols-2 3xl:grid-cols-4 gap-5">
          {servicesCardData.map((data: ServicesProps) => (
            <ServiceCardComponent
              key={data?.cardHeader}
              image={data?.image}
              cardHeader={data?.cardHeader}
              cardBody={data?.cardBody}
            />
          ))}
        </div>
      </div>
      <CommunitySection />
      <ScrollButton sectionId='about'/>
    </>
  );
};

export default ServicesPage;
