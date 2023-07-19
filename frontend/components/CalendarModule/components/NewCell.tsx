import clsx from 'clsx';

interface Props {
  children?: React.ReactNode | string | number;
  isActive?: boolean;
  handleClick?: (n: number) => void;
}

const NewCell = ({
  children,
  isActive = false,
  handleClick = () => undefined,
}: Props) => {
  const isNumber = typeof children === 'number';
  return (
    <div className='flex items-center justify-center'>
      <p
        className={clsx('flex items-center justify-center h-8 w-8 rounded-full', {
          'hover:cursor-pointer': isNumber,
          'hover:bg-lightBlue': isNumber && !isActive,
          'bg-blue': isNumber && isActive,
        })}
        onClick={() => {
          if (isNumber) {
            handleClick(children as number);
          }
        }}>
        {children}
      </p>
    </div>
  );
};

export default NewCell;
