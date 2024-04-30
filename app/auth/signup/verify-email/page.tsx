'use client';

import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import CircularProgress from '@mui/material/CircularProgress';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';
import Link from 'next/link';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { ToastAction } from '@/components/ui/toast';

type Props = {};

const VerifyEmailPage = (props: Props) => {
  const router = useRouter();

  const { user, isExpired, fiveDigitPin, resendMail } = useBeeawareHook();
  const [loading, setLoading] = useState<boolean>(false);
  const [expired, setExpired] = useState<boolean>(false);
  const [pinNotValid, setPinNotValid] = useState<boolean>(false);
  const [pins, setPins] = useState<string[]>(['', '', '', '', '']); // Array to store pin values
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const userEmail = user?.email;

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const newPins = [...pins];
    newPins[index] = e.target.value;

    if (e.target.value && index < pins.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    setPins(newPins);
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !pins[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleConfirmMail = () => {
    const enteredPin = parseInt(pins.join(''), 10);
    setLoading(true);
    if (isExpired) {
      setExpired(true);
      setLoading(false);
      return;
    } else if (!isExpired && enteredPin !== fiveDigitPin) {
      setPinNotValid(true);
      setLoading(false);
      return;
    } else {
      setLoading(false);
      toast({
        title: 'Sign Up Successful... 🎉',
        description: 'Please verify your account with BeeAware.',
        action: (
          <ToastAction
            altText="Dashboard"
            onClick={() => router.push('/dashboard')}
          >
            Dashboard
          </ToastAction>
        ),
        className: 'bg-baSecondary text-baLight dark:bg-baLight dark:text-baBody',
      });
      router.push('/dashboard');
    }
  };

  return (
    <div>
      <div className="md:bg-[url('/signup-bg.jpg')] bg-no-repeat bg-cover bg-center 3xl:h-[80vh] w-full flex items-center justify-center">
        <div className="lg:w-1/2 py-16 my-3 bg-baLight dark:bg-baDark rounded-[20px] sm:px-5 md:px-14">
          <h1 className="text-center sm:text-headerThree smd:text-headerTwo font-ba_large text-baPrimary dark:text-baSecondary">
            Email verification
          </h1>
          <p className="pb-10 text-center text-baBody dark:text-baLight sm:text-bodySize lg:text-headerSix font-ba_normal">
            Kindly input the 5 digit number sent to {userEmail}
          </p>
          <div className="flex justify-between 3xl:px-40">
            {pins.map((pin, index) => (
              <input
                key={index}
                ref={el => {
                  inputRefs.current[index] = el as HTMLInputElement;
                }}
                type="text"
                maxLength={1}
                value={pin}
                onChange={e => handleChange(index, e)}
                onKeyDown={e => handleKeyDown(index, e)}
                className="border-[0.5px] border-baPrimary sm:w-[50px] smd:w-[60px] md:w-[80px] lg:w-[70px] xl:w-[90px] 3xl:w-[110px] h-[64px] rounded-[20px] text-center file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-headerFive"
              />
            ))}
          </div>
          {expired && <p className='text-smallSize text-baError text-center'>Pin has expired. Click on Resend pin to get a new one.</p>}
          {pinNotValid && <p className='text-smallSize text-baError text-center'>Pin is incorrect. Please check again.</p>}
          <div className="flex justify-center mt-12 pb-4">
              <Button
                className="w-[95%] hover:scale-105 duration-300 transition transform hover:bg-baPrimary/90 hover:font-ba_medium h-12"
                variant="primary"
                onClick={handleConfirmMail}
              >
                Confirm {loading && <CircularProgress size={20} style={{paddingLeft: "5px"}} />}
              </Button>
          </div>
          <span className="text-center block text-headerSix text-baSubtle pb-16">
            Yet to receive the code?{' '}
            <span className="text-baPrimary dark:text-baSecondary hover:font-ba_normal" onClick={resendMail}>
              Resend
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
 