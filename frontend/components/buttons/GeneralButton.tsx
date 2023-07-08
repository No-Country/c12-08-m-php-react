export interface IGeneralButton
  extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  className?: string;
  variant?: 'normal' | 'outline';
  color?: 'green' | 'gray' | 'white' | 'blue' | 'light-blue' | 'black';
  text?: 'white' | 'blue' | 'black';
  size?: 'sm' | 'md' | 'lg';
  shadow?: true | false;
}

const GeneralButton: React.FC<IGeneralButton> = ({
  children,
  className,
  variant = 'normal',
  color = 'green',
  text = 'white',
  size = 'md',
  shadow = false,
  ...buttonProps
}) => {
  const styles: any = {
    normal: {
      green: 'bg-[#9FD179]',
      gray: 'bg-[#E6E9EF]',
      'light-blue': 'bg-[#D4E6FF]',
      blue: 'bg-[#0568FD]',
      white: 'bg-[#FFFFFF]',
      black: 'bg-[#000000]',
    },
    outline: {
      green: 'border-[2px] border-[#9FD179]',
      gray: 'border-[2px] border-[#E6E9EF]',
      'light-blue': 'border-[2px] border-[#D4E6FF]',
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
  return (
    <button
      {...buttonProps}
      className={`rounded-full px-4 duration-300 hover:scale-105 font-semibold
      ${styles.sizes[size]} 
      ${styles.text[text]} 
      ${styles[variant][color]}
      ${shadow ? 'shadow-[0px_4px_4px_rgba(0,0,0,0.25)]' : ''}
      ${className}`}>
      {children}
    </button>
  );
};

export default GeneralButton;
