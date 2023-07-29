import { Deactivation, GenericContainer } from '@/components';

const Account = () => {
  return (
    <GenericContainer
      title='Desactivar cuenta'
      color='lightGreen'
      colortitle='black'
      href='/home/account'>
      <Deactivation />
    </GenericContainer>
  );
};

export default Account;
