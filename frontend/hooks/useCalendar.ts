import { getDaysInMonth, getMonth, getYear, startOfMonth } from 'date-fns';
import { useEffect, useState } from 'react';

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

type Params = Date | undefined;

const useCalendar = (date: Params = new Date()) => {
  const [selectedDate, setSelectedDate] = useState<Date>(date);
  const [selectedMonth, setSelectedMonth] = useState<number>(getMonth(date));
  const [selectedYear, setSelectedYear] = useState<number>(getYear(date));
  const [daysOffset, setDaysOffset] = useState<number>(startOfMonth(date).getDay());

  const daysInSelectedMonth = getDaysInMonth(new Date(selectedYear, selectedMonth));

  const prevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(prevYear => prevYear - 1);
    } else {
      setSelectedMonth(prevMonth => prevMonth - 1);
    }
  };

  const nextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(prevYear => prevYear + 1);
    } else {
      setSelectedMonth(prevMonth => prevMonth + 1);
    }
  };

  const selectMonth = (m: Month) => {
    setSelectedMonth(m);
  };

  const selectYear = (n: number) => {
    setSelectedYear(n);
  };

  useEffect(() => {
    const tmpDate = new Date(selectedYear, selectedMonth);
    const tmpFirstDayOfMonth = startOfMonth(tmpDate);
    setDaysOffset(tmpFirstDayOfMonth.getDay());
  }, [selectedMonth]);

  return {
    selectedDate,
    setSelectedDate,
    selectedMonth,
    daysInSelectedMonth,
    daysOffset,
    selectedYear,
    selectMonth,
    selectYear,
    prevMonth,
    nextMonth,
  };
};

export default useCalendar;
