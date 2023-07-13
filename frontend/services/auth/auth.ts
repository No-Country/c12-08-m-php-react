import Post from '../publicServices';

interface LoginBody {
  email: string;
  password: string;
}

const login = async (body: LoginBody) => {
  const response = await Post('/login', body)
    .then(res => res.data)
    .catch(err => err);
  console.log(response);
  return response;
};

export { login };
