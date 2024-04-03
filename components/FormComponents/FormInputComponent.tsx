import React from 'react';
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import FormInterface from '@/interfaces/FormInterface';
import { Control } from 'react-hook-form';

type Props = {
  control: Control<FormInterface> | any;
  formName: 'name' | 'type' | 'location' | 'date' | 'email' | 'complaint';
  placeholder: string | undefined;
};

const FormInputComponent = (props: Props) => {
  return (
    <>
      <FormField
        control={props.control}
        name={props.formName}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder={props.placeholder} {...field} />
            </FormControl>
            <FormMessage className="text-[14px] font-ba_medium text-baWarning text-left" />
          </FormItem>
        )}
      />
    </>
  );
};

export default FormInputComponent;
