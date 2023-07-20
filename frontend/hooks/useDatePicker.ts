import { format } from 'date-fns';
import { useEffect, useState } from 'react';

const useDatePicker = () => {
  const formatDate = (date: Date): string => {
    const formatedDate = format(date, 'dd LLL');
    return formatedDate;
  };

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [formatedToday, setFormatedToday] = useState<string>(formatDate(new Date()));
  const [today, setToday] = useState<Date>(new Date());

  useEffect(() => {
    setToday(new Date());
  }, [formatedToday]);

  const pickCurrentDate = () => {
    const updatedToday = new Date();
    setFormatedToday(formatDate(updatedToday));
    setSelectedDate(updatedToday);
  };

  const selectDate = (date: Date) => {
    setSelectedDate(date);
  };

  return { today, selectedDate, pickCurrentDate, selectDate };
};

export default useDatePicker;
