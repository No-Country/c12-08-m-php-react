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
      ?.classList.toggle('peer-focus:text-black');
  }, [written]);

  const handlerWritten = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) setWritten(true);
    else setWritten(false);
  };

  const toggleInputClass = written
    ? 'text-xs text-lightGreen -top-[0.5rem] peer-focus:text-lightGreen md:text-white md:peer-focus:text-white'
    : '';
  const toggleBorderClass = written ? 'border-lightGreen' : 'border-black';

  const labelToggleClass = written
    ? 'md:invert-[.91] md:sepia-[.15] md:saturate-[5.49] md:hue-rotate-[46deg] md:brightness-[1.04] md:contrast-[.89]'
    : '';

  return (
    <div className='flex justify-center items-center gap-2 '>
      <label className={`cursor-pointer ${labelToggleClass}`} htmlFor={label}>
        <Image
          className='w-6 h-5'
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
          className='peer h-8 outline-none bg-transparent'
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
            'cursor-texts absolute top-0 peer-focus:text-xs peer-focus:text-black peer-focus:-top-[0.7rem] transition-[top] ease-out duration-300 ' +
            toggleInputClass
          }
          data-select={label}
          htmlFor={label}>
          {label}
        </label>
        <ShowPassword type={type} written={written} />
      </div>
    </div>
  );
};

export default Input;
