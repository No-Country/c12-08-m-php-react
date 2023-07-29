import { ChangeEmail, GenericContainer } from '@/components';

const changeEmail = () => {
  return (
    <GenericContainer
      title='Cambiar email'
      color='lightGreen'
      colortitle='black'
      href='/home/account'>
      <ChangeEmail />
    </GenericContainer>
  );
};

export default changeEmail;
