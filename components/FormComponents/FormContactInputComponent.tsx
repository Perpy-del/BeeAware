import React, { ChangeEvent } from 'react';

type Props = {
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FormContactInputComponent = (props: Props) => {
  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="sm:px-0 sm:dark:px-4 lg:px-4 py-3 contact-input font-ba_normal border-b border-b-baDark outline-none focus-visible:border-b-2 focus-visible:border-b-baPrimary w-full 3xl:text-headerFour"
      />
    </>
  );
};

export default FormContactInputComponent;
