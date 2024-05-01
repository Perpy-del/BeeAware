'use client';

import '../globals.css';
import DashboardNavBar from '@/components/DashboardNavBar';
import DashboardFooter from '@/components/DashboardFooter';
import { redirect } from 'next/navigation';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {user} = useBeeawareHook();

  if (!user) {
    redirect('/auth/login')
  }

  return (
    <div className='relative'>
      <DashboardNavBar />
      {children}
      <DashboardFooter />
    </div>
  );
}
