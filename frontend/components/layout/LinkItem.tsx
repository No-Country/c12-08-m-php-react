import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  image: string;
  onClick: () => void;
};

const LinkItem = ({ image, title, onClick }: Props) => {
  return (
    <div className='flex my-5 mx-5 w-fit cursor-pointer' onClick={onClick}>
      <img className=' mr-5' src={image} />
      <p className='text-2xl'>{title}</p>
    </div>
  );
};

export default LinkItem;