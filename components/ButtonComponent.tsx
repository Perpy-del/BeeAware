import React from 'react';
import { Button } from './ui/button';
import { ArrowRightToLine } from 'lucide-react';

type Props = {
    btnText: string
    width: string
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary" | "baSecondary" | null | undefined
    type?: string
    className?: string
    onClick?: () => void
};

const ButtonComponent = (props: Props) => {
  return (
    <div className='flex sm:justify-center lg:justify-start' onClick={props.onClick}>
    <Button
      variant={props.variant}
      className={`flex items-center transition transform duration-700 hover:scale-110 gap-2 ease-in-out hover:gap-4 3xl:text-headerFour 3xl:h-14 ${props.width}`}
    >
      {props.btnText}
      <span className='3xl:hidden'>
        <ArrowRightToLine size={16} />
      </span>
    </Button>
    </div>
  );
};

export default ButtonComponent;
