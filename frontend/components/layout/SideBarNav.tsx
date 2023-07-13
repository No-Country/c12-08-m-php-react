import LinkItem from './LinkItem';
import { useRouter } from 'next/router';
import SearchInput from '../inputs/SearchInput';

const SideBarNav = () => {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Add logout functionality
  };

  return (
    <div className=' flex flex-col h-full w-full'>
      <LinkItem
        handleClick={() => router.push('/dashboard/profile')}
        image='/svg/sb-profile.svg'
        title='Perfil'
      />
      <div className=' border-y-2 border-black w-full min-h-[150px] h-1/5'>
        <LinkItem
          handleClick={() => {
            router.push('/dashboard/community');
          }}
          image='/svg/sb-community.svg'
          title='Comunidad'
        />
        <SearchInput />
      </div>
      <div className=' mt-auto'>
        <LinkItem
          handleClick={() => router.push('/about')}
          image='/svg/sb-inf.svg'
          title='Acerca de'
        />
        <LinkItem
          handleClick={() => router.push('/dashboard/settings')}
          image='/svg/sb-setting.svg'
          title='Configuracion'
        />
        <LinkItem
          handleClick={handleLogout}
          image='/svg/sb-logout.svg'
          title='Cerrar sesion'
        />
      </div>
    </div>
  );
};

export default SideBarNav;
