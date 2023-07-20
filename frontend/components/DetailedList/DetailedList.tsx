import capsule from '@/public/svg/capsule.svg';
import injectables from '@/public/svg/injectables.svg';
import tablets from '@/public/svg/tablets.svg';
import PlanCard from './components/PlanCard';

const DetailedList = () => {
  return (
    <ul className='overflow-y-scroll h-5/6'>
      <PlanCard
        time='15:30'
        medicineName='Actron'
        indication='Tomar 1 pastilla(s)'
        imageSrc={tablets}
        planName='Plan 1'
        startDate='19/07/2023'
        endDate='28/08/2023'
        day='hoy'
      />
      <PlanCard
        time='17:30'
        medicineName='Paracetamol'
        indication='Tomar 1 pastilla(s)'
        imageSrc={tablets}
        planName='Plan 2'
        startDate='01/05/2023'
        endDate='28/05/2023'
        day=''
      />
      <PlanCard
        time='19:00'
        medicineName='Yectafer'
        indication='Aplicar 1 ml'
        imageSrc={injectables}
        planName='Plan 3'
        startDate='12/05/2023'
        endDate='12/06/2023'
        day='mañana'
      />
      <PlanCard
        time='19:00'
        medicineName='Omeprazol'
        indication='Tomar 1 pastilla(s)'
        imageSrc={capsule}
        planName='Plan 4'
        startDate='15/05/2023'
        endDate='30/06/2023'
        day=''
      />
    </ul>
  );
};

export default DetailedList;
