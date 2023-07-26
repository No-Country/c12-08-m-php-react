import Image from 'next/image';
import editPencil from '/public/svg/editPencil.svg';
import trashCan from '/public/svg/trashCan.svg';

// interface Props {
//   time: string;
//   medicineName: string;
//   planName: string;
//   description: string;
//   iconSrc: string;
// }

// const MedicineItem = ({ time, medicineName, planName, description, iconSrc }: Props) => {
//   return (
//     <li className='flex justify-between md:gap-14 lg:gap-32'>
//       <div className='flex flex-1 border-b border-black'>
//         <div className='flex justify-center py-3 ps-1 pe-5 text-xl font-medium border-r border-black'>
//           <p>{time}</p>
//         </div>
//         <div className='flex flex-col flex-1 ps-5'>
//           <strong>{medicineName}</strong>
//           <div className='flex md:flex-col lg:flex-row justify-between'>
//             <p>{description}</p>
//             <p className='font-semibold text-gray-500'>{planName}</p>
//           </div>
//         </div>
//       </div>
//       <div className='flex justify-center items-center md:pr-4'>
//         <Image src={iconSrc} width={50} height={50} alt='medicine icon' />
//       </div>
//     </li>
//   );
// };

interface Props {
  time: string;
  medicineName: string;
  indication: string;
  imageSrc: string;
  startDate: string;
  endDate: string;
  day: string;
}

const MedicineItem = ({
  time,
  medicineName,
  indication,
  imageSrc,
  startDate,
  endDate,
  day,
}: Props) => {
  return (
    <li className='w-full pr-10 max-md:mb-5'>
      <div className='relative h-auto shadow-md p-4 w-full mx-5 mt-3 sm:mt-5 rounded-lg bg-lightGreen'>
        <div className='sm:pl-[40px] flex max-md:m-5 mb-2'>
          <span className='flex items-center justify-center pr-2 flex-col'>
            <p>{day}</p>
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
          {startDate} hasta {endDate}
        </p>
      </div>
    </li>
  );
};

export default MedicineItem;
