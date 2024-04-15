import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { ChevronDown, ChevronRight, XCircle } from 'lucide-react';
import { moreAboutData } from '@/data';
import { useState } from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';

type Props = {};

export const MobileServicesDropdown = () => {
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  return (
    <div>
      <Button
        className="border-none outline-none h-fit w-fit py-2 px-0"
        onClick={() => setShowServicesMenu(!showServicesMenu)}
      >
        <ChevronRight />
      </Button>
      {showServicesMenu && (
        <div className="w-screen h-screen fixed z-[100] left-0 top-0 bg-baLight text-baDark dark:bg-baDark dark:text-baLight pt-5">
          {moreAboutData.map(data => (
            <>
              <div key={data?.header} className='flex items-center gap-5 pr-4'>
                <div className="space-y-2 p-4 hover:bg-baAccent dark:hover:bg-baSubtle rounded-[20px] transition duration-300">
                  <h3 className="text-headerFive font-ba_normal">
                    {data?.header}
                  </h3>
                  <p className="text-smallSize font-ba_normal">{data?.text}</p>
                </div>
                <div className="p-2 border-[0.5px] w-fit h-fit rounded-full cursor-pointer bg-baPrimary text-baLight dark:text-baLight">
                  <IoArrowForwardOutline size={20} />
                </div>
              </div>
              <div
                className="absolute top-4 right-4"
                onClick={() => setShowServicesMenu(false)}
              >
                <XCircle />
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

const ServicesDropdown = (props: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="border-none outline-none h-fit w-fit p-0">
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-[728px] grid grid-cols-2 p-5 gap-6 mt-3 rounded-[20px] bg-baLight shadow-[3px_3px_0_10px_rgba(0, 0, 0, 0.10)] border border-[#EEEBEB] dark:border-baSubtle">
        {moreAboutData.map(data => (
          <div
            key={data?.header}
            className="space-y-2 p-4 cursor-pointer hover:bg-baAccent dark:hover:bg-baSubtle rounded-[20px] transition duration-300"
          >
            <h3 className="text-headerFive font-ba_normal">{data?.header}</h3>
            <p className="text-smallSize font-ba_normal">{data?.text}</p>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServicesDropdown;
