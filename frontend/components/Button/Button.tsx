interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className=' w-32 h-10 rounded-[20px] bg-[#0568FD] text-white p-2 mx-auto'>
      {text}
    </button>
  );
};

export default Button;
