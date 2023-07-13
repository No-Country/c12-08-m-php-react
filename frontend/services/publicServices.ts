import axios from 'axios';

const config = {
  baseURL: process.env.NEXT_PUBLIC_URL_API,
  Headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(config);

const Post = async (url: string, data: any) => {
  console.log('variable', process.env.NEXT_PUBLIC_URL_API);
  console.log(url, data);
  const response = await instance.post(url, data);
  return response;
};

export default Post;
