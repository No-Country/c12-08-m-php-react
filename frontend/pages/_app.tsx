import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import LandingNavbar from '@/components/LandingNavbar/LandingNavbar';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  style: 'normal',
  subsets: ['latin-ext'],
});

export default function App({ Component, pageProps }: AppProps) {
  // TODO: Refact and improve this conditional render feature
  const router = useRouter();

  if (router.pathname !== '/dashboard') {
    return (
      <main className={`${poppins.className} ${poppins.variable} min-h-screen `}>
        <LandingNavbar />
        <Component {...pageProps} />
      </main>
    );
  } else {
    return (
      <Layout>
        <main className={`${poppins.className} ${poppins.variable} min-h-screen `}>
          <Component {...pageProps} />
        </main>
      </Layout>
    );
  }
}
