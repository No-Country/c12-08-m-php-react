'use client';
import { ThemeProvider, createTheme } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D4F1BE',
    },
  },
});

interface TimePickerInputProps {
  label: string;
  name: string;
  value: Date | null;
  setValue: (name: string, value: Date | null) => void;
}

const TimePickerInput = ({ label, name, value, setValue }: TimePickerInputProps) => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label={label}
          value={value}
          onChange={e => setValue(name, e)}
          slotProps={{ textField: { variant: 'standard' } }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default TimePickerInput;
