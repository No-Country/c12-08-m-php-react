import Link from 'next/link';
import Image from 'next/image';
import Logo from '/public/svg/Logo.svg';
import ToggleButton from './toggle';

const AuthHeader = () => {
  return (
    <header>
      <nav className='bg-white w-full font-semibold'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex-shrink-0'>
              <Link href='/'>
                <Image src={Logo} alt='Logo' width={50} height={50} />
              </Link>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='flex space-x-4'>
                <ToggleButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AuthHeader;
