import { PostWithAuthorization } from '../publicServices';

export const createMeds = async (data: any, token: string) => {
  const response = await PostWithAuthorization('/items/create', data, token);

  // const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/items/create`, {
  //   method: 'POST',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   body: JSON.stringify(data),
  // });

  return response;
};
