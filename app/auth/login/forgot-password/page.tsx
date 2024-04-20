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
import { useRouter } from 'next/navigation';

type Props = {};

const ForgotPasswordPage = (props: Props) => {
  const router = useRouter();
  const { loginLoading, loginForm } =
    useBeeawareHook();

  return (
    <div>
      <div className="md:bg-[url('/signup-bg.jpg')] bg-no-repeat bg-cover bg-center 3xl:h-[80vh] w-full flex items-center justify-center">
        <div className="md:w-2/3 lg:w-1/2 py-20 my-3 bg-baLight dark:bg-baDark rounded-[20px] sm:px-5 md:px-14">
          <h1 className="text-center sm:text-headerThree smd:text-headerTwo font-ba_large text-baPrimary dark:text-baSecondary">
            Forgot Password
          </h1>
          <p className="pb-14 text-center text-baBody dark:text-baLight sm:text-bodySize lg:text-headerSix font-ba_normal">
          Enter your registered email to reset your account.
          </p>
          <Form {...loginForm}>
            <form>
                {/* Email Field */}
                  <FormField
                    control={loginForm.control}
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

              {/* Sign up button */}
              <div className="flex justify-center mt-12 pb-4">
                <Button
                  className="w-[95%] hover:scale-105 duration-300 transition transform hover:bg-baPrimary/90 hover:font-ba_medium h-12"
                  variant="primary"
                  type="submit"
                >
                  Continue{' '}
                  {loginLoading && (
                    <CircularProgress
                      size={40}
                      style={{ paddingLeft: '5px' }}
                    />
                  )}
                </Button>
              </div>
              <span className="text-center block text-headerSix text-baSubtle pb-16">
                Don’t have an account?{' '}
                <span className="text-baPrimary dark:text-baSecondary hover:font-ba_normal">
                  <Link href="/auth/signup">Create one here</Link>
                </span>
              </span>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage