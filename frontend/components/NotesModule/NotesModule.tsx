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

const NotesModule = ({ small }: Props) => {
  const [notes, setNotes] = useState<NoteData[]>([]);
  const router = useRouter();

  const getNoteList = async () => {
    try {
      const { notes } = await getNotes();
      setNotes(notes);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNoteList();
  }, []);

  const lastNote: NoteData = notes[notes.length - 1];

  const handlerCreateNote = () => {
    router.push('/home/notes/create');
  };

  return (
    <div
      className={`relative rounded-xl p-3 h-full object-none ${
        small && ' flex flex-col bg-yellow p-0 m-0 static '
      }`}>
      {small ? (
        <div
          className='w-full h-full cursor-pointer flex flex-col justify-center items-center'
          onClick={() => {
            router.push('/home/notes');
          }}>
          <h2 className=' text-center font-bold'>Notas</h2>
          {lastNote ? (
            <NItem
              key={lastNote.id}
              id={lastNote.id}
              title={lastNote.title}
              description={lastNote.description}
              small
            />
          ) : (
            <p>No hay notas</p>
          )}
        </div>
      ) : (
        <div
          className={`grid content-start grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto h-full py-5 pr-5 `}>
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
        className={` ${small ? 'hidden' : 'absolute bottom-5 right-5 cursor-pointer'}`}
      />
    </div>
  );
};

export default NotesModule;
