import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  style: 'normal',
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: 'PillCare',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={`${poppins.className} ${poppins.variable} h-screen max-w-screen`}>
        {children}
      </body>
    </html>
  );
}
