'use client';

import padlock from '@/public/img/password.png';
import Image from 'next/image';
import { useState } from 'react';
import NewVisibilityToggler from './components/NewVisibilityToggler';

interface Props {
  label: string;
  name: string;
  enableToggler?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onBlur: any;
  error: string | undefined;
}

const NewPasswordInput = ({
  label,
  name,
  enableToggler = false,
  value,
  handleChange,
  onBlur,
  error,
}: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className='flex justify-center items-center gap-2 '>
      <label className={`cursor-pointer`} htmlFor={label}>
        <Image
          className='w-6 h-5'
          src={padlock}
          alt='padlock icon'
          width={24}
          height={20}
        />
      </label>
      <div
        className={`relative flex flex-col justify-center w-72 border-b-2 border-black`}>
        <input
          className='peer h-8 outline-none bg-transparent'
          type={isVisible ? 'text' : 'password'}
          name={name}
          id={label}
          value={value}
          onBlur={onBlur}
          onChange={handleChange}
          required
          autoComplete='off'
        />
        {error ? (
          <div className='absolute top-8 text-red-500 text-sm'>{error}</div>
        ) : null}
        <label
          className={`cursor-texts absolute top-0 peer-focus:text-xs peer-focus:text-black peer-focus:-translate-y-3 transition-transform ease-out duration-300 ${
            value ? 'text-xs -translate-y-3' : ''
          }`}
          htmlFor={label}>
          {label}
        </label>
        {enableToggler ? (
          <NewVisibilityToggler
            onClick={() => setIsVisible(prev => !prev)}
            isVisible={isVisible}
          />
        ) : null}
      </div>
    </div>
  );
};

export default NewPasswordInput;
