import type { Metadata } from 'next';
import '../globals.css';
import DashboardNavBar from '@/components/DashboardNavBar';
import DashboardFooter from '@/components/DashboardFooter';

export const metadata: Metadata = {
  title: 'BeeAware | Dashboard',
  description: 'An application to create more awareness about sexual health',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className='relative'>
      <DashboardNavBar />
      {children}
      <DashboardFooter />
    </div>
  );
}
