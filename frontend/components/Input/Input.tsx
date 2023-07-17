'use client';

import VisibilityToggler from '@/components/Input/components/VisibilityToggler';
import Image, { StaticImageData } from 'next/image';
import { ChangeEvent, useState } from 'react';

interface InputProps {
  src: StaticImageData;
  label: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'md:w-28 w-72',
  md: 'w-44',
  lg: 'w-72',
};

const Input = ({ src, label, type, handleChange, size = 'lg' }: InputProps) => {
  const [written, setWritten] = useState<boolean>(false);

  const handlerWritten = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) setWritten(true);
    else setWritten(false);

    handleChange(e);
  };

  const toggleInputClass = written ? 'text-xs -translate-y-3' : '';

  return (
    <div className='flex justify-center items-center gap-2 '>
      <label className={`cursor-pointer`} htmlFor={label}>
        <Image className='w-6 h-5' src={src} alt={label} width={24} height={20} />
      </label>
      <div
        className={`relative flex flex-col justify-center ${sizes[size]}  border-b-2 border-black`}>
        <input
          className='peer h-8 outline-none bg-transparent'
          data-select={'input-' + type}
          type={type}
          name={label}
          id={label}
          placeholder=''
          onChange={handlerWritten}
          required
        />

        <label
          className={`cursor-texts absolute top-0 peer-focus:text-xs peer-focus:text-black peer-focus:-translate-y-3 transition-transform ease-out duration-300 ${toggleInputClass}`}
          data-select={label}
          htmlFor={label}>
          {label}
        </label>
        {type === 'password' ? <VisibilityToggler /> : null}
      </div>
    </div>
  );
};

export default Input;
