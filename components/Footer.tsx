import Link from 'next/link';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Button } from './ui/button';
import { footerData } from '@/data';
import FooterInterface, { LinkInterface } from '@/interfaces/FooterInterface';
import SocialsComponent from './SocialsComponent';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="sm:pb-14 lg:pb-24 xl:pb-12 sm:px-5 lg:px-14 xl:px-20 3xl:px-40 py-12 bg-baPrimary">
      <div className="flex flex-wrap sm:gap-12 lg:gap-0 pb-12 border-b border-baLight justify-between sm:items-start lg:items-center">
        {/* Left side */}
        <div className="flex flex-col gap-3">
          <Link href="/">
            <h1 className="text-headerThree cursor-pointer pb-8 text-baLight font-[800]">
              LOGO
            </h1>
          </Link>
          <span className="text-baLight 3xl:text-headerSix">
            Email: info@beeaware.com
          </span>
          <span className="text-baLight 3xl:text-headerSix block">
            Phone: +234 8124 900 0000
          </span>
          <span className="text-baLight 3xl:text-headerSix">
            Address: 1234 Main St. <br /> Moonstone City, Stardust State 12345
          </span>
          <SocialsComponent bgVariant={'bg-baLight'} color="black" className='flex items-center gap-5' />
        </div>

        {footerData.map((data: FooterInterface) => {
          return (
            <div key={data?.header} className="flex flex-col gap-3">
              <h1 className="text-headerFive 3xl:text-headerThree pb-2 text-baLight font-ba_medium">
                {data?.header}
              </h1>
              {data?.links.map((link: LinkInterface) => (
                <Link key={link.text} href={link?.href}>
                  <span className="text-baLight hover:underline 3xl:text-headerSix hover:font-ba_normal transition-all duration-300">
                    {link?.text}
                  </span>
                </Link>
              ))}
            </div>
          );
        })}

        {/* subscribe to newsletter */}
        <div className="flex flex-col gap-5">
          <h3 className="sm:text-headerSix sm:text-center lg:text-left lg:text-headerFive 3xl:text-headerThree text-baLight">
            Subscribe to our Newsletter
          </h3>
          <form className="flex flex-wrap items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-10 sm:w-full smd:w-72 text-baLight px-4 outline-none bg-baLight/15 border-none rounded-tl-[5px] rounded-bl-[5px] "
            />
            <Button className="flex items-center gap-2 bg-baSecondary sm:w-full smd:w-fit lg:w-40 rounded-tr-[5px] rounded-br-[5px] rounded-tl-none rounded-bl-none border-none outline-none">
              <span className="text-smallSize 3xl:text-headerSix text-baLight">
                Subscribe
              </span>{' '}
              <span className="text-baLight">
                {' '}
                <IoIosArrowRoundForward />{' '}
              </span>
            </Button>
          </form>
        </div>
      </div>
      <div className="pt-12 flex flex-wrap sm:gap-2 lg:gap-7 text-smallSize text-baLight">
        <h6>&copy; 2023 Positivus. All Rights Reserved.</h6>
        <h6>Privacy Policy</h6>
      </div>
    </footer>
  );
};

export default Footer;
