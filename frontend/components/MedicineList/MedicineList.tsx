import btnadd from '@/public/svg/btn-add.svg';
import eye from '@/public/svg/eye.svg';
import Image from 'next/image';
import MedicineItem from './components/MedicineItem';

const mockupData = [
  {
    name: 'Actron',
    description: 'Tomar 1 pastilla(s)',
    iconSrc: eye,
    treatment: 'Plan 1',
    time: '15:00',
  },
  {
    name: 'Yectafer',
    description: 'Aplicar 1 ml',
    iconSrc: eye,
    treatment: 'Plan 1',
    time: '17:00',
  },
  {
    name: 'Paracetamol',
    description: 'Tomar 1 pastilla(s)',
    iconSrc: eye,
    treatment: 'Plan 2',
    time: '19:00',
  },
];

const MedicineList = () => {
  const handleClick = () => {
    console.log('Hola');
  };

  return (
    <>
      <ul className='flex flex-col overflow-y-scroll h-3/4 gap-10'>
        {mockupData.map((item, index) => (
          <MedicineItem
            key={index}
            description={item.description}
            iconSrc={item.iconSrc}
            medicineName={item.name}
            planName={item.treatment}
            time={item.time}
          />
        ))}
      </ul>
      <div className='flex flex-row items-center justify-end h-10 mt-auto max-md:pr-8 md:pr-6 md:hidden'>
        <p className='font-medium max-md:hidden'>Añadir medicina a plan</p>
        <button className='ml-5' onClick={handleClick}>
          <Image src={btnadd} alt='btnadd' />
        </button>
      </div>
    </>
  );
};

export default MedicineList;
