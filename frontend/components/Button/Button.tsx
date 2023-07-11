interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'normal' | 'outline';
  bgColor?: 'green' | 'lightGray' | 'white' | 'blue' | 'lightBlue' | 'black';
  color?: 'white' | 'blue' | 'black';
  shadow?: true | false;
}

const styles = {
  normal: {
    green: 'bg-green',
    lightGray: 'bg-lightGray',
    lightBlue: 'bg-lightBlue',
    blue: 'bg-blue',
    white: 'bg-white',
    black: 'bg-black',
  },
  outline: {
    green: 'border-2 border-green',
    lightGray: 'border-2 border-lightGray',
    lightBlue: 'border-2 border-lightBlue',
    blue: 'border-2 border-blue',
    white: 'border-2 border-white',
    black: 'border-2 border-black',
  },
  text: {
    blue: 'text-blue',
    white: 'text-white',
    black: 'text-black',
  },
};

const Button = ({
  children,
  className = '',
  variant = 'normal',
  bgColor = 'green',
  color = 'white',
  shadow = false,
}: ButtonProps) => {
  return (
    <button
      className={`rounded-full duration-300 hover:scale-105 mx-auto text-center w-36 h-10
      ${styles[variant][bgColor]}
      ${styles.text[color]}
      ${shadow ? 'shadow-[0px_4px_4px_rgba(0,0,0,0.25)]' : ''} 
      ${className}`}>
      {children}
    </button>
  );
};

export default Button;
