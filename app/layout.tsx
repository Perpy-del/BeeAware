import type { Metadata } from 'next';
import { Inter, Work_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';

const inter = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BeeAware | Sexual Health Education',
  description: 'An application to create more awareness about sexual health',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
