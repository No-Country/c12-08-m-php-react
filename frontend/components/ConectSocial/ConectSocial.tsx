import facebook from '@/public/svg/facebook.svg';
import google from '@/public/svg/google.svg';
import Image from 'next/image';
import ButtonLoginSocial from '../ButtonLoginSocial/ButtonLoginSocial';

const ConectSocial = () => {
  return (
    <>
      <div className='relative border-y border-gray-700 flex flex-col justify-center items-center md:hidden py-4'>
        <span className='absolute -top-3 bg-white w-[20px] flex justify-center items-center'>
          o
        </span>
        <div className='flex flex-col items-center gap-7'>
          <ButtonLoginSocial src={google} alt='google logo' social='Google' />
          <ButtonLoginSocial
            src={facebook}
            alt='facebook logo'
            social='Facebook'
          />
        </div>
      </div>
      <div className=' flex-col items-center gap-2 hidden md:flex'>
        <span>Ingresar con</span>
        <div className='flex gap-4'>
          <button>
            <Image src={google} alt='google logo' width={30} height={30} />
          </button>
          <button>
            <Image src={facebook} alt='facebook logo' width={30} height={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ConectSocial;
