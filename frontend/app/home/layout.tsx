import { BottomNavbar, Sidebar, Userbar } from '@/components';
import Grid from './grid';
// import { Suspense } from 'react';
// import Loading from './loading';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Grid>
        <Sidebar />
        <main className='w-full max-h-full flex-grow flex flex-col justify-between max-md:h-[84%]'>
          <header className='max-md:hidden md:h-1/6'>
            <Userbar name='María López' age='25' nationality='Argentina' />
          </header>

          <section className='max-h-full flex-grow h-4/5'>
            {/* <Suspense fallback={<Loading />}></Suspense> */}
            {children}
          </section>
        </main>
        <BottomNavbar />
      </Grid>
    </>
  );
};

export default HomeLayout;
