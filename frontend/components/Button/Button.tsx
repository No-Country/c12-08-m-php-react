interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className=' w-32 h-10 rounded-[20px] bg-[#0568FD] text-white p-2 mx-auto hover:bg-[#0357d6]'>
      {text}
    </button>
  );
};

export default Button;
