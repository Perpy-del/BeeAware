'use client';

import React, { useCallback, useState } from 'react';
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
  const [progressSmall, setProgressSmall] = useState<number>(12.5);

  const progressNext = useCallback(function handleProgressNext() {
    setProgress((progress: number) => progress + 17);
  }, [setProgress])

  const progressPrev = useCallback(function handleProgressPrev() {
    setProgress((progress: number) => progress - 17);
  }, [setProgress])

  const progressNextSmall = useCallback(function handleProgressSmallNext() {
    setProgressSmall((progress: number) => progress + 12.5);
  }, [setProgressSmall])

  const progressPrevSmall = useCallback(function handleProgressSmallPrev() {
    setProgressSmall((progress: number) => progress - 12.5);
  }, [setProgressSmall])

  return (
    <div>
      <div
        className="bg-no-repeat bg-[url('/aboutimg.jpg')] rounded-[30px] bg-center bg-cover sm:px-3 lg:pl-16 sm:py-20 lg:py-24 sm:mx-5 sm:mt-5 lg:mt-0 lg:mx-20 3xl:mx-40 3xl:mt-20"
        id="about"
      >
        <h1 className="lg:text-textLarge sm:text-headerThree text-baLight sm:font-ba_medium lg:font-ba_large sm:text-center lg:text-left sm:pb-5 lg:pb-14">
          ABOUT US
        </h1>

        <h4 className="sm:text-headerSix lg:text-headerFour 3xl:text-headerTwo text-baLight font-ba_normal lg:w-[75%] 3xl:w-full pb-9 sm:text-center lg:text-left">
          BeeAware is a Nigerian healthcare company dedicated to modernizing
          healthcare access through innovative digital solutions. We provide a
          seamless and reliable Service that empowers individuals to take
          control of their well-being.
        </h4>
        <ButtonComponent
          btnText={'Explore Communities'}
          width="w-[230px] 3xl:w-[350px]"
          variant={'primary'}
        />
      </div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="flex sm:justify-between lg:justify-around lg:py-7 sm:mx-2 sm:my-14 lg:m-20"
      >
        <div className="text-center">
          <motion.h1
            variants={countOneVariants}
            className="text-baSecondary sm:text-headerFour lg:text-headerTwo 3xl:text-textLarge sm:font-ba_medium lg:font-ba_large leading-8 3xl:leading-[60px]"
          >
            3K+
          </motion.h1>
          <motion.span
            variants={countOneVariants}
            className="text-baSecondary block pt-1 lg:text-smallSize sm:text-[12px] 3xl:text-headerFour font-ba_normal"
          >
            HAPPY CLIENTS
          </motion.span>
        </div>
        <div className="text-center">
          <motion.h1
            variants={countTwoVariants}
            className="text-baSecondary sm:text-headerFour lg:text-headerTwo 3xl:text-textLarge sm:font-ba_medium lg:font-ba_large leading-8 3xl:leading-[60px]"
          >
            150+
          </motion.h1>
          <motion.span
            variants={countTwoVariants}
            className="text-baSecondary block pt-1 lg:text-smallSize sm:text-[12px] 3xl:text-headerFour font-ba_normal"
          >
            PROFESSIONAL DOCTORS
          </motion.span>
        </div>
        <div className="text-center">
          <motion.h1
            variants={countThreeVariants}
            className="text-baSecondary sm:text-headerFour lg:text-headerTwo 3xl:text-textLarge sm:font-ba_medium lg:font-ba_large leading-8 3xl:leading-[60px]"
          >
            15K+
          </motion.h1>
          <motion.span
            variants={countThreeVariants}
            className="text-baSecondary block pt-1 lg:text-smallSize 3xl:text-headerFour sm:text-[12px] font-ba_normal"
          >
            INFORMATIVE ARTICLES
          </motion.span>
        </div>
      </motion.div>

      <div className="bg-baAccent sm:px-5 lg:pl-20 sm:py-10 lg:py-24 3xl:py-40 flex items-center gap-12 sm:mb-14 lg:mb-24 3xl:px-40 3xl:gap-44">
        <div className="sm:hidden lg:flex">
          <Image
            src="/aboutpic.jpg"
            width={513}
            height={644}
            alt="people or friends"
            loading="lazy"
            className="object-cover object-center rounded-3xl"
          />
        </div>
        <div className="lg:w-[50%] 3xl:w-full space-y-14">
          <div className="space-y-4">
            <h6 className="text-headerFive 3xl:text-headerFour sm:mx-auto lg:mx-0 lg:mt-3 font-ba_normal px-4 py-2 3xl:px-8 text-baLight bg-baSecondary w-fit rounded-[30px] mb-5">
              Our Mission
            </h6>
            <h3 className="sm:text-[25px] lg:text-[38px] 3xl:text-[54px] sm:text-center lg:text-left sm:leading-8 lg:leading-[48px] text-baDark sm:font-ba_medium lg:font-ba_large">
              Pioneering Digital Healthcare Solutions for Sexual Wellness
            </h3>
            <p className="sm:text-bodySize lg:text-headerFive 3xl:text-headerThree sm:text-center lg:text-left font-ba_normal text-baSubtle">
              By leveraging digital tools, BeeAware aims to make sexual
              healthcare more accessible, convenient, and user-friendly for
              Nigerians.
            </p>
          </div>
          <div className="space-y-4">
            <h6 className="text-headerFive 3xl:text-headerFour sm:mx-auto lg:mx-0 lg:mt-3 font-ba_normal px-4 py-2 3xl:px-8 text-baLight bg-baSecondary w-fit rounded-[30px] mb-5">
              Our Vision
            </h6>
            <h3 className="sm:text-[25px] lg:text-[38px] 3xl:text-[54px] sm:text-center lg:text-left sm:leading-8 lg:leading-[48px] text-baDark sm:font-ba_medium lg:font-ba_large">
              A Leading Force In Championing Sexual Healthcare In Nigeria.
            </h3>
            <p className="sm:text-bodySize lg:text-headerFive 3xl:text-headerThree sm:text-center lg:text-left font-ba_normal text-baSubtle">
              By leveraging digital tools, BeeAware aims to make sexual
              healthcare more accessible, convenient, and user-friendly for
              Nigerians.
            </p>
          </div>
        </div>
      </div>

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

      <div className="bg-baPrimary py-16 3xl:p-40">
        <h1 className="text-center text-baLight sm:font-ba_medium lg:font-ba_large sm:text-headerFour lg:text-headerTwo 3xl:text-headerOne pb-7">
          Meet Our Board Members
        </h1>
        <p className="text-headerFive 3xl:text-headerThree font-ba_normal leading-8 3xl:leading-10 text-center text-baAccent sm:px-4 lg:px-0 lg:w-[70%] mx-auto pb-20">
          Our esteemed board members bring decades of experience in healthcare,
          technology, and business leadership, guiding BeeAware&apos;s strategic
          vision.
        </p>

        {/* TODO: Fix the progress bar */}
        <Carousel className="w-full sm:pl-5 sm:pr-7 lg:pl-20">
          <CarouselContent className="-ml-1 gap-4">
            {teamMemberData.map((data: TeamHoverProps, index: number) => {
              return (
                <CarouselItem
                  key={index}
                  className="pl-1 sm:basis-full md:basis-1/2 lg:basis-1/4 3xl:basis-1/5"
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
          <div className="sm:hidden lg:flex gap-5 items-center pt-5 lg:pr-20">
            <div className="w-full h-1 rounded-md bg-baSubtle">
              <div
                className={`w-[${progress}%] h-1 rounded-md bg-baLight`}
              ></div>
            </div>
            <div className="flex gap-5">
              <div onClick={progressPrev}>
                <CarouselPrevious className='text-baLight' />
              </div>
              <div onClick={progressNext}>
                <CarouselNext className='text-baLight' />
              </div>
            </div>
          </div>
          <div className="sm:flex lg:hidden gap-5 items-center pt-5 lg:pr-20">
            <div className="w-full h-1 rounded-md bg-baSubtle">
              <div
                className={`w-[${progressSmall}%] h-1 rounded-md bg-baLight`}
              ></div>
            </div>
            <div className="flex gap-5">
              <div onClick={progressPrevSmall}>
                <CarouselPrevious />
              </div>
              <div onClick={progressNextSmall}>
                <CarouselNext />
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="sm:py-14 lg:py-24 3xl:py-36 sm:px-5 lg:px-20">
        <h1 className="sm:text-headerThree lg:text-headerTwo 3xl:text-headerOne text-baPrimary sm:font-ba_medium sm:leading-9 lg:leading-normal lg:font-ba_large text-center dark:text-baSecondary sm:pb-5 lg:pb-2">
          Join Our Community
        </h1>
        <p className="sm:text-headerSix lg:text-headerFive 3xl:text-headerThree font-ba_normal text-baBody dark:text-baLight text-center pb-5">
          Join the thousands of users who rely on BeeAware for accurate sexual
          health information.
        </p>
        <div className="flex justify-center">
          <ButtonComponent
            btnText={'Get Started for Free'}
            width={'sm:w-[250px] lg:w-[300px] 3xl:w-[375px]'}
            variant={'primary'}
          />
        </div>
      </div>
      <ScrollButton sectionId="about" />
    </div>
  );
};

export default AboutPage;
