'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import CircularProgress from '@mui/material/CircularProgress';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';

type Props = {};

const SignupPage = (props: Props) => {
  const {form, onSubmit, handleGoogleAuth, loading} = useBeeawareHook();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  return (
    <div>
      <div className="md:bg-[url('/signup-bg.jpg')] bg-no-repeat bg-cover bg-center 3xl:h-[80vh] w-full flex items-center justify-center">
        <div className="lg:w-1/2 py-16 my-3 bg-baLight dark:bg-baDark rounded-[20px] sm:px-5 md:px-14">
          <h1 className="text-center text-headerTwo font-ba_large text-baPrimary dark:text-baSecondary">
            Sign up
          </h1>
          <p className="pb-14 text-center text-baBody dark:text-baLight sm:text-bodySize lg:text-headerSix font-ba_normal">
            Kindly create your account if you are a new user.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-8">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2 font-ba_normal sm:text-bodySize md:text-headerSix">
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
                      <FormLabel className="mb-2 font-ba_normal sm:text-bodySize md:text-headerSix">
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
                      <FormLabel className="mb-2 font-ba_normal sm:text-bodySize md:text-headerSix">
                        Password
                      </FormLabel>
                      <div className="flex items-center rounded-[20px] h-12 border border-input bg-baLight/15 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <FormControl>
                          <Input
                            placeholder="********"
                            {...field}
                            className="border-none outline-none ring-0 focus-visible:ring-0 focus-visible:ring-none focus-visible:ring-offset-0"
                            type={showPassword ? 'text' : 'password'}
                          />
                        </FormControl>
                        <div
                          className="cursor-pointer hover:scale-105 transition transform duration-300"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <EyeOff /> : <Eye />}
                        </div>
                      </div>
                      <FormMessage className="text-[14px] font-ba_medium text-baWarning text-left" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Sign up button */}
              <div className="flex justify-center mt-12 pb-4">
                {loading ? (
                  <CircularProgress size={20} />
                ) : (
                  <Button
                    className="w-[95%] hover:scale-105 duration-300 transition transform hover:bg-baPrimary/90 hover:font-ba_medium h-12"
                    variant="primary"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                )}
              </div>
              <span className="text-center block text-headerSix text-baSubtle pb-16">
                Already have an account?{' '}
                <span className="text-baPrimary dark:text-baSecondary hover:font-ba_normal">
                  <Link href="/auth/login">Log in here</Link>
                </span>
              </span>
              <div className="flex justify-between items-center pb-12">
                <span className="h-[1px] w-[45%] bg-baSubtle dark:bg-baLight"></span>
                <span>OR</span>
                <span className="h-[1px] w-[45%] bg-baSubtle dark:bg-baLight"></span>
              </div>
            </form>
          </Form>
          <div className="flex justify-center pb-4">
            <Button
              className="w-[95%] hover:scale-105 duration-300 transition transform bg-transparent border-[3px] border-baPrimary hover:bg-[#FAFAFA] dark:hover:bg-[#202020] hover:font-ba_medium h-14 rounded-[20px] flex gap-4 text-baPrimary dark:text-baSecondary"
              onClick={handleGoogleAuth}
            >
              <Image
                src="/google.svg"
                width={24}
                height={24}
                alt="Google Logo"
                loading="lazy"
              />
              Sign up with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
