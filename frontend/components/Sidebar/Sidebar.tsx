'use client';

import { useWindowsSize } from '@/hooks/useWindowsSize';
import tailwindConfig from '@/tailwind.config.js';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import Panel from './components/Panel';

const getEndpointInt = (endpoint: string) => {
  const endpointInt = endpoint.replace('px', '');
  return parseInt(endpointInt);
};

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const size = useWindowsSize();

  // @ts-ignore: Unreachable code error
  const breakpoints = resolveConfig(tailwindConfig).theme.screens;

  useEffect(() => {
    if (size.width > getEndpointInt(breakpoints.md)) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }, [size.width]);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className='inline-block'>
      <Image
        src='/svg/sb-open.svg'
        className='m-5  md:hidden'
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
