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
      className={`flex flex-col justify-center bg-yellow w-full rounded-2xl text-center shadow-md drop-shadow-lg
                  md:border md:border-slate-500 text-sm ${
                    small
                      ? '  h-full text-sm p-2 py-4 overflow-hidden flex-nowrap text-ellipsis'
                      : ' p-5 min-h-[150px]'
                  }`}>
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
