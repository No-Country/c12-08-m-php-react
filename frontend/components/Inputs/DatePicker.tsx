import calendarIcon from '@/public/img/calendar.png';
import { ThemeProvider, createTheme } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Image from 'next/image';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A5D481',
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '18rem',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: '#000',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          borderBottom: 'none',

          '&:before': {
            borderBottom: 'solid 2px #000',
          },
          '&:hover': {
            border: 'none',
          },
          '&:after': {
            borderBottom: 'solid 2px #000',
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: 'solid 2px #000',
          },
        },
        input: {
          cursor: 'pointer',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#000',
        },
      },
    },
  },
});

interface DatePickerCustomProps {
  value: Date | null;
  setValue: (name: string, value: Date | null) => void;
}

const DatePickerCustom = ({ value, setValue }: DatePickerCustomProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div className='flex items-center justify-center gap-2'>
        <label htmlFor='Date of birth' className=' cursor-pointer'>
          <Image src={calendarIcon} width={24} height={20} alt='Calendar label' />
        </label>
        <DatePicker
          value={value}
          onChange={date => setValue('birth', date)}
          disableFuture
          openTo='year'
          format='dd/MM/yyyy'
          label='Date of birth'
        />
      </div>
    </ThemeProvider>
  );
};

export default DatePickerCustom;
