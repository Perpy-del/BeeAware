import React from 'react';
import { Button } from './ui/button';
import { ArrowRightToLine } from 'lucide-react';
import { CircularProgress } from '@mui/material';

type Props = {
    btnText: string
    width: string
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary" | "baSecondary" | null | undefined
    type?: string
    className?: string
    onClick?: () => void
    loading?: boolean
};

const ButtonComponent = (props: Props) => {
  return (
    <div className={`flex sm:justify-center lg:justify-start ${props.className}`} onClick={props.onClick}>
    <Button
      variant={props.variant}
      className={`flex items-center transition transform duration-700 hover:scale-110 gap-2 ease-in-out hover:gap-4 3xl:text-headerFour 3xl:h-14 ${props.width}`}
    >
      {props.btnText}
      {props.loading ? <CircularProgress size={24} /> :
      <span className='3xl:hidden'>
        <ArrowRightToLine size={16} />
      </span>}
    </Button>
    </div>
  );
};

export default ButtonComponent;
