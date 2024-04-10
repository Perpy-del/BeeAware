import React from 'react';
import TeamCarouselComponent from './TeamCarouselComponent';

type Props = {};

const TeamComponent = (props: Props) => {
  return (
    <div className="bg-baPrimary py-16 3xl:p-40">
      <h1 className="text-center text-baLight sm:font-ba_medium lg:font-ba_large sm:text-headerFour lg:text-headerTwo 3xl:text-headerOne pb-7">
        Meet Our Board Members
      </h1>
      <p className="text-headerFive 3xl:text-headerThree font-ba_normal leading-8 3xl:leading-10 text-center text-baAccent sm:px-4 lg:px-0 lg:w-[70%] mx-auto pb-20">
        Our esteemed board members bring decades of experience in healthcare,
        technology, and business leadership, guiding BeeAware&apos;s strategic
        vision.
      </p>
      <TeamCarouselComponent />
    </div>
  );
};

export default TeamComponent;
