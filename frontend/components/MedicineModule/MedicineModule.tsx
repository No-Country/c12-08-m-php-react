import AddMeds from './components/AddMeds';
import ShowMeds from './components/ShowMeds';

const MedicineModule = () => {
  return (
    <div className='h-full w-full'>
      <h1 className='font-semibold text-xl ml-2 mt-1'>Mis medicamentos</h1>
      <div className='mx-5'>
        <ShowMeds />
        <AddMeds />
      </div>
    </div>
  );
};

export default MedicineModule;
