import Button from '@/components/Button/Button';
import ConectSocial from '@/components/ConectSocial/ConectSocial';
import FormLayoutAuth from '@/components/FormLayoutAuth/FormLayoutAuth';
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth';
import Input from '@/components/Input/Input';
import QuestionAlternative from '@/components/QuestionAlternative/QuestionAlternative';
import email from '@/public/img/email.png';
import password from '@/public/img/password.png';

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
  return (
    <form className='flex flex-col gap-8 md:gap-4'>
      <Input
        src={email}
        label='email'
        type='email'
        pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
      />
      <Input
        src={password}
        label='password'
        type='password'
        pattern='^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
      />
      <Button bgColor='blue' color='white' shadow>
        iniciar sesión
      </Button>
    </form>
  );
};
