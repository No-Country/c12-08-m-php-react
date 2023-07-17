import { AuthHeader, QuestionAlternative } from '@/components';
import FormLogin from './form';

const Login = () => {
  return (
    <>
      <AuthHeader title='¡Bienvenido!' subtitle='Inicia sesión ahora' />
      <FormLogin />
      <QuestionAlternative
        question='¿No tienes una cuenta?'
        callAction='Unete ahora'
        link='/register'
      />
    </>
  );
};
export default Login;
