'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import ButtonComponent from '../ButtonComponent';
import FormInputComponent from '../FormComponents/FormInputComponent';
import FormDateComponent from '../FormComponents/FormDateComponent';
import { formSchema } from '@/schema/formSchema';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';

type Props = {};

const ConsultationSection = (props: Props) => {
  const { toast } = useToast();
  const router = useRouter();

  const [homeConsultDialog, setHomeConsultDialog] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      // type: '',
      date: undefined,
      location: '',
      complaint: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const validateName = (value: string) => {
      const valueValidate = /^[A-Za-z\s]*$/;
      return valueValidate.test(value);
    };

    if (!validateName(values.name)) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description:
          'Please input only letters in the name field (e.g. John Nolan), no numbers allowed (e.g. John1234)',
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }
    console.log(values);
  }

  const handleConsultSubmit = () => {
    setHomeConsultDialog(true);
    toast({
      title: 'You Need to be signed in',
      description: 'Please log in to book a consultation.',
      action: (
        <ToastAction altText="login" onClick={() => router.push('/auth/login')}>
          Log In
        </ToastAction>
      ),
      className: 'bg-baSecondary text-baLight dark:bg-baLight dark:text-baBody',
    });
    // setTimeout(() => {
    //   router.push('/auth/login');
    // }, 10000);
  };

  return (
    <div
      className="sm:mb-14 lg:mb-28 text-baLight lg:bg-[url('/book-consult.jpg')] lg:bg-no-repeat lg:bg-cover lg:h-[544px] sm:pb-0 lg:pb-24 sm:px-5 lg:px-14 xl:px-20 3xl:px-40 flex justify-center items-center"
      id="consult"
    >
      <div className="sm:w-[99.5%] lg:w-1/2 bg-baPrimary text-center lg:mt-[95px] rounded-xl pt-5 3xl:mt-20 pb-10 lg:pb-7 sm:px-5 lg:px-10">
        <h2 className="text-headerFour pb-2 font-ba_medium">
          Get A Consultation
        </h2>
        <p className="pb-5">Fill in the form to book a consultation</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
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
              {/* <FormSelectComponent control={form.control} formName={'type'} /> */}
              <FormDateComponent control={form.control} formName="date" />
              <FormInputComponent
                control={form.control}
                formName="location"
                placeholder="Location/Address"
              />
            </div>
            <div className="pb-10 pt-5">
              <FormInputComponent
                control={form.control}
                formName="complaint"
                placeholder="Complaint"
              />
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div className="flex justify-center">
                  <ButtonComponent
                    variant="baSecondary"
                    btnText={'Book Consultation'}
                    width={'w-[250px] 3xl:w-[300px]'}
                    onClick={handleConsultSubmit}
                  />
                </div>
              </AlertDialogTrigger>
              {homeConsultDialog && (
                <AlertDialogContent className="bg-baAccent dark:bg-baPrimary text-baDark w-[90%] lg:w-[60%] dark:text-baLight rounded-[20px] p-5 lg:p-14">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-center text-headerSix lg:text-headerFour font-ba_normal">
                      You Have to be Logged In to Book A Consultation
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-center font-ba_normal mx-auto lg:w-[80%]">
                      Kindly log into your BeeAware account or Create an Account
                      to access consultation services and other services on the
                      BeeAware dashboard.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="text-center flex flex-col lg:flex-row items-center gap-3">
                    <div className="flex justify-center items-center gap-2">
                      <ButtonComponent
                        variant="baSecondary"
                        btnText={'Log In'}
                        width={'w-[250px] 3xl:w-[300px]'}
                        onClick={() => {
                          router.push('/auth/login');
                        }}
                      />
                    </div>
                    <AlertDialogCancel className="w-[250px] rounded-[20px] h-12 border border-baLight">
                      Cancel
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              )}
            </AlertDialog>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ConsultationSection;
