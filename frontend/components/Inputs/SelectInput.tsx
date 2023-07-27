'use client';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D4F1BE',
    },
  },
});

interface SelectProps {
  values: string[];
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  disabled?: boolean;
}

const SelectInput = ({
  values,
  label,
  handleChange,
  name,
  disabled = false,
}: SelectProps) => {
  const handleSelect = (e: any) => {
    handleChange(e);
  };
  return (
    <ThemeProvider theme={theme}>
      <FormControl variant='standard' fullWidth>
        <InputLabel variant='standard' htmlFor='uncontrolled-native'>
          {label}
        </InputLabel>
        <Select
          defaultValue={''}
          inputProps={{
            name: name,
            id: 'uncontrolled-native',
          }}
          disabled={disabled}
          onChange={handleSelect}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {values.map(value => (
            <MenuItem value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default SelectInput;
