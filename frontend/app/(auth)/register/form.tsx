import { Input } from '@/components';
import DatePickerCustom from '@/components/Inputs/DatePicker';
import email from '@/public/img/email.png';
import password from '@/public/img/password.png';
import phone from '@/public/svg/phone.svg';
import userIcon from '@/public/svg/user.svg';
import { register } from '@/services/auth/auth';

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
    <form className='flex flex-col gap-8 md:gap-4' onSubmit={handleSubmit}>
      <div className='flex flex-col md:flex-row gap-8 justify-between'>
        <Input
          handleChange={handleChange}
          src={userIcon}
          type='text'
          label='name'
          name='name'
          size='sm'
        />
        <Input
          handleChange={handleChange}
          src={userIcon}
          type='text'
          label='surname'
          name='surname'
          size='sm'
        />
      </div>
      <Input
        handleChange={handleChange}
        src={userIcon}
        type='text'
        label='username'
        name='username'
      />
      <DatePickerCustom setValue={setFieldValue} value={values.birth} />
      <Input
        handleChange={handleChange}
        src={phone}
        type='tel'
        label='phone'
        name='phone'
      />
      <Input
        handleChange={handleChange}
        src={email}
        type='email'
        label='email'
        name='email'
      />
      <Input
        handleChange={handleChange}
        src={password}
        type='password'
        label='password'
        name='password'
      />
      <Input
        handleChange={handleChange}
        src={password}
        type='password'
        label='confirm password'
        name='confirm_password'
      />
      <button className='btn-secondary shadow'>Crear cuenta</button>
    </form>
  );
};

export default FormRegister;
