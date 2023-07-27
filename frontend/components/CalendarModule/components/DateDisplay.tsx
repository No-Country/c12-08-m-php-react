import { format } from 'date-fns';

interface Props {
  date: Date;
}

const DateDisplay = ({ date }: Props): JSX.Element => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <p className='font-poppins text-blue font-semibold cursor-pointer'>
        <span>Hoy, </span>
        {format(date, 'dd LLL')}
      </p>
    </div>
  );
};

export default DateDisplay;
