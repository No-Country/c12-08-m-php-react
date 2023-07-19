import Image from 'next/image';
import arrowBack from '/public/svg/arrowBack.svg';

interface Props {
  children: React.ReactNode;
  color: 'green' | 'yellow';
  title: string;
}

const GenericContainer = ({ children, color, title }: Props) => {
  return (
    <div className='h-[435px]'>
      <div
        className={`w-full h-full overflow-y-scroll border rounded-lg shadow-lg bg-${color}`}>
        <header className='flex ml-3 mt-2'>
          <Image src={arrowBack} alt='Logo' width={35} height={35} />
          <span className='font-poppins font-semibold text-2xl'>{title}</span>
        </header>
        {children}
      </div>
    </div>
  );
};

export default GenericContainer;
