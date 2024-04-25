import { ConsultDetailsInterface } from '@/app/dashboard/consult/page';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

export type ConsultFormProps = {
  propValue: string | undefined;
  onFormChange: (e: ChangeEvent<any>) => void;
  isInvalid: boolean;
};

const FormNameComponent = (props: ConsultFormProps) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor="name"
        className="block mb-2 font-ba_normal sm:text-bodySize md:text-headerSix text-baDark dark:text-baLight"
      >
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={props.propValue}
        placeholder="Enter your name"
        className="pl-3 py-4 h-14 rounded-[20px] flex w-full border border-input bg-baLight/15 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed  disabled:opacity-50"
        onChange={props.onFormChange}
      />
      {props.isInvalid && (
        <span className="text-[14px] font-ba_medium text-baWarning text-left">
          Name field is required and must be at least 2 characters.
        </span>
      )}
    </div>
  );
};

export default FormNameComponent;
