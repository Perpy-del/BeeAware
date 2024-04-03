import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Button } from './ui/button';
import Image from 'next/image';
import { ArrowRightToLine } from 'lucide-react';
import ButtonComponent from './ButtonComponent';
import ScrollButton from './ScrollButton';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <>
    <div id='hero' className='px-20'>
    <div className="bg-baAccent px-28 py-20 rounded-[40px] mt-7 mb-24 flex items-center gap-10 text-baBody">
      {/* Left Side */}
      <div className='w-[80%] space-y-4'>
        <h1 className="text-headerOne text-baDark font-ba_large leading-[60px]">
          Your <span className="text-baPrimary">Trusted</span> <br /> Source for Sexual<br /> 
          Health Education!
        </h1>
        <h3 className="text-headerFive w-[90%]">
          Discover BeeAware, your go-to destination for expert guidance and
          community support on sexual wellness.
        </h3>
        <ButtonComponent btnText='Explore Community' width='w-[220px]' variant='primary' />
      </div>

      {/* Right Side */}
      <div>
        <Image width='450' height={550} src='/Picture.jpg' alt='hero section picture' loading='lazy' />
      </div>
    </div>
    </div>
    <ScrollButton />
    </>
  );
};

export default HeroSection;
