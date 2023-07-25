import { GenericContainer } from "@/components"
import NotesForm from "@/components/NotesForm/NotesForm"

const Page = () => {
  return (
    <GenericContainer title='Editar Nota' color='yellow' colortitle='black'>
      <NotesForm />
    </GenericContainer>
  );
};

export default Page;
