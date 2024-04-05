import React, { ChangeEvent } from 'react';

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  isMoreInfoEmpty: boolean;
};

const FormContactTextAreaComponent = (props: Props) => {
  return (
    <div>
      <textarea
        placeholder="I want to talk about..."
        value={props.value}
        onChange={props.onChange}
        className="sm:px-0 sm:dark:px-4 lg:px-4 py-3 contact-input font-ba_normal border-b border-b-baDark outline-none focus-visible:border-b-2 focus-visible:border-b-baPrimary w-full 3xl:text-headerFour mt-8"
        rows={5}
      />
      {props.isMoreInfoEmpty && (
        <span className="text-baError text-smallSize pt-1 3xl:text-headerFive">
          Please let us know what you would like
        </span>
      )}
    </div>
  );
};

export default FormContactTextAreaComponent;
