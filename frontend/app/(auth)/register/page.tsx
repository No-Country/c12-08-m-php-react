import { AuthHeader, ConectSocial, QuestionAlternative } from '@/components';

import FormRegister from './form';

const Register = () => {
  return (
    <>
      <AuthHeader
        title='Crea una cuenta'
        subtitle='Comienza a tener el control de tu salud'
      />
      <FormRegister />
      <QuestionAlternative
        question='¿Ya tienes una cuenta?'
        callAction='Inicia sesión ahora'
        link='/login'
      />
      <ConectSocial />
    </>
  );
};

export default Register;
