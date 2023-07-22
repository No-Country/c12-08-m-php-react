import Image from 'next/image';
import editPencil from '/public/svg/editPencil.svg';
import trashCan from '/public/svg/trashCan.svg';

interface Props {
  time: string;
  medicineName: string;
  indication: string;
  imageSrc: string;
  startDate: string;
  endDate: string;
  day: string;
}

const PlanCard = ({
  time,
  medicineName,
  indication,
  imageSrc,
  startDate,
  endDate,
  day,
}: Props) => {
  return (
    <li className='w-full pr-10 sm:pr-20 sm:mb-10 mb-5'>
      <div className='relative h-auto shadow-md p-4 w-full ml-5 mt-3 sm:mt-5 rounded-lg bg-lightGreen'>
        <div className='sm:pl-[40px] flex sm:m-5 m-2'>
          <span className='flex items-center justify-center pr-2 flex-col'>
            <p>{day}</p>
            <p className='text-lg'>{time}</p>
          </span>
          <div className='flex flex-col border-l-2 pl-4 border-black'>
            <strong>{medicineName}</strong>
            <span className='sm:text-base text-sm'>{indication}</span>
          </div>
          <div className='ml-auto hidden sm:block'>
            <Image src={imageSrc} alt='Logo' width={50} height={50} />
          </div>
        </div>
        <div className='absolute top-0 right-0 mt-1 mr-1'>
          <Image src={editPencil} alt='Logo' className='w-5 h-5 sm:w-6 sm:h-6' />
        </div>
        <div className='absolute bottom-0 right-0 mb-1 mr-1'>
          <Image src={trashCan} alt='Logo' className='w-5 h-5 sm:w-6 sm:h-6' />
        </div>
        <p className='absolute left-0 right-0 bottom-0 text-center opacity-50 text-sm sm:text-base'>
          {startDate} hasta {endDate}
        </p>
      </div>
    </li>
  );
};

export default PlanCard;
