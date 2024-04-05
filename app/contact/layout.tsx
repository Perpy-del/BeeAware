import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'BeeAware | Contact',
  description: 'An application to create more awareness about sexual health',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
