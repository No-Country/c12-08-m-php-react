import capsule from '@/public/svg/capsule.svg';
import injectables from '@/public/svg/injectables.svg';
import tablets from '@/public/svg/tablets.svg';
import MedicineCard from './components/MedicineCard';

const DetailedList = () => {
  const medicinesData = [
    {
      time: '15:30',
      medicineName: 'Actron',
      indication: 'Tomar 1 pastilla(s)',
      imageSrc: tablets,
      startDate: '19/07/2023',
      endDate: '28/08/2023',
      day: 'hoy',
    },
    {
      time: '17:30',
      medicineName: 'Paracetamol',
      indication: 'Tomar 1 pastilla(s)',
      imageSrc: tablets,
      startDate: '01/05/2023',
      endDate: '28/05/2023',
      day: 'hoy',
    },
    {
      time: '12:00',
      medicineName: 'Amoxicilina',
      indication: 'Tomar 1 cápsula(s)',
      imageSrc: capsule,
      startDate: '10/08/2023',
      endDate: '20/08/2023',
      day: '10/08',
    },
    {
      time: '10:00',
      medicineName: 'Diclofenac',
      indication: 'Aplicar 1 dosis',
      imageSrc: injectables,
      startDate: '01/09/2023',
      endDate: '01/09/2023',
      day: '01/09',
    },
    {
      time: '12:30',
      medicineName: 'Loratadina',
      indication: 'Tomar 1 cápsula(s)',
      imageSrc: capsule,
      startDate: '10/10/2023',
      endDate: '25/10/2023',
      day: '10/10',
    },
    {
      time: '22:00',
      medicineName: 'Enalapril',
      indication: 'Tomar 2 pastilla(s)',
      imageSrc: tablets,
      startDate: '20/10/2023',
      endDate: '30/10/2023',
      day: '20/10',
    },
  ];

  return (
    <ul>
      {medicinesData.map((medicine, index) => (
        <MedicineCard
          key={index}
          time={medicine.time}
          medicineName={medicine.medicineName}
          indication={medicine.indication}
          imageSrc={medicine.imageSrc}
          startDate={medicine.startDate}
          endDate={medicine.endDate}
          day={medicine.day}
        />
      ))}
    </ul>
  );
};

export default DetailedList;
