'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import NItem from './components/NItem';
import { getNotes } from '@/services/note/noteServices';
import { NoteData } from '@/types/note';

interface Props {
  small?: boolean;
}

const Notes = ({ small }: Props) => {
  const [notes, setNotes] = useState<NoteData[]>([]);
  const router = useRouter();

  const getNoteList = async () => {
    try {
      const { data } = await getNotes();
      setNotes(data.notes);
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNoteList();
  }, []);

  const lastNote = notes[notes.length - 1];

  const handlerCreateNote = () => {
    router.push('/home/notes/create');
  };

  return (
    <div
      className={`relative rounded-xl p-5 pr-0  h-full object-none ${
        small && ' flex flex-col bg-yellow'
      }`}>
      {small ? (
        lastNote ? (
          <div className=' w-full '>
            <NItem
              key={lastNote.id}
              id={lastNote.id}
              description={lastNote.description}
              small
            />
          </div>
        ) : (
          <p>No hay notas</p>
        )
      ) : (
        <div
          className={`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto h-full py-5 pr-5 `}>
          {notes.length ? (
            notes.map(item => (
              <NItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
              />
            ))
          ) : (
            <p>No hay notas</p>
          )}
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
