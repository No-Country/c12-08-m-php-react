import useCalendar, { type Month } from '@/hooks/useCalendar';
import { ChangeEvent } from 'react';
import GridHeader from './GridHeader';
import DesktopCalendarHeader from './DesktopCalendarHeader';
import DesktopCell from './DesktopCell';
import { getMonth, getYear } from 'date-fns';

interface Props {
  initValue?: Date;
  onDateSelect: (calendarSelectedDate: Date) => void;
}

const NewCalendar = ({ onDateSelect = () => undefined, initValue }: Props) => {
  const {
    selectedDate,
    selectedMonth,
    daysInSelectedMonth,
    daysOffset,
    selectedYear,
    setSelectedDate,
    selectMonth,
    nextMonth,
    prevMonth,
    selectYear,
  } = useCalendar(initValue);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    selectMonth(parseInt(e.target.value) as Month);
  };

  const handleClick = (n: number) => {
    const newSelectedDate = new Date(selectedYear, selectedMonth, n);
    setSelectedDate(newSelectedDate);
    onDateSelect(newSelectedDate);
  };

  const todayHandler = () => {
    const today = new Date();
    setSelectedDate(today);
    onDateSelect(today);
    selectMonth(getMonth(today) as Month);
    selectYear(getYear(today));
  };

  return (
    <div className='h-full flex flex-col p-4'>
      <DesktopCalendarHeader
        selectedDate={selectedDate}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        handleChange={handleChange}
        todayHandler={todayHandler}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
      />
      <div className='grid grid-cols-7 grid-rows-[7] flex-1 text-sm font-light'>
        <GridHeader />
        {Array.from({ length: daysOffset }).map((_, index) => (
          <DesktopCell key={index} />
        ))}
        {Array.from({ length: daysInSelectedMonth }).map((_, index) => (
          <DesktopCell
            key={index}
            handleClick={handleClick}
            isActive={
              selectedDate.getDate() === index + 1 &&
              getMonth(selectedDate) === selectedMonth &&
              getYear(selectedDate) === selectedYear
            }>
            {index + 1}
          </DesktopCell>
        ))}
      </div>
    </div>
  );
};

export default NewCalendar;
