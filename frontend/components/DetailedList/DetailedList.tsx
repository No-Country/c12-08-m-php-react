import capsule from '@/public/svg/capsule.svg';
import injectables from '@/public/svg/injectables.svg';
import tablets from '@/public/svg/tablets.svg';
import MedicineCard from './components/MedicineCard';

const DetailedList = () => {
  return (
    <ul>
      <MedicineCard
        time='15:30'
        medicineName='Actron'
        indication='Tomar 1 pastilla(s)'
        imageSrc={tablets}
        startDate='19/07/2023'
        endDate='28/08/2023'
        day='hoy'
      />
      <MedicineCard
        time='17:30'
        medicineName='Paracetamol'
        indication='Tomar 1 pastilla(s)'
        imageSrc={tablets}
        startDate='01/05/2023'
        endDate='28/05/2023'
        day='hoy'
      />
      <MedicineCard
        time='19:00'
        medicineName='Yectafer'
        indication='Aplicar 1 ml'
        imageSrc={injectables}
        startDate='12/05/2023'
        endDate='12/06/2023'
        day='27/05'
      />
      <MedicineCard
        time='19:00'
        medicineName='Omeprazol'
        indication='Tomar 1 pastilla(s)'
        imageSrc={capsule}
        startDate='15/05/2023'
        endDate='30/06/2023'
        day='29/05'
      />
      <MedicineCard
        time='15:30'
        medicineName='Actron'
        indication='Tomar 1 pastilla(s)'
        imageSrc={tablets}
        startDate='19/07/2023'
        endDate='28/08/2023'
        day='hoy'
      />
      <MedicineCard
        time='17:30'
        medicineName='Paracetamol'
        indication='Tomar 1 pastilla(s)'
        imageSrc={tablets}
        startDate='01/05/2023'
        endDate='28/05/2023'
        day='hoy'
      />
      <MedicineCard
        time='19:00'
        medicineName='Yectafer'
        indication='Aplicar 1 ml'
        imageSrc={injectables}
        startDate='12/05/2023'
        endDate='12/06/2023'
        day='27/05'
      />
      <MedicineCard
        time='19:00'
        medicineName='Omeprazol'
        indication='Tomar 1 pastilla(s)'
        imageSrc={capsule}
        startDate='15/05/2023'
        endDate='30/06/2023'
        day='29/05'
      />
    </ul>
  );
};

export default DetailedList;
