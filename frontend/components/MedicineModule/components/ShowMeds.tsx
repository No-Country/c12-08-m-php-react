import Link from 'next/link';

const ShowMeds = () => {
  return (
    <Link href='home/meds'>
      <div className='w-full h-12 p-2 border rounded-2xl shadow-lg text-center mb-4 mt-4 bg-white'>
        <p className='text-lg font-semibold font-poppins'>Ver mis medicamentos</p>
      </div>
    </Link>
  );
};

export default ShowMeds;
