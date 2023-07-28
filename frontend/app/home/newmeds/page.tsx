import { GenericContainer } from '@/components';
import NewMedsForm from './NewMedsForm';

const page = () => {
  return (
    <GenericContainer title='Nueva Medicina' color='green' colortitle='black'>
      <NewMedsForm />
    </GenericContainer>
  );
};

export default page;
