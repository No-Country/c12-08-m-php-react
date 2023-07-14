import Post from '../publicServices';

interface LoginBody {
  email: string;
  password: string;
}

const login = async (body: LoginBody) => {
  const response = await Post('/login', body);
  return response;
};

export { login };
