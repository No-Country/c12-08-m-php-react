import Image from 'next/image';

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
  planName: string;
  description: string;
  iconSrc: string;
}

const MedicineItem = ({ time, medicineName, planName, description, iconSrc }: Props) => {
  return (
    <li className='flex justify-between md:gap-14 lg:gap-32'>
      <div className='flex flex-1 border-b border-black'>
        <div className='flex justify-center py-3 ps-1 pe-5 text-xl font-medium border-r border-black'>
          <p>{time}</p>
        </div>
        <div className='flex flex-col flex-1 ps-5'>
          <strong>{medicineName}</strong>
          <div className='flex md:flex-col lg:flex-row justify-between'>
            <p>{description}</p>
            <p className='font-semibold text-gray-500'>{planName}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center md:pr-4'>
        <Image src={iconSrc} width={50} height={50} alt='medicine icon' />
      </div>
    </li>
  );
};

export default MedicineItem;
