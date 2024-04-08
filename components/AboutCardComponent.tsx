import React from 'react';
import Image from 'next/image';

type Props = {
  frontText: string;
  backText: string;
};

const AboutCardComponent = (props: Props) => {
  return (
    <div className="about-card w-[500px] h-[500px] relative text-center transition transform duration-700 cursor-pointer">
      {/* <div className="about-card-inner relative text-center"> */}
      <div className="about-card-front bg-baAccent border-[0.5px] border-baPrimary rounded-[20px] flex flex-col justify-center space-y-10">
        <div className="mx-auto">
          <Image
            src="/mdi_confidential-mode.svg"
            alt="confidential"
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-headerThree font-ba_medium text-baBody text-center w-4/5 mx-auto leading-10">
          {props.frontText}
        </h1>
      </div>
      <div className="about-card-back bg-baSecondary flex flex-col justify-center text-center rounded-[20px] space-y-11">
        <h1 className="text-headerTwo text-baLight font-ba_large">BeeAware</h1>
        <p className="text-baAccent font-ba_normal text-[18px] px-11 leading-6">
          {props.backText}
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AboutCardComponent;
