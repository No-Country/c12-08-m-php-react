import BottomNavbar from '@/components/BottomNavbar/BottomNavbar';
import Sidebar from '@/components/Sidebar/Sidebar';
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
