'use client';

import { signupFormSchema } from '@/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';
import FormInputComponent from '@/components/FormComponents/FormInputComponent';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import ButtonComponent from '@/components/ButtonComponent';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image'

type Props = {};

const SignupPage = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof signupFormSchema>) {
    const validateName = (value: string) => {
      const valueValidate = /^[A-Za-z\s]*$/;
      console.log(valueValidate.test(value));
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

  return (
    <div>
      <div className="bg-[url('/signup-bg.jpg')] w-full flex items-center justify-center">
        <div className="w-1/2 py-16 my-3 bg-baLight dark:bg-baDark rounded-[20px] px-14">
          <h1 className="text-center text-headerTwo font-ba_large text-baPrimary dark:text-baSecondary">
            Sign up
          </h1>
          <p className="pb-14 text-center text-baBody dark:text-baLight text-headerSix font-ba_normal">
            Kindly create your account if you are a new user.
          </p>
          <Form {...form}>
            <form>
              <div className="space-y-8">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2 font-ba_normal text-headerSix">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          {...field}
                          className="rounded-[20px] h-12"
                        />
                      </FormControl>
                      <FormMessage className="text-[14px] font-ba_medium text-baWarning text-left" />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2 font-ba_normal text-headerSix">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          className="rounded-[20px] h-12"
                        />
                      </FormControl>
                      <FormMessage className="text-[14px] font-ba_medium text-baWarning text-left" />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2 font-ba_normal text-headerSix">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="********"
                          {...field}
                          className="rounded-[20px] h-12"
                          type={showPassword ? 'text' : 'password'}
                        />
                      </FormControl>
                      <FormMessage className="text-[14px] font-ba_medium text-baWarning text-left" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Sign up button */}
              <div className="flex justify-center mt-12 pb-4">
                <Button
                  className="w-[95%] hover:scale-105 duration-300 transition transform hover:bg-baPrimary/90 hover:font-ba_medium h-12"
                  variant="primary"
                >
                  Sign Up
                </Button>
              </div>
              <span className='text-center block text-headerSix text-baSubtle pb-16'>
                Already have an account?{' '}
                <span className='text-baPrimary dark:text-baSecondary hover:font-ba_normal'>
                  <Link href="/auth/login">Log in here</Link>
                </span>
              </span>
              <div className='flex justify-between items-center pb-12'>
                  <span className='h-[1px] w-[45%] bg-baDark dark:bg-baLight'></span>
                  <span>OR</span>
                  <span className='h-[1px] w-[45%] bg-baDark dark:bg-baLight'></span>
              </div>
              <div className="flex justify-center pb-4">
              <Button
                  className="w-full duration-300 transition bg-transparent border-[3px] border-baPrimary transform hover:bg-[#FAFAFA] dark:hover:bg-[#202020] hover:font-ba_medium h-14 rounded-[20px] flex gap-4"
                >
                  <Image src='/google.svg' width={24} height={24} alt="Google Logo" />
                  Sign up with Google
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
