import { DownloadData, GenericContainer } from '@/components';

const Account = () => {
  return (
    <GenericContainer
      title='Descargar datos'
      color='lightGreen'
      colortitle='black'
      href='/home/account'>
      <DownloadData />
    </GenericContainer>
  );
};

export default Account;
