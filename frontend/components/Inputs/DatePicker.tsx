import calendarIcon from '@/public/img/calendar.png';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import Image from 'next/image';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A5D481',
    },
  },
  overrides: {
    MuiFormControl: {
      root: {
        width: '18rem',
      },
    },
    MuiFormLabel: {
      root: {
        '&.Mui-focused': {
          // Estilos para la clase .MuiFormLabel-root.Mui-focused
          color: '#000', // Ejemplo de estilo: color de texto rojo cuando está enfocado
        },
      },
    },
    MuiInput: {
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
    MuiInputLabel: {
      root: {
        color: '#000',
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
          views={['year', 'month', 'date']}
          id='Date of birth'
        />
      </div>
    </ThemeProvider>
  );
};

export default DatePickerCustom;
