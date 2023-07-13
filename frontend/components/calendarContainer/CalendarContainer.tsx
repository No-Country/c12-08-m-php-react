import { format } from 'date-fns';
import { useState } from 'react';
import Calendar from '@/components/calendar/Calendar';

const CalendarContainer = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);

  const handleGoToToday = () => {
    setCurrentDate(today);
  };
  return (
    <div className='mt-16 flex flex-col items-center gap-8 bg-green'>
      <Calendar value={currentDate} onChange={setCurrentDate} />
      <div className='flex flex-col items-center gap-4'>
        <p
          className='font-poppins text-blue font-semibold cursor-pointer'
          onClick={handleGoToToday}>
          <span>Hoy, </span>
          {format(today, 'dd LLL')}
        </p>
      </div>
    </div>
  );
};

export default CalendarContainer;
