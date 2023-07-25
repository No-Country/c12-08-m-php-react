interface AuthFormHeaderProps {
  title: string;
  subtitle: string;
}

const AuthFormHeader = ({ title, subtitle }: AuthFormHeaderProps) => {
  return (
    <div className='flex flex-col items-center justify-center font-semibold text-xl gap-2 text-center md:text-base'>
      <span>{title}</span>
      <span>{subtitle}</span>
    </div>
  );
};

export default AuthFormHeader;
