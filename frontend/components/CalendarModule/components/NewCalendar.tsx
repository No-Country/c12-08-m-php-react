import useCalendar, { type Month } from '@/hooks/useCalendar';
import { ChangeEvent } from 'react';
import GridHeader from './GridHeader';
import NewCalendarHeader from './NewCalendarHeader';
import NewCell from './NewCell';
import { getMonth } from 'date-fns';

interface Props {
  selectedDate: Date;
  selectDate: (d: Date) => void;
}

const NewCalendar = ({ selectedDate, selectDate }: Props) => {
  const {
    selectedMonth,
    daysInSelectedMonth,
    daysOffset,
    selectedYear,
    selectMonth,
    nextMonth,
    prevMonth,
  } = useCalendar(selectedDate);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    selectMonth(parseInt(e.target.value) as Month);
  };

  const handleClick = (n: number) => {
    const newSelectedDate = new Date(selectedYear, selectedMonth, n);
    selectDate(newSelectedDate);
  };

  return (
    <div className='h-full flex flex-col p-4'>
      <NewCalendarHeader
        selectedDate={selectedDate}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        handleChange={handleChange}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
      />
      <div className='grid grid-cols-7 grid-rows-[7] flex-1 text-sm font-light'>
        <GridHeader />
        {Array.from({ length: daysOffset }).map((_, index) => (
          <NewCell key={index} />
        ))}
        {Array.from({ length: daysInSelectedMonth }).map((_, index) => (
          <NewCell
            key={index}
            handleClick={handleClick}
            isActive={
              getMonth(selectedDate) === selectedMonth &&
              selectedDate.getDate() === index + 1
            }>
            {index + 1}
          </NewCell>
        ))}
      </div>
    </div>
  );
};

export default NewCalendar;
