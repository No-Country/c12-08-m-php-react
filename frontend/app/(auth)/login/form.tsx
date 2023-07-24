'use client';

import { NewEmailInput, NewPasswordInput, Spinner } from '@/components';
import { login } from '@/services/auth/auth';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { setCookie } from 'react-use-cookie';
import * as Yup from 'yup';

interface FormData {
  email: string;
  password: string;
}

const FormLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (values: FormData) => {
    setIsLoading(true);
    try {
      const { data } = await login(values);
      setIsLoading(false);
      // TODO: once the backend makes the necessary changes to send the token in cookies, this setCookie function should be removed
      setCookie('token', data.access_token, { path: '/', days: 7 });
      router.push('/home');
    } catch (error: any) {
      setIsLoading(false);
      if (error.response.status === 400) {
        setFieldValue('password', '');
        setStatus('Credenciales incorrectas');
      }
      setStatus('Algo salió mal');
    }
  };

  const initialValues = {
    email: '',
    password: '',
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
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid mail address').required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit,
  });

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
    <form onSubmit={handleSubmit} className='flex flex-col items-center gap-8 md:gap-12'>
      <NewEmailInput
        label='email'
        name='email'
        value={values.email}
        handleChange={customHandleChange}
        onBlur={customHandleBlur}
        error={errors.email}
      />
      <NewPasswordInput
        label='contraseña'
        name='password'
        value={values.password}
        enableToggler={true}
        handleChange={customHandleChange}
        onBlur={customHandleBlur}
        error={errors.password}
      />
      {status ? <div className='text-red-500'>Credenciales incorrectas</div> : null}
      <button
        disabled={isSubmitting || isError}
        className={`${!isError ? 'btn-secondary' : 'btn-error'} w-72 shadow ${
          isLoading ? 'hover:scale-100' : ''
        }`}>
        {isLoading ? <Spinner /> : 'Iniciar Sesión'}
      </button>
    </form>
  );
};

export default FormLogin;
