'use client';

import {
  NewDatePicker,
  NewEmailInput,
  NewInput,
  NewPasswordInput,
  Spinner,
} from '@/components';
import phone from '@/public/svg/phone.svg';
import userIcon from '@/public/svg/user.svg';
import { register } from '@/services/auth/register';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import es from 'date-fns/locale/es';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import * as Yup from 'yup';

export interface RegisterFormData {
  name: string;
  surname: string;
  username: string;
  birth: Date;
  phone: string;
  email: string;
  password: string;
  confirm_password: string;
}

const FormRegister = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues: RegisterFormData = {
    name: '',
    surname: '',
    username: '',
    birth: new Date(),
    phone: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const { confirm_password, ...registerValues } = values;
      await register(registerValues);
      // TODO: once the backend makes the necessary changes to send the token in cookies, this setCookie function should be removed
      router.push('/home');
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      if (error.response.status === 400) {
        setStatus(error.response.data.message);
        return;
      }
      setStatus('Algo salió mal');
    }
  };

  const {
    handleSubmit,
    handleChange,
    isSubmitting,
    setFieldValue,
    status,
    setStatus,
    values,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Debe tener al menos 8 caracteres')
        .max(50, 'Como máximo 50 caracteres'),
      surnname: Yup.string()
        .min(2, 'Debe tener al menos 8 caracteres')
        .max(50, 'Como máximo 50 caracteres'),
      phone: Yup.number().typeError('Deben ser solo números'),
      email: Yup.string().email('Invalid mail address').required('Required'),
      password: Yup.string()
        .min(8, 'Debe tener al menos 8 caracteres')
        .max(20, 'Como máximo 20 caracteres')
        .required('Requerido'),
      confirm_password: Yup.string().oneOf(
        [Yup.ref('password')],
        'Las contraseñas deben coincidir'
      ),
    }),
  });

  const handleDateChange = (d: Date | null) => {
    if (d === null) return setFieldValue('birth', new Date());
    setFieldValue('birth', d);
  };

  const isError =
    Object.keys(errors).length > 0 &&
    Object.keys(touched).length === Object.keys(initialValues).length;

  const customHandleBlur = (e: FocusEvent) => {
    setStatus(null);
    handleBlur(e);
  };

  const customHandleChange = (e: ChangeEvent) => {
    setStatus(null);
    handleChange(e);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
      <form
        className='flex flex-col items-center w-full md:px-11 gap-8 md:gap-4'
        onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row gap-8 justify-between'>
          <NewInput
            error={errors.name}
            touched={touched.name}
            onBlur={customHandleBlur}
            value={values.name}
            handleChange={customHandleChange}
            src={userIcon}
            type='text'
            label='nombre'
            name='name'
            size='sm'
          />
          <NewInput
            error={errors.surname}
            touched={touched.surname}
            onBlur={customHandleBlur}
            value={values.surname}
            handleChange={customHandleChange}
            src={userIcon}
            type='text'
            label='apellido'
            name='surname'
            size='sm'
          />
        </div>
        <NewInput
          error={errors.username}
          touched={touched.username}
          onBlur={customHandleBlur}
          value={values.username}
          handleChange={customHandleChange}
          src={userIcon}
          type='text'
          label='nombre de usuario'
          name='username'
        />
        <NewDatePicker handleChange={handleDateChange} value={values.birth} />
        <NewInput
          error={errors.phone}
          touched={touched.phone}
          onBlur={customHandleBlur}
          value={values.phone}
          handleChange={customHandleChange}
          src={phone}
          type='tel'
          label='teléfono'
          name='phone'
        />
        <NewEmailInput
          error={errors.email}
          touched={touched.email}
          onBlur={customHandleBlur}
          value={values.email}
          handleChange={customHandleChange}
          label='email'
          name='email'
        />
        <NewPasswordInput
          error={errors.password}
          touched={touched.password}
          onBlur={customHandleBlur}
          value={values.password}
          handleChange={customHandleChange}
          enableToggler={true}
          label='contraseña'
          name='password'
        />
        <NewPasswordInput
          error={errors.confirm_password}
          touched={touched.confirm_password}
          onBlur={customHandleBlur}
          value={values.confirm_password}
          handleChange={customHandleChange}
          label='confirme contraseña'
          name='confirm_password'
        />
        {status ? <div className='text-red-500'>{status}</div> : null}
        <button
          disabled={isSubmitting || isError}
          className={`${!isError ? 'btn-secondary' : 'btn-error'} w-72 shadow ${
            isLoading ? 'hover:scale-100' : ''
          }`}>
          {isLoading ? <Spinner /> : 'Registrarse'}
        </button>
      </form>
    </LocalizationProvider>
  );
};

export default FormRegister;
