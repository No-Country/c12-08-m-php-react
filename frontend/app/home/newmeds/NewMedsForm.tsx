'use client';
import { CheckBox, DatePicker, Input, SelectInput, Spinner } from '@/components';
import InputNumber from '@/components/Inputs/InputNumber';
import TimePickerInput from '@/components/Inputs/TimePicker';
import { createMeds } from '@/services/meds/meds';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { es } from 'date-fns/locale';
import { useFormik } from 'formik';
import { useState } from 'react';
import { getCookie } from 'react-use-cookie';
import InputContainer from './InputContainer';
import InputsPairContainer from './InputsPairContainer';
import { medCateogries } from '@/utils/mockItems';

const frequency = ['dias', 'horas'];

const NewMedsForm = () => {
  const [singleDose, setSingleDose] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const medTypes = medCateogries.map(category => category.name);

  const { handleSubmit, handleChange, setFieldValue, values } = useFormik({
    initialValues: {
      name: '',
      indications: '',
      quantity: 0,
      init_date: null,
      due_date: null,
      time: null,
      frequency: 0,
      frequencySelect: '',
      is_single_dose: false,
    },
    onSubmit: async values => {
      setIsLoading(true);
      if (!values.is_single_dose) {
        if (values.frequencySelect === frequency[0]) {
          setFieldValue('frequency', values.frequency * 24);
        }
      }

      try {
        const res = await createMeds(values, getCookie('jwt_token'));
        console.log(res);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    },
  });

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSingleDose(!singleDose);
    handleChange(e);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
      <div className='w-full flex flex-col font-bold font-poppins'>
        <form
          className='h-full flex flex-col gap-y-8 justify-center items-center gap-x-4 p-4'
          onSubmit={handleSubmit}>
          <InputsPairContainer>
            <InputContainer>
              <Input label='Nombre medicamento' name='name' handleChange={handleChange} />
            </InputContainer>
            <InputContainer>
              <SelectInput
                values={medTypes}
                label='Tipo de medicina'
                name='indications'
                handleChange={handleChange}
              />
            </InputContainer>
          </InputsPairContainer>
          <InputsPairContainer>
            <InputContainer>
              <InputNumber
                label='Cantidad'
                type='number'
                name='quantity'
                handleChange={handleChange}
                min={0}
                max={20}
              />
            </InputContainer>
            <InputContainer>
              <TimePickerInput
                label='Hora'
                name='time'
                value={values.time}
                setValue={setFieldValue}
              />
            </InputContainer>
          </InputsPairContainer>
          <InputsPairContainer>
            <InputContainer>
              <DatePicker
                label='Inicio'
                name='init_date'
                disablePast
                value={values.init_date}
                setValue={setFieldValue}
              />
            </InputContainer>
            <InputContainer>
              <DatePicker
                label='Fin'
                name='due_date'
                disablePast
                disabled={singleDose}
                value={values.due_date}
                setValue={setFieldValue}
              />
            </InputContainer>
          </InputsPairContainer>
          <CheckBox
            text='Medicamento de única dosis'
            label='is_single_dose'
            name='is_single_dose'
            handleChange={handleCheck}
          />
          <InputsPairContainer>
            <InputContainer>
              <SelectInput
                values={frequency}
                label='dias/hs'
                disabled={singleDose}
                name='frequencySelect'
                handleChange={handleChange}
              />
            </InputContainer>
            <InputContainer>
              <InputNumber
                label='Frecuencia'
                type='number'
                name='frequency'
                disabled={singleDose}
                handleChange={handleChange}
                min={0}
                max={7}
              />
            </InputContainer>
          </InputsPairContainer>
          <button className='btn btn-secondary px-6'>
            {isLoading ? <Spinner /> : 'Guardar'}
          </button>
        </form>
      </div>
    </LocalizationProvider>
  );
};

export default NewMedsForm;
