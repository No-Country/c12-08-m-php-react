'use client';
import { useState } from 'react';

const ChangeEmail = () => {
  const [emails, setEmails] = useState({
    actualEmail: '',
    newEmail: '',
    repeatedEmail: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmails(prevEmails => ({ ...prevEmails, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emails.actualEmail === emails.newEmail) {
      alert(
        'El correo electrónico actual y el nuevo correo electrónico no pueden ser iguales'
      );
      return;
    }

    if (emails.newEmail !== emails.repeatedEmail) {
      alert(
        'Verifique que los campos "Nuevo email" y "Repetir nuevo email" sean iguales'
      );
      return;
    }

    console.log('Correos electrónicos válidos, enviando formulario...');
  };

  return (
    <div className='flex justify-center'>
      <form className='mt-16 max-w-md w-full px-4' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='actualEmail' className='block text-black font-medium mb-1'>
            Email actual
          </label>
          <input
            type='email'
            id='actualEmail'
            name='actualEmail'
            placeholder='Email actual'
            className='w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500'
            value={emails.actualEmail}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='newEmail' className='block text-black font-medium mb-1'>
            Nuevo email
          </label>
          <input
            type='email'
            id='newEmail'
            name='newEmail'
            placeholder='Nuevo email'
            className='w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500'
            value={emails.newEmail}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='repeatedEmail' className='block text-black font-medium mb-1'>
            Repetir nuevo email
          </label>
          <input
            type='email'
            id='repeatedEmail'
            name='repeatedEmail'
            placeholder='Repite el nuevo email'
            className='w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500'
            value={emails.repeatedEmail}
            onChange={handleChange}
          />
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='w-24 bg-blue text-white rounded-2xl py-2 font-medium hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeEmail;
