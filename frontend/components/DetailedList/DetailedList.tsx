import PlanCard from './components/PlanCard';

const DetailedList = () => {
  return (
    <ul className='overflow-y-scroll h-5/6'>
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <PlanCard />
    </ul>
  );
};

export default DetailedList;
