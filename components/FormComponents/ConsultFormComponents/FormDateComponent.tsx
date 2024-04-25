import React from 'react';
import { ConsultFormProps } from './FormNameComponent';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

type Props = {
  onDateChange: (date: any) => void;
  propValue: any;
  isInvalid: boolean;
};

const FormDateComponent = (props: Props) => {
  return (
    <div className="space-y-2">
      <label className="block font-ba_normal sm:text-bodySize md:text-headerSix text-baDark dark:text-baLight">
        Date
      </label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'sm:max-w-[1000px] w-full pl-3 text-left font-normal bg-baLight/15 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 py-4 h-14 rounded-[20px]',
              !props.propValue && 'text-muted-foreground'
            )}
          >
            {props.propValue ? (
              format(props.propValue, 'PPP')
            ) : (
              <span className="text-baSubtle">Date</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-2 bg-baLight dark:bg-baBody border border-baPrimary rounded-md"
          align="start"
        >
          <Calendar
            mode="single"
            selected={props.propValue}
            onSelect={props.onDateChange}
            disabled={date =>
              date < new Date() || date < new Date('1900-01-01')
            }
            initialFocus
            className="bg-baLight dark:bg-baBody dark:text-baLight"
          />
        </PopoverContent>
      </Popover>
      {props.isInvalid && (
        <span className="text-[14px] font-ba_medium text-baWarning text-left">
          Please input a valid date.
        </span>
      )}
    </div>
  );
};

export default FormDateComponent;
