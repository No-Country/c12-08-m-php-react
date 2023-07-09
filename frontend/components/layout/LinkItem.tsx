import Link from 'next/link';
import React from 'react';

type Props = {
  to: string;
  title: string;
  image: string;
};

const LinkItem = ({ to, image, title }: Props) => {
  return (
    <Link href={to}>
      <div className='flex my-5 mx-5 w-fit'>
        <img className=' mr-5' src={image} />
        <p className='text-2xl'>{title}</p>
      </div>
    </Link>
  );
};

export default LinkItem;
