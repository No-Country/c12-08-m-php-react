import arrowR from '@/public/svg/arrowR.svg';
import configDownload from '@/public/svg/configDownload.svg';
import configHeart from '@/public/svg/configHeart.svg';
import configKey from '@/public/svg/configKey.svg';
import configLetter from '@/public/svg/configLetter.svg';
import Image from 'next/image';
import Link from 'next/link';

const AccountSettings = () => {
  return (
    <div className='font-poppins mx-1 sm:mx-10 mt-20'>
      <Link href='' className='cursor-pointer'>
        <div className='flex items-center mb-10'>
          <Image src={configKey} alt='Logo' width={35} height={35} />
          <div className='flex flex-col ml-4'>
            <span className='font-bold text-sm sm:text-xl'>Cambia tu contraseña</span>
            <p className='font-medium text-xs sm:text-lg'>
              Actualiza tu clave de acceso en cualquier momento.
            </p>
          </div>
          <Image src={arrowR} alt='arrowR' className='ml-auto h-8 w-8' />
        </div>
      </Link>
      <Link href='' className='cursor-pointer'>
        <div className='flex items-center mb-10'>
          <Image src={configLetter} alt='Logo' width={35} height={35} />
          <div className='flex flex-col ml-4'>
            <span className='font-bold text-sm sm:text-xl'>Cambia tu email</span>
            <p className='font-medium text-xs sm:text-lg'>
              Cambia tu dirección de correo electrónico y verifícalo.
            </p>
          </div>
          <Image src={arrowR} alt='arrowR' className='ml-auto h-8 w-8' />
        </div>
      </Link>
      <Link href='' className='cursor-pointer'>
        <div className='flex items-center mb-10'>
          <Image src={configDownload} alt='Logo' width={35} height={35} />
          <div className='flex flex-col ml-4'>
            <span className='font-bold text-sm sm:text-xl'>Descargar datos</span>
            <p className='font-medium text-xs sm:text-lg'>
              Obtén una copia de tus datos e información.
            </p>
          </div>
          <Image src={arrowR} alt='arrowR' className='ml-auto h-8 w-8' />
        </div>
      </Link>
      <Link href='' className='cursor-pointer'>
        <div className='flex items-center mb-10'>
          <Image src={configHeart} alt='Logo' width={35} height={35} />
          <div className='flex flex-col ml-4'>
            <span className='font-bold text-sm sm:text-xl'>Desactivar cuenta</span>
            <p className='font-medium text-xs sm:text-lg'>
              Si deseas abandonar nuestro servicio, puedes darte de baja aquí.
            </p>
          </div>
          <Image src={arrowR} alt='arrowR' className='ml-auto h-8 w-8' />
        </div>
      </Link>
    </div>
  );
};

export default AccountSettings;
