import FormInterface from '@/interfaces/FormInterface';
import React from 'react';
import { Control } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormMessage } from './ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export type FormProps = {
  control: Control<FormInterface> | any;
  formName: 'name' | 'type' | 'location' | 'date' | 'email' | 'complaint';
};

const FormSelectComponent = (props: FormProps) => {
  return (
    <>
      <FormField
        control={props.control}
        name="type"
        render={({ field }) => (
          <FormItem>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="m@example.com">m@example.com</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage className="text-[14px] font-ba_medium text-baWarning text-left" />
          </FormItem>
        )}
      />
    </>
  );
};

export default FormSelectComponent;
