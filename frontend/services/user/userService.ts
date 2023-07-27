import { Post } from '../privateServices';

export const userData = async () => {
  const response = await Post('/me');
  return response;
};
