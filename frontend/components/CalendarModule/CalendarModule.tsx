'use client';

import { useState } from 'react';
// import useDatePicker from '@/hooks/useDatePicker';
import MedicineList from '../MedicineList/MedicineList';
// import Calendar from './components/Calendar';
// import DateDisplay from './components/DateDisplay';
import NewCalendar from './components/NewCalendar';

const CalendarModule = () => {
  // const { today, selectedDate, pickCurrentDate, selectDate } = useDate();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className='flex flex-row h-full'>
      {/* <div className='bg-green md:flex-[2] md:rounded-2xl max-md:flex max-md:flex-col max-md:items-center max-md:gap-8'> */}
      <div className='rounded-2xl flex-[2] bg-green'>
        <NewCalendar
          initValue={selectedDate}
          onDateSelect={calendarSelectedDate => {
            setSelectedDate(calendarSelectedDate);
          }}
        />
        {/* <button onClick={pickCurrentDate}>
          <DateDisplay date={today} />
        </button> */}
      </div>
      <div className='md:flex-[3]'>
        <MedicineList />
      </div>
    </div>
  );
};

export default CalendarModule;
