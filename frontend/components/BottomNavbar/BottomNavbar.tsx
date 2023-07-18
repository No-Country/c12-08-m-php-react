import BottomNavbarItem from './components/BottomNavbarItem';

const items = [
  {
    to: '/',
    iconSrc: 'svg/nb-home.svg',
    title: 'Inicio',
  },
  {
    to: '/subs',
    iconSrc: 'svg/nb-subs.svg',
    title: 'Subscripciones',
  },
  {
    to: '/notes',
    iconSrc: 'svg/nb-notes.svg',
    title: 'Notas',
  },
  {
    to: '/planes',
    iconSrc: 'svg/nb-plans.svg',
    title: 'Planes',
  },
];

const BottomNavbar = () => {
  return (
    <footer className='z-30 w-full h-20 bg-white border-t-2 border-lightGreen  md:hidden'>
      <div className='grid h-full max-w-lg grid-cols-4 mx-auto font-medium'>
        {items.map(item => (
          <BottomNavbarItem key={item.title} item={item} />
        ))}
      </div>
    </footer>
  );
};

export default BottomNavbar;
