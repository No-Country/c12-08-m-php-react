'use client';
import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import InputNote from './components/InputNote';
import { createNote, getNote, updateNote } from '@/services/note/noteServices';
import { NoteData } from '@/types/note';
import { useRouter } from 'next/navigation';
import { alert } from '@/components/Alert/Alert';

interface Props {
  id?: string;
}

const initialValues: NoteData = {
  id: 0,
  title: '',
  description: '',
};

const NotesForm = ({ id }: Props) => {
  const [note, setNote] = useState<NoteData>(initialValues);
  const router = useRouter();
  const getCurrentNote = async () => {
    if (id) {
      try {
        const { data } = await getNote(id);
        setNote(data.note);
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getCurrentNote();
  }, [id]);

  const handleSubmit = async (values: NoteData) => {
    // TODO: Alertas?
    try {
      const response = id
        ? await updateNote(values.id, values)
        : await createNote(values);
      if (response.message === 'Note created' || response.message === 'Note updated') {
        alert('Nota guardada', 'Nota guardada exitosamente', 'success');
        router.push('/home/notes');
      }
    } catch (error: any) {
      console.log(error);
      alert('Error', 'Algo salió mal', 'error');
    }
  };

  return (
    <div className='p-5 h-full overflow-x-hidden'>
      <Formik
        initialValues={note}
        onSubmit={values => {
          handleSubmit(values);
        }}
        enableReinitialize>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className=' flex flex-col h-full'>
            <InputNote
              titleName='title'
              titleValue={values.title}
              titlePlaceholder='Título'
              descName='description'
              descValue={values.description}
              descPlaceholder='Escriba su nota aquí'
              handleChange={handleChange}
            />
            <button
              type='submit'
              className='btn btn-secondary mt-auto w-fit p-5 self-center md:self-end '>
              Guardar
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NotesForm;
