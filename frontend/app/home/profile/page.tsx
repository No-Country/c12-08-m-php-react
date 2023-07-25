import { GenericContainer, ProfileSettings } from '@/components';

const Profile = () => {
  return (
    <GenericContainer title='Perfil' color='lightGreen' colortitle='black'>
      <ProfileSettings />
    </GenericContainer>
  );
};

export default Profile;
