import { Post } from '@/services/publicServices';

export const register = async (data: any) => {
  const response = await Post('/register', data);

  return response;
};
