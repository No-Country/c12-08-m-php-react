import { googleLogout } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import { setCookie } from 'react-use-cookie';
import NavbarItem from './NavbarItem';
import SearchInput from './SearchInput';

const SideBarNav = () => {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Add logout functionality
    console.log('cerrar sesion');
    googleLogout();
    setCookie('google_token', '', {
      path: '/',
      days: 0,
    });
    router.push('/');
  };

  return (
    <div className=' flex flex-col h-full w-full'>
      <NavbarItem
        handleClick={() => router.push('/home/profile')}
        image='/svg/sb-profile.svg'
        title='Perfil'
      />
      <div className=' border-y-2 border-black w-full min-h-[150px] h-1/5'>
        <NavbarItem
          handleClick={() => {
            router.push('/dashboard/community');
          }}
          image='/svg/sb-community.svg'
          title='Comunidad'
        />
        <SearchInput />
      </div>
      <div className=' mt-auto'>
        <NavbarItem
          handleClick={() => router.push('/home/about')}
          image='/svg/sb-inf.svg'
          title='Acerca de'
        />
        <NavbarItem
          handleClick={() => router.push('/home/account')}
          image='/svg/sb-setting.svg'
          title='Configuracion'
        />
        <NavbarItem
          handleClick={handleLogout}
          image='/svg/sb-logout.svg'
          title='Cerrar sesion'
        />
      </div>
    </div>
  );
};

export default SideBarNav;
