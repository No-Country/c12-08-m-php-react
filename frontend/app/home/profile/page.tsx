import { GenericContainer, ProfileSettings } from '@/components';

const Profile = () => {
  return (
    <GenericContainer title='Perfil' color='lightGreen' colortitle='black' href='/home'>
      <ProfileSettings />
    </GenericContainer>
  );
};

export default Profile;
