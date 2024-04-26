'use client';

import { moreAboutData } from '@/data';
import React, { useState } from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

type Props = {};

const MoreAboutSection = (props: Props) => {
  const router = useRouter();
  const [hoverStates, setHoverStates] = useState(
    Array(moreAboutData.length).fill(false)
  );

  const handleMouseOver = (index: number) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index: number) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  return (
    <div className="text-baBody dark:text-baLight sm:pb-14 lg:pb-24 sm:px-5 lg:px-14 xl:px-20 3xl:px-40">
      <h1 className="text-baDark dark:text-baSubtle sm:text-headerFour lg:text-headerThree xl:text-headerTwo 3xl:text-textLarge sm:text-center lg:text-left sm:font-ba_medium lg:font-ba_large pb-5">
        What does BeeAware do?
      </h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-12 3xl:gap-20 ">
        {moreAboutData.map((data: MoreAboutDataInterface, index: number) => (
          <div
            key={index}
            className="flex sm:w-full lg:w-[400px] xl:w-[500px] 3xl:w-full items-center sm:justify-between sm:gap-3 lg:gap-4 3xl:gap-20 cursor-pointer"
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => router.push(data?.link)}
          >
            <div className="transition transform hover:scale-105 duration-700">
              <h3
                className={`text-baDark dark:text-baLight ${
                  hoverStates[index] ? 'lg:text-[33px]' : 'lg:text-headerThree'
                } lg:font-ba_medium sm:text-headerSix 3xl:text-headerTwo sm:font-ba_normal`}
              >
                {data?.header}
              </h3>
              <span className="sm:text-smallSize lg:text-headerSix 3xl:text-headerFour">{data?.text}</span>
            </div>
            <div
              className={`p-2 border-baPrimary-400 border-[0.5px] w-fit h-fit rounded-full cursor-pointer transition-all duration-300 hover:bg-baPrimary hover:text-baLight ${
                hoverStates[index]
                  ? 'bg-baPrimary text-baLight'
                  : 'bg-none text-baBody dark:text-baLight'
              }`}
            >
              <IoArrowForwardOutline size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreAboutSection;
