import CardItem from '../CardItem/CardItem';

const mock = [
  {
    id: 1,
    name: 'Plan 1',
  },
  {
    id: 2,
    name: 'Plan 2',
  },
  {
    id: 3,
    name: 'Plan 4',
  },
  {
    id: 4,
    name: 'Plan 5',
  },
  {
    id: 5,
    name: 'Plan 5',
  },
  {
    id: 6,
    name: 'Plan 6',
  },
];

// TODO: Recibe listado desde el dashboard
const Plans = () => {
  return (
    <div className=' rounded-xl m-2 p-2 py-4 md:bg-lightGreen'>
      <p className=' text-3xl text-center py-2 font-bold'>Mis Planes</p>

      <div className='md:max-h-[250px] overflow-y-auto'>
        {mock.map(item => (
          <CardItem key={item.id} id={item.id} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
