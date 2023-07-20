'use client'
import { AuthHeader, QuestionAlternative } from '@/components';

import FormRegister from './form';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


const Register = () => {
  return (
    <>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
      </ MuiPickersUtilsProvider >
    </>
  );
};

export default Register;
