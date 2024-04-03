import Image from 'next/image';
import React from 'react';
import ButtonComponent from './ButtonComponent';
import { motion } from 'framer-motion';
import { countOneVariants, countTwoVariants, countThreeVariants } from '@/data';

type Props = {};

const WelcomeSection = (props: Props) => {
  return (
    <div className="flex items-center gap-20 pb-24 px-20 text-baBody dark:text-baLight">
      <div className="w-[35%]">
        <Image
          width={480}
          height={480}
          src="/second_section_pic.jpg"
          alt="welcome message picture"
          className="object-cover object-center"
          loading="lazy"
        />
      </div>
      <div className="w-[60%] space-y-6">
        <h1 className="text-headerTwo font-ba_large leading-6 text-baDark dark:text-baSubtle">
          Welcome to BeeAware
        </h1>
        <p className="text-headerFive">
          Through BeeAware, users can access consultations with healthcare
          professionals, informative articles on a wide range of sexual health
          topics, anonymous forums, and chatrooms for open discussions, and
          discover nearby STI testing locations for proactive health management.
        </p>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="flex items-center gap-10"
        >
          <div className="flex flex-col">
            <motion.h1 variants={countOneVariants} className="text-headerTwo text-baSecondary font-ba_large leading-10">
              3K+
            </motion.h1>
            <motion.span variants={countOneVariants} className="text-baDark dark:text-baLight text-smallSize">HAPPY CLIENTS</motion.span>
          </div>
          <div className="flex flex-col">
            <motion.h1 variants={countTwoVariants} className="text-headerTwo text-baSecondary font-ba_large leading-10">
              150K+
            </motion.h1>
            <motion.span variants={countTwoVariants} className="text-baDark dark:text-baLight text-smallSize">
              PROFESSIONAL DOCTORS
            </motion.span>
          </div>
          <div className="flex flex-col">
            <motion.h1 variants={countThreeVariants} className="text-headerTwo text-baSecondary font-ba_large leading-10">
              15K+
            </motion.h1>
            <motion.span variants={countThreeVariants} className="text-baDark dark:text-baLight text-smallSize">
              INFORMATIVE ARTICLES
            </motion.span>
          </div>
        </motion.div>
        <ButtonComponent
          btnText="Learn More"
          width="w-[200px]"
          variant="primary"
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
