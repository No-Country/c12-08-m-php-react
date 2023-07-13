import Button from '@/components/Button/Button';
import ConectSocial from '@/components/ConectSocial/ConectSocial';
import FormLayoutAuth from '@/components/FormLayoutAuth/FormLayoutAuth';
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth';
import Input from '@/components/Input/Input';
import QuestionAlternative from '@/components/QuestionAlternative/QuestionAlternative';
import email from '@/public/img/email.png';
import password from '@/public/img/password.png';
import { login } from '@/services/auth/auth';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';

const Login = () => {
  return (
    <FormLayoutAuth>
      <HeaderAuth>
        <span>¡Bienvenido!</span>
        <span>Inicia sesión ahora</span>
      </HeaderAuth>
      <Formlogin />
      <QuestionAlternative
        question={'¿No tienes una cuenta?'}
        callAction={'Unete ahora'}
        link='/register'
      />
      <ConectSocial />
    </FormLayoutAuth>
  );
};
export default Login;

const Formlogin = () => {
  const router = useRouter();

  const handleS = async (values: any) => {
    try {
      const { data } = await login(values);
      if (data) router.push('/dashboard');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
        pattern='^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
        handleChange={handleChange}
      />
      <Input
        src={password}
        label='password'
        type='password'
        // pattern='^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
        handleChange={handleChange}
      />
      <Button bgColor='blue' color='white' shadow>
        iniciar sesión
      </Button>
    </form>
  );
};
