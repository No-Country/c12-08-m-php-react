import Image from 'next/image';
import Link from 'next/link';
import arrowBack from '/public/svg/arrowBack.svg';

interface Props {
  children: React.ReactNode;
  color: 'green' | 'yellow' | 'white' | 'lightGreen';
  title: string;
  colortitle: 'black' | 'green' | 'blue';
  href: string;
}

const GenericContainer = ({ children, color, title, colortitle, href }: Props) => {
  return (
    <div className={`w-full h-full px-2 border rounded-lg shadow-lg bg-${color}`}>
      <header className='flex h-[5%] ml-3 mt-2 top-0'>
        <Link href={href}>
          <Image src={arrowBack} alt='Logo' width={35} height={35} />
        </Link>
        <span className={`font-poppins font-semibold text-2xl text-${colortitle}`}>
          {title}
        </span>
      </header>
      <main className='h-[93%] overflow-y-scroll'>{children}</main>
    </div>
  );
};

export default GenericContainer;
