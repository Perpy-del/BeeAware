'use client'

import React from 'react';
import ButtonComponent from '../ButtonComponent';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useRouter } from 'next/navigation';

type Props = {};

const CommunitySection = (props: Props) => {
  const router = useRouter();
  
  return (
    <div className="sm:pb-14 lg:pb-24 sm:px-5 lg:px-14 xl:px-20 3xl:px-40" id='community'>
      <div className="bg-baAccent sm:px-5 sm:py-10 lg:p-14 sm:rounded-[10px] lg:rounded-[20px] flex sm:flex-col lg:flex-row justify-between items-center sm:gap-5 lg:gap-20">
        <h1 className="sm:text-headerFour lg:text-headerThree xl:text-headerTwo 3xl:text-textLarge sm:text-center lg:text-left sm:font-ba_medium lg:font-ba_large lg:leading-[48px] 3xl:leading-[60px] text-baPrimary font-ba_large">
          Join Our Community
        </h1>
        <div>
          <h3 className="sm:text-smallSize lg:text-headerFour font-ba_normal text-baPrimary lg:leading-9 sm:text-center lg:text-left pb-7">
            Join our anonymous community and embark on a journey of empowerment
            through knowledge, support, and proactive sexual health education.
          </h3>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <ButtonComponent
                btnText={'Join Our Community'}
                width={'w-[250px] 3xl:w-[340px]'}
                variant="primary"
              />
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-baAccent dark:bg-baPrimary text-baDark w-[90%] lg:w-[60%] dark:text-baLight rounded-[20px] p-5 lg:p-14">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-center text-headerSix">
                  You Have to be Logged In to Join The Community
                </AlertDialogTitle>
                <AlertDialogDescription className="text-center">
                  Kindly log into your BeeAware account or Create an Account to
                  access the vast community and other services on the BeeAware
                  dashboard.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="text-center items-center flex sm:flex-col lg:flex-row gap-3">
                <div className="flex justify-center gap-2">
                  <ButtonComponent
                    variant="baSecondary"
                    btnText={'Log In'}
                    width={'w-[250px] 3xl:w-[300px]'}
                    onClick={() => {
                      router.push('/auth/login');
                    }}
                  />
                </div>
                <AlertDialogCancel className='w-[250px] rounded-[20px] h-12 border border-baLight'>Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
