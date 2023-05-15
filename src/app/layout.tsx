import Header from '@/components/headers/Header';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/footers/Footer';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={openSans.className}>
      <body className="h-full">
        <Header />
        <main className="max-w-screen-md px-6 mx-auto py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
