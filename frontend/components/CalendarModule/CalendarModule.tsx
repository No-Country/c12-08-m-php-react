'use client';

import { MedicineList } from '@/components';
import DesktopCalendar from './components/DesktopCalendar';
import useDatePicker from '@/hooks/useDatePicker';
import MobileCalendar from './components/MobileCalendar';
import { useWindowsSize } from '@/hooks/useWindowsSize';
import breakpoints from '@/utils/breakpoints';
import { mockupData } from '@/utils/mockItems';
import { Item } from '@/types/types';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

const CalendarModule = () => {
  const { selectedDate, selectDate, pickCurrentDate } = useDatePicker();
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const size = useWindowsSize();

  useEffect(() => {
    const filtered = mockupData.filter(
      item => format(item.init_date, 'P') === format(selectedDate, 'P')
    );
    setFilteredList(filtered);
  }, [selectedDate]);

  return (
    <div className='flex h-full rounded-2xl max-md:flex-col md:flex-row md:bg-lightGreen'>
      <div className='max-md:flex max-md:flex-col max-md:items-center max-md:gap-8 md:flex-[2] md:rounded-2xl md:bg-green'>
        {size.width > breakpoints.md ? (
          <DesktopCalendar
            initValue={selectedDate}
            onDateSelect={calendarSelectedDate => {
              selectDate(calendarSelectedDate);
            }}
          />
        ) : (
          <MobileCalendar
            pickCurrentDate={pickCurrentDate}
            selectDate={selectDate}
            value={selectedDate}
          />
        )}
      </div>
      <div className='flex flex-col max-md:flex-grow max-md:h-[500px] md:flex-[3] md:pl-8 md:pr-4 md:pt-6 pb-3 md:max-h-full'>
        <MedicineList itemsList={filteredList} />
      </div>
    </div>
  );
};

export default CalendarModule;
