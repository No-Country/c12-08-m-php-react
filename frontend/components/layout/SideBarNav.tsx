import React from 'react';
import LinkItem from './LinkItem';
import { useRouter } from 'next/router';

const SideBarNav = () => {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Add logout functionality
  };

  return (
    <div className=' flex flex-col h-full w-full'>
      <LinkItem
        onClick={() => router.push('/dashboard/profile')}
        image='/svg/sb-profile.svg'
        title='Perfil'
      />
      <div className=' border-y-2 border-black w-full h-1/5'>
        <LinkItem
          onClick={() => {
            router.push('/dashboard/community');
          }}
          image='/svg/sb-community.svg'
          title='Comunidad'
        />
      </div>
      <div className=' mt-auto'>
        <LinkItem
          onClick={() => router.push('/about')}
          image='/svg/sb-inf.svg'
          title='Acerca de'
        />
        <LinkItem
          onClick={() => router.push('/dashboard/settings')}
          image='/svg/sb-setting.svg'
          title='Configuracion'
        />
        <LinkItem
          onClick={handleLogout}
          image='/svg/sb-logout.svg'
          title='Cerrar sesion'
        />
      </div>
    </div>
  );
};

export default SideBarNav;
