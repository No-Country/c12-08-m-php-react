import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  image: string;
  handleClick: () => void;
};

const LinkItem = ({ image, title, handleClick }: Props) => {
  return (
    <div
      className='flex items-center my-5 mx-5 w-fit cursor-pointer'
      onClick={handleClick}>
      <Image className=' mr-5' src={image} alt={`${title}-icon`} width={25} height={25} />
      <p className=' text-xl '>{title}</p>
    </div>
  );
};

export default LinkItem;
