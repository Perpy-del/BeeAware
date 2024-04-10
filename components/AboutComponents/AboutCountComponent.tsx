import { countOneVariants, countThreeVariants, countTwoVariants } from '@/data';
import { motion } from 'framer-motion';

type Props = {};

const AboutCountComponent = (props: Props) => {
  return (
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
  );
};

export default AboutCountComponent;
