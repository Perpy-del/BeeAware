import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Button } from './ui/button';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="sm:pb-14 lg:pb-24 sm:px-5 lg:px-14 xl:px-20 3xl:px-40 py-12 bg-baPrimary">
      <div className="flex flex-wrap sm:gap-12 lg:gap-0 justify-between sm:items-start lg:items-center">
        {/* Left side */}
        <div className="flex flex-col gap-3">
          <Link href="/">
            <h1 className="text-headerThree cursor-pointer pb-8 text-baLight font-[800]">
              LOGO
            </h1>
          </Link>
          <span className="text-baLight 3xl:text-headerSix">Email: info@beeaware.com</span>
          <span className="text-baLight 3xl:text-headerSix block">Phone: +234 8124 900 0000</span>
          <span className="text-baLight 3xl:text-headerSix">
            Address: 1234 Main St. <br /> Moonstone City, Stardust State 12345
          </span>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="p-[5px] bg-baLight rounded-full cursor-pointer"
            >
              <FaLinkedinIn color="black" />
            </a>
            <a
              href="#"
              className="p-[5px] bg-baLight rounded-full cursor-pointer"
            >
              <FaFacebookF color="black" />
            </a>
            <a
              href="#"
              className="p-[5px] bg-baLight rounded-full cursor-pointer"
            >
              <FaXTwitter color="black" />
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-3">
          <h1 className="text-headerFive 3xl:text-headerThree pb-2 text-baLight font-ba_medium">
            INFO
          </h1>
          <Link href="/about">
            <span className="text-baLight hover:underline 3xl:text-headerSix hover:font-ba_normal transition-all duration-300">
              About
            </span>
          </Link>
          <Link href="/faq">
            <span className="text-baLight hover:underline 3xl:text-headerSix hover:font-ba_normal transition-all duration-300">
              FAQ
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-baLight hover:underline 3xl:text-headerSix hover:font-ba_normal transition-all duration-300">
              Contact
            </span>
          </Link>
          <Link href="/cookies">
            <span className="text-baLight hover:underline 3xl:text-headerSix hover:font-ba_normal transition-all duration-300">
              Cookies
            </span>
          </Link>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-3">
          <h1 className="text-headerFive 3xl:text-headerThree pb-2 text-baLight font-ba_medium">
            RESOURCES
          </h1>
          <Link href="/services">
            <span className="text-baLight hover:underline 3xl:text-headerSix hover:font-ba_normal transition-all duration-300">
              Services
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-baLight hover:underline 3xl:text-headerSix hover:font-ba_normal transition-all duration-300">
              Contact
            </span>
          </Link>
          <Link href="/blog">
            <span className="text-baLight hover:underline 3xl:text-headerSix hover:font-ba_normal transition-all duration-300">
              Blog
            </span>
          </Link>
          <Link href="/tos">
            <span className="text-baLight hover:underline 3xl:text-headerSix hover:font-ba_normal transition-all duration-300">
              Terms of Service
            </span>
          </Link>
        </div>

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
              <span className="text-smallSize 3xl:text-headerSix text-baLight">Subscribe</span>{' '}
              <span className="text-baLight">
                {' '}
                <IoIosArrowRoundForward />{' '}
              </span>
            </Button>
          </form>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
