import { BottomNavbar, Sidebar, Userbar } from '@/components';
import Grid from './grid';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Grid>
        <Sidebar />
        <main className='w-full max-h-full flex-grow flex flex-col justify-between'>
          <header className='max-md:hidden h-1/6'>
            <Userbar name='María López' age='25' nationality='Argentina' />
          </header>
          <section className='max-h-full flex-grow h-4/5'>{children}</section>
        </main>
        <BottomNavbar />
      </Grid>
    </>
  );
};

export default HomeLayout;
