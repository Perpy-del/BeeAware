'use client';

import React, { useState } from 'react';
import ButtonComponent from '../../components/ButtonComponent';
import {
  countOneVariants,
  countTwoVariants,
  countThreeVariants,
  aboutData,
  teamMemberData,
} from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AboutCardComponent from '@/components/AboutCardComponent';
import AboutInterface from '@/interfaces/AboutInterface';
import ScrollButton from '@/components/ScrollButton';
import TeamCardComponent from '@/components/TeamCardComponent';
import { TeamHoverProps } from '@/components/TeamCardComponent';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type Props = {};

const AboutPage = (props: Props) => {
  const [progress, setProgress] = useState<number>(17);

  function handleProgressNext() {
    setProgress((progress: number) => progress + 17);
  }

  function handleProgressPrev() {
    setProgress((progress: number) => progress - 17);
  }

  return (
    <div>
      <div
        className="bg-no-repeat bg-[url('/aboutimg.jpg')] rounded-[30px] bg-center bg-cover pl-16 py-24 mx-20"
        id="about"
      >
        <h1 className="text-textLarge text-baLight font-ba_large pb-14">
          ABOUT US
        </h1>

        <h4 className="text-headerFour text-baLight font-ba_normal w-[75%] pb-9">
          BeeAware is a Nigerian healthcare company dedicated to modernizing
          healthcare access through innovative digital solutions. We provide a
          seamless and reliable Service that empowers individuals to take
          control of their well-being.
        </h4>
        <ButtonComponent
          btnText={'Explore Communities'}
          width="w-[230px]"
          variant={'primary'}
        />
      </div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="flex justify-around py-7 m-20"
      >
        <div className="text-center">
          <motion.h1
            variants={countOneVariants}
            className="text-baSecondary text-headerTwo font-ba_large leading-8"
          >
            3K+
          </motion.h1>
          <motion.span
            variants={countOneVariants}
            className="text-baSecondary text-smallSize font-ba_normal"
          >
            HAPPY CLIENTS
          </motion.span>
        </div>
        <div className="text-center">
          <motion.h1
            variants={countTwoVariants}
            className="text-baSecondary text-headerTwo font-ba_large leading-8"
          >
            150+
          </motion.h1>
          <motion.span
            variants={countTwoVariants}
            className="text-baSecondary text-smallSize font-ba_normal"
          >
            PROFESSIONAL DOCTORS
          </motion.span>
        </div>
        <div className="text-center">
          <motion.h1
            variants={countThreeVariants}
            className="text-baSecondary text-headerTwo font-ba_large leading-8"
          >
            15K+
          </motion.h1>
          <motion.span
            variants={countThreeVariants}
            className="text-baSecondary text-smallSize font-ba_normal"
          >
            INFORMATIVE ARTICLES
          </motion.span>
        </div>
      </motion.div>

      <div className="bg-baAccent pl-20 py-24 flex items-center gap-12 mb-24">
        <div className="">
          <Image
            src="/aboutpic.jpg"
            width={513}
            height={644}
            alt="people or friends"
            loading="lazy"
            className="object-cover object-center rounded-3xl"
          />
        </div>
        <div className="w-[50%] space-y-14">
          <div className="space-y-4">
            <h6 className="text-headerFive font-ba_normal px-4 py-2 text-baLight bg-baSecondary w-[160px] rounded-[30px] mb-5">
              Our Mission
            </h6>
            <h3 className="text-[38px] leading-[48px] text-baDark font-ba_large">
              Pioneering Digital Healthcare Solutions for Sexual Wellness
            </h3>
            <p className="text-headerFive font-ba_normal text-baSubtle">
              By leveraging digital tools, BeeAware aims to make sexual
              healthcare more accessible, convenient, and user-friendly for
              Nigerians.
            </p>
          </div>
          <div className="space-y-4">
            <h6 className="text-headerFive font-ba_normal px-4 py-2 text-baLight bg-baSecondary w-[160px] rounded-[30px] mb-5">
              Our Vision
            </h6>
            <h3 className="text-[38px] leading-[48px] text-baDark font-ba_large">
              A Leading Force In Championing Sexual Healthcare In Nigeria.
            </h3>
            <p className="text-headerFive font-ba_normal text-baSubtle">
              By leveraging digital tools, BeeAware aims to make sexual
              healthcare more accessible, convenient, and user-friendly for
              Nigerians.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto text-center pb-24">
        <h1 className="text-headerTwo font-ba_large text-baPrimary text-center pb-6 dark:text-baSecondary">
          What Makes Us Different
        </h1>
        <p className="text-headerFive text-baBody font-ba_normal mx-auto text-center w-[60%] pb-20 dark:text-baLight">
          Get a glimpse of the services that makes us stand out a mist other
          healthcare provides.
        </p>

        <div className="grid grid-cols-2 w-4/5 mx-auto gap-8">
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

      <div className="bg-baPrimary py-16">
        <h1 className="text-center text-baLight font-ba_large text-headerTwo pb-7">
          Meet Our Board Members
        </h1>
        <p className="text-headerFive font-ba_normal leading-8 text-center text-baAccent w-[70%] mx-auto pb-20">
          Our esteemed board members bring decades of experience in healthcare,
          technology, and business leadership, guiding BeeAware&apos;s strategic
          vision.
        </p>
        <Carousel className="w-full pl-20">
          <CarouselContent className="-ml-1 gap-4">
            {teamMemberData.map((data: TeamHoverProps, index: number) => {
              return (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/4"
                >
                  <TeamCardComponent
                    memberName={data?.memberName}
                    position={data?.position}
                    content={data?.content}
                    avatarFallback={data?.avatarFallback}
                    memberImage={data?.memberImage}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex gap-5 items-center pt-5 pr-20">
            <div className="w-full h-1 rounded-md bg-baSubtle">
              <div
                className={`w-[${progress}%] h-1 rounded-md bg-baLight`}
              ></div>
            </div>
            <div className="flex gap-5">
              <div onClick={handleProgressPrev}>
                <CarouselPrevious />
              </div>
              <div onClick={handleProgressNext}>
                <CarouselNext />
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="py-24">
        <h1 className="text-headerTwo text-baPrimary font-ba_large text-center dark:text-baSecondary pb-2">
          Join Our Community
        </h1>
        <p className="text-headerFive font-ba_normal text-baBody dark:text-baLight text-center pb-5">
          Join the thousands of users who rely on BeeAware for accurate sexual
          health information.
        </p>
        <div className="flex justify-center">
          <ButtonComponent
            btnText={'Get Started for Free'}
            width={'w-[300px]'}
            variant={'primary'}
          />
        </div>
      </div>
      <ScrollButton sectionId="about" />
    </div>
  );
};

export default AboutPage;
