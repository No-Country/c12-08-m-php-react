'use client';

import email from '@/public/img/email.png';
import Image from 'next/image';

interface Props {
  label: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: any;
  error: string | undefined;
}

const NewEmailInput = ({ value, label, name, handleChange, onBlur, error }: Props) => {
  return (
    <div className='flex justify-center items-center gap-2 '>
      <label className={`cursor-pointer`} htmlFor={label}>
        <Image className='w-6 h-5' src={email} alt='email icon' width={24} height={20} />
      </label>
      <div
        className={`relative flex flex-col justify-center w-72 border-b-2 border-black`}>
        <input
          className='peer h-8 outline-none bg-transparent'
          type='email'
          name={name}
          id={label}
          placeholder=''
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
      </div>
    </div>
  );
};

export default NewEmailInput;
