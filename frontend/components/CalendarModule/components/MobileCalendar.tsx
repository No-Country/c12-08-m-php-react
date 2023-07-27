import { add, endOfWeek, format, startOfWeek, sub } from 'date-fns';
import Image from 'next/image';
import MobileCell from './MobileCell';
import arrowLeft from '/public/svg/arrowL.svg';
import arrowRight from '/public/svg/arrowR.svg';
import esLocale from 'date-fns/locale/es';

const week = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

type Props = {
  value?: Date;
  selectDate: (date: Date) => void;
  pickCurrentDate: () => void;
};

const MobileCalendar: React.FC<Props> = ({
  value = new Date(),
  selectDate,
  pickCurrentDate,
}) => {
  const currentWeekStartDate = startOfWeek(value, { weekStartsOn: 1 });
  const currentWeekEndDate = endOfWeek(value, { weekStartsOn: 1 });

  const prevWeek = () => selectDate(sub(currentWeekStartDate, { weeks: 1 }));
  const nextWeek = () => selectDate(add(currentWeekEndDate, { days: 1 }));

  const handleClickDate = (index: number) => {
    const date = add(currentWeekStartDate, { days: index });
    selectDate(date);
  };

  const dateString = format(value, 'LLLL yyyy', { locale: esLocale });
  const HEADER_TITLE = dateString.charAt(0).toUpperCase() + dateString.slice(1);

  return (
    <div className='flex bg-green w-full'>
      <div className='flex my-auto cursor-pointer'>
        <Image
          src={arrowLeft}
          alt='left arrow'
          width={30}
          height={30}
          onClick={prevWeek}
        />
      </div>
      <div className='flex-grow'>
        <div className='grid grid-cols-7 items-center justify-center text-center'>
          <MobileCell className='col-span-3'></MobileCell>
          <MobileCell className='col-span-1'>{HEADER_TITLE}</MobileCell>
          <MobileCell className='col-span-3'>
            <button
              onClick={pickCurrentDate}
              className='ml-8 px-2 py-1 border border-black rounded-full'>
              Hoy
            </button>
          </MobileCell>
          {week.map((week, index) => (
            <MobileCell key={index} className='text-xs font-bold uppercase'>
              {week}
            </MobileCell>
          ))}

          {Array.from({ length: 7 }).map((_, index) => (
            <MobileCell
              key={index}
              isActive={
                format(add(currentWeekStartDate, { days: index }), 'yyyy-MM-dd') ===
                format(value, 'yyyy-MM-dd')
              }
              onClick={() => handleClickDate(index)}>
              {format(add(currentWeekStartDate, { days: index }), 'dd')}
            </MobileCell>
          ))}
        </div>
      </div>
      <div className='flex my-auto cursor-pointer'>
        <Image
          src={arrowRight}
          alt='right arrow'
          width={30}
          height={30}
          onClick={nextWeek}
        />
      </div>
    </div>
  );
};

export default MobileCalendar;
