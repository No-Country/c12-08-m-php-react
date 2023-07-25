import axios from 'axios';

const config = {
  baseURL: process.env.NEXT_PUBLIC_URL_API,
  Headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const instance = axios.create(config);

const Post = async (url: string, data: any) => {
  const response = await instance.post(url, data);
  return response;
};

const GetWithAuthorization = async (url: string, token: string) => {
  const response = await instance.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

const PostWithAuthorization = async (url: string, data: any, token: string) => {
  const response = await instance.post(url, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export { GetWithAuthorization, Post, PostWithAuthorization };
