import AuthHeader from './header';
import ConectSocial from './social';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthHeader />
      <main className='flex flex-col gap-8 py-4 h-screen md:items-center md:mx-auto md:w-[30rem] md:min-h-[28rem] md:h-auto md:max-h-[36rem] md:gap-6 md:border md:bg-green md:rounded-[20px] mt-8'>
        {children}
        <ConectSocial />
      </main>
    </>
  );
};

export default AuthLayout;
