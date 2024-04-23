'use client';

import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';
import ButtonComponent from '@/components/ButtonComponent';
import Image from 'next/image';

type Props = {};

const DashboardPage = (props: Props) => {
  // const router = useRouter();

  // const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //       router.push('/auth/login');
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [router]);

  // return user ? <div>DashboardPage</div> : null;
  return (
    <div>
      <div className="mx-5 lg:mx-20 3xl:mx-40 bg-baAccent h-fit py-5 rounded-[20px] mb-14 lg:mb-24">
        <h1 className="sm:text-headerFive lg:text-headerThree sm:font-ba_normal lg:font-ba_medium text-baPrimary text-center mx-auto w-[80%] pb-3">
          Upgrade Your Plan to Enjoy More Benefits During Consultation
        </h1>
        <div className='flex justify-center'>
        <ButtonComponent btnText={'Upgrade Now'} width={'w-[220px] 3xl:w-[300px]'} variant='primary' />
        </div>
      </div>
      <div className='flex items-center flex-col h-[50vh]'>
        <div className='pb-9'>
          <Image src="/empty.svg" alt="empty state" width={133} height={235} />
        </div>
        <h3 className='font-ba_normal text-headerFive text-baSubtle w-[80%] lg:w-[30%] text-center pb-4'>You have no open consultations. Book one now!</h3>
        <ButtonComponent btnText={'Book Consultation'} width={'w-[220px] 3xl:w-[300px]'} variant='primary' />
      </div>
    </div>
  );
};

export default DashboardPage;
