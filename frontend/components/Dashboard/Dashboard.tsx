import { CalendarModule, MedicineModule } from '@/components';

import Notes from '../Notes/Notes';

const Dashboard = () => {
  return (
    <div className='grid grid-cols-8 grid-rows-5 h-full gap-8'>
      <section className='col-span-8 row-span-3 '>
        <CalendarModule />
      </section>
      <section className='border shadow-lg rounded-xl bg-green col-span-6 row-span-2 max-md:hidden'>
        <MedicineModule />
      </section>
      <section className='col-span-2 row-span-2 max-md:hidden'>
        <Notes small />
      </section>
    </div>
  );
};

export default Dashboard;
