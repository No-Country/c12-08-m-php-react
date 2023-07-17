import AuthHeader from '@/components/AuthHeader/AuthHeader';
import QuestionAlternative from '@/components/QuestionAlternative/QuestionAlternative';

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
    </>
  );
};

export default Register;
