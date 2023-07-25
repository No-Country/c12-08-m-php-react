import eye from '@/public/svg/eye.svg';
import eyeOff from '@/public/svg/eye_off.svg';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface EyeProps {
  src: StaticImageData;
  alt: string;
  togglePasswordVisibility: () => void;
}

interface VisibilityTogglerProps {
  name: string;
}

const VisibilityToggler = ({ name }: VisibilityTogglerProps) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    document
      .querySelector(`[data-select="input-${name}"]`)
      ?.setAttribute('type', !isShowPassword ? 'text' : 'password');
    setIsShowPassword(!isShowPassword);
  };

  return (
    <>
      {isShowPassword ? (
        <Eye
          src={eye}
          alt='show password'
          togglePasswordVisibility={togglePasswordVisibility}
        />
      ) : (
        <Eye
          src={eyeOff}
          alt='hidden password'
          togglePasswordVisibility={togglePasswordVisibility}
        />
      )}
    </>
  );
};

export default VisibilityToggler;

const Eye = ({ src, alt, togglePasswordVisibility }: EyeProps) => {
  return (
    <Image
      className={`absolute right-0 w-6 h-5 cursor-pointer`}
      src={src}
      alt={alt}
      width={24}
      height={20}
      onClick={togglePasswordVisibility}
    />
  );
};
