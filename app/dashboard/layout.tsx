'use client';

import '../globals.css';
import DashboardNavBar from '@/components/DashboardNavBar';
import DashboardFooter from '@/components/DashboardFooter';
import { useRouter } from 'next/navigation';
import { useBeeawareHook } from '@/hooks/useBeeawareHook';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const {user} = useBeeawareHook();

  if (!user) {
    router.push('/auth/login');
  }

  return (
    <div className='relative'>
      <DashboardNavBar />
      {children}
      <DashboardFooter />
    </div>
  );
}
