import { AuthFormHeader } from '@/components';

const RegisterLoader = () => {
  return (
    <>
      <AuthFormHeader
        title='Crea una cuenta'
        subtitle='Comienza a tener el control de tu salud'
      />
      <div className='flex flex-col items-center w-full gap-8 md:gap-4'>
        <div className='flex justify-between flex-col md:flex-row gap-8 w-72'>
          <div className='flex-1 h-7 bg-gray-500 animate-pulse'></div>
          <div className='flex-1 h-7 bg-gray-500 animate-pulse'></div>
        </div>
        <div className='w-72 h-7 bg-gray-500 animate-pulse'></div>
        <div className='w-72 h-14 bg-gray-500 animate-pulse'></div>
        <div className='w-72 h-7 bg-gray-500 animate-pulse'></div>
        <div className='w-72 h-7 bg-gray-500 animate-pulse'></div>
        <div className='w-72 h-7 bg-gray-500 animate-pulse'></div>
        <div className='w-72 h-7 bg-gray-500 animate-pulse'></div>
        <button disabled className='w-72 btn-disabled shadow'>
          Iniciar sesión
        </button>
      </div>
    </>
  );
};

export default RegisterLoader;
