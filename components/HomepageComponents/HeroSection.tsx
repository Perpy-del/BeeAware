import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Button } from '../ui/button';
import Image from 'next/image';
import { ArrowRightToLine } from 'lucide-react';
import ButtonComponent from '../ButtonComponent';
import ScrollButton from '../ScrollButton';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <>
      <div id="hero" className="sm:p-5 lg:px-14 xl:px-20 3xl:px-40">
        <div className="bg-baAccent sm:p-5 lg:px-16 xl:px-28 3xl:px-72 lg:py-12 xl:py-20 sm:rounded-2xl lg:rounded-[40px] sm:mt-5 lg:mt-7 sm:mb-14 lg:mb-24 flex sm:flex-col lg:flex-row items-center gap-10 text-baBody">
          {/* Left Side */}
          <div className="lg:w-[80%] 3xl:w-[70%] space-y-4 3xl:space-y-8">
            <h1 className="sm:text-headerThree lg:hidden 3xl:hidden text-baDark font-ba_medium leading-10 text-center">
              Your <span className="text-baPrimary">Trusted</span> Source
              for Sexual Health Education!
            </h1>
            <h1 className="sm:hidden lg:block lg:text-headerTwo xl:text-headerOne 3xl:hidden text-baDark font-ba_large lg:leading-[50px] xl:leading-[60px]">
              Your <span className="text-baPrimary">Trusted</span> <br /> Source
              for Sexual
              <br />
              Health Education!
            </h1>
            <h1 className="sm:hidden 3xl:block 3xl:text-textLarge text-baDark font-ba_large leading-[80px]">
              Your <span className="text-baPrimary">Trusted</span> Source
              for Sexual Health Education!
            </h1>
            <h3 className="sm:text-headerSix lg:text-headerFive 3xl:text-headerThree lg:w-[85%] xl:w-[90%] sm:text-center lg:text-left 3xl:mb-9">
              Discover BeeAware, your go-to destination for expert guidance and
              community support on sexual wellness.
            </h3>
            <ButtonComponent
              btnText="Explore Community"
              width="w-[220px] 3xl:w-[350px]"
              variant="primary"
            />
          </div>

          {/* Right Side */}
          <div>
            <Image
              width="450"
              height={550}
              src="/Picture.jpg"
              alt="hero section picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <ScrollButton sectionId='hero' />
    </>
  );
};

export default HeroSection;
