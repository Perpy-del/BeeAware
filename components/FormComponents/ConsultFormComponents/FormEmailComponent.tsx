import React from 'react';
import { ConsultFormProps } from './FormNameComponent';

const FormEmailComponent = (props: ConsultFormProps) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor="email"
        className="block mb-2 font-ba_normal sm:text-bodySize md:text-headerSix text-baDark dark:text-baLight"
      >
        Email
      </label>
      <input
        type="text"
        name="email"
        id="email"
        value={props.propValue}
        placeholder="Enter your email address"
        className="pl-3 py-4 h-14 rounded-[20px] flex w-full border border-input bg-baLight/15 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        onChange={props.onFormChange}
      />
      {props.isInvalid && (
        <span className="text-[14px] font-ba_medium text-baWarning text-left">
          Please input a valid email address. e.g. johndoe@gmail.com.
        </span>
      )}
    </div>
  );
};

export default FormEmailComponent;
