import Button from '@/components/Button/Button';
import ConectSocial from '@/components/ConectSocial/ConectSocial';
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth';
import Input from '@/components/Input/Input';
import QuestionAlternative from '@/components/QuestionAlternative/QuestionAlternative';
import email from '@/public/img/email.png';
import password from '@/public/img/password.png';

const Login = () => {
  return (
    <div className='flex flex-col gap-8 py-4 h-screen justify-evenly md:items-center md:mx-auto md:w-[30rem] md:h-[28rem] md:gap-4 md:border md:bg-green md:rounded-[20px]'>
      <HeaderAuth />
      <Formlogin />
      <QuestionAlternative
        question={'¿No tienes una cuenta?'}
        callAction={'Unete ahora'}
      />
      <ConectSocial />
    </div>
  );
};

export default Login;

const Formlogin = () => {
  return (
    <form className='flex flex-col gap-8 md:gap-4'>
      <Input
        src={email}
        label='Correo'
        type='email'
        pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
      />
      <Input
        src={password}
        label='Contraseña'
        type='password'
        pattern='^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
      />
      <Button bgColor='blue' color='white' shadow>
        iniciar sesión
      </Button>
    </form>
  );
};
