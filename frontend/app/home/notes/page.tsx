import { GenericContainer } from '@/components';
import Notes from '@/components/NotesModule/Notes';

const page = () => {
  return (
    <GenericContainer title='Mis notas' color='yellow' colortitle='black'>
      <Notes />
    </GenericContainer>
  );
};

export default page;
