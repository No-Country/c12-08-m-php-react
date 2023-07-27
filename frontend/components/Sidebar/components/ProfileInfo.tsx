import Image from 'next/image';
import { UserContext } from '@/contexts/UserProvider';
import { useContext } from 'react';

const ProfileInfo = () => {
  const { user, age } = useContext(UserContext);

  return (
    <div className='flex m-5 mt-10 gap-2 md:hidden'>
      <div className='self-center'>
        <Image
          className='w-20 h-20 rounded-full mx-auto'
          src={user.photo_url || '/svg/sb-profilePhoto.svg'}
          width={20}
          height={20}
          alt='Imagen-perfil'
        />
      </div>
      <div className='self-center text-center'>
        <div className='font-bold text-blue'>{user.name}</div>
        <div className='font-bold'>{age + ' años'} </div>
        <div className='font-bold'>@{user.username}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
