const ChangePassword = () => {
  return (
    <div className='flex justify-center'>
      <form className='mt-16 max-w-md w-full px-4'>
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
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='repeatedPassword' className='block text-black font-medium mb-1'>
            Repetir nueva contraseña
          </label>
          <input
            type='text'
            id='repeatedPassword'
            name='repeatedPassword'
            placeholder='Repite la nueva contraseña'
            className='w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500'
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
