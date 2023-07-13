import logo from '@/public/img/pillcare_logo.png';
import Image from 'next/image';

interface HeaderAuthProps {
  children: React.ReactNode;
}

const HeaderAuth = ({ children }: HeaderAuthProps) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center font-semibold text-xl gap-2 text-center md:text-base'>
        {children}
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
