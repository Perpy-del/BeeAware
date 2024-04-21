'use client';

import Link from 'next/link';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import { ForgotPasswordDialog } from '@/components/ForgotPasswordDialog';

type Props = {};

const ForgotPasswordPage = (props: Props) => {
  const { forgotPasswordEmail, handleEmail, invalidEmail, forgotPasswordEmailNotExist } = useBeeawareHook();

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
          <div>
            <label
              htmlFor="email"
              className="font-ba_normal sm:text-bodySize md:text-headerSix"
            >
              Email
            </label>
            <input
              placeholder="Enter your email"
              type="text"
              value={forgotPasswordEmail}
              onChange={handleEmail}
              className="flex w-full border border-input bg-baLight/15 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-[20px] h-12 mt-2"
            />
          </div>
          {invalidEmail && <p className="text-[14px] font-ba_medium text-baWarning text-left mt-2">
            Please enter a valid email address (for example, johndoe@gmail.com).
          </p>}
          {forgotPasswordEmailNotExist && <p className="text-[14px] font-ba_medium text-baError text-left mt-2">
            An account with this email does not exist. Please sign up to create an account.
          </p>}
          <ForgotPasswordDialog />
          <span className="text-center block text-headerSix text-baSubtle pb-16">
            Don’t have an account?{' '}
            <span className="text-baPrimary dark:text-baSecondary hover:font-ba_normal">
              <Link href="/auth/signup">Create one here</Link>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
