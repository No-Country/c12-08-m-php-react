import { BottomNavbar, Sidebar, Userbar } from '@/components';
import getUserData from '@/services/user/getData';
import type { User } from '@/types/note';
import { cookies } from 'next/headers';
import type { Metadata } from 'next/types';
import Grid from './grid';

export const metadata: Metadata = {
  title: 'PillCare | Home',
};

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const token = cookies().get('jwt_token')?.value;
  const { user } = await getUserData(token as string);

  return (
    <>
      <Grid user={user as User}>
        <Sidebar />
        <main className='w-full max-h-full flex-grow flex flex-col justify-between max-md:h-[84%]'>
          <header className='max-md:hidden md:h-1/6'>
            <Userbar />
          </header>
          <section className='max-h-full flex-grow h-4/5'>{children}</section>
        </main>
        <BottomNavbar />
      </Grid>
    </>
  );
};

export default HomeLayout;
