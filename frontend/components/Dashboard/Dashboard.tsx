import { CalendarModule, MedicineModule, NotesModule } from '@/components';

const Dashboard = () => {
  return (
    <div className='grid grid-cols-8 grid-rows-5 h-full gap-8'>
      <section className='col-span-8 row-span-3 '>
        <CalendarModule />
      </section>
      <section className='border shadow-lg rounded-xl bg-green col-span-6 row-span-2 max-md:hidden'>
        <MedicineModule />
      </section>
      <section className='col-span-2 row-span-2 h-full max-md:hidden'>
        <NotesModule small />
      </section>
    </div>
  );
};

export default Dashboard;
