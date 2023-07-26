'use client';
import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import InputNote from './components/InputNote';

interface Props {
  id?: string;
}

const initialValues = {
  id: '',
  note: '',
};

const NotesForm = ({ id }: Props) => {
  const [note, setNote] = useState(initialValues);

  useEffect(() => {
    if (id) {
      console.log(`Traer nota: ${id}`);
      setNote({
        id: id,
        note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      });
      console.log(note, id);
    }
  }, [id]);

  const handleSubmit = (values: any) => {
    if (id) {
      console.log(`Editar nota: ${id}`, values);
    } else {
      console.log(`Crear nota`);
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
              name='note'
              value={values.note}
              handleChange={handleChange}
              placeholder='Escriba su nota aquí'
            />
            <button type='submit' className='btn btn-secondary mt-auto   '>
              Guardar
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NotesForm;
