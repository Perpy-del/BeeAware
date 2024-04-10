import React from 'react';
import ButtonComponent from '../ButtonComponent';

type Props = {};

const AboutHeroComponent = (props: Props) => {
  return (
    <div
      className="bg-no-repeat bg-[url('/aboutimg.jpg')] rounded-[30px] bg-center bg-cover sm:px-3 lg:pl-16 sm:py-20 lg:py-24 sm:mx-5 lg:mx-20 3xl:mx-40 3xl:mt-20"
      id="about"
    >
      <h1 className="lg:text-textLarge sm:text-headerThree text-baLight sm:font-ba_medium lg:font-ba_large sm:text-center lg:text-left sm:pb-5 lg:pb-14">
        ABOUT US
      </h1>

      <h4 className="sm:text-headerSix lg:text-headerFour 3xl:text-headerTwo text-baLight font-ba_normal lg:w-[75%] 3xl:w-full pb-9 sm:text-center lg:text-left">
        BeeAware is a Nigerian healthcare company dedicated to modernizing
        healthcare access through innovative digital solutions. We provide a
        seamless and reliable Service that empowers individuals to take control
        of their well-being.
      </h4>
      <ButtonComponent
        btnText={'Explore Communities'}
        width="w-[230px] 3xl:w-[350px]"
        variant={'primary'}
      />
    </div>
  );
};

export default AboutHeroComponent;
