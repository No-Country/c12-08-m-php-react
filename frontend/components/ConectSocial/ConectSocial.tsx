'use client';
import google from '@/public/svg/google.svg';
import { loginGoogle } from '@/services/auth/auth';
import { useGoogleLogin } from '@react-oauth/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { setCookie } from 'react-use-cookie';

const ConectSocial = () => {
  const router = useRouter();

  const login = useGoogleLogin({
    onSuccess: async codeResponse => {
      setCookie('google_token', codeResponse.access_token, {
        days: 7,
        path: '/',
      });

      const data = await loginGoogle(codeResponse.access_token);

      console.log(codeResponse, data);
      router.push('/home');
    },
    // flow: 'auth-code',
    onError: error => {
      console.log(error);
    },
  });
  return (
    <>
      <div className='relative border-y border-gray-700 flex flex-col justify-center items-center md:hidden py-4'>
        <span className='absolute -top-3 bg-white w-[20px] flex justify-center items-center'>
          o
        </span>
        <div className='flex flex-col items-center gap-7'>
          <button
            onClick={() => login()}
            className=' w-80 flex gap-4 items-center border py-2 px-6 rounded-[20px] border-gray-700 text-gray-700 hover:bg-slate-200'>
            <Image src={google} alt='google logo' width={24} height={24} />
            <span>Continuar con Google</span>
          </button>
        </div>
      </div>
      <div className=' flex-col items-center gap-2 hidden md:flex'>
        <span>Ingresar con</span>
        <div className='flex gap-4'>
          <button onClick={() => login()}>
            <Image src={google} alt='google logo' width={30} height={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ConectSocial;
