import NavBarItem from './NavBarItem';

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

const NavBar = () => {
  return (
    <div className='fixed bottom-0 left-0 z-30 w-full h-20 bg-white border-t-2 border-lightGreen  md:hidden'>
      <div className='grid h-full max-w-lg grid-cols-4 mx-auto font-medium'>
        {items.map(item => (
          <NavBarItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
