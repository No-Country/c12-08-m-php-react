interface FormLayoutAuthProps {
  children: React.ReactNode;
}

const FormLayoutAuth = ({ children }: FormLayoutAuthProps) => {
  return (
    <div className='flex flex-col gap-8 py-4 h-screen justify-evenly md:items-center md:mx-auto md:w-[30rem] md:h-[28rem] md:gap-4 md:border md:bg-green md:rounded-[20px]'>
      {children}
    </div>
  );
};

export default FormLayoutAuth;
