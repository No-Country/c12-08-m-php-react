import NItem from './components/NItem';

const Notes = () => {
  return (
    <div className='flex flex-col items-center justify-center rounded-xl p-2 py-4 md:bg-lightGreen h-screen md:h-full md:w-full '>
      <p className=' text-3xl text-center py-2 font-bold'>Notas</p>

      <div
        className=' grid grid-cols-2 gap-4 overflow-y-auto justify-around 
                        md:flex md:overflow-x-auto md:overflow-y-hidden md:w-full '>
        <NItem />
        <NItem />
        <NItem />
        <NItem />
        <NItem />
        <NItem />
        <NItem />
        <NItem />
        <NItem />
        <NItem />
      </div>
    </div>
  );
};

export default Notes;
