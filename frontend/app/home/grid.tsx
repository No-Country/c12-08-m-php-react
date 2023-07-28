import UserProvider from '@/contexts/UserProvider';
import type { User } from '@/types/types';
import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  user: User;
}

const Grid = ({ children, user }: Props) => {
  return (
    <div className='flex h-full max-md:flex-col md:min-h-[750px] md:py-7 md:px-10 md:gap-8 lg:px-24'>
      <UserProvider userData={user}>{children}</UserProvider>
    </div>
  );
};

export default Grid;
