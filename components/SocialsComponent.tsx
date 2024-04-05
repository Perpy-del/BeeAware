import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

type Props = {
    bgVariant?: string;
    color?: string;
    className?: string
};

const SocialsComponent = (props: Props) => {
  return (
    <div className={`${props.className}`}>
      <a href="#" className={`p-[5px] ${props.bgVariant} rounded-full cursor-pointer`}>
        <FaLinkedinIn color={props.color} />
      </a>
      <a href="#" className={`p-[5px] ${props.bgVariant} rounded-full cursor-pointer`}>
        <FaFacebookF color={props.color} />
      </a>
      <a href="#" className={`p-[5px] ${props.bgVariant} rounded-full cursor-pointer`}>
        <FaXTwitter color={props.color} />
      </a>
    </div>
  );
};

export default SocialsComponent;
