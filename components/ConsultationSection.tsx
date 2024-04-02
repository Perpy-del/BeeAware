'use client';

import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import ButtonComponent from './ButtonComponent';

type Props = {};

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z
    .string()
    .email({ message: 'Email is not valid. e.g. johndoe@gmail.com' }),
  type: z.string({
    required_error: 'Please select the type.',
  }),
  date: z.date({
    required_error: 'Please select a date and time.',
  }),
  location: z.string({ required_error: 'Please enter a location' }).min(5),
  complaint: z
    .string({ required_error: 'Please state your complaint' })
    .min(10),
});

const ConsultationSection = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      type: '',
      date: undefined,
      location: '',
      complaint: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="mb-28 text-baLight bg-[url('/book-consult.jpg')] bg-no-repeat bg-cover h-[544px] px-20 flex justify-center items-center">
      <div className="w-1/2 bg-baPrimary text-center rounded-xl pt-5 pb-10 px-10">
        <h2 className="text-headerFour pb-2 font-ba_medium">
          Get A Consultation
        </h2>
        <p className="pb-10">Fill in the form to book a consultation</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-5 pb-10">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage className="text-[14px] font-ba_medium text-baWarning text-left" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[14px] font-ba_medium text-baWarning text-left" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="m@example.com">
                          m@example.com
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[14px] font-ba_medium text-baWarning text-left" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-[240px] pl-3 text-left font-normal',
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
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Location/Address" {...field} />
                    </FormControl>
                    <FormMessage className="text-[14px] font-ba_medium text-baWarning text-left" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Complaint" {...field} />
                    </FormControl>
                    <FormMessage className="text-[14px] font-ba_medium text-baWarning text-left" />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex justify-center'>
              <ButtonComponent
                variant="baSecondary"
                btnText={'Book Consultation'}
                width={'w-[250px]'}
                type="submit"
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ConsultationSection;
