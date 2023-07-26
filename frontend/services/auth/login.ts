import { Post } from '@/services/publicServices';

export const login = async (body: any) => {
  const response = await Post('/login', body);

  return response;
};
