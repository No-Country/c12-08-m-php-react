// import { CalendarLayout } from '@/components';

import DashboardModule from '../DashboardModule/DashboardModule';

// Every module displayed within the Dashboard must be wrapped by DashboardModule component

const Dashboard = () => {
  return (
    <div className='grid grid-cols-8 grid-rows-5 h-full gap-8'>
      <DashboardModule cols={8} rows={3}>
        CALENDARIO
      </DashboardModule>
      <DashboardModule cols={3} rows={2} hidden>
        PLANES
      </DashboardModule>
      <DashboardModule cols={3} rows={2} hidden>
        SUSCRIPCIONES
      </DashboardModule>
      <DashboardModule cols={2} rows={2} hidden>
        NOTAS
      </DashboardModule>
    </div>
  );
};

export default Dashboard;
