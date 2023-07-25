'use client';
import { createPlans, getPlans } from '@/services/plans/plans';
import { getCookie } from 'react-use-cookie';

const page = () => {
  const get = async () => {
    console.log(await getPlans(getCookie('token')));
  };

  const post = async () => {
    const data = {
      name: 'plan 3',
      state: 'string',
      init_date: '2021-10-10',
      due_date: '2025-10-10',
      lifetime: false,
    };

    console.log(await createPlans(getCookie('token'), data));
  };

  return (
    <div className='flex gap-4 p-4'>
      <button className='btn-secondary' onClick={() => get()}>
        get
      </button>
      <button className='btn-secondary' onClick={() => post()}>
        post
      </button>
    </div>
  );
};

export default page;
