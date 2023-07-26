'use client';

import { useWindowsSize } from '@/hooks/useWindowsSize';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Panel from './components/Panel';
import breakpoints from '@/utils/breakpoints';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const size = useWindowsSize();

  useEffect(() => {
    if (size.width > breakpoints.md) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }, [size.width]);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className='md:border md:rounded-2xl md:shadow-md max-md:h-[8%]'>
      <Image
        src='/svg/sb-open.svg'
        className='m-2 md:hidden'
        onClick={() => setSidebarOpen(prev => !prev)}
        alt='sidebar-open'
        width={40}
        height={40}
      />
      <Panel open={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Sidebar;
