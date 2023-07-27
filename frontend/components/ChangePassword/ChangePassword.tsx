'use client';
import { useState } from 'react';

const ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    actualPassword: '',
    newPassword: '',
    repeatedPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords(prevPasswords => ({ ...prevPasswords, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (passwords.newPassword !== passwords.repeatedPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Contraseñas válidas, enviando formulario...');
  };

  return (
    <div className='flex justify-center'>
      <form className='mt-16 max-w-md w-full px-4' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='actualPassword' className='block text-black font-medium mb-1'>
            Contraseña actual
          </label>
          <input
            type='password'
            id='actualPassword'
            name='actualPassword'
            placeholder='Contraseña actual'
            className='w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500'
            value={passwords.actualPassword}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='newPassword' className='block text-black font-medium mb-1'>
            Nueva contraseña
          </label>
          <input
            type='password'
            id='newPassword'
            name='newPassword'
            placeholder='Nueva contraseña'
            className='w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500'
            value={passwords.newPassword}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='repeatedPassword' className='block text-black font-medium mb-1'>
            Repetir nueva contraseña
          </label>
          <input
            type='password'
            id='repeatedPassword'
            name='repeatedPassword'
            placeholder='Repite la nueva contraseña'
            className='w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500'
            value={passwords.repeatedPassword}
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

export default ChangePassword;
