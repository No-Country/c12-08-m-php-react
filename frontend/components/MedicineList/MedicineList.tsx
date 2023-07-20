import { PlusButton } from '@/components';
import MedicineItem from './components/MedicineItem';
import eye from '@/public/svg/eye.svg';

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
      <div className='flex flex-row items-center justify-end h-10 mt-auto pr-6'>
        <p className='font-medium'>Añadir medicina a plan</p>
        <PlusButton className='ml-5' onClick={handleClick} />
      </div>
    </>
  );
};

export default MedicineList;
