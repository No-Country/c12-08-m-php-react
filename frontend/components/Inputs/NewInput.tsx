'use client';

import Image, { StaticImageData } from 'next/image';

interface Props {
  src: StaticImageData;
  label: string;
  name: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'md:w-28 w-72',
  md: 'w-44',
  lg: 'w-72',
};

const NewInput = ({
  src,
  label,
  name,
  type,
  value,
  handleChange,
  size = 'lg',
}: Props) => {
  return (
    <div className='flex justify-center items-center gap-2'>
      <label className={`cursor-pointer`} htmlFor={label}>
        <Image src={src} alt={label} width={24} height={20} />
      </label>
      <div
        className={`relative flex flex-col justify-center ${sizes[size]} border-b-2 border-black`}>
        <input
          data-select={`input-${name}`}
          className='peer outline-none bg-transparent'
          type={type}
          name={name}
          id={label}
          value={value}
          placeholder=''
          onChange={handleChange}
          required
          autoComplete='off'
        />
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

export default NewInput;
