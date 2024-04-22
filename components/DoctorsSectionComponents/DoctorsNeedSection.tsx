'use client';

import DoctorsHeroSection from '@/components/DoctorsSectionComponents/DoctorsHeroSection';
import DoctorsWorkSection from '@/components/DoctorsSectionComponents/DoctorsWorkSection';
import ScrollButton from '@/components/ScrollButton';
import { EssentialsIcon } from '@/components/SvgIcons';
import { essentialData } from '@/data';

type Props = {};

const DoctorsNeedSection = (props: Props) => {
  return (
    <div className="sm:px-5 lg:px-20 3xl:px-40 text-baDark dark:text-baLight sm:pb-14 lg:pb-24">
      <h1 className="text-center sm:text-headerThree lg:text-headerTwo pb-4 font-ba_medium lg:font-ba_large">
        All We Need From You
      </h1>
      <p className="text-center text-headerFive lg:text-headerFour 3xl:text-headerThree text-baSubtle font-ba_normal pb-10 lg:pb-16">
        Get to understand essential requirement that is needed to enable you
        practice as a consultant with BeeAware{' '}
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-10">
        {essentialData.map(data => (
          <div
            key={data.header}
            className="flex gap-2 sm:p-2 lg:p-4 border-[0.5px] border-baAccent dark:border-baDark mb-16 shadow-md"
          >
            <div className="sm:p-2 lg:p-4 rounded-full h-fit bg-baPrimary">
              <EssentialsIcon path={data?.svgPath} />
            </div>
            <div>
              <h1 className="sm:text-headerFive lg:text-headerThree font-ba_normal text-baDark dark:text-baLight pb-3">
                {data?.header}
              </h1>
              <p className="lg:text-headerSix 3xl:text-headerFour text-baDark dark:text-baLight">
                {data?.subText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsNeedSection;
