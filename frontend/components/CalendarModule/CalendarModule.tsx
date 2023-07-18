'use client';

import useDate from '@/hooks/useDate';
import Calendar from './components/Calendar';
import DateDisplay from './components/DateDisplay';

const CalendarModule = () => {
  const { today, selectedDate, pickCurrentDate, selectDate } = useDate();

  return (
    <div className='flex flex-col items-center gap-8 bg-green'>
      <Calendar value={selectedDate} selectDate={selectDate} />
      <button onClick={pickCurrentDate}>
        <DateDisplay date={today} />
      </button>
    </div>
  );
};

export default CalendarModule;
