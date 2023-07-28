'use client';

import { User } from '@/types/types';
import { differenceInYears } from 'date-fns';
import { createContext, useState, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  userData?: User;
}

export interface UserType {
  user: User;
  setUser: (u: User) => void;
  age: number;
}

export const UserContext = createContext<UserType>({} as UserType);

export default function UserProvider({ children, userData }: Props): JSX.Element {
  const INITIAL_USER: User = userData || {
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

  const [user, setUser] = useState<User>(INITIAL_USER);

  const date = new Date(user.birth);

  const age = differenceInYears(new Date(), date);

  return (
    <UserContext.Provider value={{ user, setUser, age }}>{children}</UserContext.Provider>
  );
}
