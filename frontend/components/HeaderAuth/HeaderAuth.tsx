import logo from '@/public/img/pillcare_logo.png';
import Image from 'next/image';

const HeaderAuth = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center font-semibold text-xl gap-2 md:text-base'>
        <span>¡Bienvenido!</span>
        <span>Inicia sesión ahora</span>
      </div>
      <Image
        className='mx-auto md:hidden'
        src={logo}
        alt='pillcare logo'
        width={65}
        height={65}
      />
    </>
  );
};

export default HeaderAuth;
