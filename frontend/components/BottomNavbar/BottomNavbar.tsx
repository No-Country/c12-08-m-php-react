import homeIcon from '@/public/svg/nb-home.svg';
import notesIcon from '@/public/svg/nb-notes.svg';
import plansIcon from '@/public/svg/nb-plans.svg';
import subsIcon from '@/public/svg/nb-subs.svg';
import BottomNavbarItem from './components/BottomNavbarItem';

const items = [
  {
    to: '/home',
    iconSrc: homeIcon,
    title: 'Inicio',
  },
  {
    to: '/subs',
    iconSrc: subsIcon,
    title: 'Subscripciones',
  },
  {
    to: '/notes',
    iconSrc: notesIcon,
    title: 'Notas',
  },
  {
    to: '/home/meds',
    iconSrc: plansIcon,
    title: 'Medicinas',
  },
];

const BottomNavbar = () => {
  return (
    <footer className='z-30 w-full max-md:h-[8%] bg-white border-t-2 border-lightGreen  md:hidden'>
      <div className='grid h-full max-w-lg grid-cols-4 mx-auto font-medium'>
        {items.map(item => (
          <BottomNavbarItem key={item.title} item={item} />
        ))}
      </div>
    </footer>
  );
};

export default BottomNavbar;
