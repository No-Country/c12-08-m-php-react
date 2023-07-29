'use client';

import { CheckBox, Input } from '@/components';
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
      alert('Mensaje enviado');
      sendEmail(dataClean);
    },
  });

  return (
    <form
      id='contact-form'
      className='flex flex-col gap-4 bg-green p-8 rounded-md w-auto sm:w-[30rem] mx-2'
      onSubmit={handleSubmit}
      onReset={handleReset}>
      <h1 className='font-semibold text-2xl text-center'>¡Contactanos Aquí!</h1>
      <Input type='text' label='Email' name='email' handleChange={handleChange} />
      <Input type='text' label='Nombre' name='name' handleChange={handleChange} />
      <Textarea label='Mensaje' name='message' handleChange={handleChange} />
      <CheckBox
        text='Acepto los términos y condiciones'
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
