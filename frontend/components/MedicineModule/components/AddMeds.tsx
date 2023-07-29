import btnadd from '@/public/svg/btn-add.svg';
import Image from 'next/image';
import Link from 'next/link';

const AddMeds = () => {
  return (
    <Link href='/home/newmeds'>
      <div className='w-full h-12 p-2 border rounded-2xl shadow-lg text-center bg-white relative hover:bg-lightBlue transition-colors duration-75'>
        <p className='text-lg font-semibold font-poppins'>Agregar medicamento</p>
        <Image src={btnadd} alt='btn-add' className='absolute top-0 right-0 mt-1 mr-4' />
      </div>
    </Link>
  );
};

export default AddMeds;
