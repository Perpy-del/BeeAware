import type { Metadata } from 'next';
import '../globals.css';
import Footer from '@/components/Footer';
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
    <div>
      <DashboardNavBar />
      {children}
      <DashboardFooter />
    </div>
  );
}
