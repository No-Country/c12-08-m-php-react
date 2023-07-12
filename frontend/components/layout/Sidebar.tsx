import React from 'react';
import ProfileCard from '../cards/ProfileCard';
import SideBarNav from './SideBarNav';
import Image from 'next/image';

type Props = {
  open: boolean;
  closeSidebar: () => void;
};

const customUser = {
  name: 'Cosme Fulanito',
  nationality: 'Argentina',
  edad: 25,
  image: '',
};

const Sidebar = ({ open, closeSidebar }: Props) => {
  return (
    <div
      className={`flex flex-col justify-between
                bg-white rounded border-white
                  fixed top-0 z-40
                  h-full w-80 md:w-64
                  transition-transform .3s ease-in-out
                  ${open ? '' : '-translate-x-full'}`}>
      <div className='flex flex-col h-full my-4 '>
        <div className=' flex w-full md:justify-center'>
          <Image
            className='mx-5 mr-auto md:mx-auto md:h-20 md:w-20 '
            src='/svg/Logo.svg'
            alt='Logo'
            width={50}
            height={50}
          />
          <Image
            src='/svg/sb-back.svg'
            className='ml-auto h-6 w-6 m-2 mx-5 md:hidden'
            onClick={closeSidebar}
            width={25}
            height={25}
            alt='Back-icon'
          />
        </div>
        <ProfileCard user={customUser} />
        <SideBarNav />
      </div>
    </div>
  );
};

export default Sidebar;
