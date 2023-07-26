import axios from 'axios';
import { getCookie } from 'react-use-cookie';

const config = {
  baseURL: process.env.NEXT_PUBLIC_URL_API,
  Headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const instance = axios.create(config);

const Get = async (url: string) => {
  const response = await instance.get(url, getHeaders());
  return response;
};

const Post = async (url: string, data?: any) => {
  const response = await instance.post(url, data, getHeaders());
  return response;
};

const Put = async (url: string, data: any) => {
  const response = await instance.put(url, data, getHeaders());
  return response;
};

const Delete = async (url: string) => {
  const response = await instance.delete(url, getHeaders());
  return response;
};

const getAutorization = () => {
  const token = getCookie('jwt_token');
  return `Bearer ${token}`;
};

const getHeaders = () => {
  return { headers: { Authorization: getAutorization() } };
};

export { Get, Post, Put, Delete };
