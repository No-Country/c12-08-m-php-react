import { ChangePassword, GenericContainer } from '@/components';

const Account = () => {
  return (
    <GenericContainer
      title='Cambiar contraseña'
      color='lightGreen'
      colortitle='black'
      href='/home/account'>
      <ChangePassword />
    </GenericContainer>
  );
};

export default Account;
