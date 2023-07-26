'use client';

import { MedicineList } from '@/components';
import NewCalendar from './components/NewCalendar';
import useDatePicker from '@/hooks/useDatePicker';
import Calendar from './components/Calendar';
import { useWindowsSize } from '@/hooks/useWindowsSize';
import breakpoints from '@/utils/breakpoints';

const CalendarModule = () => {
  const { selectedDate, selectDate, pickCurrentDate } = useDatePicker();
  const size = useWindowsSize();

  return (
    <div className='flex h-full rounded-2xl max-md:flex-col md:flex-row md:bg-lightGreen'>
      <div className='max-md:flex max-md:flex-col max-md:items-center max-md:gap-8 md:flex-[2] md:rounded-2xl md:bg-green'>
        {size.width > breakpoints.md ? (
          <NewCalendar
            initValue={selectedDate}
            onDateSelect={calendarSelectedDate => {
              selectDate(calendarSelectedDate);
            }}
          />
        ) : (
          <Calendar
            pickCurrentDate={pickCurrentDate}
            selectDate={selectDate}
            value={selectedDate}
          />
        )}
      </div>
      <div className='flex flex-col max-md:flex-grow max-md:h-[500px] md:flex-[3] md:pl-8 md:pr-4 md:pt-6 pb-3 md:max-h-full'>
        <MedicineList />
      </div>
    </div>
  );
};

export default CalendarModule;
