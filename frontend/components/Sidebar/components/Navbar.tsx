import { useRouter } from 'next/navigation';
import NavbarItem from './NavbarItem';
import SearchInput from './SearchInput';

const SideBarNav = () => {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Add logout functionality
  };

  return (
    <div className=' flex flex-col h-full w-full'>
      <NavbarItem
        handleClick={() => router.push('/dashboard/profile')}
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
          handleClick={() => router.push('/about')}
          image='/svg/sb-inf.svg'
          title='Acerca de'
        />
        <NavbarItem
          handleClick={() => router.push('/dashboard/settings')}
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
