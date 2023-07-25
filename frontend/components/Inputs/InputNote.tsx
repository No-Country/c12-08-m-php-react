'use client';
import React, { useEffect } from 'react';

interface Props {
  id?: string;
}

const InputNote = ({ id }: Props) => {
  useEffect(() => {
    if (id) {
      console.log(`Traer nota: ${id}`);
    }
  }, [id]);
  return (
    <div className=' bg-white rounded-xl p-5 w-full h-96 overflow-hidden'>
      <textarea id='myTextarea' className='textarea-note'></textarea>
    </div>
  );
};

export default InputNote;
