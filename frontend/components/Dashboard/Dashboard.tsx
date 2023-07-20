import { CalendarModule } from '@/components';

import Notes from '../Notes/Notes';

// Every module displayed within the Dashboard must be wrapped by DashboardModule component

const Dashboard = () => {
  return (
    <div className='grid grid-cols-8 grid-rows-5 h-full gap-8'>
      <section className='col-span-8 row-span-3 '>
        <CalendarModule />
      </section>
      <section className='border border-black col-span-3 row-span-2 max-md:hidden'>
        PLANES
      </section>
      <section className='border border-black col-span-3 row-span-2 max-md:hidden'>
        SUSCRIPCIONES
      </section>
      <section className='border border-black col-span-2 row-span-2 max-md:hidden'>
        <Notes small />
      </section>
    </div>
  );
};

export default Dashboard;
