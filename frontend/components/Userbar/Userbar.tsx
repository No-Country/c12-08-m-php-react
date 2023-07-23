import Image from 'next/image';
import user from '/public/img/user.jpg';
import bell from '/public/svg/bell.svg';

interface Props {
  name: string;
  age: string;
  nationality: string;
}

const Userbar = ({ name, age, nationality }: Props) => {
  return (
    <div className='border rounded-2xl relative shadow-md h-24 flex items-center'>
      <div className='m-2 flex flex-grow'>
        <Image src={user} alt='userImageSrc' width={80} height={80} />
        <div className='ml-2 flex flex-col font-poppins'>
          <span className='text-blue font-semibold'>{name}</span>
          <div className='flex flex-col items-center font-medium'>
            <p>{age}</p>
            <p>{nationality}</p>
          </div>
        </div>
      </div>
      <div className='absolute top-0 right-0 mt-2 mr-2'>
        <Image src={bell} alt='Logo' width={35} height={35} />
      </div>
    </div>
  );
};

export default Userbar;
