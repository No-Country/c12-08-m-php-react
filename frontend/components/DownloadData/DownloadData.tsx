'use client';
import { useState } from 'react';

const DownloadData = () => {
  const [lastMonthSelected, setLastMonthSelected] = useState(false);
  const [allSelected, setAllSelected] = useState(false);

  const handleLastMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setAllSelected(false);
      setLastMonthSelected(true);
    } else {
      setLastMonthSelected(false);
    }
  };

  const handleAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setLastMonthSelected(false);
      setAllSelected(true);
    } else {
      setAllSelected(false);
    }
  };

  return (
    <div className='flex flex-col items-center mt-12 h-screen'>
      <span className='mb-4 font-semibold underline text-xl text-center'>
        Descarga todos tus datos, historial y notas en tu almacenamiento.
      </span>
      <form action='get' className='flex flex-col items-start mt-10'>
        <label className='mb-2'>
          <input
            type='checkbox'
            checked={lastMonthSelected}
            onChange={handleLastMonthChange}
            className='mr-2 w-5 h-5'
          />
          <span className='font-base text-xl'>Último mes</span>
        </label>
        <label className='mb-2'>
          <input
            type='checkbox'
            checked={allSelected}
            onChange={handleAllChange}
            className='mr-2 w-5 h-5'
          />
          <span className='font-base text-xl'>Todos</span>
        </label>
        <div className='mt-10'>
          <button
            type='submit'
            className='w-32 bg-blue text-white rounded-2xl py-2 font-medium hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-xl'>
            Descargar
          </button>
        </div>
      </form>
    </div>
  );
};

export default DownloadData;
