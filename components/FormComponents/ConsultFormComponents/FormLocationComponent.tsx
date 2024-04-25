import React from 'react';
import { ConsultFormProps } from './FormNameComponent';
import { MapPin } from 'lucide-react';

const FormLocationComponent = (props: ConsultFormProps) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor="location"
        className="block mb-2 font-ba_normal sm:text-bodySize md:text-headerSix text-baDark dark:text-baLight"
      >
        Location
      </label>
      <div className="flex items-center rounded-[20px] border border-input bg-baBody pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-14">
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Location e.g. Lagos, Nigeria"
          value={props.propValue}
          className="border-none outline-none ring-0 h-[52px] rounded-[20px] w-full dark:bg-baBody focus-visible:ring-0 focus-visible:ring-none focus-visible:ring-offset-0 rounded-s-[20px] pl-3"
          onChange={props.onFormChange}
        />
        <div className="text-baSubtle text-smallSize">
          <MapPin size={18} />
        </div>
      </div>
      {props.isInvalid && (
        <span className="text-[14px] font-ba_medium text-baWarning text-left">
          Please enter your location e.g. Lagos, Nigeria.
        </span>
      )}
    </div>
  );
};

export default FormLocationComponent;
