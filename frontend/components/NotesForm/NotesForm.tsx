'use client';
import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import InputNote from './components/InputNote';
import { createNote, getNote } from '@/services/note/noteServices';
import { userData } from '@/services/user/userService';

interface Props {
  id?: string;
}

const initialValues = {
  id: '',
  date: '',
  title: '',
  description: '',
};

const NotesForm = ({ id }: Props) => {
  const [note, setNote] = useState(initialValues);
  // TODO:  BORRAR USER CUANDO SE CAMBIE EL BACK
  const [user, setUser] = useState({} as any);

  const getUserData = async () => {
    const { data } = await userData();
    setUser(data);
    console.log(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const getCurrentNote = async () => {
    try {
      const { data } = await getNote(id);
      setNote(data.note);
      console.log(data.note);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getCurrentNote();
      console.log(`Traer nota: ${id}`);
      console.log(note, id);
    }
  }, [id]);

  const handleSubmit = async (values: any) => {
    if (id) {
      console.log(`Editar nota: ${id}`, values);
    } else {
      try {
        const response = await createNote({
          title: values.title,
          description: values.description,
        });
        console.log(response);
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  return (
    <div className='p-5 h-full'>
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
            <button type='submit' className='btn btn-secondary mt-auto'>
              Guardar
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NotesForm;
