'use client';

import { Input, CheckBox } from '@/components';
import { sendEmail } from '@/services/email/email';
import { useFormik } from 'formik';
import Textarea from './Textarea';

const ContactForm = () => {

  const { handleChange, handleSubmit, handleReset } = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
      terms: [],
    },
    onSubmit: values => {
      const { terms, ...data } = values;
      const dataClean = { ...data, terms: !!terms.length, place: 'landing' };
      alert('Mensaje enviado')
      sendEmail(dataClean);
    },

  });



  return (
    <form
    id='contact-form'
      className='mx-auto flex flex-col gap-4 bg-green p-8 rounded-md w-[30rem] '
      onSubmit={handleSubmit} onReset={handleReset}>
      
      <h1 className='font-semibold text-2xl text-center'>¡Contactanos Aqui!</h1>
      <Input
        type='text'
        label='Email'
        name='email'
        // src={emailImg}
        handleChange={handleChange}
      />
      <Input
        type='text'
        label='Name'
        name='name'
        // src={emailImg}
        handleChange={handleChange}
      />
      <Textarea label='mensaje' name='message' handleChange={handleChange} />
      <CheckBox
        text='Acepto los terminos y condiciones'
        name='terms'
        label='terms'
        handleChange={handleChange}
      />
      <button type='submit' className='btn-secondary shadow'>
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
