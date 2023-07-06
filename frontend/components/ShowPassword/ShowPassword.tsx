import eye from '@/public/svg/eye.svg';
import eyeOff from '@/public/svg/eye_off.svg';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface ShowPasswordProps {
  type: string;
}

interface EyeProps {
  src: StaticImageData;
  alt: string;
  handlerShowPassword: () => void;
}

const Eye = ({ src, alt, handlerShowPassword }: EyeProps) => {
  return (
    <Image
      className='absolute right-0 w-6 h-5 cursor-pointer'
      src={src}
      alt={alt}
      width={24}
      height={20}
      onClick={handlerShowPassword}
    />
  );
};

const ShowPassword = ({ type }: ShowPasswordProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const isPasswordType = type === 'password';

  const handlerShowPassword = () => {
    document
      .querySelector('[data-select="input-password"]')
      ?.setAttribute('type', !isShowPassword ? 'text' : 'password');
    setIsShowPassword(!isShowPassword);
  };

  return (
    <>
      {isPasswordType && (
        <>
          {isShowPassword ? (
            <Eye
              src={eye}
              alt='show password'
              handlerShowPassword={handlerShowPassword}
            />
          ) : (
            <Eye
              src={eyeOff}
              alt='hidden password'
              handlerShowPassword={handlerShowPassword}
            />
          )}
        </>
      )}
    </>
  );
};

export default ShowPassword;
