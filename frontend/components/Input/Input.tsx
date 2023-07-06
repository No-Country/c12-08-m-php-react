import Image, { StaticImageData } from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import ShowPassword from '../ShowPassword/ShowPassword';

interface InputProps {
  src: StaticImageData;
  label: string;
  type: string;
  pattern?: string;
}

const Input = ({ src, label, type, pattern = '' }: InputProps) => {
  const [written, setWritten] = useState(false);

  useEffect(() => {
    document
      .querySelector(`[data-select=${label}]`)
      ?.classList.toggle('peer-focus:text-gray-700');
  }, [written]);

  const handlerWritten = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) setWritten(true);
    else setWritten(false);
  };

  const toggleInputClass = written
    ? 'text-xs text-[#C1F19C] -top-[0.5rem] peer-focus:text-[#C1F19C] '
    : '';
  const toggleBorderClass = written ? 'border-[#C1F19C]' : 'border-gray-700';

  return (
    <div className='flex justify-center items-center gap-4'>
      <label className='cursor-pointer' htmlFor={label}>
        <Image
          className=' w-6 h-5'
          src={src}
          alt={label}
          width={24}
          height={20}
        />
      </label>
      <div
        className={
          'relative flex flex-col justify-center w-60  border-b-2 ' +
          toggleBorderClass
        }>
        <input
          className='peer h-8 outline-none'
          data-select={'input-' + type}
          type={type}
          name={label}
          id={label}
          placeholder=''
          pattern={pattern}
          onChange={handlerWritten}
          required
        />

        <label
          className={
            'cursor-texts absolute peer-focus:text-xs peer-focus:text-gray-700 peer-focus:-top-[0.5rem] ' +
            toggleInputClass
          }
          data-select={label}
          htmlFor={label}>
          {label}
        </label>
        <ShowPassword type={type} />
      </div>
    </div>
  );
};

export default Input;
