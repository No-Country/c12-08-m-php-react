import React from 'react';

const ISearchInput = () => {
  return (
    <div className=' flex justify-center'>
      <div className='relative w-3/4'>
        <img
          src='/svg/search.svg'
          className='pointer-events-none w-7 h-7 absolute top-1/2 -translate-y-1/2 right-3'
        />

        <input
          type='text'
          placeholder='Invitar'
          className='form-input w-full px-4 py-2
          bg-green-500 rounded-full placeholder-gray-600 placeholder:font-bold
          focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-600 '
        />
      </div>
    </div>
  );
};

export default ISearchInput;
