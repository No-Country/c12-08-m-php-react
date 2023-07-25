import { AccountSettings, GenericContainer } from '@/components';

const Account = () => {
  return (
    <GenericContainer title='Configuración' color='lightGreen' colortitle='black'>
      <AccountSettings />
    </GenericContainer>
  );
};

export default Account;
