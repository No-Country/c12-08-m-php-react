import Image from 'next/image';
import Navbar from './Navbar';
import ProfileInfo from './ProfileInfo';

type Props = {
  open: boolean;
  closeSidebar: () => void;
};

const customUser = {
  name: 'Cosme Fulanito',
  nationality: 'Argentina',
  edad: 25,
  image: '',
};

const Panel = ({ open, closeSidebar }: Props) => {
  return (
    <div
      className={`flex flex-col justify-between z-40 h-full rounded w-80 bg-white border-white md:w-52 max-md:transition-transform max-md:.3s max-md:ease-in-out max-md:fixed max-md:top-0
                  ${open ? '' : '-translate-x-full'}`}>
      <div className='flex flex-col h-full my-4 '>
        <div className=' flex w-full md:justify-center'>
          <Image
            className='mx-5 mr-auto md:mx-auto md:h-20 md:w-20 '
            src='/svg/Logo.svg'
            alt='Logo'
            width={50}
            height={50}
          />
          <Image
            src='/svg/sb-back.svg'
            className='ml-auto h-6 w-6 m-2 mx-5 md:hidden'
            onClick={closeSidebar}
            width={25}
            height={25}
            alt='Back-icon'
          />
        </div>
        <ProfileInfo user={customUser} />
        <Navbar />
      </div>
    </div>
  );
};

export default Panel;
