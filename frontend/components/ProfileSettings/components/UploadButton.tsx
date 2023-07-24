'use client';
import uploadProfile from '@/public/svg/uploadProfile.svg';
import Image from 'next/image';

const UploadButton = () => {
  const uploadImage = () => {
    console.log('Agregar funcionalidad');
  };

  return (
    <button
      className='bg-blue relative rounded-lg w-14 flex items-center justify-center z-10'
      style={{ top: '-20px' }}
      onClick={() => uploadImage()}>
      <Image src={uploadProfile} width={30} height={30} alt='medicine icon' />
    </button>
  );
};

export default UploadButton;
