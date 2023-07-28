import btnadd from '@/public/svg/btn-add.svg';
import Image from 'next/image';
import Link from 'next/link';

const AddMeds = () => {
  return (
    <div className='w-full h-12 p-2 border rounded-2xl shadow-lg text-center bg-white relative'>
      <p className='text-lg font-semibold font-poppins'>Agregar medicamento</p>
      <Link href='/home/newmeds'>
        <Image src={btnadd} alt='btn-add' className='absolute top-0 right-0 mt-1 mr-4' />
      </Link>
    </div>
  );
};

export default AddMeds;
