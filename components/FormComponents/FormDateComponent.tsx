import React from 'react';
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { FormProps } from './FormSelectComponent';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import { cn } from '@/lib/utils';

const FormDateComponent = (props: FormProps) => {
  return (
    <>
      <FormField
        control={props.control}
        name="date"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[235px] pl-3 text-left font-normal bg-baLight/15 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2',
                      !field.value && 'text-muted-foreground'
                    )}
                  >
                    {field.value ? (
                      format(field.value, 'PPP')
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={date =>
                    date > new Date() || date < new Date('1900-01-01')
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage className="text-[14px] font-ba_medium text-baWarning text-left" />
          </FormItem>
        )}
      />
    </>
  );
};

export default FormDateComponent;
