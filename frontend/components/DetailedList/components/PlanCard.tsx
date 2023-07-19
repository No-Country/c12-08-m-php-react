import Image from 'next/image';
import editPencil from '/public/svg/editPencil.svg';
import tablets from '/public/svg/tablets.svg';
import trashCan from '/public/svg/trashCan.svg';

const PlanCard = () => {
  return (
    <li className='w-full pr-20 mb-10'>
      <div className='relative h-auto shadow-md p-4 w-full ml-5 mt-5 rounded-lg bg-lightGreen'>
        <div className='pl-[40px] flex m-5'>
          <span className='flex items-center justify-center pr-2 flex-col'>
            <p>hoy</p>
            <p className='text-lg'>15:00</p>
          </span>
          <div className='flex flex-col border-l-2 pl-4 border-black'>
            <strong>Actron</strong>
            <span>Tomar 1 pastilla(s)</span>
          </div>
          <div className='ml-auto'>
            <Image src={tablets} alt='Logo' width={50} height={50} />
          </div>
        </div>
        <div className='absolute top-[-20px] left-5 w-[80px] text-white font-poppins font-semibold bg-blue rounded-lg text-xl p-2 text-center'>
          Plan 1
        </div>
        <div className='absolute top-0 right-0 mt-1 mr-1'>
          <Image src={editPencil} alt='Logo' width={25} height={25} />
        </div>
        <div className='absolute bottom-0 right-0 mb-1 mr-1'>
          <Image src={trashCan} alt='Logo' width={25} height={25} />
        </div>
        <p className='absolute left-0 right-0 bottom-0 text-center opacity-50'>
          Desde 02/05/23 hasta 12/06/23
        </p>
      </div>
    </li>
  );
};

export default PlanCard;
