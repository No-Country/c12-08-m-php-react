import Button from '@/components/Button/Button';
import ButtonLoginSocial from '@/components/ButtonLoginSocial/ButtonLoginSocial';
import Input from '@/components/Input/Input';
import email from '@/public/img/email.png';
import password from '@/public/img/password.png';
import facebook from '@/public/svg/facebook.svg';
import google from '@/public/svg/google.svg';
import Image from 'next/image';
import logo from '@/public/img/pillcare_logo.png';
import Link from 'next/link';

const Login = () => {
  return (
    <div className='flex flex-col gap-8 py-4 h-screen justify-evenly '>
      <div className='flex flex-col items-center justify-center font-semibold text-xl gap-2'>
        <span>¡Bienvenido!</span>
        <span>Inicia sesión ahora</span>
      </div>
      <Image
        className='mx-auto'
        src={logo}
        alt='pillcare logo'
        width={65}
        height={65}
      />
      <form className='flex flex-col gap-8'>
        <Input
          src={email}
          label='Correo'
          type='email'
          pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
        />
        <Input
          src={password}
          label='Contraseña'
          type='password'
          pattern='^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
        />
        <Button text='Iniciar sesión' />
      </form>
      <div className=' border-y border-gray-700 flex flex-col justify-center items-center'>
        <span className='relative -top-3 bg-white w-[20px] flex justify-center items-center'>
          o
        </span>
        <div className='flex flex-col items-center gap-7 pt-2 pb-6'>
          <ButtonLoginSocial src={google} alt='google logo' social='Google' />
          <ButtonLoginSocial
            src={facebook}
            alt='facebook logo'
            social='Facebook'
          />
        </div>
      </div>
      <div className='flex gap-2 justify-center py-4'>
        <span>¿No tienes una cuenta?</span>
        <Link href='#'>
        <span className='text-[#0568FD] font-medium'>Unete ahora</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
