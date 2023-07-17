interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
  return (
    <div className='flex flex-col items-center justify-center font-semibold text-xl gap-2 text-center md:text-base'>
      <span>{title}</span>
      <span>{subtitle}</span>
    </div>
  );
};

export default AuthHeader;
