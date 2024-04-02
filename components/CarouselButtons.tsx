import React, { PropsWithChildren } from 'react'
import { FaArrowRightLong, FaArrowLeftLong  } from "react-icons/fa6";

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const PrevButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props
  
    return (
      <button
        className="text-baDark w-8 h-8 border border-baSubtle flex justify-center items-center rounded-full hover:bg-baPrimary hover:text-baLight"
        type="button"
        {...restProps}
      >
        <FaArrowLeftLong />
      </button>
    )
  }
  
  export const NextButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props
  
    return (
      <button
        className="text-baDark w-8 h-8 border border-baSubtle flex justify-center items-center rounded-full hover:bg-baPrimary hover:text-baLight"
        type="button"
        {...restProps}
      >
        <FaArrowRightLong />
      </button>
    )
  }