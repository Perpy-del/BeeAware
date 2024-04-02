import Image from 'next/image';
import React from 'react';
import ButtonComponent from './ButtonComponent';

type Props = {};

const WelcomeSection = (props: Props) => {
  return (
    <div className='flex items-center gap-20 pb-24 px-20 text-baBody'>
      <div className='w-[35%]'>
        <Image
          width={480}
          height={480}
          src="/second_section_pic.jpg"
          alt="welcome message picture"
          className='object-cover object-center'
        />
      </div>
      <div className='w-[60%] space-y-6'>
        <h1 className='text-headerTwo font-ba_large leading-6 text-baDark'>Welcome to BeeAware</h1>
        <p className='text-headerFive'>
          Through BeeAware, users can access consultations with healthcare
          professionals, informative articles on a wide range of sexual health
          topics, anonymous forums, and chatrooms for open discussions, and
          discover nearby STI testing locations for proactive health management.
        </p>
        <div className='flex items-center gap-10'>
          <div className='flex flex-col'><h1 className='text-headerTwo text-baSecondary font-ba_large leading-10'>3K+</h1><span className='text-baDark text-smallSize'>HAPPY CLIENTS</span></div>
          <div className='flex flex-col'><h1 className='text-headerTwo text-baSecondary font-ba_large leading-10'>150K+</h1><span className='text-baDark text-smallSize'>PROFESSIONAL DOCTORS</span></div>
          <div className='flex flex-col'><h1 className='text-headerTwo text-baSecondary font-ba_large leading-10'>15K+</h1><span className='text-baDark text-smallSize'>INFORMATIVE ARTICLES</span></div>
          
        </div>
        <ButtonComponent btnText='Learn More' width='w-[200px]' variant='primary' />
      </div>
    </div>
  );
};

export default WelcomeSection;
