import clsx from 'clsx';

interface Props extends React.PropsWithChildren {
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Cell: React.FC<Props> = ({ onClick, children, className, isActive = false }) => {
  return (
    <div
      onClick={!isActive ? onClick : undefined}
      className={clsx(
        'h-10 flex items-center justify-center select-none transition-colors rounded-full',
        className,
        {
          'cursor-pointer h-[40px] w-[40px] hover:bg-lightBlue active:bg-gray-200':
            !isActive && onClick,
          'active-cell': isActive, // Nueva clase CSS para celda activa
        }
      )}
      style={{
        backgroundColor: isActive ? '#0568FD' : undefined,
        color: isActive ? 'white' : undefined,
        borderRadius: isActive ? '50px' : undefined,
        width: isActive ? '40px' : undefined,
        height: isActive ? '40px' : undefined,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
      }}>
      {children}
    </div>
  );
};

export default Cell;
