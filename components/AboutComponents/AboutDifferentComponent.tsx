import React from 'react';
import AboutCardComponent from './AboutCardComponent';
import AboutInterface from '@/interfaces/AboutInterface';
import { aboutData } from '@/data';

type Props = {};

const AboutDifferentComponent = (props: Props) => {
  return (
    <div className="mx-auto text-center sm:pb-14 lg:pb-24 3xl:px-40 3xl:pb-48 3xl:pt-24">
      <h1 className="sm:text-headerFour lg:text-headerTwo 3xl:text-headerOne sm:font-ba_medium lg:font-ba_large text-baPrimary text-center sm:pb-5 lg:pb-6 dark:text-baSecondary leading-8">
        What Makes Us Different
      </h1>
      <p className="sm:text-bodySize lg:text-headerFive 3xl:text-headerThree text-baBody font-ba_normal mx-auto text-center sm:px-5 lg:px-0 lg:w-[60%] 3xl:w-full sm:pb-14 lg:pb-20 dark:text-baLight">
        Get a glimpse of the services that makes us stand out a mist other
        healthcare provides.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 3xl:grid-cols-4 w-4/5 3xl:w-full mx-auto gap-8 3xl:gap-12">
        {aboutData.map((data: AboutInterface, index: number) => {
          return (
            <React.Fragment key={index}>
              <AboutCardComponent
                frontText={data?.front}
                backText={data?.back}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default AboutDifferentComponent;
