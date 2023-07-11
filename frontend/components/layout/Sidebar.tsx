import React from 'react';
import ProfileCard from '../cards/ProfileCard';
import Navigation from './SideBarNav';
import Image from 'next/image';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const customUser = {
  name: 'Cosme Fulanito',
  nationality: 'Argentina',
  edad: 25,
  image: '',
};

const Sidebar = ({ open, setOpen }: Props) => {
  return (
    <div
      className={`flex flex-col justify-between
                bg-white rounded border-white
                  fixed top-0
                  h-full w-[300px]
                  transition-transform .3s ease-in-out
                  ${open ? '' : '-translate-x-full'}`}>
      <div className='flex flex-col h-full my-4 '>
        <div className=' flex w-full md:justify-center'>
          <div>
            <Image
              className='mx-5 mr-auto md:mx-auto md:h-20 md:w-20 '
              src='/svg/Logo.svg'
              alt='Logo'
              width={50}
              height={50}
            />
          </div>
          <Image
            src='/svg/sb-back.svg'
            className='ml-auto h-6 w-6 m-2 mx-5 md:hidden'
            onClick={() => setOpen(false)}
            width={25}
            height={25}
            alt='Back-icon'
          />
        </div>
        <ProfileCard user={customUser} />
        <Navigation />
      </div>
    </div>
  );
};

export default Sidebar;
