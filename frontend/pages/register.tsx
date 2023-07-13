import Button from '@/components/Button/Button';
import ConectSocial from '@/components/ConectSocial/ConectSocial';
import FormLayoutAuth from '@/components/FormLayoutAuth/FormLayoutAuth';
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth';
import Input from '@/components/Input/Input';
import QuestionAlternative from '@/components/QuestionAlternative/QuestionAlternative';
import email from '@/public/img/email.png';
import password from '@/public/img/password.png';
import phone from '@/public/svg/phone.svg';
import userIcon from '@/public/svg/user.svg';
import { useFormik } from 'formik';

const register = () => {
  return (
    <FormLayoutAuth>
      <HeaderAuth>
        <span>Crea una cuenta</span>
        <span>Comienza a tener el control de tu salud</span>
      </HeaderAuth>
      <FormRegister />
      <QuestionAlternative
        question={'¿Ya tienes una cuenta?'}
        callAction={'Inicia sesión ahora'}
        link='/login'
      />
      <ConectSocial />
    </FormLayoutAuth>
  );
};

export default register;

const FormRegister = () => {
  const { handleChange } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      password: '',
      confirm: '',
    },
    onSubmit: () => {},
  });
  return (
    <form className='flex flex-col gap-8 md:gap-4'>
      <div className='flex flex-col md:flex-row gap-8 justify-between'>
        <Input
          handleChange={handleChange}
          src={userIcon}
          type='text'
          label='name'
          size='sm'
        />
        <Input
          handleChange={handleChange}
          src={userIcon}
          type='text'
          label='surname'
          size='sm'
        />
      </div>
      <Input handleChange={handleChange} src={phone} type='tel' label='phone' />
      <Input handleChange={handleChange} src={email} type='email' label='email' />
      <Input
        handleChange={handleChange}
        src={password}
        type='password'
        label='password'
      />
      <Input
        handleChange={handleChange}
        src={password}
        type='password'
        label='Confirm password'
      />
      <Button bgColor='blue' color='white' shadow>
        Crear cuenta
      </Button>
    </form>
  );
};
