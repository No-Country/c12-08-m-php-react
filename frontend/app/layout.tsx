import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  style: 'normal',
  subsets: ['latin-ext'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <head />
      <body className={`${poppins.className} ${poppins.variable} h-screen`}>
        {children}
      </body>
    </html>
  );
}
