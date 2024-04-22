import ButtonComponent from '@/components/ButtonComponent';
import Image from 'next/image';

type Props = {};

const DoctorsHeroSection = (props: Props) => {
  return (
    <div className="sm:mx-5 sm:mb-14 lg:mb-24 lg:mx-20 3xl:mx-40 bg-baAccent rounded-[20px] sm:py-8 sm:px-4 lg:py-10 xl:py-16 lg:px-12 xl:px-16 flex sm:flex-col md:flex-row lg:items-center sm:gap-12 lg:gap-3 xl:gap-0" id='doctors'>
      <div className="space-y-4 lg:pr-5">
        <h1 className="sm:text-headerThree sm:font-ba_medium lg:text-headerThree xl:text-textLarge lg:font-ba_large sm:text-center xl:text-left text-baDark sm:leading-10 xl:leading-[70px]">
          Expand Your <span className="text-baPrimary">Reach</span>, Become a
          Medical Consultant Today!
        </h1>
        <p className="sm:text-headerSix lg:text-headerFive text-baSubtle sm:text-center xl:text-left xl:w-[90%]">
          Join us and unlock new opportunities to shape the future of medicine,
          all on your terms.
        </p>
        <div className="flex sm:justify-center xl:justify-start">
          <ButtonComponent
            btnText={'Join Us Today'}
            width={'w-[200px]'}
            variant="primary"
          />
        </div>
        <p className="text-baPrimary/80 font-ba_medium pt-4 sm:text-center lg:text-left sm:text-smallSize xl:text-bodySize">
          *Membership is exclusive to licensed medical doctors.
        </p>
      </div>
      <div>
        <Image
          src="/doctor_hero.jpg"
          alt="Doctor Hero"
          width={850}
          height={600}
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default DoctorsHeroSection;
