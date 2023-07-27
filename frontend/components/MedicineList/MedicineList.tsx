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
    day: '05/08',
    endDay: '06/09',
    startDate: '04/07',
  },
  {
    name: 'Yectafer',
    description: 'Aplicar 1 ml',
    iconSrc: eye,
    treatment: 'Plan 1',
    time: '17:00',
    day: '05/08',
    endDay: '06/09',
    startDate: '04/07',
  },
  {
    name: 'Paracetamol',
    description: 'Tomar 1 pastilla(s)',
    iconSrc: eye,
    treatment: 'Plan 2',
    time: '19:00',
    day: '05/08',
    endDay: '06/09',
    startDate: '04/07',
  },
  {
    name: 'Paracetamol',
    description: 'Tomar 1 pastilla(s)',
    iconSrc: eye,
    treatment: 'Plan 2',
    time: '19:00',
    day: '05/08',
    endDay: '06/09',
    startDate: '04/07',
  },
  {
    name: 'Paracetamol',
    description: 'Tomar 1 pastilla(s)',
    iconSrc: eye,
    treatment: 'Plan 2',
    time: '19:00',
    day: '05/08',
    endDay: '06/09',
    startDate: '04/07',
  },
  {
    name: 'Paracetamol',
    description: 'Tomar 1 pastilla(s)',
    iconSrc: eye,
    treatment: 'Plan 2',
    time: '19:00',
    day: '05/08',
    endDay: '06/09',
    startDate: '04/07',
  },
  {
    name: 'Paracetamol',
    description: 'Tomar 1 pastilla(s)',
    iconSrc: eye,
    treatment: 'Plan 2',
    time: '19:00',
    day: '05/08',
    endDay: '06/09',
    startDate: '04/07',
  },
  {
    name: 'Paracetamol',
    description: 'Tomar 1 pastilla(s)',
    iconSrc: eye,
    treatment: 'Plan 2',
    time: '19:00',
    day: '05/08',
    endDay: '06/09',
    startDate: '04/07',
  },
  {
    name: 'Paracetamol',
    description: 'Tomar 1 pastilla(s)',
    iconSrc: eye,
    treatment: 'Plan 2',
    time: '19:00',
    day: '05/08',
    endDay: '06/09',
    startDate: '04/07',
  },
  {
    name: 'Paracetamol',
    description: 'Tomar 1 pastilla(s)',
    iconSrc: eye,
    treatment: 'Plan 2',
    time: '19:00',
    day: '05/08',
    endDay: '06/09',
    startDate: '04/07',
  },
  {
    name: 'Paracetamol',
    description: 'Tomar 1 pastilla(s)',
    iconSrc: eye,
    treatment: 'Plan 2',
    time: '19:00',
    day: '05/08',
    endDay: '06/09',
    startDate: '04/07',
  },
  {
    name: 'Paracetamol',
    description: 'Tomar 1 pastilla(s)',
    iconSrc: eye,
    treatment: 'Plan 2',
    time: '19:00',
    day: '05/08',
    endDay: '06/09',
    startDate: '04/07',
  },
  {
    name: 'Paracetamol',
    description: 'Tomar 1 pastilla(s)',
    iconSrc: eye,
    treatment: 'Plan 2',
    time: '19:00',
    day: '05/08',
    endDay: '06/09',
    startDate: '04/07',
  },
];

const MedicineList = () => {
  const handleClick = () => {
    console.log('Hola');
  };

  return (
    <>
      <ul className='flex flex-col md:h-3/4 overflow-y-scroll max-md:w-full md:flex-1 md:gap-8'>
        {mockupData.map((item, index) => (
          <MedicineItem
            key={index}
            day={item.day}
            imageSrc={item.iconSrc}
            indication={item.description}
            startDate={item.startDate}
            endDate={item.endDay}
            medicineName={item.name}
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
