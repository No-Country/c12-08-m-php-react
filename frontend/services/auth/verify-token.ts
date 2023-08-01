import getUserData from '@/services/user/getData';

const verifyToken = async (token: string) => {
  // TODO: /me EP is used to validate the token since /verifyToken EP doesnt work correctly
  const user = await getUserData(token);

  return user.success;
};

export default verifyToken;
