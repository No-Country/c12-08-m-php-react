import React, { PropsWithChildren, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { useWindowsSize } from '../../hooks/useWindowsSize';
import Image from 'next/image';

const Layout = (props: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const size = useWindowsSize();

  useEffect(() => {
    if (size.width > 768) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }, [size.width]);

  return (
    <div className=' grid min-h-screen'>
      <Image
        src='/svg/sb-open.svg'
        className=' m-5  md:hidden'
        onClick={() => setSidebarOpen(prev => !prev)}
        alt='sidebar-open'
        width={40}
        height={40}
      />
      <div className='grid'>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
