import React from 'react';
import ProfileCard from '../cards/ProfileCard';

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
      <div className='flex flex-col items-center'>
        <button className='ml-auto' onClick={() => setOpen(false)}>
          Cerrar
        </button>
        <ProfileCard user={customUser} />
      </div>
    </div>
  );
};

export default Sidebar;