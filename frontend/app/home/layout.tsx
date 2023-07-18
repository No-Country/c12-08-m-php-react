import { BottomNavbar, Sidebar } from '@/components';
import Grid from './grid';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Grid>
        <Sidebar />
        <main className='w-full flex-grow flex flex-col justify-between gap-8'>
          {children}
        </main>
        <BottomNavbar />
      </Grid>
    </>
  );
};

export default HomeLayout;
