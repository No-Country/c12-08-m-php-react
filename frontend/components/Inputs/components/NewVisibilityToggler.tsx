import eye from '@/public/svg/eye.svg';
import eyeOff from '@/public/svg/eye_off.svg';
import Image from 'next/image';
interface VisibilityTogglerProps {
  onClick: () => void;
  isVisible: boolean;
}

const VisibilityToggler = ({ isVisible, onClick }: VisibilityTogglerProps) => {
  return (
    <Image
      className={`absolute right-0 w-6 h-5 cursor-pointer`}
      src={isVisible ? eye : eyeOff}
      alt='eye icon'
      width={24}
      height={20}
      onClick={onClick}
    />
  );
};

export default VisibilityToggler;
