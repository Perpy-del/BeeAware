import Image from 'next/image';
import React from 'react';
import ButtonComponent from '../ButtonComponent';
import { motion } from 'framer-motion';
import { countOneVariants, countTwoVariants, countThreeVariants } from '@/data';

type Props = {};

const WelcomeSection = (props: Props) => {
  return (
    <div className="flex items-center gap-20 3xl:gap-0 sm:pb-14 lg:pb-24 sm:px-5 lg:px-14 xl:px-20 3xl:px-40 text-baBody dark:text-baLight">
      <div className="sm:hidden lg:flex w-[35%]">
        <Image
          width={480}
          height={480}
          src="/second_section_pic.jpg"
          alt="welcome message picture"
          className="object-cover object-center"
          loading="lazy"
        />
      </div>
      <div className="sm:w-full lg:w-[70%] xl:w-[60%] 3xl:w-[75%] sm:space-y-6 lg:space-y-2 xl:space-y-6 3xl:space-y-10">
        <h1 className="sm:text-headerFour lg:text-headerThree xl:text-headerTwo 3xl:text-textLarge sm:font-ba_medium lg:font-ba_large sm:leading-normal sm:text-center lg:text-left lg:leading-6 text-baDark dark:text-baSubtle ">
          Welcome to BeeAware
        </h1>
        <p className="sm:text-bodySize sm:text-center lg:text-left lg:text-headerSix xl:text-headerFive 3xl:text-headerThree">
          Through BeeAware, users can access consultations with healthcare
          professionals, informative articles on a wide range of sexual health
          topics, anonymous forums, and chatrooms for open discussions, and
          discover nearby STI testing locations for proactive health management.
        </p>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="flex flex-wrap sm:justify-center lg:justify-start items-center gap-10"
        >
          <div className="flex flex-col sm:items-center lg:items-start 3xl:gap-2">
            <motion.h1
              variants={countOneVariants}
              className="3xl:text-headerOne text-headerTwo text-baSecondary font-ba_large leading-10"
            >
              3K+
            </motion.h1>
            <motion.span
              variants={countOneVariants}
              className="text-baDark dark:text-baLight text-smallSize 3xl:text-headerSix"
            >
              HAPPY CLIENTS
            </motion.span>
          </div>
          <div className="flex flex-col sm:items-center lg:items-start 3xl:gap-2">
            <motion.h1
              variants={countTwoVariants}
              className="text-headerTwo 3xl:text-headerOne text-baSecondary font-ba_large leading-10"
            >
              150K+
            </motion.h1>
            <motion.span
              variants={countTwoVariants}
              className="text-baDark dark:text-baLight text-smallSize 3xl:text-headerSix"
            >
              PROFESSIONAL DOCTORS
            </motion.span>
          </div>
          <div className="flex flex-col sm:items-center lg:items-start 3xl:gap-2">
            <motion.h1
              variants={countThreeVariants}
              className="text-headerTwo 3xl:text-headerOne text-baSecondary font-ba_large leading-10"
            >
              15K+
            </motion.h1>
            <motion.span
              variants={countThreeVariants}
              className="text-baDark dark:text-baLight text-smallSize 3xl:text-headerSix"
            >
              INFORMATIVE ARTICLES
            </motion.span>
          </div>
        </motion.div>
        <ButtonComponent
          btnText="Learn More"
          width="w-[200px] 3xl:w-[300px]"
          variant="primary"
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
