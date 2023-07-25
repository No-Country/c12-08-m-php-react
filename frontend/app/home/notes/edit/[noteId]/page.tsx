import NotesForm from '@/components/NotesForm/NotesForm';

const page = ({ params }: { params: { noteId: string } }) => {
  return <NotesForm id={params.noteId} />;
};

export default page;
