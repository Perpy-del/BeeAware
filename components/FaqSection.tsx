import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Props = {};

const FaqSection = (props: Props) => {
  return (
    <div className="sm:mb-14 lg:mb-28 sm:pb-14 lg:pb-24 sm:px-5 lg:px-14 xl:px-20 3xl:px-40">
      <h1 className="text-baDark dark:text-baSubtle sm:text-headerFour lg:text-headerThree xl:text-headerTwo 3xl:text-textLarge sm:font-ba_medium lg:font-ba_large text-center font-ba_large pb-5">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is BeeAware?</AccordionTrigger>
          <AccordionContent>
            BeeAware is a comprehensive sexual health education platform
            dedicated to providing individuals with accurate information, expert
            guidance, and supportive community engagement.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What type of information does BeeAware provide?
          </AccordionTrigger>
          <AccordionContent>
            BeeAware provides users with expert advice, informative articles,
            anonymous forums, chatrooms, and information on STI testing, all
            aimed at empowering individuals with comprehensive sexual health
            education.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How can I find testing locations near me?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Are there age restrictions or requirements for using BeeAware?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Can I remain anonymous while using the forums and chatrooms?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            Who can I contact for support or assistance?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqSection;
