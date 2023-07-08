interface IButton extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  className?: string;
  variant?: 'normal' | 'outline';
  bgColor?: 'green' | 'gray' | 'white' | 'blue' | 'lightBlue' | 'black';
  color?: 'white' | 'blue' | 'black';
  size?: 'sm' | 'md' | 'lg';
  shadow?: true | false;
}

const styles: any = {
  normal: {
    green: 'bg-[#9FD179]',
    gray: 'bg-[#E6E9EF]',
    lightBlue: 'bg-[#D4E6FF]',
    blue: 'bg-[#0568FD]',
    white: 'bg-[#FFFFFF]',
    black: 'bg-[#000000]',
  },
  outline: {
    green: 'border-[2px] border-[#9FD179]',
    gray: 'border-[2px] border-[#E6E9EF]',
    lightBlue: 'border-[2px] border-[#D4E6FF]',
    blue: 'border-[2px] border-[#0568FD]',
    white: 'border-[2px] border-[#FFFFFF]',
    black: 'border-[2px] border-[#000000]',
  },
  text: {
    blue: 'text-[#0568FD]',
    white: 'text-[#FFFFFF]',
    text: 'text-[#000000]',
  },
  sizes: {
    sm: 'min-w-[50px] h-[50px]',
    md: 'min-w-[100px] h-[35px] text-[17px]',
    lg: 'min-w-[150px] h-[60px] text-[20px]',
  },
};

const Button: React.FC<IButton> = props => {
  const {
    children,
    className,
    variant = 'normal',
    bgColor = 'green',
    color = 'white',
    size = 'md',
    shadow = false,
    ...buttonProps
  } = props;
  const { text, sizes } = styles;

  return (
    <button
      {...buttonProps}
      className={`rounded-full px-4 duration-300 hover:scale-105 font-semibold
      ${sizes[size]} 
      ${text[color]} 
      ${styles[variant][bgColor]}
      ${shadow ? 'shadow-[0px_4px_4px_rgba(0,0,0,0.25)]' : ''}
      ${className}`}>
      {children}
    </button>
  );
};

export default Button;
