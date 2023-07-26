'use client';
import eye from '@/public/svg/eye.svg';
import eyeOff from '@/public/svg/eye_off.svg';
import Image from 'next/image';
import { useState } from 'react';
import Input from './Input';

interface InputPasswordProps {
  name: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPassword = ({ name, label, handleChange }: InputPasswordProps) => {
  const [show, setShow] = useState<boolean>(false);

  let type = show ? 'text' : 'password';

  return (
    <div>
      {/* <div className='relative h-10 w-full min-w-[200px]'> */}
      <Input label={label} name={name} type={type} handleChange={handleChange}>
        <button
          type='button'
          className='group absolute top-2/4 right-3 grid h-5 w-5 -translate-y-1 place-items-center text-blue-gray-500 cursor-pointer z-10'
          onClick={() => setShow(!show)}>
          <Image
            className={show ? 'hidden' : 'block'}
            src={eyeOff}
            alt='eye'
            width={20}
            height={20}
          />
          <Image
            className={show ? 'block' : 'hidden'}
            src={eye}
            alt='eye'
            width={20}
            height={20}
          />
        </button>
      </Input>
      {/* </div> */}
    </div>
  );
};

export default InputPassword;
