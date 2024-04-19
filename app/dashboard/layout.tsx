import type { Metadata } from 'next';
import '../globals.css';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

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
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
