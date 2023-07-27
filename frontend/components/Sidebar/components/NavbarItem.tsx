import Image from 'next/image';

type Props = {
  title: string;
  image: string;
  handleClick: () => void;
};

const NavbarItem = ({ image, title, handleClick }: Props) => {
  return (
    <div
      className='flex items-center my-5 mx-5 w-fit cursor-pointer'
      onClick={handleClick}>
      <Image className=' mr-3' src={image} alt={`${title}-icon`} width={25} height={25} />
      <p className=' text-xl '>{title}</p>
    </div>
  );
};

export default NavbarItem;
