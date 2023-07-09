import React from 'react';
import ProfileCard from '../cards/ProfileCard';
import LinkItem from './LinkItem';
import Navigation from './SideBarNav';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const customUser = {
  name: 'Cosme Fulanito',
  nationality: 'Argentina',
  edad: 25,
  image: 'https://cataas.com/cat/says/hello%20world!',
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
      <div className='flex flex-col h-full my-4'>
        <div className=' flex flex-row w-full'>
          <img src='/svg/Logo.svg' className='px-5 mr-auto' />
          <img
            src='/svg/sb-back.svg'
            className='ml-auto h-6 w-6 m-2 mx-5'
            onClick={() => setOpen(false)}
          />
        </div>
        <ProfileCard user={customUser} />
        <Navigation />
      </div>
    </div>
  );
};

export default Sidebar;
