'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import { ResetPasswordDialog } from '@/components/ResetPasswordDialog';

type Props = {};

const ResetPasswordPage = (props: Props) => {
  const {
    newPassword,
    confirmPassword,
    handleNewPassword,
    handleConfirmPassword,
    invalidPassword,
    passwordDoesNotMatch
  } = useBeeawareHook();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(confirm => !confirm);

  return (
    <div>
      <div className="md:bg-[url('/signup-bg.jpg')] bg-no-repeat bg-cover bg-center 3xl:h-[80vh] w-full flex items-center justify-center">
        <div className="md:w-2/3 lg:w-1/2 py-20 my-3 bg-baLight dark:bg-baDark rounded-[20px] sm:px-5 md:px-14">
          <h1 className="text-center sm:text-headerThree smd:text-headerTwo font-ba_large text-baPrimary dark:text-baSecondary">
            Reset Password
          </h1>
          <p className="pb-14 text-center text-baBody dark:text-baLight sm:text-bodySize lg:text-headerSix font-ba_normal">
            Enter a new password to reset your account.
          </p>
          <div className="space-y-8">
            <div>
              <label
                htmlFor="new-password"
                className="font-ba_normal sm:text-bodySize md:text-headerSix"
              >
                New Password
              </label>
              <div className="flex items-center rounded-[20px] h-12 border border-input bg-baLight/15 pl-[2px] pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <input
                  placeholder="********"
                  type={showPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={handleNewPassword}
                  className="rounded-[20px] border-none outline-none ring-0 focus-visible:ring-none w-full border border-input bg-baLight/15 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                />
                <div
                  className="cursor-pointer hover:scale-105 transition transform duration-300"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="font-ba_normal sm:text-bodySize md:text-headerSix"
              >
                Confirm Password
              </label>
              <div className="flex items-center rounded-[20px] h-12 border border-input bg-baLight/15 pl-[2px] pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <input
                  placeholder="********"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  className="rounded-[20px] border-none outline-none ring-0 focus-visible:ring-none w-full border border-input bg-baLight/15 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                />
                <div
                  className="cursor-pointer hover:scale-105 transition transform duration-300"
                  onClick={handleClickShowConfirmPassword}
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </div>
              </div>
            </div>
          </div>
          {passwordDoesNotMatch && (
            <p className="text-[14px] font-ba_medium text-baError text-left mt-2">
             Passwords do not match. Please check again.
            </p>
          )}
          {invalidPassword && (
            <p className="text-[14px] font-ba_medium text-baWarning text-left mt-2">
              Password must contain at least one uppercase letter, one lowercase
              letter, one digit, one symbol, and be at least 8 characters long.
            </p>
          )}
          <ResetPasswordDialog />
          <span className="text-baPrimary text-headerSix mt-2 text-center block dark:text-baSecondary hover:font-ba_normal">
            <Link href="/auth/login">Back to Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
