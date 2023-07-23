// 'use client';

// import Image, { StaticImageData } from 'next/image';
// import { ChangeEvent, useState } from 'react';
// import VisibilityToggler from './components/VisibilityToggler';

// interface InputProps {
//   src: StaticImageData;
//   label: string;
//   name: string;
//   type: string;
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   size?: 'sm' | 'md' | 'lg';
//   value?: string;
// }

// const sizes = {
//   sm: 'md:w-28 w-72',
//   md: 'w-44',
//   lg: 'w-72',
// };

// const Input = ({ src, label, name, type, handleChange, size = 'lg' }: InputProps) => {
//   const [written, setWritten] = useState<boolean>(false);

//   const handlerWritten = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.value) setWritten(true);
//     else setWritten(false);

//     handleChange(e);
//   };

//   const toggleInputClass = written ? 'text-xs -translate-y-3' : '';

//   return (
//     <div className='flex justify-center items-center gap-2 '>
//       <label className={`cursor-pointer`} htmlFor={label}>
//         <Image className='w-6 h-5' src={src} alt={label} width={24} height={20} />
//       </label>
//       <div
//         className={`relative flex flex-col justify-center ${sizes[size]}  border-b-2 border-black`}>
//         <input
//           data-select={`input-${name}`}
//           className='peer h-8 outline-none bg-transparent'
//           type={type}
//           name={name}
//           id={label}
//           placeholder=''
//           onChange={handlerWritten}
//           required
//           autoComplete='off'
//         />

//         <label
//           className={`cursor-texts absolute top-0 peer-focus:text-xs peer-focus:text-black peer-focus:-translate-y-3 transition-transform ease-out duration-300 ${toggleInputClass}`}
//           htmlFor={label}>
//           {label}
//         </label>
//         {type === 'password' ? <VisibilityToggler name={name} /> : null}
//       </div>
//     </div>
//   );
// };

// export default Input;

interface InputProps {
  children?: React.ReactNode;
  label: string;
  name: string;
  type?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ children, label, name, type = 'text', handleChange }: InputProps) => {
  return (
    <div className='relative h-11 w-full min-w-[200px]'>
      <>{children}</>
      <input
        className='peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-black focus:border-lightGreen focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
        placeholder=' '
        type={type}
        name={name}
        id={label}
        onChange={handleChange}
        required
        autoComplete='off'
      />
      <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-lightGreen after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-lightGreen peer-focus:after:scale-x-100 peer-focus:after:border-lightGreen peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {label}
      </label>
    </div>
  );
};

export default Input;
