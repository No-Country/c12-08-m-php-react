import userDefault from '@/public/svg/userDefault.svg';
import Image from 'next/image';
import UploadButton from './components/UploadButton';

const ProfileSettings = () => {
  return (
    <div className='flex flex-col items-center justify-center font-poppins'>
      <div className='relative w-32 h-32 rounded-full bg-white overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full border-4 border-white'>
          <Image src={userDefault} width={120} height={120} alt='medicine icon' />
        </div>
      </div>
      <UploadButton />
      <form className='mt-8 max-w-md w-full px-4'>
        <div className='flex flex-col mb-4 sm:flex-row sm:mb-0'>
          <div className='mb-4 sm:mr-2 sm:w-1/2'>
            <label htmlFor='firstName' className='block text-black font-medium mb-1'>
              Nombre
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='Ingrese su nombre'
              className='w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='w-full sm:ml-2'>
            <label htmlFor='lastName' className='block text-black font-medium mb-1'>
              Apellido
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Ingrese su apellido'
              className='w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500'
            />
          </div>
        </div>
        <div className='flex flex-col mb-4 sm:flex-row sm:mb-0'>
          <div className='mb-4 sm:mr-2 sm:w-1/2'>
            <label htmlFor='nationality' className='block text-black font-medium mb-1'>
              Nacionalidad
            </label>
            <input
              type='text'
              id='nationality'
              name='nationality'
              placeholder='Ingrese su nacionalidad'
              className='w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='w-full sm:ml-2'>
            <label htmlFor='birthDate' className='block text-black font-medium mb-1'>
              Fecha de nacimiento
            </label>
            <input
              type='date'
              id='birthDate'
              name='birthDate'
              className='w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500'
            />
          </div>
        </div>
        <div className='mb-4'>
          <label htmlFor='gender' className='block text-black font-medium mb-1'>
            Género
          </label>
          <select
            id='gender'
            name='gender'
            className='w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500'>
            <option value=''>Seleccione género</option>
            <option value='masculino'>Masculino</option>
            <option value='femenino'>Femenino</option>
            <option value='no-responder'>Prefiero no responder</option>
          </select>
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

export default ProfileSettings;
