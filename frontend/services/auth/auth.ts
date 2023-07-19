import Post from '../publicServices';

interface LoginBody {
  email: string;
  password: string;
}

const login = async (body: LoginBody) => {
  const response = await Post('/login', body);
  return response;
};

interface RegisterBody {
  name: string;
  surname: string;
  username: string;
  birth: Date | null;
  phone: string;
  email: string;
  password: string;
  confirm_password: string;
}
  

const register = async (body: RegisterBody) => {

  const {confirm_password, ...data} = body
  
  const response = await Post('/register', data)
  
  return response;

};

export { login, register };
export type { LoginBody, RegisterBody };

