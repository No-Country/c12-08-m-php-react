import eye from '@/public/svg/eye.svg';
import eyeOff from '@/public/svg/eye_off.svg';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface ShowPasswordProps {
  type: string;
  written: boolean;
}

interface EyeProps {
  src: StaticImageData;
  alt: string;
  handlerShowPassword: () => void;
  written: boolean;
}

const Eye = ({ src, alt, handlerShowPassword, written }: EyeProps) => {
  const writtenClass = written
    ? 'md:invert-[.91] md:sepia-[.15] md:saturate-[5.49] md:hue-rotate-[46deg] md:brightness-[1.04] md:contrast-[.89]'
    : '';

  return (
    <Image
      className={`absolute right-0 w-6 h-5 cursor-pointer ${writtenClass}`}
      src={src}
      alt={alt}
      width={24}
      height={20}
      onClick={handlerShowPassword}
    />
  );
};

const ShowPassword = ({ type, written }: ShowPasswordProps) => {
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
              written={written}
              src={eye}
              alt='show password'
              handlerShowPassword={handlerShowPassword}
            />
          ) : (
            <Eye
              written={written}
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
