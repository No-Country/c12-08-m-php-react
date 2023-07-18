import { Dashboard, Userbar } from '@/components';

const Home = () => {
  return (
    <>
      <header className='max-md:hidden'>
        <Userbar />
      </header>
      <section className='flex-grow'>
        <Dashboard />
      </section>
    </>
  );
};

export default Home;
