import React from 'react';

const ProfileCard = () => {
  return (
    <div className='flex gap-2'>
      <div className='self-center'>
        <img
          className='w-20 h-20 rounded-full mx-auto'
          src='https://cataas.com/cat/says/hello%20world!'
          alt=''
        />
      </div>
      <div className='self-center'>
        <div className='font-bold text-blue-600 text'>Nombre y Apellido</div>
        <div className='font-bold'>Nacionalidad</div>
      </div>
    </div>
  );
};

export default ProfileCard;
