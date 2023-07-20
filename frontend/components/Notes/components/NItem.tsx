import Image from 'next/image';
import React from 'react';

interface Props {
  id: number;
  description: string;
  small?: boolean;
}

const NItem = ({ id, description, small }: Props) => {
  return (
    <div
      className='flex flex-col justify-center bg-yellow w-full min-h-[150px] rounded-2xl p-5  text-center shadow-md drop-shadow-lg
                   md:border md:border-slate-500 text-sm '>
      <Image
        src='/svg/plan-edit.svg'
        width={20}
        height={20}
        alt='note'
        className={` absolute bottom-4 right-4 cursor-pointer ${small && 'hidden'} `}
      />
      <Image
        src='/svg/btn-delete.svg'
        width={20}
        height={20}
        alt='note'
        className={`absolute top-4 right-4 cursor-pointer ${small && 'hidden'}`}
      />
      <p>{description}</p>
    </div>
  );
};

export default NItem;
