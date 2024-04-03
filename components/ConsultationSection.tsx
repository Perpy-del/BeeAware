'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import ButtonComponent from './ButtonComponent';
import FormInputComponent from './FormComponents/FormInputComponent';
import FormSelectComponent from './FormComponents/FormSelectComponent';
import FormDateComponent from './FormComponents/FormDateComponent';
import { formSchema } from '@/schema/formSchema';

type Props = {};

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
              <FormInputComponent
                control={form.control}
                formName="name"
                placeholder="Enter your name"
              />
              <FormInputComponent
                control={form.control}
                formName="email"
                placeholder="Enter your email address"
              />
              <FormSelectComponent control={form.control} formName={'type'} />
              <FormDateComponent control={form.control} formName="date" />
              <FormInputComponent
                control={form.control}
                formName="location"
                placeholder="Location/Address"
              />
              <FormInputComponent
                control={form.control}
                formName="complaint"
                placeholder="Complaint"
              />
            </div>
            <div className="flex justify-center">
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
