'use client';

import { ApplyIcon, ApprovalIcon, VerifyIcon } from '@/components/SvgIcons';
import { countOneVariants, countThreeVariants, countTwoVariants } from '@/data';
import { motion } from 'framer-motion';

type Props = {};

const DoctorsWorkSection = (props: Props) => {
  return (
    <div className="sm:px-5 lg:px-20 3xl:px-40 text-baDark dark:text-baLight sm:pb-14 lg:pb-24 py-12">
      <h1 className="text-center sm:text-headerThree lg:text-headerTwo pb-4 font-ba_medium lg:font-ba_large">
        How It Works
      </h1>
      <p className="text-center text-headerFive lg:text-headerFour text-baSubtle font-ba_normal pb-10 lg:pb-16">
        You journey as a medical consultant for BeeAware begins with 3 easy
        steps{' '}
      </p>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="flex sm:flex-col md:flex-row sm:gap-7 lg:gap-0 justify-between"
      >
        <div className="text-center lg:text-left lg:w-[28%] xl:w-[26%]">
          <motion.div variants={countOneVariants}>
            <ApplyIcon />
          </motion.div>
          <motion.span
            variants={countOneVariants}
            className="text-baPrimary dark:text-baSecondary text-headerFour lg:text-headerThree font-ba_normal lg:font-ba_medium block pt-4 pb-2"
          >
            Apply
          </motion.span>
          <motion.span
            variants={countOneVariants}
            className="text-baSubtle lg:text-baBody dark:text-baLight font-ba_normal text-headerSix lg:text-headerFive"
          >
            Fill out the application form at your convenience.
          </motion.span>
        </div>
        <div className="text-center lg:text-left lg:w-[28%] xl:w-[26%]">
          <motion.div variants={countTwoVariants}>
            <VerifyIcon />
          </motion.div>
          <motion.span
            variants={countTwoVariants}
            className="text-baPrimary dark:text-baSecondary text-headerFour lg:text-headerThree font-ba_normal lg:font-ba_medium block pt-4 pb-2"
          >
            Get Verified
          </motion.span>
          <motion.span
            variants={countTwoVariants}
            className="text-baSubtle lg:text-baBody dark:text-baLight font-ba_normal text-headerSix lg:text-headerFive"
          >
            Our team will review the information provided.
          </motion.span>
        </div>
        <div className="text-center lg:text-left lg:w-[28%] xl:w-[26%]">
          <motion.div variants={countThreeVariants}>
            <ApprovalIcon />
          </motion.div>
          <motion.span
            variants={countThreeVariants}
            className="text-baPrimary dark:text-baSecondary text-headerFour lg:text-headerThree font-ba_normal lg:font-ba_medium block pt-4 pb-2"
          >
            Approval
          </motion.span>
          <motion.span
            variants={countThreeVariants}
            className="text-baSubtle lg:text-baBody dark:text-baLight font-ba_normal text-headerSix lg:text-headerFive"
          >
            Successful applicants get introduced as consultants.
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default DoctorsWorkSection;
