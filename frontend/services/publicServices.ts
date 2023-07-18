import axios from 'axios';

const config = {
  baseURL: process.env.NEXT_PUBLIC_URL_API,
  Headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(config);

const Post = async (url: string, data: any) => {
  const response = await instance.post(url, data);
  return response;
};

export const Get = async (url: string) => {
  const response = await instance.get(url);
  return response;
};

export default Post;
