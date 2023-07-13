import Image from 'next/image';
import Link from 'next/link';

interface Props {
  item: {
    to: string;
    iconSrc: string;
    title: string;
  };
}

const NavBarItem = ({ item }: Props) => {
  return (
    <Link
      href={item.to}
      className='inline-flex flex-col items-center justify-center px-5 '>
      <Image src={item.iconSrc} alt={item.title} width={30} height={30} />
      <span className=' text-xs text-gray-500'>{item.title}</span>
    </Link>
  );
};

export default NavBarItem;
