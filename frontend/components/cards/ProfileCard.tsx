import Image from 'next/image';
import React from 'react';

const ProfileCard = ({ user }: any) => {
  return (
    <div className='flex m-5 mt-10 gap-2 md:hidden'>
      <div className='self-center'>
        <Image
          className='w-20 h-20 rounded-full mx-auto'
          src={user.image || '/svg/sb-profilePhoto.svg'}
          width={20}
          height={20}
          alt='Imagen-perfil'
        />
      </div>
      <div className='self-center text-center'>
        <div className='font-bold text-blue'>{user.name}</div>
        <div className='font-bold'>{user.edad + ' años'} </div>
        <div className='font-bold'>{user.nationality}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
