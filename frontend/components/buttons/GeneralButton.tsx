export interface IGeneralButton
  extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  variant?: 'normal' | 'outline';
  color?: 'green' | 'gray' | 'white' | 'blue' | 'light-blue' | 'black';
  text?: 'green' | 'gray' | 'white' | 'blue' | 'light-blue' | 'black';
  size?: 'sm' | 'md' | 'lg';
}

const GeneralButton: React.FC<IGeneralButton> = ({
  children,
  variant = 'normal',
  color = 'green',
  text = 'white',
  size = 'sm',
  ...buttonProps
}: any) => {
  const styles: any = {
    normal: {
      green: 'bg-[#9FD179]',
      gray: 'bg-[#E6E9EF]',
      'light-blue': 'bg-[#8FC4D8]',
      blue: 'bg-[#0568FD]',
      white: 'bg-[#FFFFFF]',
      black: 'bg-[#000000]',
    },
    outline: {
      green: 'border-[2px] border-[#9FD179]',
      gray: 'border-[2px] border-[#E6E9EF]',
      'light-blue': 'border-[2px] border-[#8FC4D8]',
      blue: 'border-[2px] border-[#0568FD]',
      white: 'border-[2px] border-[#FFFFFF]',
      black: 'border-[2px] border-[#000000]',
    },
    text: {
      green: 'text-[#9FD179]',
      gray: 'text-[#E6E9EF]',
      'light-blue': 'text-[#8FC4D8]',
      blue: 'text-[#0568FD]',
      white: 'text-[#FFFFFF]',
      text: 'text-[#000000]',
    },
    sizes: {
      sm: 'min-w-[100px] h-[35px]',
      md: 'min-w-[200px] h-[60px]',
      lg: '',
    },
  };
  return (
    <button
      {...buttonProps}
      className={`rounded-full px-4 ${styles.sizes[size]} ${styles.text[text]} ${styles[variant][color]}`}>
      <p>{children}</p>
    </button>
  );
};

export default GeneralButton;
