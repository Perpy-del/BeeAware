import Image from 'next/image';

type Props = {};

const VisionMissionComponent = (props: Props) => {
  return (
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
      <div className="lg:w-[50%] 3xl:w-full sm:space-y-14 lg:space-y-10 3xl:space-x-14">
        <div className="space-y-4">
          <h6 className="text-headerFive 3xl:text-headerFour sm:mx-auto lg:mx-0 lg:mt-3 font-ba_normal px-4 py-2 3xl:px-8 text-baLight bg-baSecondary w-fit rounded-[30px] mb-5">
            Our Mission
          </h6>
          <h3 className="sm:text-[25px] lg:text-[38px] 3xl:text-[54px] sm:text-center lg:text-left sm:leading-8 lg:leading-[48px] text-baDark sm:font-ba_medium lg:font-ba_large">
            Pioneering Digital Healthcare Solutions for Sexual Wellness
          </h3>
          <p className="sm:text-bodySize lg:text-headerFive 3xl:text-headerThree sm:text-center lg:text-left font-ba_normal text-baSubtle">
            By leveraging digital tools, BeeAware aims to make sexual healthcare
            more accessible, convenient, and user-friendly for Nigerians.
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
            By leveraging digital tools, BeeAware aims to make sexual healthcare
            more accessible, convenient, and user-friendly for Nigerians.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionComponent;
