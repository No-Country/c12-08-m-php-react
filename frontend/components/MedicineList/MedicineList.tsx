import btnadd from '@/public/svg/btn-add.svg';
import Image from 'next/image';
import MedicineItem from './components/MedicineItem';
import { Item } from '@/types/types';
import { medCateogries } from '@/utils/mockItems';
import Link from 'next/link';

interface Props {
  itemsList: Item[];
}

const MedicineList = ({ itemsList }: Props) => {
  return (
    <>
      <ul className='flex flex-col md:h-3/4 overflow-y-scroll max-md:w-full md:flex-1 md:gap-8'>
        {itemsList.length > 0 ? (
          itemsList.map((item, index) => (
            <MedicineItem
              key={index}
              imageSrc={
                medCateogries.find(category => category.id === item.category_id)!.img
              }
              indication={item.indications}
              initDate={item.init_date}
              dueDate={item.due_date}
              medicineName={item.name}
              time={item.time}
            />
          ))
        ) : (
          <h3>Nada por aquí</h3>
        )}
      </ul>
      <div className='flex flex-row items-center justify-end h-10 mt-auto max-md:pr-8 md:pr-6 md:hidden'>
        <Link href='/home/newmeds' className='ml-5'>
          <Image src={btnadd} alt='btnadd' />
        </Link>
      </div>
    </>
  );
};

export default MedicineList;
