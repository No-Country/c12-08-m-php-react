import NewCell from './NewCell';

const week = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

const GridHeader = () => {
  return (
    <>
      {week.map((day, index) => (
        <NewCell key={index}>{day}</NewCell>
      ))}
    </>
  );
};

export default GridHeader;
