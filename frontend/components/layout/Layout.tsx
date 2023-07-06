import React, { PropsWithChildren, useState } from 'react';
import Sidebar from './Sidebar';

const Layout = (props: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className=' grid min-h-screen grid-rows-header'>
      <div>
        <button onClick={() => setSidebarOpen(prev => !prev)}>Open</button>
      </div>
      <div className='grid'>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
