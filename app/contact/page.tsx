'use client';

import ButtonComponent from '@/components/ButtonComponent';
import FormContactComponent from '@/components/FormComponents/FormContactComponent';
import SocialsComponent from '@/components/SocialsComponent';
import React from 'react';

type Props = {};

const ContactPage = (props: Props) => {
  

  return (
    <div className="sm:pt-10 lg:pt-14 sm:pb-14 lg:pb-24 sm:px-5 lg:pr-0 lg:pl-14 xl:pl-20 3xl:pl-40 3xl:h-[75vh]">
      <h1 className="sm:text-headerFour lg:text-headerThree xl:text-headerTwo 3xl:text-textLarge sm:font-ba_medium lg:font-ba_large sm:leading-normal sm:text-center lg:text-left dark:text-baSubtle text-baDark 3xl:pt-60">
        Get in Touch
      </h1>
      <p className="lg:text-headerFive font-ba_normal sm:pb-14 lg:pb-16 sm:text-center lg:text-left text-baBody dark:text-baLight 3xl:text-headerTwo">
        Send us a message! We would love to hear from you.
      </p>
      <div className="flex justify-between items-center sm:gap-5 lg:gap-0 sm:flex-col-reverse lg:flex-row">
        <FormContactComponent />

        <aside className="bg-baAccent text-baPrimary sm:w-full lg:w-2/5 sm:text-center lg:text-right py-14 sm:rounded-[20px] lg:rounded-tl-[20px] lg:rounded-bl-[20px] space-y-10 sm:p-6 lg:pr-20 font-ba_normal 3xl:py-36">
          <h3 className="text-headerSix 3xl:text-headerThree">CONTACT INFORMATION</h3>
          <h3 className='3xl:text-headerThree'>Email: info@beeaware.com</h3>
          <h3 className='3xl:text-headerThree'>Phone: +234 8124 900 0000</h3>
          <h3 className='3xl:text-headerThree'>
            Address: 1234 Main St <br />
            Moonstone City, Stardust State 12345
          </h3>
          <SocialsComponent
            bgVariant={'bg-baPrimary'}
            color={'white'}
            className="flex sm:justify-center lg:justify-end items-center gap-5"
          />
        </aside>
      </div>
    </div>
  );
};

export default ContactPage;
