'use client';

import DashboardBreadcrumbComponent from '@/components/BreadcrumbComponents/DashboardBreadcrumbComponent';
import { ChangeEvent, useState } from 'react';
import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';
import { ConsultationDialog } from '@/components/ConsultationDialog';
import FormNameComponent from '@/components/FormComponents/ConsultFormComponents/FormNameComponent';
import FormEmailComponent from '@/components/FormComponents/ConsultFormComponents/FormEmailComponent';
import FormLocationComponent from '@/components/FormComponents/ConsultFormComponents/FormLocationComponent';
import FormDateComponent from '@/components/FormComponents/ConsultFormComponents/FormDateComponent';
import FormComplaintComponent from '@/components/FormComponents/ConsultFormComponents/FormComplaintComponent';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';

export interface ConsultDetailsInterface {
  name: string;
  email: string;
  date: any;
  location: string;
  complaint: string;
}

const defaultValues = {
  name: '',
  email: '',
  date: undefined,
  location: '',
  complaint: '',
};

const ConsultationPage = () => {
  const {setNumMessages} = useBeeawareHook();
  const [consultDetails, setConsultDetails] =
    useState<ConsultDetailsInterface>(defaultValues);
  const [invalidName, setInvalidName] = useState<boolean>(false);
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [invalidDate, setInvalidDate] = useState<boolean>(false);
  const [invalidLocation, setInvalidLocation] = useState<boolean>(false);
  const [invalidComplaint, setInvalidComplaint] = useState<boolean>(false);
  const [showConsult, setShowConsult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<any>) => {
    const { name, value } = e.target;
    setConsultDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleDate = (newDate: any) => {
    const updatedDetails = {
      ...consultDetails,
      date: newDate,
    };

    setConsultDetails(updatedDetails);
  };

  const resetDetails = () => {
    setInvalidEmail(false);
    setInvalidName(false);
    setInvalidLocation(false);
    setInvalidDate(false);
    setInvalidComplaint(false);
    setConsultDetails(defaultValues);
  };

  function onSubmit() {
    const validateName = (value: string) => {
      const valueValidate = /^[A-Za-z\s]*$/;
      return valueValidate.test(value);
    };

    const validateEmail = (email: string) => {
      const emailValidate =
        /^[a-zA-Z0-9. _%-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/;
      return emailValidate.test(email);
    };

    if (!validateName(consultDetails.name) || consultDetails.name === '') {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description:
          'Please input only letters in the name field (e.g. John Nolan), no numbers allowed (e.g. John1234)',
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      setInvalidName(true);
      return;
    } else if (!validateEmail(consultDetails.email)) {
      setInvalidName(false);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description:
          'Please input a valid email address. e.g. johndoe@gmail.com',
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      setInvalidEmail(true);
      return;
    } else if (
      typeof consultDetails.location !== 'string' ||
      consultDetails.location === ''
    ) {
      setInvalidEmail(false);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Please enter your location e.g. Lagos, Nigeria',
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      setInvalidLocation(true);
      return;
    } else if (!consultDetails.date) {
      setInvalidLocation(false);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Please enter a valid date',
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      setInvalidDate(true);
      return;
    } else if (
      typeof consultDetails.complaint !== 'string' ||
      consultDetails.complaint === ''
    ) {
      setInvalidDate(false);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Please state your complaint',
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      setInvalidComplaint(true);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setShowConsult(true);
      setNumMessages((prev: number) => prev + 1);
    }, 5000);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    resetDetails();
    console.log(consultDetails);
  }

  return (
    <div className="px-5 lg:px-20 3xl:px-40 pb-14 lg:pb-24">
      <DashboardBreadcrumbComponent />
      <div className="pt-5">
        <h1 className="text-headerFive smd:text-headerFour lg:text-headerTwo font-ba_normal lg:font-ba_large text-baDark dark:text-baLight">
          Get a Consultation
        </h1>
        <p className="lg:text-headerFour font-ba_normal text-baBody dark:text-baSubtle pb-5 lg:pb-10">
          Fill in the form to have a talk with our certified doctors!
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <FormNameComponent
            propValue={consultDetails.name}
            onFormChange={handleChange}
            isInvalid={invalidName}
          />

          {/* Email */}
          <FormEmailComponent
            propValue={consultDetails.email}
            onFormChange={handleChange}
            isInvalid={invalidEmail}
          />

          {/* Location */}
          <FormLocationComponent
            propValue={consultDetails.location}
            onFormChange={handleChange}
            isInvalid={invalidLocation}
          />

          {/* Date */}
          <FormDateComponent onDateChange={date => handleDate(date)} isInvalid={invalidDate} propValue={consultDetails.date} />
        </div>

        {/* Complaint */}
        <FormComplaintComponent propValue={consultDetails.complaint} onFormChange={handleChange} isInvalid={invalidComplaint} />
        <ConsultationDialog
          onConsultClick={onSubmit}
          consultLoading={loading}
          showConsult={showConsult}
        />
      </div>
    </div>
  );
};

export default ConsultationPage;
