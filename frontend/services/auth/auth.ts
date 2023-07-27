import { Post } from '../publicServices';

interface LoginBody {
  email: string;
  password: string;
}

const login = async (body: LoginBody) => {
  const response = await Post('/login', body);

  return response
};

const loginGoogle = async (token: string) => {

  const userInfoUrl = 'https://www.googleapis.com/oauth2/v3/userinfo';

  try {
    const response = await fetch(userInfoUrl, {
      headers: {
        'Authorization': `Bearer ${token}`
      }    
    });

    if (response.ok) {
      const userInfo = await response.json();
      console.log(userInfo)

      const {name, email, picture} = userInfo

      return { name, email, picture };
    } else {
      console.error('Error al obtener información del usuario:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    return null;
  } 
}


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

export { login, loginGoogle, register };
export type { LoginBody, RegisterBody };

