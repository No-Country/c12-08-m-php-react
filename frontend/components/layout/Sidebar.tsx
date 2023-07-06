import React from 'react';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
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
      <div className='flex'>
        <button className='ml-auto' onClick={() => setOpen(false)}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
