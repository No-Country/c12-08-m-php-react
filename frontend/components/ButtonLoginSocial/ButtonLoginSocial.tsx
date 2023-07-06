import Image, { StaticImageData } from 'next/image';

interface ButtonLoginSocialProps {
  src: StaticImageData;
  alt: string;
  social: 'Google' | 'Facebook';
}

const ButtonLoginSocial = ({ src, alt, social }: ButtonLoginSocialProps) => {
  return (
    <button className=' w-72 flex gap-4 items-center border py-2 px-6 rounded-[20px] border-gray-700 text-gray-700'>
      <Image src={src} alt={alt} width={24} height={24} />
      <span>Continuar con {social}</span>
    </button>
  );
};

export default ButtonLoginSocial;
