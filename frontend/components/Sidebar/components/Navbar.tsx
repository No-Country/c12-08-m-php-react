import { backLogout } from '@/services/auth/auth';
import { googleLogout } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import { getCookie, setCookie } from 'react-use-cookie';
import NavbarItem from './NavbarItem';
import SearchInput from './SearchInput';

const SideBarNav = () => {
  const router = useRouter();

  const handleLogout = () => {
    googleLogout();
    if (getCookie('jwt_token')) {
      backLogout(getCookie('jwt_token') as string);
    }
    setCookie('google_token', '', {
      path: '/',
      days: 0,
    });
    setCookie('jwt_token', '', {
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
            router.push('/home/community');
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
          title='Configuración'
        />
        <NavbarItem
          handleClick={handleLogout}
          image='/svg/sb-logout.svg'
          title='Cerrar sesión'
        />
      </div>
    </div>
  );
};

export default SideBarNav;
