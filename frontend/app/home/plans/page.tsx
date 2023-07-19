import { DetailedList, GenericContainer } from '@/components';

const PlansList = () => {
  return (
    <section className='flex-grow'>
      <GenericContainer title='Mis Planes' color='green'>
        <DetailedList />
      </GenericContainer>
    </section>
  );
};

export default PlansList;
