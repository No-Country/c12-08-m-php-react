import Dashboard from '@/components/Dashboard/Dashboard';
import Userbar from '@/components/Userbar/Userbar';

const Home = () => {
  return (
    <>
      <header>
        <Userbar />
      </header>
      <Dashboard />
    </>
  );
};

export default Home;
