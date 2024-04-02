'use client';

import { moreAboutData } from '@/data';
import React, { useState } from 'react';
import { IoArrowForwardOutline } from "react-icons/io5";

type Props = {};

const MoreAboutSection = (props: Props) => {
  const [hoverStates, setHoverStates] = useState(Array(moreAboutData.length).fill(false));

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
    <div className="text-baBody pb-24">
      <h1 className="text-baDark text-headerTwo font-ba_large pb-5">
        What does BeeAware do?
      </h1>
      <div className="grid grid-cols-2 gap-12 ">
        {moreAboutData.map((data: MoreAboutDataInterface, index: number) => (
          <div key={index} className='flex w-[500px] items-center gap-4 cursor-pointer' onMouseOver={() => handleMouseOver(index)} onMouseLeave={() => handleMouseLeave(index)}>
            <div className='transition transform hover:scale-105 duration-700'>
              <h3 className={`text-baDark ${hoverStates[index] ? "text-[33px]" : "text-headerThree"} font-ba_medium`}>{data?.header}</h3>
              <span className="text-headerSix">{data?.text}</span>
            </div>
            <div className={`p-2 border-baPrimary-400 border-[0.5px] w-fit h-fit rounded-full cursor-pointer  transition-all duration-300 hover:bg-baPrimary hover:text-baLight ${hoverStates[index] ? "bg-baPrimary text-baLight" : "bg-none text-baBody"}`}>
            <IoArrowForwardOutline size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreAboutSection;
