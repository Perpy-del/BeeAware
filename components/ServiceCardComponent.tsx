import Image from 'next/image';
import React from 'react';

export type ServicesProps = {
  image: string;
  cardHeader: string;
  cardBody: string;
};

const ServiceCardComponent = (props: ServicesProps) => {
  return (
    <div className="bg-baAccent sm:p-9 lg:px-[20px] lg:pt-[50px] xl:p-[50px] max-w-[510px] sm:h-fit lg:h-[510px] 3xl:h-[540px] rounded-[20px] space-y-4 mx-auto text-center">
      <div className='w-full'>
        <Image
          src={props.image}
          alt="icon"
          width={60}
          height={60}
          className="object-center object-cover mx-auto"
        />
      </div>
      <h2 className='text-baPrimary sm:text-headerSix lg:text-headerThree font-ba_medium'>{props.cardHeader}</h2>
      <p className='text-baPrimary sm:text-smallSize lg:text-headerSix 3xl:text-headerFive font-ba_normal'>{props.cardBody}</p>
    </div>
  );
};

export default ServiceCardComponent;
