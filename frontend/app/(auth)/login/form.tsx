'use client';

import { NewEmailInput, NewPasswordInput, Spinner } from '@/components';
import { login } from '@/services/auth/login';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import * as Yup from 'yup';
import { setCookie } from 'react-use-cookie';
export interface LoginFormData {
  email: string;
  password: string;
}

const FormLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (values: LoginFormData) => {
    setIsLoading(true);
    try {
      const { data } = await login(values);
      console.log(data);
      setCookie('jwt_token', data.access_token, { path: '/', days: 7 });
      router.push('/home');
    } catch (error: any) {
      setIsLoading(false);
      if (error.response.status === 400) {
        setFieldValue('password', '');
        setStatus('Credenciales incorrectas');
        return;
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
        .min(8, 'Must have at least 8 characters')
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
        touched={touched.email}
      />
      <NewPasswordInput
        label='contraseña'
        name='password'
        value={values.password}
        enableToggler={true}
        handleChange={customHandleChange}
        onBlur={customHandleBlur}
        error={errors.password}
        touched={touched.password}
      />
      {status ? <div className='text-red-500'>Credenciales incorrectas</div> : null}
      <button
        disabled={isSubmitting || isError || isLoading}
        className={`${!isError ? 'btn-secondary' : 'btn-error'} w-72 shadow ${
          isLoading ? 'hover:scale-100' : ''
        }`}>
        {isLoading ? <Spinner /> : 'Iniciar Sesión'}
      </button>
    </form>
  );
};

export default FormLogin;
