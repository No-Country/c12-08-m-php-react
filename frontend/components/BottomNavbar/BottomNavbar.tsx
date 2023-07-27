import capsuleIcon from '@/public/svg/capsule.svg';
import homeIcon from '@/public/svg/nb-home.svg';
import notesIcon from '@/public/svg/nb-notes.svg';
import BottomNavbarItem from './components/BottomNavbarItem';

const items = [
  {
    to: '/home',
    iconSrc: homeIcon,
    title: 'Inicio',
  },
  {
    to: '/home/meds',
    iconSrc: capsuleIcon,
    title: 'Mis medicinas',
  },
  {
    to: '/notes',
    iconSrc: notesIcon,
    title: 'Notas',
  },
];

const BottomNavbar = () => {
  return (
    <footer className='z-30 w-full max-md:h-[8%] bg-white border-t-2 border-lightGreen  md:hidden'>
      <div className='flex justify-evenly h-full max-w-lg mx-auto font-medium'>
        {items.map(item => (
          <BottomNavbarItem key={item.title} item={item} />
        ))}
      </div>
    </footer>
  );
};

export default BottomNavbar;
