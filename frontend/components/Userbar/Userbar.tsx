'use client';

import Image from 'next/image';
import bell from '/public/svg/bell.svg';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserProvider';

const Userbar = () => {
  const { user, age } = useContext(UserContext);

  return (
    <div className='border rounded-2xl relative shadow-md h-24 flex items-center'>
      <div className='m-2 flex flex-grow'>
        <Image
          src={user.photo_url || '/svg/sb-profilePhoto.svg'}
          alt='userImageSrc'
          width={80}
          height={80}
        />
        <div className='ml-2 flex flex-col font-poppins'>
          <span className='text-blue font-semibold'>
            {user.name} {user.surname}
          </span>
          <div className='flex flex-col items-center font-medium'>
            <p>{age} años</p>
            <p>@{user.username}</p>
          </div>
        </div>
      </div>
      <div className='absolute top-0 right-0 mt-2 mr-2'>
        <Image src={bell} alt='Logo' width={35} height={35} />
      </div>
    </div>
  );
};

export default Userbar;
