import React from 'react';

const ProfileCard = ({ user }: any) => {
  return (
    <div className='flex gap-2'>
      <div className='self-center'>
        <img
          className='w-20 h-20 rounded-full mx-auto'
          src={user.image}
          alt='Imagen de perfil'
        />
      </div>
      <div className='self-center text-center'>
        <div className='font-bold text-blue-600 text'>{user.name}</div>
        <div className='font-bold'>{user.edad + ' años'} </div>
        <div className='font-bold'>{user.nationality}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
