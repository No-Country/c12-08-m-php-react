import React from 'react';
import LinkItem from './LinkItem';

const SideBarNav = () => {
  return (
    <div className=' flex flex-col h-full w-full'>
      <LinkItem to='' image='/svg/sb-profile.svg' title='Perfil' />
      <div className=' border-y-2 border-black w-full h-1/5'>
        <LinkItem to='' image='/svg/sb-community.svg' title='Comunidad' />
      </div>
      <div className=' mt-auto'>
        <LinkItem to='' image='/svg/sb-inf.svg' title='Acerca de' />
        <LinkItem to='' image='/svg/sb-setting.svg' title='Configuracion' />
        <LinkItem to='' image='/svg/sb-logout.svg' title='Cerrar sesion' />
      </div>
    </div>
  );
};

export default SideBarNav;
