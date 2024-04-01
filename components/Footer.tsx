import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Button } from './ui/button';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="px-20 py-12 bg-baPrimary">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <Link href="/">
            <h1 className="text-headerThree cursor-pointer pb-8 text-baLight font-[800]">
              LOGO
            </h1>
          </Link>
          <span className="text-baLight">Email: info@beeaware.com</span>
          <span className="text-baLight block">Phone: +234 8124 900 0000</span>
          <span className="text-baLight">
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
        <div className="flex flex-col gap-3">
          <h1 className="text-headerFive pb-2 text-baLight font-ba_medium">
            INFO
          </h1>
          <Link href="/about">
            <span className="text-baLight hover:underline hover:font-ba_normal transition-all duration-300">
              About
            </span>
          </Link>
          <Link href="/faq">
            <span className="text-baLight hover:underline hover:font-ba_normal transition-all duration-300">
              FAQ
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-baLight hover:underline hover:font-ba_normal transition-all duration-300">
              Contact
            </span>
          </Link>
          <Link href="/cookies">
            <span className="text-baLight hover:underline hover:font-ba_normal transition-all duration-300">
              Cookies
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-headerFive pb-2 text-baLight font-ba_medium">
            RESOURCES
          </h1>
          <Link href="/services">
            <span className="text-baLight hover:underline hover:font-ba_normal transition-all duration-300">
              Services
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-baLight hover:underline hover:font-ba_normal transition-all duration-300">
              Contact
            </span>
          </Link>
          <Link href="/blog">
            <span className="text-baLight hover:underline hover:font-ba_normal transition-all duration-300">
              Blog
            </span>
          </Link>
          <Link href="/tos">
            <span className="text-baLight hover:underline hover:font-ba_normal transition-all duration-300">
              Terms of Service
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-headerFive text-baLight">
            Subscribe to our Newsletter
          </h3>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-10 w-72 text-baLight px-4 outline-none border-none rounded-tl-[5px] rounded-bl-[5px] bg-baLight/15"
            />
            <Button className="flex items-center gap-2 bg-baSecondary rounded-tr-[5px] rounded-br-[5px] rounded-tl-none rounded-bl-none border-none outline-none">
              <span className="text-smallSize text-baLight">Subscribe</span>{' '}
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
