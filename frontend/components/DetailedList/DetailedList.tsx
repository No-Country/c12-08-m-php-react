import React from 'react';
import Image from 'next/image';
import arrowBack from '/public/svg/arrowBack.svg';

const DetailedList = () => {
  return (
    <div className="w-full h-full border rounded-lg shadow-lg bg-green">
        <div className='flex ml-3 mt-2'>
            <Image src={arrowBack} alt='Logo' width={35} height={35} />
            <span className='font-poppins font-semibold text-2xl'>Mis planes</span>
        </div>
        
        
    </div>
  )
}

export default DetailedList;