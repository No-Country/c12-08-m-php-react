import { BottomNavbar, Sidebar } from '@/components';
import Grid from './grid';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Grid>
        <Sidebar />
        <main className='w-full'>{children}</main>
        <BottomNavbar />
      </Grid>
    </>
  );
};

export default HomeLayout;
