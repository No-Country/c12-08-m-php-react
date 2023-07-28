import { User } from '@/types/types';
import { useReducer } from 'react';

enum UserActionKind {
  update = 'update',
}

interface UserAction {
  type: UserActionKind;
  payload: Partial<User>;
}

const userReducer = (state: User, action: UserAction) => {
  switch (action.type) {
    case 'update':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const useUser = () => {
  const INITIAL_USER: User = {
    birth: '',
    created_at: new Date(),
    email: '',
    gender: 'Prefiero no decirlo',
    id: 0,
    name: '',
    surname: '',
    phone: '',
    username: '',
    photo_url: '',
  };

  const [user, dispatch] = useReducer(userReducer, INITIAL_USER);

  const updateUser = (u: User) => {
    dispatch({ type: UserActionKind.update, payload: { ...u } });
  };

  return { user, updateUser };
};

export default useUser;
