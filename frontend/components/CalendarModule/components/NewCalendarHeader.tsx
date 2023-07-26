import { format } from 'date-fns';
import { ChangeEvent } from 'react';
import esLocale from 'date-fns/locale/es';

interface Props {
  selectedDate: Date;
  selectedMonth: number;
  selectedYear: number;
  prevMonth: () => void;
  nextMonth: () => void;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  todayHandler: () => void;
}

const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const NewCalendarHeader = ({
  selectedDate,
  selectedMonth,
  selectedYear,
  prevMonth,
  nextMonth,
  handleChange,
  todayHandler,
}: Props) => {
  return (
    <header className='flex flex-col items-stretch content-start mb-3'>
      <div className='flex justify-between border-b border-slate-400 text-2xl'>
        <p>
          {format(selectedDate, 'iii', { locale: esLocale })}, {format(selectedDate, 'd')}{' '}
          {format(selectedDate, 'LLL', { locale: esLocale })}.
        </p>
        <button className='btn-sm btn-tertiary-outline text-sm' onClick={todayHandler}>
          Hoy
        </button>
      </div>
      <div className='flex justify-between text-gray-700'>
        <select
          className='bg-transparent font-medium text-xs hover:cursor-pointer'
          value={selectedMonth}
          onChange={handleChange}>
          {months.map((month, index) => (
            <option value={index} key={index}>
              {month} {selectedYear}
            </option>
          ))}
        </select>
        <div className='flex font-light text-xl gap-5'>
          <span className='hover:cursor-pointer' onClick={prevMonth}>
            {'<'}
          </span>
          <span className='hover:cursor-pointer' onClick={nextMonth}>
            {'>'}
          </span>
        </div>
      </div>
    </header>
  );
};

export default NewCalendarHeader;
