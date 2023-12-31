'use client';
import { ConectSocial } from '@/components';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthHeader from './header';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}>
        <AuthHeader />
        <main className='flex flex-col gap-8 py-4 h-screen md:items-center md:mx-auto md:w-[30rem] md:min-h-[28rem] md:h-auto md:max-h-[40rem] md:gap-6 md:border md:bg-green md:rounded-[20px] mt-8'>
          {children}

          <ConectSocial />
        </main>
      </GoogleOAuthProvider>
    </>
  );
};

export default AuthLayout;
