/* eslint-disable @next/next/no-sync-scripts */
'use client';

import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Button } from './ui/button';
import { footerData } from '@/data';
import FooterInterface, { LinkInterface } from '@/interfaces/FooterInterface';
import SocialsComponent from './SocialsComponent';

type Props = {};

const Footer = (props: Props) => {
  const [email, setEmail] = useState<string>('');

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
          <SocialsComponent
            bgVariant={'bg-baLight'}
            color="black"
            className="flex items-center gap-5"
          />
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
          <form
            className="flex flex-wrap items-center"
            action="https://gmail.us22.list-manage.com/subscribe/post?u=cc01a7e03b2b0a584d912efd0&amp;id=5f333fc0d1&amp;f_id=0020c7e1f0"
            method="post"
            name="mc-embedded-subscribe-form"
            target="_blank"
          >
            <input
              type="email"
              name="EMAIL"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email address"
              className="h-10 sm:w-full smd:w-72 text-baLight px-4 outline-none bg-baLight/15 border-none rounded-tl-[5px] rounded-bl-[5px] "
            />
            <Button
              className="flex items-center gap-2 bg-baSecondary sm:w-full smd:w-fit lg:w-40 rounded-tr-[5px] rounded-br-[5px] rounded-tl-none rounded-bl-none border-none outline-none"
              name="subscribe"
              id="mc-embedded-subscribe"
              value="Subscribe"
              onClick={() => setEmail('')}
            >
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
        {/* <MailchimpForm /> */}
      </div>
      <div className="pt-12 flex flex-wrap sm:gap-2 lg:gap-7 text-smallSize text-baLight">
        <h6>&copy; 2023 Positivus. All Rights Reserved.</h6>
        <h6>Privacy Policy</h6>
      </div>
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html:
            "(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);",
        }}
      ></script>
    </footer>
  );
};

export default Footer;
