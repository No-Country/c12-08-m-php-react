'use client';

import { GenericContainer } from '@/components';
import InputNote from '@/components/Inputs/InputNote';

const page = ({ params }: { params: { noteId: string } }) => {
  return (
    <GenericContainer title='Editar Nota' color='yellow' colortitle='black'>
      <InputNote id={params.noteId} />
    </GenericContainer>
  );
};

export default page;
