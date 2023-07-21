import { AuthHeader } from '@/components';

const LoginLoader = () => {
  return (
    <>
      <AuthHeader title='¡Bienvenido!' subtitle='Inicia sesión ahora' />
      <div className='flex flex-col items-center w-full gap-8 md:gap-4'>
        <div className='h-7 bg-gray-500 animate-pulse w-72'></div>
        <div className='h-7 bg-gray-500 animate-pulse w-72'></div>
        <button disabled className='w-72 btn-disabled shadow'>
          Iniciar sesión
        </button>
      </div>
    </>
  );
};

export default LoginLoader;
