import ButtonComponent from '@/components/ButtonComponent';
import SocialsComponent from '@/components/SocialsComponent';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'BeeAware | Contact',
  description: 'An application to create more awareness about sexual health',
};

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <div className="sm:pt-10 lg:pt-14 sm:pb-14 lg:pb-24 sm:px-5 lg:pr-0 lg:pl-14 xl:pl-20 3xl:pl-40">
      <h1 className="sm:text-headerFoursm:text-headerFour lg:text-headerThree xl:text-headerTwo 3xl:text-textLarge sm:font-ba_medium lg:font-ba_large sm:leading-normal sm:text-center lg:text-left dark:text-baSubtle text-baDark">
        Get in Touch
      </h1>
      <p className="lg:text-headerFive font-ba_normal sm:pb-14 lg:pb-16 text-baBody dark:text-baLight">
        Send us a message! We would love to hear from you.
      </p>
      <div className="flex justify-between items-center">
        <form className="w-[55%]">
          <div className="flex justify-between gap-10 pb-8">
            <input
              type="text"
              placeholder="First Name"
              className="px-4 py-3 contact-input font-ba_normal border-b border-b-baDark outline-none focus-visible:border-b-2 focus-visible:border-b-baPrimary w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="px-4 py-3 contact-input font-ba_normal border-b border-b-baDark outline-none focus-visible:border-b-2 focus-visible:border-b-baPrimary w-full"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 contact-input font-ba_normal border-b border-b-baDark outline-none focus-visible:border-b-2 focus-visible:border-b-baPrimary w-full mb-8"
          />
          <textarea
            placeholder="I want to talk about..."
            className="px-4 py-3 contact-input font-ba_normal border-b border-b-baDark outline-none focus-visible:border-b-2 focus-visible:border-b-baPrimary w-full mb-11"
            rows={5}
          />
          <div className="flex justify-center">
            <ButtonComponent
              variant="primary"
              btnText={'Send'}
              width={'w-[180px]'}
            />
          </div>
        </form>

        <aside className="bg-baAccent text-baPrimary w-2/5 text-right py-14 rounded-tl-[20px] rounded-bl-[20px] space-y-10 pr-20 font-ba_normal">
          <h3 className="text-headerSix">CONTACT INFORMATION</h3>
          <h3>Email: info@beeaware.com</h3>
          <h3>Phone: +234 8124 900 0000</h3>
          <h3>
            Address: 1234 Main St <br />
            Moonstone City, Stardust State 12345
          </h3>
          <SocialsComponent
            bgVariant={'bg-baPrimary'}
            color={'white'}
            className="flex justify-end items-center gap-5"
          />
        </aside>
      </div>
    </div>
  );
};

export default ContactPage;
