interface Props {
  onClick: () => void;
  className: string;
}

const PlusButton = ({ onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center rounded-full w-8 h-8 text-white bg-blue font-medium text-3xl ${className}`}>
      +
    </button>
  );
};

export default PlusButton;
