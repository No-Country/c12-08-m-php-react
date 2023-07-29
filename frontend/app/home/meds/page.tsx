import { DetailedList, GenericContainer } from '@/components';

const Medicines = () => {
  return (
    <GenericContainer
      title='Mis medicamentos'
      color='green'
      colortitle='black'
      href='/home'>
      <DetailedList />
    </GenericContainer>
  );
};

export default Medicines;
