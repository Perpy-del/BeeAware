import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Props = {};

const DoctorsFaqSection = (props: Props) => {
  return (
    <div className="sm:mb-14 lg:mb-28 sm:pb-14 lg:pb-24 sm:px-5 lg:px-14 xl:px-20 3xl:px-40 pt-10">
      <h1 className="text-baDark dark:text-baSubtle sm:text-headerFour lg:text-headerThree xl:text-headerTwo 3xl:text-textLarge sm:font-ba_medium lg:font-ba_large text-center font-ba_large pb-5">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What types of consulting opportunities do you offer?
          </AccordionTrigger>
          <AccordionContent>
            We offer services that includes but not limited to patient
            education, personal or virtual consultation, anonymous sections with
            community members.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I need to be board certified to become a consultant?
          </AccordionTrigger>
          <AccordionContent>
            Every practicing consultant have the required certification as
            expected from medical practitioners.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What are the benefits of becoming a consultant with your firm?
          </AccordionTrigger>
          <AccordionContent>
            Apart from flexibility and work life balance , you get to enjoy a
            competitive salary, career development, paid leave allowance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Do you have any geographical restrictions for consultants?
          </AccordionTrigger>
          <AccordionContent>
            Currently there are no geographical restrictions as the algorithm
            pairs consultant to client based on proximity to location.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default DoctorsFaqSection;
