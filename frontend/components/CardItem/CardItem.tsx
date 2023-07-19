'use client';
import Image from 'next/image';

type Props = {
  id: number;
  name: string;
};

const CardItem = ({ id, name }: Props) => {
  const handlerEdit = () => {
    console.log(`form edit ${id} ${name}}`);
  };

  return (
    <div className=' bg-lightGreen md:bg-white rounded-2xl m-2 px-5 py-5 shadow-md drop-shadow-lg flex justify-between items-center  '>
      <h2 className=' text-3xl font-bold '>{name}</h2>
      <Image
        className='cursor-pointer'
        src='/svg/plan-edit.svg'
        width={30}
        height={30}
        alt='plan-edit'
        onClick={handlerEdit}
      />
    </div>
  );
};

export default CardItem;
