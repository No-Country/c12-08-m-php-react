'use client';
import Image from 'next/image';
import NItem from './components/NItem';
import { useRouter } from 'next/navigation';

const mock = [
  {
    id: 1,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 4,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 6,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 7,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 8,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

interface Props {
  small?: boolean;
}

const Notes = ({ small }: Props) => {
  const router = useRouter();

  const lastNote = mock[mock.length - 1];

  const handlerCreateNote = () => {
    router.push('/home/notes/create');
  };

  return (
    <div
      className={`relative rounded-xl p-5 pr-0  h-full object-none ${
        small && ' flex flex-col bg-yellow'
      }`}>
      {small ? (
        <div className=' w-full '>
          <NItem
            key={lastNote.id}
            id={lastNote.id}
            description={lastNote.description}
            small
          />
        </div>
      ) : (
        <div
          className={`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto h-full py-5 pr-5 `}>
          {mock.map(item => (
            <NItem key={item.id} id={item.id} description={item.description} />
          ))}
        </div>
      )}
      <Image
        src='/svg/btn-add.svg'
        width={35}
        height={35}
        alt='Add Note'
        onClick={handlerCreateNote}
        className={` ${
          small
            ? 'static self-end py-2 mt-auto'
            : 'absolute bottom-5 right-5 cursor-pointer'
        }`}
      />
    </div>
  );
};

export default Notes;