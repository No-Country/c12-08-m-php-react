'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import arrowBack from '/public/svg/arrowBack.svg';

interface Props {
  children: React.ReactNode;
  color: 'green' | 'yellow' | 'white';
  title: string;
  colortitle: 'black' | 'green' | 'blue';
}

const GenericContainer = ({ children, color, title, colortitle }: Props) => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={`w-full h-full px-2 border rounded-lg shadow-lg bg-${color}`}>
      <header className='flex h-[5%] ml-3 mt-2 top-0'>
        <button onClick={handleGoBack}>
          <Image src={arrowBack} alt='Logo' width={35} height={35} />
        </button>
        <span className={`font-poppins font-semibold text-2xl text-${colortitle}`}>
          {title}
        </span>
      </header>
      <main className='h-[93%] overflow-y-scroll'>{children}</main>
    </div>
  );
};

export default GenericContainer;
