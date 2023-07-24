'use client';
import { ThemeProvider, createTheme } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
            borderBottom: 'solid 1px #000',
          },
          '&:hover': {
            border: 'none',
          },
          '&:after': {
            borderBottom: 'solid 1px #000',
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: 'solid 1px #000',
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
  label: string;
  name: string;
  value: Date | null;
  setValue: (name: string, value: Date | null) => void;
  disableFuture?: boolean;
  disablePast?: boolean;
  disabled?: boolean;
}

const DatePickerCustom = ({
  label,
  name,
  value,
  setValue,
  disableFuture = false,
  disablePast = false,
  disabled = false,
}: DatePickerCustomProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div className='flex items-center justify-center gap-2'>
        {/* <label htmlFor={label} className=' cursor-pointer'>
          <Image src={calendarIcon} width={24} height={20} alt='Calendar label' />
        </label> */}
        <DatePicker
          value={value}
          onChange={date => setValue(name, date)}
          disablePast={disablePast}
          disableFuture={disableFuture}
          openTo='year'
          format='dd/MM/yyyy'
          label={label}
          slotProps={{ textField: { variant: 'standard' } }}
          sx={{ width: '100%' }}
          disabled={disabled}
          disableOpenPicker={disabled}
        />
      </div>
    </ThemeProvider>
  );
};

export default DatePickerCustom;
