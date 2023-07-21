import Image from 'next/image';
import arrowBack from '/public/svg/arrowBack.svg';

interface Props {
  children: React.ReactNode;
  color: 'green' | 'yellow' | 'white';
  title: string;
  colorTitle: 'black' | 'green';
}

const GenericContainer = ({ children, color, title, colorTitle }: Props) => {
  return (
    <div className={`w-full h-full border rounded-lg shadow-lg bg-${color}`}>
      <header className='flex ml-3 mt-2 top-0'>
        <Image src={arrowBack} alt='Logo' width={35} height={35} />
        <span className={`font-poppins font-semibold text-2xl text-${colorTitle}`}>
          {title}
        </span>
      </header>
      {children}
    </div>
  );
};

export default GenericContainer;
