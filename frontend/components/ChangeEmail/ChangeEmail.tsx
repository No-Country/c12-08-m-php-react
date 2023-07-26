const ChangeEmail = () => {
  return (
    <div className='flex justify-center'>
      <form className='mt-16 max-w-md w-full px-4'>
        <div className='mb-4'>
          <label htmlFor='actualEmail' className='block text-black font-medium mb-1'>
            Email actual
          </label>
          <input
            type='mail'
            id='actualEmail'
            name='actualEmail'
            placeholder='Email actual'
            className='w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='newEmail' className='block text-black font-medium mb-1'>
            Nuevo email
          </label>
          <input
            type='mail'
            id='newEmail'
            name='newEmail'
            placeholder='Nuevo email'
            className='w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='repeatedEmail' className='block text-black font-medium mb-1'>
            Repetir nuevo email
          </label>
          <input
            type='mail'
            id='repeatedEmail'
            name='repeatedEmail'
            placeholder='Repite el nuevo email'
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
export default ChangeEmail;
