'use client';

import { Input } from '@/components';
import DatePickerCustom from '@/components/Inputs/DatePicker';
import InputPassword from '@/components/Inputs/InputPassword';
import { register } from '@/services/auth/auth';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import es from 'date-fns/locale/es';

import { useFormik } from 'formik';

const FormRegister = () => {
  const { handleChange, handleSubmit, setFieldValue, values } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      username: '',
      birth: null,
      phone: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    onSubmit: async () => {
      const response = await register(values);
      console.log(response);
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
      <form className='flex flex-col gap-8 md:gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row gap-8 justify-between'>
          <Input
            handleChange={handleChange}
            // src={userIcon}
            // type='text'
            label='name'
            name='name'
            // size='sm'
          />
          <Input
            handleChange={handleChange}
            // src={userIcon}
            type='text'
            label='surname'
            name='surname'
            // size='sm'
          />
        </div>
        <Input
          handleChange={handleChange}
          // src={userIcon}
          // type='text'
          label='username'
          name='username'
        />
        <DatePickerCustom
          label='Fecha de nacimiento'
          name='birth'
          disableFuture
          setValue={setFieldValue}
          value={values.birth}
        />
        <Input
          handleChange={handleChange}
          // src={phone}
          type='tel'
          label='phone'
          name='phone'
        />
        <Input
          handleChange={handleChange}
          // src={email}
          type='email'
          label='email'
          name='email'
        />
        <InputPassword
          handleChange={handleChange}
          // src={password}
          // type='password'
          label='password'
          name='password'
        />
        <InputPassword
          handleChange={handleChange}
          // src={password}
          // type='password'
          label='confirm password'
          name='confirm_password'
        />
        <button className='btn-secondary shadow'>Crear cuenta</button>
      </form>
    </LocalizationProvider>
  );
};

export default FormRegister;
