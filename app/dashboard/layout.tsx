import type { Metadata } from 'next';
import '../globals.css';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';

export const metadata: Metadata = {
  title: 'BeeAware | Dashboard',
  description: 'An application to create more awareness about sexual health',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user] = useAuthState(auth);

  if (!user) return;

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
