import React from 'react';
import { Button } from './ui/button';
import { ArrowRightToLine } from 'lucide-react';

type Props = {
    btnText: string
    width: string
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary" | "baSecondary" | null | undefined
    type?: string
    className?: string
};

const ButtonComponent = (props: Props) => {
  return (
    <Button
      variant={props.variant}
      className={`flex items-center transition transform duration-700 hover:scale-110 gap-2 ease-in-out hover:gap-4 ${props.width}`}
    >
      {props.btnText}
      <span className="">
        <ArrowRightToLine size={16} />
      </span>
    </Button>
  );
};

export default ButtonComponent;
