import { PropsWithChildren, useEffect, useState } from 'react';
import Image from 'next/image';

import resolveCongif from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

import { useWindowsSize } from '../../hooks/useWindowsSize';
import Sidebar from './Sidebar';
import NavBar from './NavBar';

const getEndpointInt = (endpoint: string) => {
  const endpointInt = endpoint.replace('px', '');
  return parseInt(endpointInt);
};

const Layout = (props: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const size = useWindowsSize();

  const fullConfig = resolveCongif(tailwindConfig);
  const breakpoints = fullConfig.theme.screens;

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
        <Sidebar open={sidebarOpen} closeSidebar={closeSidebar} />
        {props.children}
      </div>
      <NavBar />
    </div>
  );
};

export default Layout;
