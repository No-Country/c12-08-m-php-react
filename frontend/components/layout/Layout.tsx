import React, { PropsWithChildren, useState } from 'react';
import Sidebar from './Sidebar';

const Layout = (props: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className=' grid min-h-screen grid-rows-header'>
      <img
        src='/svg/sb-open.svg'
        className=' m-2 w-10 h-10 md:hidden'
        onClick={() => setSidebarOpen(prev => !prev)}
      />
      <nav></nav>
      <div className='grid'>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
