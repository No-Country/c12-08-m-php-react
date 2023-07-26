const Deactivation = () => {
  return (
    <div className='flex flex-col items-center mt-12 h-screen'>
      <form action='get' className='flex flex-col items-center mt-10'>
        <div className='mb-4 mx-5'>
          <span className='mb-4 font-semibold text-xl text-center'>
            ¿Tienes un motivo particular por el cual de desactivar de tu cuenta?
          </span>
          <label htmlFor='reason' className='block text-black font-medium mb-1'></label>
          <input
            type='text'
            id='reason'
            name='reason'
            placeholder='Haznos saber tu motivo'
            className='w-full border mt-2 border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500'
          />
        </div>
        <label className='mb-2'>
          <input type='checkbox' className='mr-2 w-5 h-5' />
          <span className='font-base text-xl'>Temporalmente</span>
        </label>
        <label className='mb-2'>
          <input type='checkbox' className='mr-2 w-5 h-5' />
          <span className='font-base text-xl'>Definitivamente</span>
        </label>
        <div className='mt-10'>
          <button
            type='submit'
            className='w-28 bg-blue text-white rounded-2xl py-2 font-medium hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-xl'>
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Deactivation;
