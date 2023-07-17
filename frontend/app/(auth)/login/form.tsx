'use client';

import { Input } from '@/components';
import email from '@/public/img/email.png';
import password from '@/public/img/password.png';
import { login } from '@/services/auth/auth';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';

const FormLogin = () => {
  const router = useRouter();

  const handleS = async (values: any) => {
    try {
      const { data } = await login(values);
      if (data) router.push('/dashboard');
      console.log(data);
      localStorage.setItem('token', data.access_token);
    } catch (error) {}
  };

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleS,
  });

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-8 md:gap-4'>
      <Input
        src={email}
        label='email'
        type='email'
        // pattern='^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
        handleChange={handleChange}
      />
      <Input
        src={password}
        label='password'
        type='password'
        // pattern='^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
        handleChange={handleChange}
      />
      <button className='btn-secondary shadow'>Iniciar sesión</button>
    </form>
  );
};

export default FormLogin;
