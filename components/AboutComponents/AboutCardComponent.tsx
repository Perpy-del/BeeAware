import React, { useState } from 'react';
import Image from 'next/image';
import { RiArrowRightDoubleLine, RiArrowLeftDoubleLine } from "react-icons/ri";

type Props = {
  frontText: string;
  backText: string;
};

const AboutCardComponent = (props: Props) => {
  const [flipCard, setFlipCard] = useState<boolean>(false);

  return (
    <div className="about-card max-w-[500px] sm:h-[300px] lg:h-[500px] relative text-center transition transform duration-700 cursor-pointer">
      <div className="about-card-front bg-baAccent border-[0.5px] border-baPrimary rounded-[20px] flex flex-col justify-center sm:gap-4 lg:gap-0 lg:space-y-10">
        <div className="sm:hidden lg:flex lg:mx-auto">
          <Image
            src="/mdi_confidential-mode.svg"
            alt="confidential"
            width={100}
            height={100}
          />
        </div>
        <div className='sm:flex lg:hidden mx-auto'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M21.25 5C15 5 10 10 10 16.25V17.5C7.225 17.5 5 19.725 5 22.5V45C5 47.775 7.225 50 10 50H21.8C25.45 53.225 30.15 55 35 55C40.3043 55 45.3914 52.8929 49.1421 49.1421C52.8929 45.3914 55 40.3043 55 35C55 29.6957 52.8929 24.6086 49.1421 20.8579C45.3914 17.1071 40.3043 15 35 15C34.15 15 33.3 15.075 32.5 15.2C31.9 9.425 27.05 5 21.25 5ZM21.25 10C22.9076 10 24.4973 10.6585 25.6694 11.8306C26.8415 13.0027 27.5 14.5924 27.5 16.25V17.5H15V16.25C15 14.5924 15.6585 13.0027 16.8306 11.8306C18.0027 10.6585 19.5924 10 21.25 10ZM35 20C38.9782 20 42.7936 21.5804 45.6066 24.3934C48.4196 27.2064 50 31.0217 50 35C50 38.9782 48.4196 42.7936 45.6066 45.6066C42.7936 48.4196 38.9782 50 35 50C31.0217 50 27.2064 48.4196 24.3934 45.6066C21.5804 42.7936 20 38.9782 20 35C20 31.0217 21.5804 27.2064 24.3934 24.3934C27.2064 21.5804 31.0217 20 35 20ZM32.5 25V37.5L41.6 42.975L43.55 39.75L36.25 35.375V25H32.5Z"
              fill="#404040"
            />
          </svg>
        </div>
        <h1 className="sm:text-headerFive lg:text-headerThree font-ba_medium text-baBody text-center sm:w-[90%] lg:w-4/5 mx-auto sm:leading-7 lg:leading-10">
          {props.frontText}
        </h1>
        <div className='sm:flex lg:hidden pt-3 pr-3 self-end' onClick={() => setFlipCard(true)}>
          <RiArrowRightDoubleLine color='#404040' size={30} />
        </div>
      </div>
      <div className="flex about-card-back bg-baSecondary flex-col justify-center text-center space-y-3 rounded-[20px]">
        <h1 className="text-headerThree text-baLight font-ba_medium">BeeAware</h1>
        <p className="text-baAccent font-ba_normal text-bodySize px-5 leading-6">
          {props.backText}
        </p>
      </div>
      {flipCard && <div className="sm:flex lg:hidden about-card-back bg-baSecondary flex-col justify-center text-center space-y-3 rounded-[20px]">
        <h1 className="text-headerThree text-baLight font-ba_medium">BeeAware</h1>
        <p className="text-baAccent font-ba_normal text-bodySize px-5 leading-6">
          {props.backText}
        </p>
        <div className='sm:flex lg:hidden pt-3 pl-3' onClick={() => setFlipCard(false)}>
          <RiArrowLeftDoubleLine color='white' size={30} />
        </div>
      </div>}
    </div>
  );
};

export default AboutCardComponent;
