import { format } from 'date-fns';
import Image from 'next/image';

interface Props {
  time: string;
  medicineName: string;
  indication: string;
  imageSrc: string;
  initDate: Date;
  dueDate: Date | undefined;
}

const MedicineItem = ({
  time,
  medicineName,
  indication,
  imageSrc,
  initDate,
  dueDate,
}: Props) => {
  return (
    <li className='w-full pr-10 max-md:mb-5'>
      <div className='relative h-auto shadow-md p-4 w-full mx-5 mt-3 sm:mt-5 rounded-lg bg-lightGreen'>
        <div className='sm:pl-[40px] flex max-md:m-5 mb-2'>
          <span className='flex items-center justify-center pr-2 flex-col'>
            <p className='text-lg'>{time}</p>
          </span>
          <div className='flex flex-col border-l-2 pl-4 border-black'>
            <strong>{medicineName}</strong>
            <span className='sm:text-base text-sm'>{indication}</span>
          </div>
          <div className='ml-auto sm:block'>
            <Image
              src={imageSrc}
              alt='Logo'
              className='w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] md:w-[25px] md:h-[25px] lg:w-[50px] lg:h-[50px]'
            />
          </div>
        </div>
        <p className='absolute left-0 right-0 bottom-0 text-center opacity-50 text-sm sm:text-base'>
          {`${format(initDate, 'P')} ${dueDate ? `hasta ${format(dueDate, 'P')}` : ''}`}
        </p>
      </div>
    </li>
  );
};

export default MedicineItem;
