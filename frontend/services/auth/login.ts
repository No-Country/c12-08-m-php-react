import { LoginFormData } from '@/app/(auth)/login/form';
import { Post } from '../publicServices';

export const login = async (data: LoginFormData) => {
  const response = await Post('/login', data);
  return response;

  // console.log(data);
  // console.log(JSON.stringify(data));

  // const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/login`, {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  // });

  // console.log(res);

  // const response = await res.json();
  // console.log(response);

  // return response;
};
